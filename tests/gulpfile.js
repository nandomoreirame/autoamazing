const gulp = require('gulp')
const tasks = require('../tasks')
const gutil = require('gulp-util')

const env = gutil.env.env || 'development'

tasks.stylesheets(gulp, {
  taskname: 'sass',
  src: 'samples/input/main.sass',
  dest: 'samples/output',
  env: env
})

tasks.stylesheets(gulp, {
  taskname: 'css',
  src: 'samples/input/main.css',
  dest: 'samples/output',
  env: env,
  sass: false
})
