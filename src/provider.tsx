import * as React from "react";
import { io, ManagerOptions, SocketOptions } from "socket.io-client";
import { SocketContext } from "./context";

interface ProviderProps {
  children: React.ReactNode;
  uri: string;
  options?: Partial<SocketOptions & ManagerOptions>;
}

export const SocketProvider = ({ uri, options, children }: ProviderProps) => {
  const [socket] = React.useState(io(uri, options));

  React.useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const value = { socket };

  return <SocketContext.Provider value={value}>{children}</SocketContext.Provider>;
};
