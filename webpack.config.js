const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    bundle: "./src/js/index.js",
    ingredients: "./src/js/ingredients.js",
    results: "./src/js/results.js"
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
      chunks: ['bundle'],
    }),
    new HtmlWebpackPlugin({
      title: "Ingredients",
      filename: "ingredients.html",
      template: "./src/views/ingredients.html",
      chunks: ['ingredients'],
    }),
    new HtmlWebpackPlugin({
      title: "Results",
      filename: "results.html",
      template: "./src/views/results.html",
      chunks: ['results'],
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
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        // More information here https://webpack.js.org/guides/asset-modules/
        type: "asset",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  }
};