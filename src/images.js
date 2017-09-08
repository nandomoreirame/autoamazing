import size from 'gulp-size'
import image from 'gulp-image'
import gutil from 'gulp-util'

import { merge } from 'lodash'
import { config } from './helpers/config'

const defaults = {
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
}

module.exports = (gulp, options, othersTasks = []) => {
  const opts = merge({}, defaults, options)
  const isProduction = opts.env === 'production'

  gulp.task(opts.taskname, othersTasks, done =>
    gulp.src(opts.src)
      .pipe(isProduction ? image(opts.imageSettings) : gutil.noop())
      .pipe(size(config.size(opts.taskname)))
      .pipe(gulp.dest(opts.dest)))
}
