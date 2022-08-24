const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    bundle: "./src/js/index.js"
  }, 
  output: {
    path: path.resolve(__dirname, "dist"), 
    filename: "[name].js"
  }, 
  plugins: [
    new HtmlWebpackPlugin({
      title: "Meal App", 
      filename: "index.html", 
      template: "./src/index.html"
    })
  ],
  devServer:{
    contentBase: path.resolve(__dirname, 'dist')
  }
}