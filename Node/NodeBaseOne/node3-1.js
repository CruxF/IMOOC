var http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, {
    'Content-Type': 'text/plain;'
  });
  res.end("hello world，进击吧！Node！");
}).listen(1337, '127.0.0.1')
console.log("服务启动地址 http://127.0.0.1:1337")