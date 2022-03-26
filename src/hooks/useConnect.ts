import { io } from "socket.io-client";
import { useSocketStore } from "../core/store";

export const useConnect = () => {
  const store = useSocketStore((state) => ({
    socket: state.socket,
    options: state.options,
    setSocket: state.setSocket,
    setOptions: state.setOptions,
  }));

  const connect = (url: string) => {
    if (store.socket) {
      return;
    }

    const socket = io(url, store.options);
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
