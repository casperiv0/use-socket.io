import { Socket } from "socket.io-client";
import { useSocketStore } from "../core/store";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export function useSocket(): Socket<DefaultEventsMap, DefaultEventsMap> | null {
  const socket = useSocketStore((s) => s.socket);
  return socket;
}
