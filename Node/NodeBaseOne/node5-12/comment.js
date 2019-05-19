var https = require('https')
var querystring = require('querystring')

var postData = querystring.stringify({
  // 与docomment请求文件中底部的FormData相对应
  'content': '现在的协议采用了https了',
  'cid': 348,
  'mid': 8837,
  'r': 0.8931310037811482
})

var options = {
  // 与docomment请求文件中General的Request URL相对应
  hostname: 'www.imooc.com',
  port: 443,
  // 与docomment请求文件中General的Request URL相对应
  path: '/course/docomment',
  // 与docomment请求文件中General的Request Method相对应
  method: 'POST',
  // docomment响应文件中Request Headers所带的内容
  headers: {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Length': postData.length,
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Cookie': '****',
    'Host': 'www.imooc.com',
    'Origin': 'https://www.imooc.com',
    'Pragma': 'no-cache',
    'Referer': 'https://www.imooc.com/video/8837',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
  }
}

var req = https.request(options, function(res) {
  // 200
  console.log('Status：' + res.statusCode)
  // 很长的字符串
  console.log('headers：' + JSON.stringify(res.headers))
  // 为data事件设定一个回调函数
  res.on('data', function(chunk) {
  	// true
    console.log(Buffer.isBuffer(chunk))
    // object
    console.log(typeof chunk)
  })
  // end事件执行
  res.on('end', function() {
    console.log('评论完毕')
  })
})
req.on('error', function(e) {
  console.log('Error:' + e.message)
})
req.write(postData)
req.end()