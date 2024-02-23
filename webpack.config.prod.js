import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "production",
  devtool: "source-map",
  entry: "./src/index.html",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    // Create HTML File that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
};
