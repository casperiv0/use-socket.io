import * as React from "react";
import { useSocketStore } from "../core/store";
import { Socket } from "socket.io-client";
import type { DefaultEventsMap } from "socket.io/dist/typed-events";

interface Options {
  eventName: string;
  checkHasListeners?: boolean;
}

export function useListener<Data = any>(
  options: string | Options,
  callback: (data: Data) => void,
  deps: React.DependencyList = [],
): () => Socket<DefaultEventsMap, DefaultEventsMap> | undefined {
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
