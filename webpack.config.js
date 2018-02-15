const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'), //'__' current working directory.
    filename: 'bundle.js'
  }
};

module.exports = config;
