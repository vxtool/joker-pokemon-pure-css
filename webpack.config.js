'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

module.exports = validate({
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'source', 'index')
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  resolve: {
    modulesDirectories: [
      'node_modules'
    ],
    extensions: ['', '.js', '.jsx', '.scss']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: [
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      include: /source/,
      loaders: ["style", "css", "sass?outputStyle=expanded"]
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      include: /source/,
      loader: 'babel'
    }
    ]
  }
})
