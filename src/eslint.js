import eslint from 'gulp-eslint'

import { merge } from 'lodash'
import { config } from './helpers/config'

const defaults = {
  taskname: 'eslint',
  src: ['./src/**/*.js'],
  eslintrc: config.eslintrc
}

module.exports = (gulp, options, othersTasks = []) => {
  const opts = merge({}, defaults, options)

  gulp.task(opts.taskname, othersTasks, done =>
    gulp.src(opts.src)
      .pipe(eslint(opts.eslintrc))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError()))
}
