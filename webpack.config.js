
// We don't have to install path - it comes with node
const path = require('path');

module.exports = {
  mode: "development",
  devtool: "none",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    // __dirname - absolute path
    path: path.resolve(__dirname, "dist")
  }
};