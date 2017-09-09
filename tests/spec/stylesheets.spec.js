import { expect } from 'chai'
import { readFile } from '../helpers/utils'
const { exec } = require('child_process')

describe('stylesheets task', () => {
  afterEach(done => {
    exec('gulp clean', { cwd: __dirname }, () => done())
  })

  describe('gulp css', () => {
    it('the `gulp css` command should be generate a non minified file', done => {
      exec('gulp css', { cwd: __dirname }, () => {
        const expected = readFile('expected/expected.css')
        expect(expected).to.equal(readFile('output/main.css'))
        done()
      })
    })

    it('the `gulp css --env production` command should be generate a minified file', done => {
      exec('gulp css --env production', { cwd: __dirname }, () => {
        const expected = readFile('expected/expected.min.css')
        expect(expected).to.equal(readFile('output/main.min.css'))
        done()
      })
    })
  })

  describe('gulp sass', () => {
    it('the `gulp sass` command should be generate a non minified file', done => {
      exec('gulp sass', { cwd: __dirname }, () => {
        const expected = readFile('expected/expected.css')
        expect(expected).to.equal(readFile('output/main.css'))
        done()
      })
    })

    it('the `gulp sass --env production` command should be generate a minified file', done => {
      exec('gulp sass --env production', { cwd: __dirname }, () => {
        const expected = readFile('expected/expected.min.css')
        expect(expected).to.equal(readFile('output/main.min.css'))
        done()
      })
    })
  })
})
