import babel from 'rollup-plugin-babel'

const cjs = {
  exports: 'named',
  format: 'cjs'
}

const esm = {
  format: 'es'
}

const getCJS = override => Object.assign({}, cjs, override)
const getESM = override => Object.assign({}, esm, override)

const configBase = {
  input: 'index.js',
  plugins: [babel({
    exclude: 'node_modules/**'
  })],
  output: [
    getESM({ file: 'dist/unicode-properties.esm.js' }),
    getCJS({ file: 'dist/unicode-properties.cjs.js' }),
  ]
}

export default [
  configBase
]
