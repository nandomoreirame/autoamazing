import plugins from 'gulp-load-plugins'
import webpack from 'webpack-stream'
import { merge } from 'lodash'
import { config } from './helpers/config'

const $ = plugins()

const defaults = {
  taskname: 'scripts',
  src: ['./src/main.js'],
  dest: './dist',
  env: 'production',
  sourcemaps: true,
  include: false,
  babel: false,
  babelrc: config.babelrc,
  webpack: false,
  webpackConfig: config.webpackConfig
}

module.exports = (gulp, options, othersTasks = []) => {
  let webpackConfig

  const opts = merge({}, defaults, options)
  const isProduction = opts.env === 'production'

  if (opts.webpack) {
    webpackConfig = merge({}, opts.webpackConfig)
  }

  gulp.task(opts.taskname, done => gulp.src(opts.src)
    .pipe($.plumber(config.plumber))
    .pipe(opts.sourcemaps ? $.sourcemaps.init() : $.util.noop())
    .pipe(opts.include ? $.include() : $.util.noop())
    .pipe(opts.babel ? $.babel(opts.babelrc) : $.util.noop())
    .pipe(opts.webpack ? webpack(webpackConfig) : $.util.noop())
    .pipe(isProduction ? $.uglify() : $.util.noop())
    .pipe(isProduction ? $.rename(config.rename) : $.util.noop())
    .pipe($.size(config.size(opts.taskname)))
    .pipe(opts.sourcemaps ? $.sourcemaps.write('.') : $.util.noop())
    .pipe(gulp.dest(opts.dest))
    .pipe($.plumber.stop()))
}
