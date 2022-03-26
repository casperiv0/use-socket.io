import { io } from "socket.io-client";
import { useSocketStore } from "../core/store";

export const useConnect = (newUrl?: string, newOpts?: any) => {
  const store = useSocketStore((state) => ({
    socket: state.socket,
    options: state.options,
    setSocket: state.setSocket,
    setOptions: state.setOptions,
  }));

  const connect = () => {
    let _url = store.options.url;
    let _opts = store.options;

    if (newUrl) {
      _url = newUrl;
      store.setOptions({ url: newUrl });
    }

    if (!_url) return;

    if (newOpts) {
      _opts = newOpts;
      store.setOptions({ ...newOpts });
    }

    if (store.socket) {
      return;
    }

    const socket = io(_url, { ..._opts });
    store.setSocket(socket);
  };

  const disconnect = () => {
    if (!store.socket) {
      return;
    }

    store.socket.disconnect();
    store.setSocket(null!);
  };

  return {
    connect,
    disconnect,
  };
};
