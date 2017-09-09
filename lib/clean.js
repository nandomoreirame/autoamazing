'use strict';

var _del = require('del');

var _del2 = _interopRequireDefault(_del);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
  taskname: 'clean',
  src: ['./src/**/*.js'],
  cleanSettings: {
    force: true
  }
};

module.exports = function (gulp, options) {
  var othersTasks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var opts = (0, _lodash.merge)({}, defaults, options);

  gulp.task(opts.taskname, othersTasks, function (done) {
    return (0, _del2.default)(opts.src, opts.cleanSettings);
  });
};