import * as React from "react";
import { useSocket } from "./context";

export function useListener(eventName: string, callback: (data: any) => void, deps: any[] = []) {
  const socket = useSocket();

  React.useEffect(() => {
    if (!socket) return;

    const handler = (e: any) => callback(e);

    socket.on(eventName, handler);

    return () => {
      socket.off(eventName, handler);
    };
  }, [socket, eventName, callback, ...deps]); // eslint-disable-line
}
