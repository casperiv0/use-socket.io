import { io } from "socket.io-client";
import { SocketOptions, useSocketStore } from "../core/store";

export const useConnect = () => {
  const store = useSocketStore((state) => ({
    socket: state.socket,
    setSocket: state.setSocket,
  }));

  const connect = (url: string, options?: Partial<SocketOptions>) => {
    if (store.socket?.connected) {
      return;
    }

    const socket = io(url, options);
    store.setSocket(socket);
  };

  const disconnect = () => {
    if (!store.socket) {
      return;
    }

    store.socket.disconnect();
    store.setSocket(null);
  };

  return {
    connect,
    disconnect,
  };
};
