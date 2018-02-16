const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'), //'__' current working directory.
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/ //babel will be applied to files that end with .js.
      }
    ]
  }
};

module.exports = config;
