const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
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
