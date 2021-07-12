const io = require("socket.io")(3000, {
  cors: {
    origin: ["http://localhost:8080"],
  },
});
let messages = [];

io.on("connection", (socket) => {
  console.log("id is " + socket.id);
  socket.on("eventis-saxeli", (msg) => {
    messages.push(msg);
    io.emit("receive-message", messages);
    console.log(msg);
  });
});

