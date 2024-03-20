require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");

const { connectToMongoDB } = require("./db/connectToMongoDB");

const PORT = process.env.PORT || 3000;
const { app, server } = require("./socket/socket.js");

const _dirname = path.resolve();

const authRoutes = require("./routes/auth.route.js");
const messageRoutes = require("./routes/message.route.js");
const userRoutes = require("./routes/user.route.js");

app.use(express.json()); // to parse the the request body
app.use(cookieParser()); // to parse the cookie header
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "img-src": ["'self'", "https: data:"],
    },
  })
);
app.use(morgan("dev"));
/**
 * Whne ever we called /api/auth this method will called
 */
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/user", userRoutes);

// this middleware is responsible to serve static files
app.use(express.static(path.join(_dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server listening on ${PORT}`);
});
