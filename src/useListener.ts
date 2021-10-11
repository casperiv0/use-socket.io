import * as React from "react";
import { useSocket } from "./context";

export function useListener(eventName: string, callback: (data: any) => void, namespace?: string) {
  const socket = useSocket(namespace);
  const callbackRef = React.useRef(callback);

  const subscribeToEvent = React.useCallback(() => {
    if (socket && !socket.hasListeners(eventName)) {
      socket.on(eventName, callbackRef.current);
    }
  }, [socket, eventName]);

  const unsubscribeFromEvent = React.useCallback(() => {
    if (socket && socket.hasListeners(eventName)) {
      socket.off(eventName, callbackRef.current);
    }
  }, [socket, eventName]);

  React.useEffect(() => {
    subscribeToEvent();

    return () => {
      unsubscribeFromEvent();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
