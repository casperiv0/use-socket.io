import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts"],
  dts: true,
  target: "node18",
  treeshake: true,
  format: ["esm"],
});
