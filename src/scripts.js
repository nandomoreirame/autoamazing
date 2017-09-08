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
  includeSettings: {
    extensions: 'js',
    includePaths: [
      `node_modules`,
      `javascripts`,
      `scripts`,
      `js`
    ]
  },
  babel: false,
  babelrc: config.babelrc,
  webpack: false,
  webpackConfig: config.webpackConfig
}

module.exports = (gulp, options, othersTasks = []) => {
  let webpackConfig
  let includeSettings

  const opts = merge({}, defaults, options)
  const isProduction = opts.env === 'production'

  if (opts.webpack) {
    webpackConfig = merge({}, opts.webpackConfig)
  }

  if (opts.include) {
    includeSettings = merge({}, opts.includeSettings)
  }

  gulp.task(opts.taskname, othersTasks, done =>
    gulp.src(opts.src)
      .pipe($.plumber(config.plumber))
      .pipe(opts.sourcemaps ? $.sourcemaps.init() : $.util.noop())
      .pipe(opts.include ? $.include(includeSettings) : $.util.noop())
      .pipe(opts.babel ? $.babel(opts.babelrc) : $.util.noop())
      .pipe(opts.webpack ? webpack(webpackConfig) : $.util.noop())
      .pipe(isProduction ? $.uglify() : $.util.noop())
      .pipe(isProduction ? $.rename(config.rename) : $.util.noop())
      .pipe($.size(config.size(opts.taskname)))
      .pipe(opts.sourcemaps ? $.sourcemaps.write('.') : $.util.noop())
      .pipe(gulp.dest(opts.dest))
      .pipe($.plumber.stop()))
}
