import { expect } from 'chai'
import { readFile } from '../helpers/utils'
const { exec } = require('child_process')

describe('scripts task', () => {
  afterEach(done => {
    exec('gulp clean', { cwd: __dirname }, () => done())
  })

  describe('gulp js', function () {
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

  describe('gulp js:babel', function () {
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

  describe('gulp js:webpack', function () {
    it('the `gulp js:webpack` command should be generate a non minified file', done => {
      exec('gulp js:webpack', { cwd: __dirname }, () => {
        const expected = readFile('expected/expected-webpack.js')
        expect(expected).to.equal(readFile('output/bundler-main.js'))

        done()
      })
    })

    it('the `gulp js:webpack --env production` command should be generate a minified file', done => {
      exec('gulp js:webpack --env production', { cwd: __dirname }, () => {
        const expected = readFile('expected/expected-webpack.min.js')
        expect(expected).to.equal(readFile('output/bundler-main.js'))

        done()
      })
    })
  })
})
