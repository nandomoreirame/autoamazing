'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.webpackConfig = undefined;

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _gulpUtil = require('gulp-util');

var _gulpUtil2 = _interopRequireDefault(_gulpUtil);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isProduction = _gulpUtil2.default.env.env === 'production';

var webpackConfig = {
  entry: _path2.default.resolve(__dirname, './src/javascripts/entries/*'),
  output: {
    path: _path2.default.resolve(__dirname, './dist/'),
    filename: 'bundler-[name].js',
    libraryTarget: 'umd',
    library: 'autoamazing'
  },
  resolve: {
    extensions: ['.js', '.es6'],
    alias: {
      Utils: _path2.default.resolve(__dirname, './src/javascripts/utils/'),
      Functions: _path2.default.resolve(__dirname, './src/javascripts/functions/'),
      Components: _path2.default.resolve(__dirname, './src/javascripts/components/')
    }
  },
  devtool: '#source-map',
  module: {
    loaders: [{
      test: /(\.es6|\.js)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};

if (isProduction) {
  webpackConfig.plugins = (webpackConfig.plugins || []).concat([new _webpack2.default.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }), new _webpack2.default.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false
    }
  }), new _webpack2.default.LoaderOptionsPlugin({
    minimize: true
  })]);
}

exports.webpackConfig = webpackConfig;