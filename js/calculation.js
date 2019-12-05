// 设计一个算法找到乱序数组中相加等于指定值的所有数对
function sumPair (arr, sum) {
	let [arr1, arr2] = [[], [...arr]]
	arr2.forEach((val, i) => {
		arr2.splice(i, 1, null)
		if (typeof val === 'number' && arr2.includes(sum - val)) {
			arr2.splice(arr.indexOf(sum - val), 1, null)
			arr1.push([val, sum - val])
		}
  })
	return arr1
}

function timeOut (date) {
  let [diff, dat] = []
  diff = new Date(date) - new Date()
  if (isNaN(diff)) {
    return 0
  }
  dat = {
    days: parseInt(diff / (24 * 60 * 60)),
    hours: parseInt(diff % (24 * 60 * 60) / 60 / 60),
    min: parseInt(diff % (60 * 60) / 60),
    s: parseInt(diff % 60)
  }
  return dat
}

function haowang (f) {
  let [i1, arr] = [0, []]
  for (let i = 0; i < f; i++) {
    [i1, i] = [i, i1 + i]
    arr.push(i1)
  }
  return arr
}

function arrayPeak (arr, n) {
  let arr1 = arr.splice(0, n).sort((a, b) => a - b)
  return [arr1[0], arr1[arr1.length - 1]]
}
