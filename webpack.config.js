const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    assetModuleFilename: "[path][name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpeg|jpg)$/,
        type: "asset/resource",
      },
      {
        test: /\.(ttf)$/,
        type: "asset/resource",
        use: ["file-loader"],
        generator: {
          filename: "fonts/[name].[ext]",
        },
      },
    ],
  },
};
