const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 当我们想通过cdn引入一些库的时候，可以通过externals把依赖中的这个库给排除的打包范围之外

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/built.js",
    path: resolve(__dirname, "build")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  mode: "production",
  externals: {
    // 拒绝jQuery被打包进来
    jquery: "jQuery"
  }
};
