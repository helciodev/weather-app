const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/controller.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
