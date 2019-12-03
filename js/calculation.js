// 设计一个算法找到乱序数组中相加等于指定值的所有数对
function f (arr, sum) {
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