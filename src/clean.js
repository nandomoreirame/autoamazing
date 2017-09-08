import del from 'del'
import { merge } from 'lodash'

const defaults = {
  taskname: 'clean',
  src: ['./src/**/*.js'],
  cleanSettings: {
    force: true,
    dryRun: true
  }
}

module.exports = (gulp, options, othersTasks = []) => {
  const opts = merge({}, defaults, options)

  gulp.task(opts.taskname, othersTasks, done =>
    del(opts.src, opts.cleanSettings))
}
