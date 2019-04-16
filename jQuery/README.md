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

# 5、[jQuery基础（一）](https://www.imooc.com/code/8067)
$(document).ready 的作用是等页面的文档（document）中的节点都加载完毕后，再执行后续的代码，因为我们在执行代码的时候，可能会依赖页面的某一个元素，我们要确保这个元素真正的的被加载完毕后才能正确的使用。
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>第一个简单的jQuery程序</title>
    <style type="text/css">
      div {
        padding: 8px 0px;
        font-size: 12px;
        text-align: center;
        border: solid 1px #888;
      }
    </style>
  </head>
  <body>
    <div></div>

    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
    <script>
      $(document).ready(function() {
        $("div").html("hello world");
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery对象与DOM对象
- 通过原生DOM模型提供的document.getElementById(“imooc”) 方法获取的DOM元素就是一个DOM对象，比如下面代码
```js
var p = document.getElementById('imooc');
p.innerHTML = '您好！通过慕课网学习jQuery才是最佳的途径';
p.style.color = 'red';
```
- 通过$('#imooc')方法会得到一个$p的jQuery对象，$p是一个类数组对象。这个对象里面包含了DOM对象的信息，然后封装了很多操作方法，调用自己的方法html与css，得到的效果与标准的JavaScript处理结果是一致的，比如下面代码
```js
var $p = $('#imooc');
$p.html('您好！通过慕课网学习jQuery才是最佳的途径').css('color','red');
```

通过以上的比较我们得知jQuery有如下的优点
- 通过jQuery方法包装后的对象，是一个类数组对象。它与DOM对象完全不同，唯一相似的是它们都能操作DOM。
- 通过jQuery处理DOM的操作，可以让开发者更专注业务逻辑的开发，而不需要我们具体知道哪个DOM节点有那些方法，也不需要关心不同浏览器的兼容性问题，我们通过jQuery提供的API进行开发，代码也会更加精短。<br>

#### jQuery对象转化成DOM对象
jQuery库本质上还是JavaScript代码，它只是对JavaScript语言进行包装处理，为的是提供更好更方便快捷的DOM处理与开发中经常使用的功能。我们使用jQuery的同时也能混合JavaScript原生代码一起使用。在很多场景中，我们需要jQuery与DOM能够相互的转换，它们都是可以操作的DOM元素，jQuery是一个类数组对象，而DOM对象就是一个单独的DOM元素。转换的方式主要有以下两种
- 通过类数组下标，比如下面代码用jQuery找到所有的div元素（3个），因为jQuery对象也是一个数组结构，可以通过数组下标索引找到第一个div元素，通过返回的div对象，调用它的style属性修改第一个div元素的颜色。这里需要注意的一点是，数组的索引是从0开始的，也就是第一个元素下标是0
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>test</title>
  </head>
  <body>
    <div>1</div>
    <div>2</div>
    <div>3</div>

    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
    <script>
      $(document).ready(function() {
        var $div = $('div')
        var div = $div[0]
        div.style.color = 'red'
      });
    </script>
  </body>
</html>
```
- 通过jQuery自带的get()方法，jQuery对象自身提供一个.get() 方法允许我们直接访问jQuery对象中相关的DOM节点，get方法中提供一个元素的索引：
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>test</title>
  </head>
  <body>
    <div>1</div>
    <div>2</div>
    <div>3</div>

    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
    <script>
      $(document).ready(function() {
        var $div = $('div')
        var div = $div.get(0)
        div.style.color = 'blue'
      });
    </script>
  </body>
</html>
```
<br>

#### DOM对象转化成jQuery对象
相比较jQuery转化成DOM，开发中更多的情况是把一个dom对象加工成jQuery对象。$(参数)是一个多功能的方法，通过传递不同的参数而产生不同的作用。如果传递给$(DOM)函数的参数是一个DOM对象，jQuery方法会把这个DOM对象给包装成一个新的jQuery对象。通过$(dom)方法将普通的dom对象加工成jQuery对象之后，我们就可以调用jQuery的方法了
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>test</title>
  </head>
  <body>
    <div>1</div>
    <div>2</div>
    <div>3</div>

    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
    <script>
      $(document).ready(function() {
        var d = document.getElementsByTagName('div')
        var $div = $(d)
        var $first = $div.first()
        $first.css('color','yellow')
      });
    </script>
  </body>
</html>
```
<br>

#### 通过id选择器改变元素样式
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>test</title>
  </head>
  <body>
    <div id="box"></div>

    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
    <script>
      $(document).ready(function() {
        $('#box').css({
          height: '300px',
          width: '400px',
          border: '3px solid red'
        })
      });
    </script>
  </body>
</html>
```
<br>

#### 通过类名选择器改变元素
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>test</title>
  </head>
  <body>
    <div class="box"></div>

    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
    <script>
      $(document).ready(function() {
        $('.box').css({
          height: '400px',
          width: '400px',
          border: '3px solid blue'
        })
      });
    </script>
  </body>
</html>
```
<br>

#### 通过元素选择器改变元素
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>test</title>
  </head>
  <body>
    <div></div>
    <div></div>
    <div></div>

    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
    <script>
      $(document).ready(function() {
        $('div').css({
          height: '100px',
          width: '400px',
          border: '3px solid blue',
          marginTop: '30px',
          marginLeft: '100px'
        })
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery选择器之层级选择器
- 子选择器($('parent > child'))：选择所有指定parent元素中指定的child的直接子元素。
- 后代选择器($('ancestor descendant'))：选择给定的祖先元素的所有后代元素，一个元素的后代可能是该元素的一个孩子，孙子，曾孙等。
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>test</title>
  </head>
  <body>
    <div class="left">
      <div class="aaron">
        <p>div下的第一个p元素</p>
      </div>
      <div class="aaron">
        <p>div下的第一个p元素</p>
      </div>
    </div>
    <div class="right">
      <div class="imooc">
        <article>
          <p>div下的article下的p元素</p>
        </article>
      </div>
      <div class="imooc">
        <article>
          <p>div下的article下的p元素</p>
        </article>
      </div>
    </div>

    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
    <script>
      // 子选择器
      $('div > p').css('color', 'red')
      // 后代选择器
      $('div p').css('border', '1px solid red')
    </script>
  </body>
</html>
```
- 相邻兄弟选择器($('prev + next'))：选择所有紧接在prev元素后的next元素。
- 一般兄弟选择器($('prev ~ sibling'))：匹配prev元素之后的所有兄弟元素，具有相同的父元素，并匹配过滤sibling选择器。
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>test</title>
  </head>
  <body>
    <div class="bottom">
      <div>兄弟节点div, +~选择器不能向前选择</div>
      <span class="prev">选择器span元素</span>
      <div>span后第一个兄弟节点div</div>
      <span>兄弟节点span,不可选</span>
      <div>
        兄弟节点div
        <div class="small">子元素div</div>
      </div>
      <span>兄弟节点span,不可选</span>
      <div>兄弟节点div</div>
    </div>

    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
    <script>
      // 相邻兄弟选择器
      // 选取prev后面的第一个的div兄弟节点
      $(".prev+div").css("color", "red");
      // 一般兄弟选择器
      // 选取prev后面的所有的div兄弟节点
      $(".prev~div").css("border", "3px groove blue");
    </script>
  </body>
</html>
```
<br>

#### jQuery基本筛选选择器
- $('element:first')：匹配第一个元素
- $('element:last')：匹配最后一个元素
- $('element:not(selector)')：一个用来过滤的选择器，选择所有元素去除不匹配的选择器元素
- $('element:eq(index)')：在匹配的集合中选择索引值为index的元素
- $('element:gt(index)')：选择匹配集合中所有大于给定index的元素
- $('element:even')：选择索引值为偶数的元素，从0开始计数
- $('element:odd')：选择索引值为奇数的元素，从0开始计数
- $('element:lt(index)')：选择匹配集合中所有索引值小于给定index参数的元素
- $('element:header')：选择所有标题元素，像h1，h2，h3等
- $('element:lang(language)')：选择指定语言的所有元素
- $('element:root')：选择该文档的根元素
- $('element:animated')：选择所有正在执行动画效果的元素<br>

#### jQuery内容筛选选择器
- $('element:contains(text)')：选择所有包含指定文本的元素
- $('element:parent')：选择所有含有子元素或者文本的元素
- $('element:empty')：选择所有没有子元素的元素(包含文本节点)
- $('element:has(selector)')：选择元素中至少包含指定选择器的元素<br>

#### jQuery可见性筛选选择器
- $('element:visible')：选择所有显示的元素
- $('element:hidden')：选择所有隐藏的元素










