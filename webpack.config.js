const path = require("path");
module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  plugins: [new HtmlWebpackPlugin({
    template: "public/index.html",
    hash: true, // cache busting
    filename: '../dist/index.html'
  })],
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist"),
//   },
};
