import { expect } from 'chai'
import { readFile } from '../helpers/utils'
const { exec } = require('child_process')

describe('copy task', () => {
  afterEach(done => {
    exec('gulp clean', { cwd: __dirname }, () => done())
  })

  describe('gulp copy', function () {
    it('the `gulp copy` command should', done => {
      exec('gulp copy', { cwd: __dirname }, () => {
        const expected = readFile('expected/expected.svg')
        expect(expected).to.equal(readFile('output/quote.svg'))
        done()
      })
    })
  })
})
