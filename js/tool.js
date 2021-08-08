
// 公共数据
const globalData = {
  imgUrl: '',
  cacheType: 'local', // session浏览器缓存 local本地缓存
}

// 编辑公共数据
export function set (key, val) {
  globalData[key] = val
}

// 获取公共数据
export function get (key) {
  return globalData[key]
}
// 设置缓存
function setCacheType () {
  if (globalData.cacheType === 'session') {
    return window.sessionStorage
  }
  if (globalData.cacheType === 'local') {
    return window.localStorage
  }
}

export function setCache (key, val) {
  return setCacheType().setItem(key, val)
}
export function getCache (key) {
  return setCacheType().getItem(key)
}
export function removeCache (key) {
  return setCacheType().removeItem(key)
}
export function getCharactor (key) {
  let [val, arr] = [0, []]
  val = Number(key)
  arr = ['十', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  if (typeof key != 'number' && isNaN(val)) {
    return key
  }
  if (val === 0) {
  	return '零'
  }
  if (val > 99) {
    return '久久加'
  }
  return (val / 10 > 1 ? ((val / 10 >= 2 ? arr[parseInt(val / 10)] : '') + (val % 10 != 0 ? '十' : '')) : '') + arr[val % 10]
}
// 文字过滤
export function textFilter (val, max, now) {
  val = val || ''
  if (val.length > max) {
    val = val.slice(0, now || (max - 1)) + '...'
  }
  return val
}

// 时间过滤
export function timeFilter (time, d = 'time') {
  if (!time) {
    return ''
  }
  let t = new Date(time)
  return [t.getFullYear(), (t.getMonth() > 8 ? '' : '0') + (t.getMonth() + 1), (t.getDate() > 9 ? '' : '0') + t.getDate()].join('-') + (d == 'date' ? '' : (' ' + [t.getHours() > 9 ? t.getHours() : ('0' + t.getHours()), t.getMinutes() > 9 ? t.getMinutes() : ('0' + t.getMinutes()), t.getSeconds() > 9 ? t.getSeconds() : ('0' + t.getSeconds())].join(':')))
}