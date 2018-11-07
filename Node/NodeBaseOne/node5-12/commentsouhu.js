var https = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
  'topic_title': '法媒称6人因涉嫌图谋袭击总统马克龙被捕',
	'topic_id': 12949693,
	'topic_url': '***',
	'reply_id': 0,
	'content': 'Node学习者到此一游！',
	'media_id': 123753,
	'source_id': 'mp_273721882',
	'channel_id': 8
})

var options = {
  // 与docomment请求文件中General的Request URL相对应
  hostname: 'http://apiv2.sohu.com',
  port: 80,
  // 与docomment请求文件中General的Request URL相对应
  path: '/api/comment/submit',
  // 与docomment请求文件中General的Request Method相对应
  method: 'POST',
  // docomment响应文件中Request Headers所带的内容
  headers: {
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Length': postData.length,
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Cookie': '***',
    'Host': 'apiv2.sohu.com',
    'Origin': 'http://www.sohu.com',
    'Pragma': 'no-cache',
    'Referer': '***',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36'
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