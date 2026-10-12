const express = require('express');
const socket = require('socket.io');
const http = require('http');
const { Chess } = require('chess.js');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socket(server);

const chess = new Chess();
let players = {};

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { title: 'Chess Game' });
});

io.on('connection', (uniquesocket) => {
  console.log('A new client connected:', uniquesocket.id);

  // Assign player roles
  if (!players.white) {
    players.white = uniquesocket.id;
    uniquesocket.emit('playerRole', 'w');
  } else if (!players.black) {
    players.black = uniquesocket.id;
    uniquesocket.emit('playerRole', 'b');
  } else {
    uniquesocket.emit('gameFull', 'Game is full. Please wait for a player to leave.');
    return;
  }

  // Send current board state to new player
  uniquesocket.emit('boardState', chess.fen());

  // Handle move
  uniquesocket.on('move', (move) => {
    try {
      if (chess.turn() === 'w' && uniquesocket.id !== players.white) {
        uniquesocket.emit('errorMessage', 'It is not your turn.');
        return;
      }
      if (chess.turn() === 'b' && uniquesocket.id !== players.black) {
        uniquesocket.emit('errorMessage', 'It is not your turn.');
        return;
      }

      const result = chess.move(move);

      if (result) {
        io.emit('boardState', chess.fen());

        if (chess.isGameOver()) {
          io.emit('gameOver', 'Game over!');
        }
      } else {
        console.log('Invalid move attempted:', move);
        uniquesocket.emit('invalidMove', move);
      }
    } catch (err) {
      console.error('Error processing move:', err);
      uniquesocket.emit('errorMessage', 'An error occurred while processing your move.');
    }
  });

  // Handle disconnect
  uniquesocket.on('disconnect', () => {
    console.log('Client disconnected:', uniquesocket.id);

    if (uniquesocket.id === players.white) {
      delete players.white;
    } else if (uniquesocket.id === players.black) {
      delete players.black;
    }

    if (!players.white && !players.black) {
      console.log('Both players left. Resetting game.');
      chess.reset();
    }
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
