var Readable = require('stream').Readable
var Writable = require('stream').Writable

var readStream = new Readable()
var writStream = new Writable()

readStream.push('I ')
readStream.push('Love ')
readStream.push('Imooc\n ')
readStream.push(null)

// 重写_write方法
writStream._write = function(chunk, encode, cb) {
  // 打印读取文件的内容
  console.log(chunk.toString())
  cb()
}

// 让数据串起来
readStream.pipe(writStream)