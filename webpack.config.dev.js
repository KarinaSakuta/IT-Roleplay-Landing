const path = require('path');

module.exports = {
  devtool: 'source-map',
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.(js|jsx)$/,
      exclude: [path.resolve(__dirname, 'node_modules')],
      loader: 'eslint-loader',
      options: {
        emitWarning: true,
        emitError: false,
      },
    }],
  },
  devServer: {
    port: 9000,
    hot: false,
    inline: false,
  },
};
