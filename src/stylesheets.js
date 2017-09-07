import plugins from 'gulp-load-plugins'
import { merge } from 'lodash'
import { config } from './config'

const $ = plugins()

const defaults = {
  taskname: 'stylesheets',
  src: ['./src/input.sass'],
  dest: './dist',
  sass: true
}

module.exports = (gulp, options, othersTasks = []) => {
  const opts = merge({}, defaults, options)

  gulp.task(opts.taskname, done => gulp.src(opts.src)
    .pipe($.plumber(config.plumber))
    .pipe(opts.sass ? $.sass()
      .on('error', $.sass.logError) : $.util.noop())
    .pipe($.combineMq())
    .pipe($.size(config.size(opts.taskname)))
    .pipe(gulp.dest(opts.dest))
    .pipe($.cssnano(config.cssnano))
    .pipe($.rename(config.rename))
    .pipe($.size(config.size(opts.taskname)))
    .pipe(gulp.dest(opts.dest))
    .pipe($.plumber.stop()))
}
