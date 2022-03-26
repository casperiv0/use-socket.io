import { useSocketStore } from "../core/store";

export function useSocket() {
  const socket = useSocketStore((s) => s.socket);
  return socket;
}
