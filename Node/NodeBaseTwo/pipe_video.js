var fs = require('fs')
// 读取文件和复制文件
fs.createReadStream('jinbohui.jpg').pipe(fs.createWriteStream('jinbohui_pipe.jpg'))
