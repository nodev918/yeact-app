const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  mode: "development",
  devServer: {
    static: "build",
    port: "3009",
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
