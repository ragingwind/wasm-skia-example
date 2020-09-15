const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  devServer: {
    clientLogLevel: 'silent',
    inline: true,
    port: 9000,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: 'node_modules/canvaskit-wasm/bin/canvaskit.wasm' }],
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  mode: 'development',
  node: {
    fs: 'empty',
  },
};
