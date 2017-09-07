import { expect } from 'chai'
import { readFile } from '../helpers/utils'
const { exec } = require('child_process')

describe('sass task', () => {
  before(done => {
    exec('gulp sass', { cwd: __dirname })
    exec('gulp sass --env production', { cwd: __dirname }, () => { done() })
  })

  it('the `gulp sass` command should be generate a non minified file', () => {
    const expected = readFile('expected/expected.css')
    expect(expected).to.equal(readFile('output/main.css'))
  })

  it('the `gulp sass --env production` command should be generate a minified file', () => {
    const expected = readFile('expected/expected.min.css')
    expect(expected).to.equal(readFile('output/main.min.css'))
  })
})
