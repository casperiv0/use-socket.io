# Documentation

### Setup

```tsx
// src/App.tsx
import { SocketProvider } from "@casperiv/use-socket.io";

export default function App() {
  return (
    <SocketProvider
      uri="http://localhost:3030"
      options={
        {
          /** ... */
        }
      }
    >
      <App />
    </SocketProvider>
  );
}
```

### `useSocket`

```tsx
import { useSocket } from "@casperiv/use-socket.io";

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
import { useListener } from "@casperiv/use-socket.io";

export function MyComponent() {
  useListener("myEventName", (data) => {
    console.log(data)
  }, [/* dependencies array like useEffect */]);

  return <p>hello world<p>
}
```
