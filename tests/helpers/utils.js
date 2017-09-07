import fs from 'fs'
import path from 'path'

const _readFile = (file) => {
  file = path.resolve(path.join('./tests/samples/', file))
  return fs.readFileSync(file, 'utf8').trim()
}

module.exports = {
  readFile: file => _readFile(file)
}
