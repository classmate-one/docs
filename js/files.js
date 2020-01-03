const express = require('express')
const fs = require('fs')

const app = express()

app.use('/', express.static('./'))

app.get('/*', (req, res) => {
  let url = '/home/files/' + req.url
  fs.stat(url, (err, data) => {
    if (err) {
      console.log(err)
      return res.send(JSON.stringify({ code: 400, msg: '连接失败' }))
    }
    if (data.isDirectory()) {
      fs.readdir(url, (error, result) => {
        if (error) {
          console.log(error)
          return res.send(JSON.stringify({ code: 400, msg: '文件夹已损坏' }))
        }
        let str = '<html>'
        result.forEach(v => {
          str += `<div style="text-align: center;"><a href="./${v}">${v}</a></div>`
        })
        str += '</html>'
        res.send(str)
      })
    }
  })
})

app.listen(9365, () => {
  console.log('项目API运行与http://127.0.0.1:9365')
})
