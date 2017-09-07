import plugins from 'gulp-load-plugins'
import { merge } from 'lodash'
import { config } from './config'

const $ = plugins()

const defaults = {
  taskname: 'scripts',
  src: ['./src/main.js'],
  dest: './dist',
  env: 'production',
  include: false,
  babel: false,
  babelConfig: {
    presets: [
      [
        'env',
        {
          targets: {
            browsers: [
              'last 2 versions',
              'safari >= 7'
            ]
          }
        }
      ]
    ]
  }
}

module.exports = (gulp, options, othersTasks = []) => {
  const opts = merge({}, defaults, options)
  const isProduction = opts.env === 'production'

  gulp.task(opts.taskname, done => gulp.src(opts.src)
    .pipe($.plumber(config.plumber))
    .pipe($.sourcemaps.init())
    .pipe(opts.include ? $.include() : $.util.noop())
    .pipe(opts.babel ? $.babel(opts.babelConfig) : $.util.noop())
    .pipe(isProduction ? $.uglify() : $.util.noop())
    .pipe(isProduction ? $.rename(config.rename) : $.util.noop())
    .pipe($.size(config.size(opts.taskname)))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(opts.dest))
    .pipe($.plumber.stop()))
}
