var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    'vendor': './app/ts/vendor.ts',
    'app': './app/ts/bootstrap.ts'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ],

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [{
      test: /\.ts$/,
      loader: 'ts-loader'
    }, ],
    noParse: [/angular2\/bundles\/.+/]
  },

  devServer: {
    historyApiFallback: true
  }
};