import svgr from "@svgr/rollup";
import path from "path";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
// import postcss from 'rollup-plugin-postcss-modules'
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript";
import url from "rollup-plugin-url";
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  onwarn: function(warning, rollupWarn) {
    if (warning.code !== "CIRCULAR_DEPENDENCY") {
      rollupWarn(warning);
    }
  },
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true
    }
  ],
  plugins: [
    external(),

    postcss({
      modules: true
    }),
    url(),
    svgr(),
    resolve({
      dedupe: ["react", "react-dom"]
    }),
    typescript({
      tsconfig: path.resolve(__dirname, "./tsconfig.json")
    }),
    commonjs({
      include: "node_modules/**",
      // left-hand side can be an absolute path, a path
      // relative to the current directory, or the name
      // of a module in node_modules
      namedExports: {
        "node_modules/react-is/index.js": [
          "ForwardRef",
          "isValidElementType",
          "Memo",
          "isContextConsumer"
        ],
        "node_modules/material-table/dist/index.js": ["MTableBodyRow"],
        "node_modules/notistack/build/index.js": [
          "SnackbarProvider",
          "useSnackbar"
        ]
      }
    })
  ]
};
