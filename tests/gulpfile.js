const gulp = require('gulp')
// const task = require('../tasks')
const task = require('autoamazing')
const gutil = require('gulp-util')

const env = gutil.env.env || 'development'

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
