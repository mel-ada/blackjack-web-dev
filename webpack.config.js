const webpack = require('webpack')

module.exports = {
  entry: "./src/index.js",
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, include: [`${__dirname}/src`, `${__dirname}/client`, `${__dirname}/components`], exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
