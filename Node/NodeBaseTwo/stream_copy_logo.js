var fs = require('fs')
// 读取本地jinbohui.jpg文件
var source = fs.readFileSync('jinbohui.jpg')
// 复制读取过来的文件
fs.writeFileSync('stream_copy_jinbohui.jpg', source)