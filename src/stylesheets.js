import plugins from 'gulp-load-plugins'
import { merge } from 'lodash'
import { config } from './helpers/config'
import bourbon from 'node-bourbon'

const $ = plugins()

const defaults = {
  taskname: 'stylesheets',
  src: ['./src/main.sass'],
  dest: './dist',
  env: 'production',
  sass: true,
  sassSettings: {
    sourcemap: true,
    noCache: true,
    style: 'expanded',
    sourceComments: true,
    includePaths: [
      bourbon.includePaths,
      `node_modules`,
      `src/assets/sass`,
      `assets/sass`,
      `sass`
    ]
  }
}

module.exports = (gulp, options, othersTasks = []) => {
  let sassSettings = {}

  const opts = merge({}, defaults, options)
  const isProduction = opts.env === 'production'

  if (opts.sass) {
    sassSettings = merge({}, opts.sassSettings)
  }

  gulp.task(opts.taskname, othersTasks, done =>
    gulp.src(opts.src)
      .pipe($.plumber(config.plumber))
      .pipe(opts.sass ? $.sass(sassSettings)
        .on('error', $.sass.logError) : $.util.noop())
      .pipe($.combineMq())
      .pipe(isProduction ? $.cssnano(config.cssnano) : $.util.noop())
      .pipe(isProduction ? $.rename(config.rename) : $.util.noop())
      .pipe($.size(config.size(opts.taskname)))
      .pipe(gulp.dest(opts.dest))
      .pipe($.plumber.stop()))
}
