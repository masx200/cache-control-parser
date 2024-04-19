import { defineConfig } from "rollup";
import esbuild from "rollup-plugin-esbuild";
import { minify } from "rollup-plugin-esbuild";
export default defineConfig({
  input: "./src/index.ts",
  plugins: [esbuild({}), minify()],
  output: { format: "module", file: "./dist/index.js" },
});
