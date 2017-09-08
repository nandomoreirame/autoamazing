'use strict';

var _gulpSize = require('gulp-size');

var _gulpSize2 = _interopRequireDefault(_gulpSize);

var _lodash = require('lodash');

var _config = require('./helpers/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
  taskname: 'copy',
  src: ['./src/fonts/*.{eot,svg,ttf,woff,woff2}'], // copy fonts for example
  dest: './dist/fonts'
};

module.exports = function (gulp, options) {
  var othersTasks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var opts = (0, _lodash.merge)({}, defaults, options);

  gulp.task(opts.taskname, othersTasks, function (done) {
    return gulp.src(opts.src).pipe((0, _gulpSize2.default)(_config.config.size(opts.taskname))).pipe(gulp.dest(opts.dest));
  });
};