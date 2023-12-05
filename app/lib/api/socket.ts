import { io } from "socket.io-client";

const SERVER_URL = process.env.NEXT_PUBLIC_SOCKET_SERVER;

export function initializeSocket() {
  if (!SERVER_URL) throw new Error("Websocket server URL is missing.");
  const socket = io(SERVER_URL);

  socket.on("connect", () => {
    console.log("Connected to WebSocket!");
  });

  return socket;
}
