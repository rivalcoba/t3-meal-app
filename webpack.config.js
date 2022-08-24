const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    bundle: "./src/js/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Meal App",
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
  },
};