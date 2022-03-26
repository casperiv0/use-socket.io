import * as React from "react";
import { SocketOptions, useSocketStore } from "./store";
import { useConnect } from "../hooks/useConnect";

interface ProviderProps {
  children: React.ReactNode;
  uri: string;
  options?: Partial<SocketOptions>;
}

export function SocketProvider({ uri, options, children }: ProviderProps) {
  const store = useSocketStore();
  const { connect, disconnect } = useConnect();

  React.useEffect(() => {
    store.setOptions({ url: uri, ...options });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uri, options]);

  React.useEffect(() => {
    connect(uri);

    return () => {
      disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uri]);

  return <>{children}</>;
}
