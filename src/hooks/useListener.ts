import * as React from "react";
import { useSocketStore } from "../core/store";

interface Options {
  eventName: string;
  checkHasListeners?: boolean;
}

export function useListener<Data = any>(
  options: string | Options,
  callback: (data: Data) => void,
  deps: any[] = [],
) {
  const socket = useSocketStore((s) => s.socket);
  const eventName = typeof options === "string" ? options : options.eventName;
  const checkHasListeners = typeof options === "object" ? options.checkHasListeners : false;

  React.useEffect(() => {
    if (!socket) return;
    if (checkHasListeners && socket.hasListeners(eventName)) return;

    const handler = (e: Data) => callback(e);

    socket.on(eventName, handler);

    return () => {
      socket.off(eventName, handler);
    };
  }, [socket, eventName, checkHasListeners, callback, ...deps]); // eslint-disable-line

  return () => socket?.off(eventName);
}
