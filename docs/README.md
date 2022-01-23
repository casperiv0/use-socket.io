# Documentation

### Setup

```tsx
// src/App.tsx

import { SocketProvider } from "@casper124578/use-socket.io";

export default function App() {
  return (
    // type options: `Partial<SocketOptions & ManagerOptions>`
    <SocketProvider uri="http://localhost:3030" options={{}}>
      {/* my app here */}
    </SocketProvider>
  );
}
```

### `useSocket`

```tsx
export function MyComponent() {
  /**
   * access to all `socket` properties
   * @type `Socket<DefaultEventsMap, DefaultEventsMap>`
   */
  const socket = useSocket();

  return <p>hello world<p>
}
```

### `useListener`

```tsx
export function MyComponent() {
  useListener("myEventName", (data) => {
    console.log(data)
  }, [/* dependencies array like useEffect */]);

  return <p>hello world<p>
}
```
