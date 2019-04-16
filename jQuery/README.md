# 前言

为了优化大家的阅读体验，强烈建议安装Chrome浏览器的插件——GayHub。[下载安装地址](https://github.com/jawil/GayHub)<br>


# 1、TabCar => JS插件开发之——Tab选项卡

这类课程对现在的我来说有些吃力，因此自己就不做什么分析了，免得误人子弟，大佬们轻点吐槽哈，我怕疼。<br>

对于这门课程，我是一步步跟着老师的脚步走的，而源码也是和课程一一对应，方便日后的分步理解，也方便大家一点一点的解析源码中蕴含的知识。在课程的评论区有很多大佬发现了代码中存在的问题，并且提出了解决的办法，感谢那些无私的大佬。然而有些建议和分享是否有用，还是需要大家擦亮眼睛、亲自动手实践敲敲代码才能分辨出来。在最后一份源码中，有个很奇怪的问题，大家可以仔细看看，如果有大佬知道解决的方法，希望告知哈，下面是源码效果的展示：<br>
1、[2-2CSS样式初始化](https://cruxf.github.io/IMOOC/jQuery/TabCar/index2-2.html)<br>
2、[4-1参数配置及扩展](https://cruxf.github.io/IMOOC/jQuery/TabCar/index4-1.html)<br>
3、[4-2事件绑定](https://cruxf.github.io/IMOOC/jQuery/TabCar/index4-2.html)<br>
4、[4-3切换功能实现](https://cruxf.github.io/IMOOC/jQuery/TabCar/index4-3.html)<br>
5、[5-1自动切换](https://cruxf.github.io/IMOOC/jQuery/TabCar/index5-1.html)<br>
6、[5-2默认显示第几个tab](https://cruxf.github.io/IMOOC/jQuery/TabCar/index5-2.html)<br>
7、[6-1初始化函数和注册JQ方法](https://cruxf.github.io/IMOOC/jQuery/TabCar/index6-1.html)<br><br>

# 2、FullScreen => 全屏切换效果

对这种插件开发的教程真是又爱又恨，爱是因为确实是能非常好的锻炼自己的编程思维，恨是因为目前来看真的真的很吃力，而且该课程的老师明显没有备好课，胡乱按照自己的思路讲了一串，最后居然出现了一堆bug，在调试的时候真的要崩溃。<br>

不管怎么说，还是一步步跟随老师的思路将代码敲了出来，并且还做了相关的[笔记](https://github.com/CruxF/IMOOC/blob/master/jQuery/FullScreen/%E8%AF%B4%E6%98%8E.txt)，同时又进一步增进了对插件开发的认知、对面向对象编程又增加一丝印象，相信不久的将来能独立开发出一款插件。在[源码](https://github.com/CruxF/IMOOC/tree/master/jQuery/FullScreen)里面，都是和之前一样，基本完全将每一章节的代码区分开来，而不是全部搅和在一起，在[最后的一份JS代码](https://github.com/CruxF/IMOOC/blob/master/jQuery/FullScreen/js/index2-5.js)中，使用ES6字符串模板，下面是最终的展示效果（注意：首次图片加载速度巨慢，请耐心等待）：<br>
[案例展示效果](https://cruxf.github.io/IMOOC/jQuery/FullScreen/index2-5.html)<br><br>

# 3、Transform => jQuery插件transform旋转焦点图

该课程的插件找不到:joy:，自已又开发不出类似的插件~-~。于是采用了这位大佬开发的[插件](https://github.com/baijunjie/jquery.animate)，源码基本和课程的一模一样，除了将transform()代替为css()，每一节课程的代码都是独立，因此可以非常好的看着源码跟着课程走，下面是最终代码的效果展示：
[点我查看呀](https://cruxf.github.io/IMOOC/jQuery/Transform/index3-7.html)<br><br>

# 4、AjaxExplain => [ajax跨域完全讲解](https://www.imooc.com/learn/947)
这篇课程有点走错片场了，里面有很多知识涉及到后台java的，没想到却在jQuery课程中看到，不管这么多了，总之跨域无论是前端还是后台都是必须要懂的一个概念，所以好好总结一下对自己没有坏处。<br>

#### 面试常问题：什么是ajax跨域问题？
ajax出现请求跨域错误问题,主要原因就是因为浏览器的“同源策略”,这是浏览器的一种保护机制，当协议、域名、端口不同的时候，那么就会触发跨域问题。还有就是因为是xhr（XMLHttpRequest）请求<br>

#### jasmine前端测试框架
网上有很多讲解，可以前来这里[看看](https://www.jianshu.com/p/7ee7469de528)<br>

#### 解决跨域的方法
- 由于浏览器的同源策略会导致跨域问题，因此我们可以设置浏览器禁止检查来避免跨域问题。具体操作为：以管理员的身份打开控制台命令行，然后进入浏览器的安装位置（例如：C:\Users\fengxiong\AppData\Local\Google\Chrome\Application），接着执行命令：chrome --disable-web-security --user-data-dir=g:\temp3。执行该命令后会打开一个新的浏览器，那么接下来的请求就不会发生跨域问题。

- 由于xhr请求会导致跨域问题，因此当我们使用jsonp请求的时候，那么就不会存在跨域。jsonp的原理就是后台那边返回一个动态的script标签，在标签中包含前端所需要的数据，通过一个回调函数把数据交给前端。等于把 json 写入了 JavaScript 脚本中  因为请求 脚本js（静态资源） 是没有跨域问题的。

#### JSONP有什么弊端
- 服务器需要改动代码支持
- 只支持GET请求
- 发送的不是XHR请求

#### 尾声
后面的章节与前端关系并不是太大，就此打住~<br><br>










