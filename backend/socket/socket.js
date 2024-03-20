const { Server } = require("socket.io");
const http = require("http");
const express = require("express");

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

// this is for messaging purposes

const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

const userSocketMap = {}; //{userId: socketId}

//This is here we establish the connection
io.on("connection", (socket) => {
  console.log("user connected:", socket.id);

  const userId = socket.handshake.query.userId;

  if (userId != "undefined") {
    userSocketMap[userId] = socket.id;
  }

  // console.log("userSocketMap: " + JSON.stringify(userSocketMap));
  //io.emit() is used to send events to all the connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  // socket.on() is used to listen to events . this can be used on clinet as well as on server side
  socket.on("disconnect", () => {
    console.log("user disconnected:", socket.id);
    delete userSocketMap[userId];

    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

io.on("error", () => {
  console.log("Unable to connet to socket");
});

module.exports = {
  app,
  io,
  server,
  getReceiverSocketId,
};
