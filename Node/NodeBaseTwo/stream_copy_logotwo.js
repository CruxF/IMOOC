var fs = require('fs')
// 可读流,读取一个文件
var readStream = fs.createReadStream('jinbohui.jpg')
// 可写流,其实就是复制出一个文件
var writeStream = fs.createWriteStream('jinbohui_stream.jpg')
// 监听data事件
readStream.on('data', function(chunk) {
  // 如果读取文件的速度大于复制文件的速度
  if(writeStream.write(chunk) === false) {
    console.log('still cached')
    // 暂停流
    readStream.pause()
  }
})
readStream.on('end', function() {
  writeStream.end()
})
// 当读取的数据完全复制完后，事件执行，继续复制新读取的数据
writeStream.on('drain', function() {
  console.log('data drains')
  // 启动流
  readStream.resume()
})