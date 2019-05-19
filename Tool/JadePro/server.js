var http = require('http')
var jade = require('jade')
http.createServer(function(req, res) {
  res.writeHead(200, {
    // 'Content-Type': 'text/plain'
    'Content-Type': 'text/html'
  })
  // 1、compile()
  // var fn = jade.compile('div #{course}',{})
  // var html = fn({course:'jade'})
  // res.end(html)
  
  // 2、jade.render()
  // var html = jade.render('div #{course}',{course:'jade render'})
  // res.end(html)
  
  // 3、jade.renderFile()
  var html = jade.renderFile('index.jade', { course: 'jade renderFile', pretty: true })
  res.end(html)
}).listen(1337, '127.0.0.1')
console.log('HTTP server runing  http://127.0.0.1:1337')