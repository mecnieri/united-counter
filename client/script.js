import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  displayMessage(`You connected with id: ${socket.id}`);
  console.log(socket.id);
});
socket.on("receive-message", (msg) => {
  console.log(msg);
});
function displayMessage(msg) {
  document.getElementById("text").innerHTML = msg;
}

btn.addEventListener("click", () => {
  socket.emit("eventis-saxeli", input.value, "giorgi", true);
});
