import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: [
    "./src/lib/**/*.ts",
    "./src/index.ts",
    "./src/components/index.ts",
    "./src/components/**/*.tsx",
  ],
  treeshake: true,
  splitting: true,
  // sourcemap: true,
  clean: true,
  format: ["cjs", "esm"],
  dts: true,
  // minify: true,
  external: ["react"],
  ...options,
}));
