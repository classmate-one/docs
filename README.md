## 博客学习资源

### 介绍
[公网地址](http://classmate-one.cn)

### 皮卡丘生成器
[点我跳转](./html/woshishei.html)

### 放大图片
[示例](./html/image.html)

### PC端与移动端的样式差别 
`cursor: point;`
元素在移动端点击时会产生半透明蓝色背景

### 浏览器跨域知识自述
跨域知识科普：跨域是浏览器与服务器之间设置的屏障，相当于代码层面的防火墙。控制跨域的主动权在服务器，可以是*也可以是请求地址

### WS 
[点击跳转](./WS.md)

### HTTP各个状态码对应说明
[点击跳转](./HTTP.md)

### 设计一个算法找到乱序数组中相加等于指定值的所有数对
```js
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
```

### 倒计时
```js
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
```

### 在一个最大长度200000的数组中，分别求出长度从1到n的子序列中最大值的最小值
```js
function arrayPeak (arr, n) {
  let arr1 = arr.splice(0, n).sort((a, b) => a - b)
  return [arr1[0], arr1[arr1.length - 1]]
}
```

### 将一个集合打乱
```js
  function upset(arr) {
    return arr.sort(() => Math.random() > 0.5 ? 1 : -1);
  }
```

### 非递归遍历树
```js
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
```

### 算法题：老师分饼干，每个孩子只能得到一块饼干，但每个孩子想要的饼干大小不尽相同。目标是尽量让更多的孩子满意。如孩子的要求是 1, 3, 5, 4, 2，饼干是1, 1，最多能让1个孩子满足。如孩子的要求是 10, 9, 8, 7, 6，饼干是7, 6, 5，最多能让2个孩子满足。
```js
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
```

### 判断一个数由那几个数相乘而得
```js
  function getMultipication (figure) {
    let arr = []
    for (let i = 1; i < Math.sqrt(figure); i++) {
      if (figure % i === 0) {
        arr.push([i, figure / i])
      }
    }
    return arr
  }
```

### 低版本重启nginx
`./nginx -s reload`

### 视频方法一览
[点击跳转](./VIDEO.md)

### npm设置淘宝镜像
`npm config set registry https://registry.npm.taobao.org`

### npm取消淘宝镜像
`npm config set registry https://registry.npmjs.org`

### 生成唯一文件
```js 
var input = document.querySelector('input');
input.addEventListener('change', function () {
  var file = this.files[0];
  var reader = new FileReader();
  reader.readAsArrayBuffer(file); reader.addEventListener('load', function (e) {
    var buffer = e.target.result;
    var md = md5(buffer);
    console.log(md);
  });
});
```

### 特殊字节
汉字、中文符合：3字节
tab、空格、字母、数字、英文符号：1字节
回车、（中文->' · '） ：2字节
