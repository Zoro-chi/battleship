const path = require("path");
const Htmlwebpackplugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  devServer: {
    static: "./dist",
  },
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  plugins: [
    new Htmlwebpackplugin({
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
};
