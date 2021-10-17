import * as React from "react";
import type { Socket } from "socket.io-client";

export interface TSocketContext {
  socket: Socket;
}

export const SocketContext = React.createContext<TSocketContext | undefined>(undefined);

export function useSocket() {
  const context = React.useContext(SocketContext);
  if (typeof context === "undefined") {
    throw new Error("`useSocket` must be used within a `SocketProvider`");
  }

  return context.socket;
}
