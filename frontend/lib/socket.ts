import { io, Socket } from "socket.io-client";

let socket: Socket | null = null;

export const initSocket = (userId: string): Socket => {
  if (!socket) {
    socket = io("http://localhost:4000", {
      transports: ["websocket", "polling"],
    });

    socket.on("connect", () => {
      console.log("🟢 Connected:", socket?.id);

      // join room
      socket?.emit("join", userId);
    });

    socket.on("disconnect", () => {
      console.log("🔴 Disconnected");
    });

    socket.on("connect_error", (err) => {
      console.error("Socket error:", err.message);
    });
  }

  return socket;
};

export const getSocket = () => socket;