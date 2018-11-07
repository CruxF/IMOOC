# 前言

为了优化大家的阅读体验，强烈建议安装Chrome浏览器的插件——GayHub。[下载安装地址](https://github.com/jawil/GayHub)<br>


# [1、进击Node.js基础（一）](https://www.imooc.com/learn/348)
刷了两遍这门课程，印象最深刻的就是“大佬真会开车！”。好了，说正经，由于这门课程的三年前的了（后悔自己现在才认真学，嘤嘤嘤~），不过亮点还是有的，下面请看我十分繁琐但具体的学习笔记，不过需要提前知道的是HTTP源码的解读我并没有做，源于不懂。<br>

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






