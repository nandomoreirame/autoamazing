'use strict';

var _gulpSize = require('gulp-size');

var _gulpSize2 = _interopRequireDefault(_gulpSize);

var _gulpImage = require('gulp-image');

var _gulpImage2 = _interopRequireDefault(_gulpImage);

var _gulpUtil = require('gulp-util');

var _gulpUtil2 = _interopRequireDefault(_gulpUtil);

var _lodash = require('lodash');

var _config = require('./helpers/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
  taskname: 'images',
  src: ['./src/images/**/*'],
  dest: './dist/images',
  env: 'production',
  imageSettings: {
    pngquant: true,
    optipng: true,
    zopflipng: true,
    advpng: true,
    jpegRecompress: false,
    jpegoptim: true,
    mozjpeg: true,
    gifsicle: true,
    svgo: true
  }
};

module.exports = function (gulp, options) {
  var othersTasks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var opts = (0, _lodash.merge)({}, defaults, options);
  var isProduction = opts.env === 'production';

  gulp.task(opts.taskname, othersTasks, function (done) {
    return gulp.src(opts.src).pipe(isProduction ? (0, _gulpImage2.default)(opts.imageSettings) : _gulpUtil2.default.noop()).pipe((0, _gulpSize2.default)(_config.config.size(opts.taskname))).pipe(gulp.dest(opts.dest));
  });
};