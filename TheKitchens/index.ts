import express from "express";
import { createServer } from "http";
import cors from 'cors';
import 'reflect-metadata';
import Psocket from "./src/sockets/Psocket";
// import sockerServer from './src/sockets/socket'

const app = express();
app.use(cors())

const httpServer = createServer(app);
Psocket.getInstance(httpServer);
// (httpServer, {
//   cors: {
//     origin: "http://localhost:3000"
//   }
// });
// sockerServer(httpServer);

const PORT = process.env.PORT || 3001;

// io.initializeHandlers([
//   { path: '/game', handler: new GameSocketImpl() }
// ]);

app.get("/", (_req: any, res: any) => {
  res.json({ message: "This is a server!" });
});

app.get("/api", (_req, res) => {
  res.json({ message: "Hello from server!" });
});


httpServer.listen(PORT);



// // app.get('/', (_req, res) => {
// //   res.send('Hi There')
// // });

// app.get("/", (_req: any, res: any) => {
//   res.sendFile(path.resolve("./client/index.html"));
// });

// app.get("/api", (_req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });

// // Socket setup
// // const io = new Server<
// //   ClientToServerEvents,
// //   ServerToClientEvents,
// //   InterServerEvents,
// //   SocketData
// // >().listen(app);;

// // Players array
// // let users: any[] = [];

// io.on("connection", (socket) => {
//   console.log("Made socket connection", socket.id);
// });

// // io.on("connection", (socket) => {
// //   console.log("Made socket connection", socket.id);

// //   socket.on("join", (data) => {
// //     users.push(data);
// //     io.sockets.emit("join", data);
// //   });

// //   socket.on("joined", () => {
// //     socket.emit("joined", users);
// //   });

// //   socket.on("rollDice", (data) => {
// //     users[data.id].pos = data.pos;
// //     const turn = data.num != 6 ? (data.id + 1) % users.length : data.id;
// //     io.sockets.emit("rollDice", data, turn);
// //   });

// //   socket.on("restart", () => {
// //     users = [];
// //     io.sockets.emit("restart");
// //   });
// // });