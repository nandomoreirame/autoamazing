((win, doc) => {
  const var1 = 'Hello'
  let var2 = 'World'

  console.log(win)
  console.log(doc)

  {
    console.log(`${var1} ${var2}`)
  }

})(window, document)
