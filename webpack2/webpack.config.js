const path = require("path");
const MiniCss = require("mini-css-extract-plugin");

const config = {
  entry: {
    index: path.join(__dirname, "src/js/index.js"),
    datos: path.join(__dirname, "src/js/datos.js")
  },
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "./[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCss.loader, "css-loader"]
      }
    ]
  },
  plugins: [new MiniCss({ filename: "[name].css", chunkFilename: "[id].css" })]
};

module.exports = config;
