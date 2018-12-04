const path = require('path');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: "source-map-loader"
        },
        {
          enforce: 'pre',
          test: /\.tsx?$/,
          use: "source-map-loader"
        }
      ]
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"]
    },
    devtool: 'source-map',
   };