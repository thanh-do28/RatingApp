const express = require("express");
const db = require("./database/models");
const app = express();

const user = require("./routes/user.routes");
const auth = require("./routes/auth.routes");
const blog = require("./routes/blog.routes");
const blogs = require("./routes/blogs.routes");
const Comment = require("./routes/comment.routes");
const history = require("./routes/history.routes");
const Interactive = require("./routes/Interactive.routes");
const report = require("./routes/report.routes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const messageRoutes = require("./routes/messages.routes");
const morgan = require("morgan");
const socket = require("socket.io");

// const hostname = "127.0.0.1";
const port = 5000;

const cors = require("cors");
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);
dotenv.config();
(async () => {
  await db.sequelize.sync();
})();
const connected = () => {
  mongoose
    .connect(process.env.MONGO || 3005)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};
app.use("/user", user);
app.use("/auth", auth);
app.use("/blog", blog);
app.use("/blogs", blogs);
app.use("/history", history);
app.use("/report", report);
app.use("/comment", Comment);
app.use("/interactive", Interactive);
app.use("/api/messages", messageRoutes);

const server = app.listen(port, () => {
  connected();
});
const io = socket(server, {
  cors: { origin: "http://localhost:8800", credentials: true },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
});
