import { expect } from 'chai'
import { readFile } from '../helpers/utils'

describe('stylesheets task', () => {
  beforeEach((done) => {
    const { exec } = require('child_process')
    exec('gulp stylesheets', { cwd: __dirname }, () => { done() })
  })

  it('should command `gulp stylesheets` generate non minified file', () => {
    const expected = readFile('sass/expected.css')
    const actual = readFile('sass/input.css')
    expect(expected).to.equal(actual)
  })

  it('should command `gulp stylesheets` generate minified file', () => {
    const expected = readFile('sass/expected.min.css')
    const actual = readFile('sass/input.min.css')
    expect(expected).to.equal(actual)
  })
})
