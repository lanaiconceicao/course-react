// Configuration to read a file and generate a bundle
'use strict'

const path = require('path')

module.exports = {
  // says to webpack to create a source map of the file
  // source map: map of the main file -> make debug easier
  devtool: 'source-map',

  entry: path.join(__dirname, 'src', 'index'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    }]
  }
}