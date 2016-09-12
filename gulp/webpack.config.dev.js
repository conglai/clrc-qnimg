'use strict';
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const onlinePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
});
var config = {
  entry: './app.jsx',
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  eslint: require('./eslintrc'),
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)|(lib)|(build)/,
      },
    ],
    loaders: [
      { test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          // activate source maps via loader query
          'css?sourceMap!' +
          'less?sourceMap'
        )
      },
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          // activate source maps via loader query
          'css?sourceMap'
        )
      },
      { test: /\.jsx?$/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        exclude: /node_modules/,
      },
      { test: /\.ejs$/, loader: 'ejs-loader?variable=data' },
      { test: /\.png$/, loader: 'url-loader?mimetype=image/png' },
      { test: /\.gif$/, loader: 'url-loader?mimetype=image/gif' },
      { test: /\.woff$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'url-loader?mimetype=application/font-ttf' }
    ]
  },
  plugins: [new ExtractTextPlugin('styles.css')],
  externals: {
    'react': 'window.React',
    'react-dom': 'window.ReactDOM'
  }
};
module.exports = config;
