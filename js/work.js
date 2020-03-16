function makePack(arr) {
  let arr1 = [...arr]
  return [...new Array(arr1.length)].map(() => arr1.splice(parseInt(Math.random() * arr1.length), 1)[0])
}

function ergodicTree(arr) {
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

function getCracker(arr1, arr2) { // arr1: 小朋友对饼干的需求 arr2: 现有饼干
  let arr
  arr = [...new Array(arr1.length)].map((val, i) => { // 先满足达到100%需求的小朋友
    let index = arr2.indexOf(arr1[i])
    return {
      a1: arr1[i], // 小朋友的需求饼干数
      a2: index != -1 ? arr2.splice(index, 1)[0] : 0, // 实际得到饼干大小
    }
  }).map(val => { // 尽可能满足更多小朋友
    return val.a2 ? val : {
      a1: val.a1,
      a2: getA2(val.a1),
    }
  })
  function getA2(a1) {
    if (arr2.length === 0) { // 现有饼干已分配完
      return 0
    }
    // 获取现有饼干中最接近小朋友需求的饼干大小中随机抽取一块
    let arr3 = arr2.map((v, i) => {
      return {
        val: v,
        i
      }
    }).filter(v => Math.abs(v.val - a1) == arr2.map(val => Math.abs(val - a1)).reduce((a, b) => a > b ? b : a))
    return arr2.splice(arr3[parseInt(Math.random() * arr3.length)].i, 1)[0]
  }
  return arr
}
