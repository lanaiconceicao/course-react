// Configuration to read a file and generate a bundle
'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {
  // says to webpack to create a source map of the file
  // source map: map of the main file -> make debug easier
  devtool: 'source-map',

  entry: [
    // ========================
    // React hot loader -> Do not need to refresh a page to update when we change a component in React
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    // ========================
    path.join(__dirname, 'src', 'index')
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    }]
  }
}