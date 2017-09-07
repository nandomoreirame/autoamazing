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

task.stylesheets(gulp, {
  taskname: 'sass',
  src: 'samples/input/main.sass',
  dest: 'samples/output',
  env: env
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
  include: true
})

task.scripts(gulp, {
  taskname: 'js:babel',
  src: 'samples/input/main-babel.js',
  dest: 'samples/output',
  env: env,
  babel: true
})
