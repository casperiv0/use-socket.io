import { io } from "socket.io-client";
import { shallow } from "zustand/shallow";
import { SocketOptions, useSocketStore } from "../core/store";

export const useConnect = () => {
  const store = useSocketStore(
    (state) => ({
      socket: state.socket,
      setSocket: state.setSocket,
    }),
    shallow,
  );

  const connect = (url: string, options?: Partial<SocketOptions>) => {
    if (store.socket) {
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
