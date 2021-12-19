import * as React from "react";
import { useSocket } from "./context";

export function useListener<Data = any>(
  eventName: string,
  callback: (data: Data) => void,
  deps: any[] = [],
) {
  const socket = useSocket();

  React.useEffect(() => {
    if (!socket) return;

    const handler = (e: Data) => callback(e);

    socket.on(eventName, handler);

    return () => {
      socket.off(eventName, handler);
    };
  }, [socket, eventName, callback, ...deps]); // eslint-disable-line
}
