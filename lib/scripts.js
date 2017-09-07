'use strict';

var _gulpLoadPlugins = require('gulp-load-plugins');

var _gulpLoadPlugins2 = _interopRequireDefault(_gulpLoadPlugins);

var _lodash = require('lodash');

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = (0, _gulpLoadPlugins2.default)();

var defaults = {
  taskname: 'scripts',
  src: ['./src/main.js'],
  dest: './dist',
  env: 'production',
  include: false,
  babel: false,
  babelConfig: {
    presets: [['env', {
      targets: {
        browsers: ['last 2 versions', 'safari >= 7']
      }
    }]]
  }
};

module.exports = function (gulp, options) {
  var othersTasks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var opts = (0, _lodash.merge)({}, defaults, options);
  var isProduction = opts.env === 'production';

  gulp.task(opts.taskname, function (done) {
    return gulp.src(opts.src).pipe($.plumber(_config.config.plumber)).pipe($.sourcemaps.init()).pipe(opts.include ? $.include() : $.util.noop()).pipe(opts.babel ? $.babel(opts.babelConfig) : $.util.noop()).pipe(isProduction ? $.uglify() : $.util.noop()).pipe(isProduction ? $.rename(_config.config.rename) : $.util.noop()).pipe($.size(_config.config.size(opts.taskname))).pipe($.sourcemaps.write('.')).pipe(gulp.dest(opts.dest)).pipe($.plumber.stop());
  });
};