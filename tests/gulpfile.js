const gulp = require('gulp')
const tasks = require('../tasks')

tasks.stylesheets(gulp, {
  taskname: 'stylesheets',
  src: 'samples/sass/input.sass',
  dest: 'samples/sass'
})
