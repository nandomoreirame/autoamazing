'use strict';

var _gulpEslint = require('gulp-eslint');

var _gulpEslint2 = _interopRequireDefault(_gulpEslint);

var _lodash = require('lodash');

var _config = require('./helpers/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
  taskname: 'eslint',
  src: ['./src/**/*.js'],
  eslintrc: _config.config.eslintrc
};

module.exports = function (gulp, options) {
  var othersTasks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var opts = (0, _lodash.merge)({}, defaults, options);

  gulp.task(opts.taskname, othersTasks, function (done) {
    return gulp.src(opts.src).pipe((0, _gulpEslint2.default)(opts.eslintrc)).pipe(_gulpEslint2.default.format()).pipe(_gulpEslint2.default.failAfterError());
  });
};