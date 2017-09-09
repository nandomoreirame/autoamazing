import { expect } from 'chai'
import { readFile } from '../helpers/utils'
const { exec } = require('child_process')

describe('images task', () => {
  afterEach(done => {
    exec('gulp clean', { cwd: __dirname }, () => done())
  })

  describe('gulp images', function () {
    it('the `gulp images` command should be generate a compressed image', done => {
      exec('gulp images', { cwd: __dirname }, () => {
        const expected = readFile('expected/expected.png')
        expect(expected).to.equal(readFile('output/gulp-tasks.png'))
        done()
      })
    })
  })
})
