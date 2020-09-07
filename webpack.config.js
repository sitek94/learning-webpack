// We don't have to install path - it comes with node
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    // __dirname - absolute path
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',   // 3. Injects styles into DOM (<style> tag)
          'css-loader',     // 2. Turns css into commonJS (javascript)
          'sass-loader'     // 1. Turns sass into css
        ],
      },
    ],
  },
};
