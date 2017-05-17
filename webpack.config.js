var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname+"/public",
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./js/app.js",
  output: {
    path: __dirname+"/public/dist/js",
    filename: "scripts.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({mangle: false,sourcemap: false})
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader:"babel-loader",
        query:{
          presets: ['react','es2015']
        }
      }
    ]
  }
};
