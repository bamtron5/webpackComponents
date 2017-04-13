var webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: [
    path.join(__dirname, '/../client/app/app.module.ts')
  ],
  output: {
    path: path.join(__dirname, '/../client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: ['/node_modules/']
      }
    ]
  }
};
