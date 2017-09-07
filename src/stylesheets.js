import plugins from 'gulp-load-plugins'
import { merge } from 'lodash'
import { config } from './helpers/config'

const $ = plugins()

const defaults = {
  taskname: 'stylesheets',
  src: ['./src/main.sass'],
  dest: './dist',
  env: 'production',
  sass: true
}

module.exports = (gulp, options, othersTasks = []) => {
  const opts = merge({}, defaults, options)
  const isProduction = opts.env === 'production'

  gulp.task(opts.taskname, done => gulp.src(opts.src)
    .pipe($.plumber(config.plumber))
    .pipe(opts.sass ? $.sass()
      .on('error', $.sass.logError) : $.util.noop())
    .pipe($.combineMq())
    .pipe(isProduction ? $.cssnano(config.cssnano) : $.util.noop())
    .pipe(isProduction ? $.rename(config.rename) : $.util.noop())
    .pipe($.size(config.size(opts.taskname)))
    .pipe(gulp.dest(opts.dest))
    .pipe($.plumber.stop()))
}
