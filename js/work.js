function makePack (arr) {
	let arr1 = [...arr]
	return [...new Array(arr1.length)].map(() => arr1.splice(parseInt(Math.random() * arr1.length), 1)[0])
}

function ergodicTree (arr) {
  let arr1 = [...arr]
  while (arr1.filter(v => v.children && v.children.length > 0).length != 0) {
    arr1.forEach(v => {
      if (v.children && v.children.length > 0) {
        arr1 = arr1.concat(v.children)
        v.children = null
      }
    })
  }
  return arr1
}
