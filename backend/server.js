require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const morgan = require("morgan");

const { connectToMongoDB } = require("./db/connectToMongoDB");

const PORT = process.env.PORT || 3000;
const { app, server } = require("./socket/socket.js");

const authRoutes = require("./routes/auth.route.js");
const messageRoutes = require("./routes/message.route.js");
const userRoutes = require("./routes/user.route.js");

app.use(express.json()); // to parse the the request body
app.use(cookieParser()); // to parse the cookie header
app.use(helmet());
app.use(morgan("dev"));
/**
 * Whne ever we called /api/auth this method will called
 */
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/user", userRoutes);

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server listening on ${PORT}`);
});
