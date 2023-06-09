// Configuration to read a file and generate a bundle
'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

module.exports = validate ({
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
    filename: 'bundle.js',
    // publicPath -> where webpack-dev-server listens our development file
    // create a file in memory in the path especific /static/
    publicPath: '/static/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'standard'
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    }]
  }
})
