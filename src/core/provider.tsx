import * as React from "react";
import type { SocketOptions } from "./store";
import { useConnect } from "../hooks/useConnect";

interface ProviderProps {
  children: React.ReactNode;
  uri: string;
  options?: Partial<SocketOptions>;
}

export function SocketProvider({ uri, options, children }: ProviderProps) {
  const { connect, disconnect } = useConnect();

  React.useEffect(() => {
    connect(uri, options);

    return () => {
      disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uri, options]);

  return <>{children}</>;
}
