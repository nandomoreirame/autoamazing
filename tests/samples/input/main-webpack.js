import { chunk, compact } from 'lodash'

class Lo {
  constructor () {
    this.log()
  }

  log () {
    console.log(chunk(['a', 'b', 'c', 'd'], 2))
    console.log(compact([0, 1, false, 2, '', 3]))

    const array = [1]
    const other = concat(array, 2, [3], [[4]])

    console.log(other)
    console.log(array)
  }
}
