// import { expect } from 'chai'
// import { readFile } from '../helpers/utils'
const { exec } = require('child_process')

describe.only('copy task', () => {
  describe('gulp copy', function () {
    it('the `gulp copy` command should', done => {
      exec('gulp copy', { cwd: __dirname }, () => {
        // const expected = readFile('expected/expected.png')
        // expect(expected).to.equal(readFile('output/main.png'))
        done()
      })
    })
  })
})
