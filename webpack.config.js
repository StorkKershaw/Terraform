const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

/**
 * @type import("webpack").Configuration
 */
module.exports = {
  mode: process.env.NODE_ENV || 'development',
  devtool: 'inline-source-map',
  entry: { content: path.join(__dirname, 'src', 'main') },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    },
    extensions: ['.ts', '.js']
  },
  plugins: [
    new CopyPlugin({ patterns: [{ from: './public', to: './' }] })
  ]
}
