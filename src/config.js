import notify from 'gulp-notify'

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
  }
}
