'use strict';

var _gulpLoadPlugins = require('gulp-load-plugins');

var _gulpLoadPlugins2 = _interopRequireDefault(_gulpLoadPlugins);

var _lodash = require('lodash');

var _config = require('./helpers/config');

var _nodeBourbon = require('node-bourbon');

var _nodeBourbon2 = _interopRequireDefault(_nodeBourbon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = (0, _gulpLoadPlugins2.default)();

var defaults = {
  taskname: 'stylesheets',
  src: ['./src/main.sass'],
  dest: './dist',
  env: 'production',
  sass: true,
  sassSettings: {
    sourcemap: true,
    noCache: true,
    style: 'expanded',
    sourceComments: true,
    includePaths: [_nodeBourbon2.default.includePaths, 'node_modules', 'src/assets/sass', 'assets/sass', 'sass']
  }
};

module.exports = function (gulp, options) {
  var othersTasks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var sassSettings = {};

  var opts = (0, _lodash.merge)({}, defaults, options);
  var isProduction = opts.env === 'production';

  if (opts.sass) {
    sassSettings = (0, _lodash.merge)({}, opts.sassSettings);
  }

  gulp.task(opts.taskname, function (done) {
    return gulp.src(opts.src).pipe($.plumber(_config.config.plumber)).pipe(opts.sass ? $.sass(sassSettings).on('error', $.sass.logError) : $.util.noop()).pipe($.combineMq()).pipe(isProduction ? $.cssnano(_config.config.cssnano) : $.util.noop()).pipe(isProduction ? $.rename(_config.config.rename) : $.util.noop()).pipe($.size(_config.config.size(opts.taskname))).pipe(gulp.dest(opts.dest)).pipe($.plumber.stop());
  });
};