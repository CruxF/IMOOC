var fs = require('fs')
// 创建一个可读的流文件
var readStream = fs.createReadStream('stream_copy_logo.js')
var n = 0
// data事件是当数据在传送的时候被触发,其他事件看字面也能明白个大概
readStream.on('data', function(chunk) {
  n++
  console.log('data emits')
  // 判断是否为buffer对象
  console.log(Buffer.isBuffer(chunk))
  // 输出文件的字符串内容
  // console.log(chunk.toString('utf8'))
  // 暂停流
  readStream.pause()
  console.log('data pause')
  // 模拟异步处理
  setTimeout(function() {
    console.log('data pause end')
    // 重启流
    readStream.resume()
  }, 3000)
}).on('readable', function() {
  console.log('data readable')
}).on('end', function() {
  // 查看流在整个过程中触发了多少次data事件(可以创建一些大文件，比如视频文件)
  console.log(n)
  console.log('data ends')
}).on('close', function() {
  console.log('data close')
}).on('error', function() {
  console.log('data error')
})