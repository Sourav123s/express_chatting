require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");

const { connectToMongoDB } = require("./db/connectToMongoDB");

const PORT = process.env.PORT || 3000;
const app = express();

const authRoutes = require("./routes/auth.route.js");
const messageRoutes = require("./routes/message.route.js");
const userRoutes = require("./routes/user.route.js");

app.use(express.json()); // to parse the the request body
app.use(cookieParser()); // to parse the cookie header
/**
 * Whne ever we called /api/auth this method will called
 */
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server listening on ${PORT}`);
});
