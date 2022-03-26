# use-socket.io

Simple package to use Socket.io with React hooks.

## Installation

```bash
# npm
npm install @casper124578/use-socket.io

# Yarn
yarn add @casper124578/use-socket.io

# pnpm
pnpm install @casper124578/use-socket.io
```

## Usage

```tsx
// src/App.tsx
import { SocketProvider } from "@casper124578/use-socket.io";

export default function App() {
  return (
    <SocketProvider uri="http://localhost:3030" options={{ /** ... */ }}>
      <App />
    </SocketProvider>
  );
}
```


## Documentation

[You can view documentation here](https://github.com/Dev-CasperTheGhost/use-socket.io/blob/main/docs/README.md)
