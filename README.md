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

task.stylesheets(gulp, {
  taskname: 'sass',
  src: 'sass/main.sass',
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
```

## License

MIT © [Fernando Moreira](/LICENSE)
