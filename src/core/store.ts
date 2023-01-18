import { create } from "zustand";
import type { ManagerOptions, Socket, SocketOptions as _SocketOptions } from "socket.io-client";

export interface SocketOptions extends _SocketOptions, ManagerOptions {
  url: string;
}

interface SocketStore {
  socket: Socket | null;
  setSocket(socket: Socket | null): void;

  options: SocketOptions;
  setOptions(options: Partial<SocketOptions>): void;
}

export const useSocketStore = create<SocketStore>((set, get) => ({
  socket: null,
  setSocket: (socket) => set({ socket }),

  options: {} as SocketOptions,
  setOptions: (options) => set({ options: { ...get().options, ...options } }),
}));
