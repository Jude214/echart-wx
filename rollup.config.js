import { uglify } from "rollup-plugin-uglify"

const pkg = require('./package.json')

export default {
  input: './echart-wx.ts',
  output: {
    file: pkg.main,
    format: 'cjs',
    // format: 'umd',
    name: 'echart-wx',
    exports: 'default'
  },
  plugins: [
    uglify()
  ]
}

// module.exports = {
//   input: './src/main.js',
//   output: {
//     file: pkg.main,
//     format: 'umd',
//     name: 'JSEncrypt',
//     exports: 'named'
//   }
// }
