# 前言

为了优化大家的阅读体验，强烈建议安装Chrome浏览器的插件——GayHub。[下载安装地址](https://github.com/jawil/GayHub)<br>


# 1、NodeBaseOne => [进击Node.js基础（一）](https://www.imooc.com/learn/348)
刷了两遍这门课程，印象最深刻的就是“大佬真会开车！”。好了，说正经，虽然这门课程的三年前的了（后悔自己现在才认真学，嘤嘤嘤~），不过亮点还是有的，下面请看我十分繁琐但具体的学习笔记，不过需要提前知道的是HTTP源码的解读我并没有做，源于不懂。<br>

### Node概念
Node只是一个基于Chrome浏览器V8引擎的平台，并不是一门语言，它选择JavaScript作为运行在该平台上的编程语言。<br>

在维基百科上是这么解释的：Node.js是一个能够在服务器端运行JavaScript的开放源代码、跨平台JavaScript 运行环境。Node.js由Node.js基金会持有和维护，并与Linux基金会有合作关系。Node.js采用Google开发的V8运行代码，使用事件驱动、非阻塞和 异步输入输出模型等技术来提高性能，可优化应用程序的传输量和规模。这些技术通常用于数据密集的实时应用程序。<br>

Node.js大部分基本模块都用JavaScript语言编写。在Node.js出现之前，JavaScript通常作为客户端程序设计语言使用，以JavaScript写出的程序常在用户的浏览器上运行。Node.js的出现使JavaScript也能用于服务器端编程。Node.js含有一系列内置模块，使得程序可以脱离Apache HTTP Server或IIS，作为独立服务器运行。关于更多关于Node的知识请[点击这里](https://zh.wikipedia.org/wiki/Node.js)<br><br>

### 模块与包管理工具
在JavaScript发展初期就是为了实现简单的页面交互逻辑，寥寥数语即可；如今CPU、浏览器性能得到了极大的提升，很多页面逻辑迁移到了客户端（表单验证等），随着web2.0时代的到来，Ajax技术得到广泛应用，jQuery等前端库层出不穷，前端代码日益膨胀，这时候JavaScript作为嵌入式的脚本语言的定位动摇了，JavaScript却没有为组织代码提供任何明显帮助，甚至没有类的概念，更不用说模块（module）了，JavaScript极其简单的代码组织规范不足以驾驭如此庞大规模的代码。<br>

既然JavaScript不能handle如此大规模的代码，我们可以借鉴一下其它语言是怎么处理大规模程序设计的，在Java中有一个重要带概念——package，逻辑上相关的代码组织到同一个包内，包内是一个相对独立的王国，不用担心命名冲突什么的，那么外部如果使用呢？直接import对应的package即可。<br>

遗憾的是JavaScript在设计时定位原因，没有提供类似的功能，开发者需要模拟出类似的功能，来隔离、组织复杂的JavaScript代码，我们称为模块化。一个模块就是实现特定功能的文件，有了模块，我们就可以更方便地使用别人的代码，想要什么功能，就加载什么模块。而包管理工具就是用来管理JavaScript各个模块，它们之间的关系可以看看下面一张图
![](https://github.com/CruxF/IMOOC/blob/master/Node/NodeBaseOne/imgs/%E6%A8%A1%E5%9D%97%E4%B8%8E%E5%8C%85%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7.jpg?raw=true)<br><br>

### Commonjs规范与Node的关系
CommonJS规范是由NodeJS发扬光大，这标志着JavaScript模块化编程正式登上舞台。根据CommonJS规范，一个单独的文件就是一个模块。每一个模块都是一个单独的作用域，也就是说，在该模块内部定义的变量，无法被其他模块读取，除非定义为global对象的属性。<br>

模块只有一个出口，module.exports对象，我们需要把模块希望输出的内容放入该对象。加载模块使用require方法，该方法读取一个文件并执行，返回文件内部的module.exports对象。课程对commonjs的解读以及和Node之间的关系浓缩在了下面两张图里<br>
图一
![](https://github.com/CruxF/IMOOC/blob/master/Node/NodeBaseOne/imgs/commonjs%E8%A7%84%E8%8C%83.jpg?raw=true)<br>
图二
![](https://github.com/CruxF/IMOOC/blob/master/Node/NodeBaseOne/imgs/Node%E4%B8%8ECommonjs%E8%A7%84%E8%8C%83%E7%9A%84%E5%85%B3%E7%B3%BB.jpg?raw=true)<br><br>

### 模块的分类
不多说了，请看下图
![](https://github.com/CruxF/IMOOC/blob/master/Node/NodeBaseOne/imgs/%E6%A8%A1%E5%9D%97%E7%9A%84%E5%88%86%E7%B1%BB.jpg?raw=true)<br><br>

### 模块的流程
关于模块的执行流程，老师在课程中已经用一张图完全体现出来了，并且还给出了相关的demo，有兴趣的可以[点击这里查看完整的demo源码](https://github.com/CruxF/IMOOC/tree/master/Node/NodeBaseOne/node4-3/school?1541586257122)，包括老师没有敲完的那一段。
![](https://github.com/CruxF/IMOOC/blob/master/Node/NodeBaseOne/imgs/%E6%A8%A1%E5%9D%97%E7%9A%84%E6%B5%81%E7%A8%8B.jpg?raw=true)<br><br>

### exports和module.exports的区别
两者的作用都是将文件模块的方法和属性暴露给require返回的对象进行调用。但是二者存在本质的区别：exports的属性和方法都可以被module.exports替代，反过来则不行。它们之间还有以下的不同点
- module.exports方法还可以单独返回一个数据类型，而exports只能返回一个object对象，因此，当我们需要返回一个数组、字符串、数字等类型的时候，就必须使用module.exports
- 当在exports前面使用了moudle.exports，那么exports的任何方法和属性都会失效，请看下面案例代码
```js
index.js文件模块
module.exports = 'exports的属性和方法将被忽视！'
exports.name = '我无法被调用'
exports.showName = function () {
  console.log('我也无法被调用')
}
console.log('内部module.exports值被调用：' + module.exports)

// 调用index.js文件模块
var Book = require('./index.js')
console.log('调用Book：' + Book)
console.log('调用Book中的name：' + Book.name)
console.log('调用Book中的showName()：' + Book.showName())
```
<br><br>

### [URL和URI的区别](https://blog.csdn.net/simplebam/article/details/72644094)
不粘贴复制了，大家点击标题进去看看我认为比较容易理解的文章。<br><br>

### Node中的[url模块](http://nodejs.cn/api/url.html)以及[url.parse()方法](http://nodejs.cn/api/url.html#url_url_parse_urlstring_parsequerystring_slashesdenotehost)
课程讲到的部分知识点尽在下图中。<br>
![](https://github.com/CruxF/IMOOC/blob/master/Node/NodeBaseOne/imgs/ur.parse%E6%96%B9%E6%B3%95.jpg?raw=true)<br><br>

### Node中[queryString参数处理](http://nodejs.cn/api/querystring.html)小利器
在命令行中进入node环境，然后分别输入以下命令
- querystring.stringify({name:'scott',course:['jade','node'],from:''})
- querystring.stringify({name:'scott',course:['jade','node'],from:''},',')
- querystring.stringify({name:'scott',course:['jade','node'],from:''},',',':')
- querystring.parse('name=scott&course=jade&course=node&from=')
- querystring.parse('name=scott,course=jade,course=node,from=')
- querystring.parse('name=scott,course=jade,course=node,from=',',')
- querystring.parse('name:scott,course:jade,course:node,from:')
- querystring.parse('name:scott,course:jade,course:node,from:',',',':')
- querystring.escape('哈哈')
- querystring.unescape('%E5%93%88%E5%93%88')
![](https://github.com/CruxF/IMOOC/blob/master/Node/NodeBaseOne/imgs/querystring%E5%8F%82%E6%95%B0%E5%A4%84%E7%90%86.jpg?raw=true)<br><br>

### 什么是HTTP？
它是一种超文本传输协议，在网络中发挥的作用简单地来说就是下面的三个
- http客户端发起请求，创建端口
- http服务器在端口监听客户端请求
- http服务器向客户端返回状态和内容

再细致的往下说就是如下的几个(以chrome浏览器搜索请求为例)
- Chrome搜索自身的DNS缓存(可以输入该地址：`chrome://net-internals/#dns`查看DNS缓存)
- 假如浏览器没有找到缓存或者缓存已经失效，那么就会搜索操作系统自身的DNS缓存
- 假如没有找到操作系统自身的DNS缓存，那么就会读取本地的HOST文件
- 假如没有找到HOST文件，那么浏览器就会发起一个DNS的一个系统调用（本地主控DNS服务器：宽带运营商服务器查看本身缓存）
- 运营商服务器发起一个迭代DNS解析的请求（->根域.com服务器->imooc.com域服务器->运营商服务器得到(结果)->操作系统内核并缓存->浏览器）
- 浏览器获得域名对应的 IP 地址后，发起 HTTP 的“三次握手”
- TCP/IP 连接建立起来后，浏览器就可以向服务器发送 HTTP 请求了，例如使用 HTTP 的 GET 方法请求一个根域里的一个域名，协议可以采用 HTTP 1.0 的一个协议。
- 服务器端接收到了这个请求，根据路径参数，竞购后端的一些处理后，把处理的一个结果的数据返回给浏览器，如果是 目标网 的页面就会把完整的 HTML 页面代码返回给浏览器。
- 浏览器拿到了 目标网 的完整的HTML 页面代码，在解析和渲染这个页面的时候，里面的 JS 、CSS、 图片静态资源，他们同样也是一个个 HTTP 请求，都需要上面的主要七个步骤
- 浏览器根据拿到的资源对页面进行渲染，最终把一个完整的页面呈现给用户<br><br>

### HTTP性能测试
- 首先，请[点击这里](https://jingyan.baidu.com/article/29697b912f6539ab20de3cf8.html)
- 然后，根据网上教程进行到httpd -k install这一步
- 最后，执行命令ab -n 100 -c 10 http://www.imooc.com/<br><br>

### HTTP小爬虫
这一章有点不清楚怎么说，总之就是通过查找各个页面元素节点，然后将相应的节点中内容显示出来，具体的请看[源码吧](https://github.com/CruxF/IMOOC/tree/master/Node/NodeBaseOne/node5-10?1541593063262)<br><br>

### HTTP事件模块小插曲
这章挺有意思的，老师风趣幽默的解读了事件的定义、监听和模块方面的知识，简单易懂。关于视频中的知识点[看看源码](https://github.com/CruxF/IMOOC/tree/master/Node/NodeBaseOne/node5-11?1541593229877&1541593397700)就好啦，要细说的话篇幅会十分的长，请自行Google。<br><br>

### 一篇很好的总结(自卖自夸哈哈，点击链接有课程源码)
冥冥中觉得[回调](https://github.com/CruxF/IMOOC/tree/master/Node/NodeBaseOne/node5-6/http?1541592776947)、同步/异步、I/O、[上下文](https://github.com/CruxF/IMOOC/tree/master/Node/NodeBaseOne/node5-7?1541592801294)、阻塞/非阻塞等这些名词异常的熟悉，后来在自己的仓库里一找，果然发现了。因此在这里就不重复做相同的笔记了，请点击这里[查看相关笔记。](https://github.com/CruxF/NodeWeb/issues/1)<br><br>

### 网上比较好的一些文章
[1、js的单线程和异步](http://www.cnblogs.com/woodyblog/p/6061671.html)<br>
[2、怎样理解阻塞非阻塞与同步异步的区别](https://blog.csdn.net/z69183787/article/details/52910484)<br><br>


# 2、NodeBaseTwo => [进击Node.js基础（二）](https://www.imooc.com/learn/637)
接着上一个教学视频，这个进阶Node视频深度还是有的，讲的可以说都是重点知识，需要好好去掌握。<br>

### 章节1-2和章节1-3
ES6里面定义了一个很重要的对象，那就是Promise，它解决了前端很多痛点问题，具体信息可以[点击这里查看](https://github.com/CruxF/Blog/issues/7)，下面我们直接看源码(可以点击源码查看回调函数和Promise之间的差异在哪里)以及效果演示<br>
[我是源码](https://github.com/CruxF/IMOOC/blob/master/Node/NodeBaseTwo/promise1-2)<br>
[我是效果](https://cruxf.github.io/IMOOC/Node/NodeBaseTwo/promise1-2/ballTwo.html)<br><br>

### 章节1-4
从其他人那里拉了一份能跑的源码过来，废了好大劲才明白了大概的执行过程(已经用console标注出来了)，并且做了大量的注释，有兴趣的可以[点击源码查看](https://github.com/CruxF/IMOOC/blob/master/Node/NodeBaseTwo/promise_crawler)。

### 章节2-1
**Buffer概念：** buffer缓冲，在nodejs里处理二进制的数据。为什么要有buffer呢，因为js的字符串是以utf-8的编码存储的，处理二进制的能力是很弱的，而网络层对于不同资源、文件的请求、响应都是用二进制这种方式进行交互的，所以nodejs就有一个接口来创建存放二进制数据的缓存区，并提供一些方法来对缓存区的数据进行进一步的处理。Buffer对象占用的内存空间是不计算在Node.js进程内存空间限制上的，因此，我们也常常会使用Buffer来存储需要占用大量内存的数据。Buffer在nodejs中是可以全局访问的，不需要require来加载。更多关于Buffer的知识请[点击这里](http://nodejs.cn/api/buffer.html#buffer_buffer)<br>

### 章节2-2
Buffer经常用来处理的是TCP/图像/文件/网络方面的事情，我们可以在node环境中使用命令Buffer查看其静态方法。还有一点就是，查看官方文档的时候很容易就能发现数组内的方法其实与Buffer的实例方法几乎是相同的。<br>
- 验证Buffer实例在初始化时长度就被指定了
```js
// 在node命令中分别输入
var buf = new Buffer('hello imooc') 或者 var buf = Buffer.from('hello imooc')(目前版本推荐写法)
buf.length
buf.write('hi imooc')
buf.toString()
buf.length
```

一个小案例：批量操作图片，读取本地的一张图片，然后将其复制出来，并且把base64编码取到
```js
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
```

以上的代码其实是存在问题的，因为在最新版本的Node中由于安全性和可靠性，废弃了new Buffer(array)，使用了Buffer.from(array) 代替。下面我们来看新版的代码
```js
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
  var decodedImage = Buffer.from(base64Image, 'base64')
  // 比较两者是否相同
  console.log(Buffer.compare(origin_buffer, decodedImage))
  // 传递新的Buffer对象，写一个文件
  fs.writeFile('jinbohui_decoded.jpg', decodedImage, function(error) {
    if(error) {
      console.log(error)
    }
  })
})
```

### 章节2-3
Stream：在上一节课程中，老师讲过buffer对象是来保存原始数据的，而Stream(流)对象是用来暂存和移动数据的，一般是和buffer结合起来用，更多相关知识请[点击这里](http://nodejs.cn/api/stream.html)。下面看一个简单的代码栗子
```js
var fs = require('fs')
// 读取本地jinbohui.jpg文件
var source = fs.readFileSync('jinbohui.jpg')
// 以异步的方式复制读取过来的文件
fs.writeFileSync('stream_copy_jinbohui.jpg', source)
```

接下来我们看看stream的事件机制
```js
var fs = require('fs')
// 创建一个可读的流文件
var readStream = fs.createReadStream('stream_copy_logo.js')
var n = 0
// data事件是当数据在传送的时候被触发,其他事件看字面也能明白个大概
readStream.on('data', function(chunk) {
  n++
  console.log('data emits')
  // 判断是否为buffer对象
  console.log(Buffer.isBuffer(chunk))
  // 输出文件的字符串内容
  // console.log(chunk.toString('utf8'))
  // 暂停流
  readStream.pause()
  console.log('data pause')
  // 模拟异步处理
  setTimeout(function() {
    console.log('data pause end')
    // 重启流
    readStream.resume()
  }, 3000)
}).on('readable', function() {
  console.log('data readable')
}).on('end', function() {
  // 查看流在整个过程中触发了多少次data事件(可以创建一些大文件，比如视频文件)
  console.log(n)
  console.log('data ends')
}).on('close', function() {
  console.log('data close')
}).on('error', function() {
  console.log('data error')
})
```

好了，接下来我们重新改写一下开始的那个小栗子，让其变得更完善一些
```js
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
```

### 章节2-4
stream的种类：Readable、Writable、Duplex、Transform，关于这四个种类的更多知识可以在[官方文档](http://nodejs.cn/api/stream.html)中好好阅读一下。下面请看一个小案例：请求一张图片的数据，在浏览器里面显示出来
```js
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
```

下面我们再进一步体验下[pipe事件](http://nodejs.cn/api/stream.html#stream_event_pipe)的魔力
```js
var fs = require('fs')
// 读取文件和复制文件
fs.createReadStream('jinbohui.jpg').pipe(fs.createWriteStream('jinbohui_pipe.jpg'))

```

接着来看看可读流与可写流之间的某些关系
```js
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
```

为了加深对pipe事件的流程以及stream的理解，最后我们来实现一个定制的可读流、可写流和转化流
```js
// 实现定制的可读流 可写流 转换流 ，并且实现他们的内置接口
var stream = require('stream')
// 引入工具类
var util = require('util')

// 定制可读流构造函数
function ReadStream() {
  // 重新绑定this指向
  stream.Readable.call(this)
}

// 让我们声明的ReadStream继承可读流里面的原型stream.Readable
util.inherits(ReadStream, stream.Readable)

// 为可读流添加原型链上面的read方法，相当于重写该方法
ReadStream.prototype._read = function() {
  this.push('I ')
  this.push('LOVE ')
  this.push('YOU\n')
  this.push(null)
}

// 定制可写流构造函数
function WritStream() {
  stream.Writable.call(this)
  // 定义一个缓存
  this._cached = new Buffer('')
}

// 让我们声明的WritStream继承可读流里面的原型stream.Writable
util.inherits(WritStream, stream.Writable)

// 重新write方法，打印内容
WritStream.prototype._write = function(chunk, encode, cb) {
  console.log(chunk.toString())
  cb()
}

// 定制转换流构造函数
function TransformStream() {
  stream.Transform.call(this)
}

// 让我们声明的TransformStream继承转换流里面的原型stream.Transform
util.inherits(TransformStream, stream.Transform)
TransformStream.prototype._transform = function(chunk, encode, cb) {
  this.push(chunk)
  cb()
}
// 增加额外定制内容
TransformStream.prototype._flush = function(cb) {
  this.push('oh yeah!')
  cb()
}

// 生成实例
var rs = new ReadStream()
var ws = new WritStream()
var ts = new TransformStream()
// pipe事件执行流程：可读流==>转换流==>可写流
rs.pipe(ts).pipe(ws)
```

好了，到了这里对课程的初步总结也到此结束了，接下来就要好好通读一下Node官方文档以及开始利用Node+mongodb来搭建一个网站。<br><br>



