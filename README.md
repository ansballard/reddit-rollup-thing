# Proof of concept for some reddit question

[This reddit question specifically](https://www.reddit.com/r/learnjavascript/comments/qw8qbu/comment/hl23lzu/?utm_source=share&utm_medium=web2x&context=3)

```sh
# init the repo and run the build
npm ci
npx rollup -c rollup.config.js
# built files are in /dist
```

The idea (I think) is to create 1 bundle per input (see input1.js, input2.js), where the imports, static or dynamic, are bundled along with each output file.

- declare an array of input files (I did it static, you could read it from a directory to make it dynamic)
- iterate that array for the return in `rollup.config.js`
- input -> input, dest -> dist/input, format -> iife because why not
- nodeResolve to resolve npm modules
