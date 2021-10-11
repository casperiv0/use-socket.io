import * as React from "react";
import { io, ManagerOptions, SocketOptions } from "socket.io-client";
import { SocketContext } from "./context";

interface ProviderProps {
  children: React.ReactNode;
  uri: string;
  namespaces?: string[];
  options?: Partial<SocketOptions & ManagerOptions>;
}

const getURLOrigin = (url: string) => new URL(url).origin;

function generateNamespaces(namespaces: string[], options: Pick<ProviderProps, "uri" | "options">) {
  return namespaces.reduce(
    (acc, namespace) => ({
      ...acc,
      [namespace]: io(`${getURLOrigin(options.uri)}/${namespace}`, options.options),
    }),
    {},
  );
}

export const SocketProvider = ({
  uri,
  options,
  namespaces: _namespaces,
  children,
}: ProviderProps) => {
  const [socket] = React.useState(io(uri, options));
  const [namespaces] = React.useState(generateNamespaces(_namespaces ?? [], { uri, options }));

  const value = { socket, namespaces };

  return <SocketContext.Provider value={value}>{children}</SocketContext.Provider>;
};
