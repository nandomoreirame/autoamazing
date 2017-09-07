'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = undefined;

var _gulpNotify = require('gulp-notify');

var _gulpNotify2 = _interopRequireDefault(_gulpNotify);

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
      title: title,
      showFiles: true
    };
  }
};