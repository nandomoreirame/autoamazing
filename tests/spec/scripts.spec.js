import { expect } from 'chai'
import { readFile } from '../helpers/utils'
const { exec } = require('child_process')

describe('scripts task', () => {
  describe('gulp js', () => {
    it('the `gulp js` command should be generate a non minified file and sourcemap file', done => {
      exec('gulp js', { cwd: __dirname }, () => {
        const expected = readFile('expected/expected.js')
        expect(expected).to.equal(readFile('output/main.js'))

        const expectedMap = readFile('expected/expected.js.map')
        expect(expectedMap).to.equal(readFile('output/main.js.map'))

        done()
      })
    })

    it('the `gulp js --env production` command should be generate a minified file and sourcemap file', done => {
      exec('gulp js --env production', { cwd: __dirname }, () => {
        const expected = readFile('expected/expected.min.js')
        expect(expected).to.equal(readFile('output/main.min.js'))

        const expectedMap = readFile('expected/expected.min.js.map')
        expect(expectedMap).to.equal(readFile('output/main.min.js.map'))

        done()
      })
    })
  })

  describe('gulp js:babel', () => {
    it('the `gulp js:babel` command should be generate a non minified file and sourcemap file', done => {
      exec('gulp js:babel', { cwd: __dirname }, () => {
        const expected = readFile('expected/expected-babel.js')
        expect(expected).to.equal(readFile('output/main-babel.js'))

        const expectedMap = readFile('expected/expected-babel.js.map')
        expect(expectedMap).to.equal(readFile('output/main-babel.js.map'))

        done()
      })
    })

    it('the `gulp js:babel --env production` command should be generate a minified file and sourcemap file', done => {
      exec('gulp js:babel --env production', { cwd: __dirname }, () => {
        const expected = readFile('expected/expected-babel.min.js')
        expect(expected).to.equal(readFile('output/main-babel.min.js'))

        const expectedMap = readFile('expected/expected-babel.min.js.map')
        expect(expectedMap).to.equal(readFile('output/main-babel.min.js.map'))

        done()
      })
    })
  })
})
