import notify from 'gulp-notify'
import babelrc from './babelrc'
import eslintrc from './eslintrc'
import { webpackConfig } from './webpack'

export const config = {
  cssnano: {
    autoprefixer: {
      browsers: [
        '> 1%',
        'last 2 versions',
        'Firefox >= 20'
      ]
    },
    add: true
  },
  rename: {
    suffix: '.min'
  },
  plumber: {
    errorHandler: notify.onError({
      title: 'Gulp',
      message: 'Error: <%= error.message %>'
    })
  },
  size: title => {
    return {
      title: title,
      showFiles: true
    }
  },
  babelrc: babelrc,
  eslintrc: eslintrc,
  webpackConfig: webpackConfig
}
