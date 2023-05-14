module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
  },
  entry: ["./src/style.css"],
};
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
