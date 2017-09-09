<img src="/deadpool.jpg" width="280px" align="left" style="margin-right:30px"/>

<br/>
<br/>

# autoamazing
[![Build Status](https://travis-ci.org/nandomoreirame/autoamazing.svg?branch=master)](https://travis-ci.org/nandomoreirame/autoamazing) [![Coverage Status](https://coveralls.io/repos/github/nandomoreirame/autoamazing/badge.svg?branch=master)](https://coveralls.io/github/nandomoreirame/autoamazing?branch=master) [![Code Climate](https://codeclimate.com/github/nandomoreirame/autoamazing/badges/gpa.svg)](https://codeclimate.com/github/nandomoreirame/autoamazing) [![Issue Count](https://codeclimate.com/github/nandomoreirame/autoamazing/badges/issue_count.svg)](https://codeclimate.com/github/nandomoreirame/autoamazing)

:tropical_drink: Automatizate amazing tasks for front-end with Gulpjs

---

> :warning: This repository is still under development

## Installation

```bash
$ npm install --save-dev autoamazing
```

## Usage

```javascript
const gulp = require('gulp')
const task = require('autoamazing')
const gutil = require('gulp-util')

const env = gutil.env.env || 'development'

task.clean(gulp, {
  taskname: 'clean',
  src: [
    `dist/*`,
    `!dist/images`
  ]
})

task.stylesheets(gulp, {
  taskname: 'sass',
  src: 'src/sass/main.sass',
  dest: 'dist/css',
  env: env
})

task.stylesheets(gulp, {
  taskname: 'css',
  src: 'dist/css/main.css',
  dest: 'dist/css',
  env: env,
  sass: false
})

task.scripts(gulp, {
  src: [
    `src/javascripts/*.js`,
    `src/javascripts/vendor/*.js`
  ],
  dest: `dist/javascripts`,
  env: env,
  include: true,
  includeSettings: {
    extensions: 'js',
    includePaths: [
      `node_modules`,
      `src/javascripts`
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

task.eslint(gulp, {
  src: [
    `src/javascripts/**/*.js`,
  ]
})

task.copy(gulp, {
  taskname: 'fonts',
  src: [
    `node_modules/font-awesome/fonts/*`,
    `src/fonts/*`
  ],
  dest: `dist/fonts`
})

task.images(gulp, {
  src: `dist/images/**/*`,
  dest: `dist/images`,
  env: env,
  imageSettings: {
    pngquant: true,
    optipng: true,
    zopflipng: true,
    advpng: true,
    jpegRecompress: false,
    jpegoptim: true,
    mozjpeg: true,
    gifsicle: true,
    svgo: true
  }
})
```

On your terminal execute: `gulp --tasks`

<img src="/tests/samples/input/gulp-tasks.png"/>

## License

MIT © [Fernando Moreira](/LICENSE)
