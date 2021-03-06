const path = require('path')
const gulp = require('gulp')
const task = require('../tasks')
// const task = require('autoamazing')
const gutil = require('gulp-util')

const env = gutil.env.env || 'development'

gulp.task('default', [
  'sass',
  'css',
  'js',
  'js:babel'
])

task.clean(gulp, {
  src: ['samples/output/*']
})

task.stylesheets(gulp, {
  taskname: 'sass',
  src: 'samples/input/main.sass',
  dest: 'samples/output',
  env: env,
  sassSettings: {
    sourcemap: false,
    sourceComments: false
  }
})

task.stylesheets(gulp, {
  taskname: 'css',
  src: 'samples/input/main.css',
  dest: 'samples/output',
  env: env,
  sass: false
})

task.scripts(gulp, {
  taskname: 'js',
  src: 'samples/input/main.js',
  dest: 'samples/output',
  env: env,
  include: true,
  includeSettings: {
    extensions: 'js',
    includePaths: [
      `samples/input`
    ]
  }
})

task.scripts(gulp, {
  taskname: 'js:babel',
  src: 'samples/input/main-babel.js',
  dest: 'samples/output',
  env: env,
  babel: true
})

task.scripts(gulp, {
  taskname: 'js:webpack',
  src: 'samples/input/main-webpack.js',
  dest: 'samples/output',
  env: env,
  sourcemaps: false,
  webpack: true,
  webpackConfig: {
    entry: path.resolve(__dirname, `samples/input/main-webpack.js`),
    output: {
      path: path.resolve(__dirname, `./samples/output/`)
    }
  }
})

task.images(gulp, {
  src: `samples/input/gulp-tasks.png`,
  dest: `samples/output`,
  env: 'production'
})

task.copy(gulp, {
  src: `samples/input/quote.svg`,
  dest: `samples/output`
})
