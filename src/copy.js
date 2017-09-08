import size from 'gulp-size'
import { merge } from 'lodash'
import { config } from './helpers/config'

const defaults = {
  taskname: 'copy',
  src: ['./src/fonts/*.{eot,svg,ttf,woff,woff2}'], // copy fonts for example
  dest: './dist/fonts'
}

module.exports = (gulp, options, othersTasks = []) => {
  const opts = merge({}, defaults, options)

  gulp.task(opts.taskname, othersTasks, done =>
    gulp.src(opts.src)
      .pipe(size(config.size(opts.taskname)))
      .pipe(gulp.dest(opts.dest)))
}
