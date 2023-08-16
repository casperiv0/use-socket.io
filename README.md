# use-socket.io

Simple package to use Socket.io with React hooks.

## Installation

```bash
# npm
npm install @casperiv/use-socket.io

# Yarn
yarn add @casperiv/use-socket.io

# pnpm
pnpm install @casperiv/use-socket.io
```

## Usage

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

## Documentation

[You can view documentation here](https://github.com/Dev-CasperTheGhost/use-socket.io/blob/main/docs/README.md)
