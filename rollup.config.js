import { join } from "path";
import nodeResolve from "@rollup/plugin-node-resolve";

const inputs = ["input1.js", "input2.js"];

export default inputs.map(input => ({
  input,
  output: {
    file: join("dist", input),
    format: 'iife',
    inlineDynamicImports: true
  },
  plugins: [
    nodeResolve()
  ]
}));
