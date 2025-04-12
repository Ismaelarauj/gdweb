const path = require('path');

module.exports = {
  entry: {
    app: './js/ex1.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/ex1.js',
  },
};
