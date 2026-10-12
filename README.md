# ♟️ Chess King – Real-Time Multiplayer Chess Game

Chess King is a browser-based multiplayer chess application built with Node.js, Express.js, Socket.IO, and Chess.js. It allows two players to play chess in real time, with moves validated on the server and the board state synchronized between connected players.

## 🚀 Features

- **Real-Time Multiplayer:** Synchronizes chess moves between two connected players using Socket.IO.
- **Interactive Chessboard:** Move chess pieces using drag-and-drop controls.
- **Server-Side Move Validation:** Uses Chess.js to validate moves and enforce turn order.
- **Player Role Assignment:** Automatically assigns White and Black roles to the first two connected players.
- **Board Synchronization:** Updates the chessboard using the server's current game state.
- **Game-Over Detection:** Detects game-over conditions and notifies connected clients.
- **Chessboard Orientation:** Flips the board for the Black player.

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Backend:** Express.js
- **Real-Time Communication:** Socket.IO
- **Chess Logic:** Chess.js
- **Template Engine:** EJS
- **Frontend:** HTML, CSS, JavaScript
- **Styling:** Tailwind CSS via CDN

## 📁 Project Structure

```text
Chessking/
├── app.js
├── package.json
├── package-lock.json
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── chessgame.js
└── views/
    └── index.ejs
```

## ⚙️ Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your computer
- npm (included with Node.js)
- Git (optional, for cloning the repository)

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual repository URL.

### 2. Navigate to the project folder

```bash
cd Chessking
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the application

```bash
npm run run
```

### 5. Open the application

Visit the following address in your browser:

```text
http://localhost:3000
```

Open the application in two separate browser sessions to test multiplayer gameplay.

## 🎮 How to Play

1. Start the Node.js server.
2. Open the application in a browser.
3. Connect a second browser session to join the game.
4. The first player is assigned White, and the second player is assigned Black.
5. Move pieces by dragging them to the desired squares.
6. The server validates moves and broadcasts the updated board state.

## 📚 What I Learned

- Building a backend application using Node.js and Express.js.
- Implementing real-time communication with Socket.IO.
- Validating chess moves and managing game state on the server.
- Synchronizing application state across multiple browser clients.
- Connecting frontend interactions with backend event handling.

## 🔮 Future Improvements

- Improve responsive design for mobile and smaller screens.
- Add player waiting-room and reconnection handling.
- Display check, checkmate, and draw status more clearly.
- Add player names, match history, and game timers.
- Improve error handling and game-session management.

## 👨‍💻 Author

**Biswajit Chakraborty**

- GitHub: [@BiswajitChakraborty-redshot](https://github.com/BiswajitChakraborty-redshot)
- LinkedIn: [Biswajit Chakraborty](https://www.linkedin.com/in/biswajit-chakraborty-6b7b70311/)

---

If you find this project useful, consider giving the repository a ⭐ on GitHub.
