// import { expect } from 'chai'
// import { readFile } from '../helpers/utils'
const { exec } = require('child_process')

describe('eslint task', () => {
  describe('gulp eslint', function () {
    it('the `gulp eslint` command should', done => {
      exec('gulp eslint', { cwd: __dirname }, () => {
        // const expected = readFile('expected/expected.png')
        // expect(expected).to.equal(readFile('output/main.png'))
        done()
      })
    })
  })
})
