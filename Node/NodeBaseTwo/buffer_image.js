var fs = require('fs')
// 读取本地照片文件
fs.readFile('jinbohui.jpg', function(err, origin_buffer) {
  // 判断origin_buffer是否为Buffer对象
  console.log(Buffer.isBuffer(origin_buffer))
  // 传递原始的origin_buffer，写一个新文件
  fs.writeFile('jinbohui_buffer.jpg', origin_buffer, function(error) {
    if(error) {
      console.log(error)
    }
  })
  // 将照片的base64编码以字符串的格式输出
  var base64Image = origin_buffer.toString('base64')
  // console.log(base64Image)
  // 类似编码与解码，将字符串又转化为base编码格式
  var decodedImage = new Buffer(base64Image, 'base64')
  // 比较两者是否相同
  console.log(Buffer.compare(origin_buffer, decodedImage))
  // 传递新的Buffer对象，写一个文件
  fs.writeFile('jinbohui_decoded.jpg', decodedImage, function(error) {
    if(error) {
      console.log(error)
    }
  })
})