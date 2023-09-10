import { createWithEqualityFn } from "zustand/traditional";
import type { ManagerOptions, Socket, SocketOptions as _SocketOptions } from "socket.io-client";
import { shallow } from "zustand/shallow";

export interface SocketOptions extends _SocketOptions, ManagerOptions {
  url: string;
}

interface SocketStore {
  socket: Socket | null;
  setSocket(socket: Socket | null): void;

  options: SocketOptions;
  setOptions(options: Partial<SocketOptions>): void;
}

export const useSocketStore = createWithEqualityFn<SocketStore>(
  (set, get) => ({
    socket: null,
    setSocket: (socket) => set({ socket }),

    options: {} as SocketOptions,
    setOptions: (options) => set({ options: { ...get().options, ...options } }),
  }),
  shallow,
);
