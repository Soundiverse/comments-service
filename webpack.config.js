const path = require('path');
// var SRC_DIR = path.join(__dirname, '/client/src');
// var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: __dirname + `/client/src/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        loader: 'style-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
        },
      },
    ],
  },
};

