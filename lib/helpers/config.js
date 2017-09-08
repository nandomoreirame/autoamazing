'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = undefined;

var _gulpNotify = require('gulp-notify');

var _gulpNotify2 = _interopRequireDefault(_gulpNotify);

var _babelrc = require('./babelrc');

var _babelrc2 = _interopRequireDefault(_babelrc);

var _eslintrc = require('./eslintrc');

var _eslintrc2 = _interopRequireDefault(_eslintrc);

var _webpack = require('./webpack');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = exports.config = {
  cssnano: {
    autoprefixer: {
      browsers: ['> 1%', 'last 2 versions', 'Firefox >= 20']
    },
    add: true
  },
  rename: {
    suffix: '.min'
  },
  plumber: {
    errorHandler: _gulpNotify2.default.onError({
      title: 'Gulp',
      message: 'Error: <%= error.message %>'
    })
  },
  size: function size(title) {
    return {
      title: 'Task ' + title + ': ',
      showFiles: true
    };
  },
  babelrc: _babelrc2.default,
  eslintrc: _eslintrc2.default,
  webpackConfig: _webpack.webpackConfig
};