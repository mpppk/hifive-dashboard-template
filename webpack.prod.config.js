const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  mode: "production",
  entry: "./src/app.ts",
  output: {
    filename: "dist/bundle.js"
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"] // note if using webpack 1 you'd also need a '' in the array as well
  },
  module: {
    rules: [
      // loaders will work with webpack 1 or 2; but will be renamed "rules" in future
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.ejs?$/, loader: "ejs-compiled-loader" }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: "css/*.css" },
      { from: "assets/**/*.png" }
    ]),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "!!ejs-compiled-loader!src/assets/index.ejs"
    }),
    new WriteFilePlugin({
      test: /css\/.+\.css$/,
      log: true
    })
  ]
};
