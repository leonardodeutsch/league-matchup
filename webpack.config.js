const webpack = require("webpack");
const path = require("path");
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

const config = {
  entry: "./client/src/index.js",
  output: {
    path: path.resolve(__dirname, "client/dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.mp4$/,
        use: "file-loader?name=videos/[name].[ext]",
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader",
            options: {
              mimetype: "image/png",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MomentLocalesPlugin(),
    new MomentLocalesPlugin({
      localesToKeep: ['en']
    })
  ]
};

module.exports = config;
