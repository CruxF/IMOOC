var http = require('http')
var fs = require('fs')
// 需要npm install request
var request = require('request')

http.createServer(function(req, res) {
  // 使用fs模块读取文件
  //fs.readFile('jinbohui.jpg', function(err, data) {
  //  if(err) {
  //    res.end('file not exist!')
  //  } else {
  //    res.writeHeader(200, {
  //      'Content-Type': 'text/html'
  //    })
  //    res.end(data)
  //  }
  //})
  
  // 使用stream读取照片并且显示在浏览器中
  // fs.createReadStream('jinbohui.jpg').pipe(res)
  
  // 使用request读取照片并且显示在浏览器中，体验pipe事件的魔力
  request('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541767499539&di=d0d398ed702fe806f9fd814d93d12a60&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F9vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fa71ea8d3fd1f4134beb3ba15241f95cad0c85ed0.jpg').pipe(res)
}).listen(8090)
console.log('Server runing --- http://localhost:8090')