const fs = require('fs')
const rootDir = './'
let assetsDir = fs.readdirSync(rootDir) // 读取目录的内容
assetsDir = assetsDir.filter((item) => {
  return item != 'index.js'
})
console.log('已读取目录', assetsDir)
