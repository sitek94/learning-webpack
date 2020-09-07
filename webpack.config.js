// We don't have to install path - it comes with node
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main-[contentHash].js',
    // __dirname - absolute path
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ],
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
