'use strict';

var _gulpLoadPlugins = require('gulp-load-plugins');

var _gulpLoadPlugins2 = _interopRequireDefault(_gulpLoadPlugins);

var _webpackStream = require('webpack-stream');

var _webpackStream2 = _interopRequireDefault(_webpackStream);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _config = require('./helpers/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = (0, _gulpLoadPlugins2.default)();

var defaults = {
  taskname: 'scripts',
  src: ['./src/main.js'],
  dest: './dist',
  env: 'production',
  sourcemaps: true,
  include: false,
  babel: false,
  babelrc: _config.config.babelrc,
  webpack: false,
  webpackConfig: _config.config.webpackConfig
};

module.exports = function (gulp, options) {
  var othersTasks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var webpackConfig = void 0;

  var opts = (0, _lodash.merge)({}, defaults, options);
  var isProduction = opts.env === 'production';

  if (opts.webpack) {
    webpackConfig = (0, _lodash.merge)({}, opts.webpackConfig);
  }

  gulp.task(opts.taskname, function (done) {
    return gulp.src(opts.src).pipe($.plumber(_config.config.plumber)).pipe(opts.sourcemaps ? $.sourcemaps.init() : $.util.noop()).pipe(opts.include ? $.include() : $.util.noop()).pipe(opts.babel ? $.babel(opts.babelrc) : $.util.noop()).pipe(opts.webpack ? (0, _webpackStream2.default)(webpackConfig) : $.util.noop()).pipe(isProduction ? $.uglify() : $.util.noop()).pipe(isProduction ? $.rename(_config.config.rename) : $.util.noop()).pipe($.size(_config.config.size(opts.taskname))).pipe(opts.sourcemaps ? $.sourcemaps.write('.') : $.util.noop()).pipe(gulp.dest(opts.dest)).pipe($.plumber.stop());
  });
};