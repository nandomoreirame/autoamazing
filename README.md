<img src="/deadpool.jpg" width="280px" align="left" style="margin-right:30px"/>

<br/>
<br/>

# autoamazing

:tropical_drink: Automatizate amazing tasks for front-end with Gulpjs

---

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
