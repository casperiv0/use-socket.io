import * as React from "react";
import type { Socket } from "socket.io-client";

export interface TSocketContext {
  socket: Socket;
  namespaces: Record<string, Socket>;
}

export const SocketContext = React.createContext<TSocketContext | undefined>(undefined);

export function useSocket(namespace?: string) {
  const context = React.useContext(SocketContext);
  if (typeof context === "undefined") {
    throw new Error("`useSocket` must be used within a `SocketProvider`");
  }

  if (namespace && context.namespaces?.[namespace]) {
    return context.namespaces[namespace];
  }

  return context.socket;
}
