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

# 5、[jQuery基础（一）——样式篇](https://www.imooc.com/code/8067)
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
- 通过jQuery处理DOM的操作，可以让开发者更专注业务逻辑的开发，而不需要我们具体知道哪个DOM节点有那些方法，也不需要关心不同浏览器的兼容性问题，我们通过jQuery提供的API进行开发，代码也会更加精短。<br><br>


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
- $('element:animated')：选择所有正在执行动画效果的元素<br><br>


#### jQuery内容筛选选择器
- $('element:contains(text)')：选择所有包含指定文本的元素
- $('element:parent')：选择所有含有子元素或者文本的元素
- $('element:empty')：选择所有没有子元素的元素(包含文本节点)
- $('element:has(selector)')：选择元素中至少包含指定选择器的元素<br><br>


#### jQuery可见性筛选选择器
- $('element:visible')：选择所有显示的元素
- $('element:hidden')：选择所有隐藏的元素<br><br>


剩下的选择器还有（自行网上搜索....）
- jQuery属性筛选选择器
- jQuery子元素筛选选择器
- jQuery表单元素选择器
- jQuery表单对象属性筛选选择器<br><br>


#### jQuery元素属性的操作
我们可以通过attr()方法来获取盒设置元素属性，使用removeAttr()删除元素中指定的属性，具体请看下面的代码
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      input {
        display: block;
        margin: 10px;
        padding: 10px;
        background: #bbffaa;
        border: 1px solid #ccc;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h2>.attr()与.removeAttr()</h2>
    <h3>.attr</h3>
    <form>
      <input type="text" value="设置value" />
      <input type="text" value="获取value" />
      <input type="text" value="回调拼接value" />
      <input type="text" value="删除value" />
    </form>

    <script type="text/javascript">
      //找到第一个input，通过attr设置属性value的值
      $("input:first").attr("value", "这是重新设置的值");
      //找到第二个input，通过attr获取属性value的值
      $("input:eq(1)").attr("value");
      //找到第三个input，通过使用一个函数来设置属性
      //可以根据该元素上的其它属性值返回最终所需的属性值
      //例如，我们可以把新的值与现有的值联系在一起：
      $("input:eq(2)").attr("value", function(i, val) {
        return "通过function设置" + val;
      });
      //找到第四个input，通过使用removeAttr删除属性，同时增加新属性placeholder
      $("input:eq(3)").removeAttr("value").attr("placeholder","请输入关键词");
    </script>
  </body>
</html>
```
<br>


#### jQuery属性与样式之html()和text()
两者的用法基本上都是类似的，先看html()的用法
- html() 不传入值，就是获取集合中第一个匹配元素的HTML内容
- html( htmlString )  设置每一个匹配元素的html内容
- html( function(index, oldhtml) ) 用来返回设置HTML内容的一个函数

text()的用法如下
- text() 得到匹配元素集合中每个元素的合并文本，包括他们的后代
- text( textString ) 用于设置匹配元素内容的文本
- text( function(index, text) ) 用来返回设置文本内容的一个函数
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .left {
        width: auto;
        height: 220px;
      }
      .left div {
        width: 250px;
        height: 170px;
        padding: 5px;
        margin: 5px;
        float: left;
        background: #bbffaa;
        border: 1px solid #ccc;
      }
      a,p {
        display: block;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h3>.html()与.text()</h3>
    <div class="left first-div">
      <div class="div">
        <a>:first-child</a>
        <a>第二个元素</a>
        <a>:last-child</a>
      </div>
      <div class="div">
        <a>:first-child</a>
        <a>第二个元素</a>
        <a>:last-child</a>
      </div>
    </div>

    <h4>显示通过html方法获取到的内容</h4>
    <p></p>

    <h4>显示通过text方法获取到的内容</h4>
    <p></p>

    <script type="text/javascript">
      //显示出html方法获取到的内容
      //.html()是整个html文档结构
      $("p:first").text($(".first-div").html());
      //显示出text方法获取到的内容
      //.text()是文本内容的合集
      $("p:last").text($(".first-div").text());

      //通过.text()方法替换文本内容
      $(".left a:eq(2)").text("替换第三个a元素的内容");
      //通过.html()方法替换html结构
      $(".left div:last").html("整个div的子节点都被替换了");
      //通过.text()的回调，获取原本的内容，修改，在重新赋值
      $(".left a:first").text(function(idnex, text) {
        return "增加新的文本内容" + text;
      });
    </script>
  </body>
</html>
```
html()和text()的区别主要如下
- html与.text的方法操作是一样，只是在具体针对处理对象不同
- html处理的是元素内容，.text处理的是文本内容
- html只能使用在HTML文档中，.text 在XML 和 HTML 文档中都能使用
- 如果处理的对象只有一个子文本节点，那么html处理的结果与text是一样的
- 火狐不支持innerText属性，用了类似的textContent属性，.text()方法综合了2个属性的支持，所以可以兼容所有浏览器<br><br>


#### jQuery属性与样式之val()
jQuery中有一个.val()方法主要是用于处理表单元素的值，比如 input, select 和 textarea。
- val()无参数，获取匹配的元素集合中第一个元素的当前值
- val( value )，设置匹配的元素集合中每个元素的值
- val( function ) ，一个用来返回设置值的函数
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      p {
        color: red;
        margin: 4px;
      }
      b {
        color: blue;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <select id="single">
      <option>慕课网</option>
      <option>博客园</option>
    </select>
    <select id="multiple" multiple="multiple">
      <option selected="selected">imocc</option>
      <option>慕课网</option>
      <option selected="selected">博客园</option>
    </select>
    <input type="text" value="click a button" />
    <p></p>
    <span></span>

    <script type="text/javascript">
      //单个select，返回第一个
      $("p").text($("#single").val());
      //多个select被选择，返回["imocc", "博客园"]
      $("span").text($("#multiple").val());
      //选择一个表单，修改value的值
      $("input[type='text']").val("修改表单的字段");
    </script>
  </body>
</html>
```
<br>


#### jQuery属性与样式之增加样式addClass()
- addClass( className ) : 为每个匹配元素所要增加的一个或多个样式名
- addClass( function(index, currentClass) ) : 这个函数返回一个或更多用空格隔开的要增加的样式名
- 注意：addClass()方法不会替换一个样式类名。它只是简单的添加一个样式类名到元素上
```html
<p class="orgClass">
$("p").addClass("newClass")
```
那么p元素的class实际上是 class="orgClass newClass"样式只会在原本的类上继续增加，通过空格分隔<br><br>


#### jQuery属性与样式之删除样式removeClass()
- removeClass( `[className ]` )：每个匹配元素移除的一个或多个用空格隔开的样式名
- removeClass( function(index, class) ) ： 一个函数，返回一个或多个将要被移除的样式名
- 注意：如果一个样式类名作为一个参数,只有这样式类会被从匹配的元素集合中删除 。 如果没有样式名作为参数，那么所有的样式类将被移除<br><br>


#### jQuery属性与样式之切换样式toggleClass()
在做某些效果的时候，可能会针对同一节点的某一个样式不断的切换，也就是addClass与removeClass的互斥切换，比如隔行换色效果。jQuery提供一个toggleClass方法用于简化这种互斥的逻辑，通过toggleClass方法动态添加删除Class，一次执行相当于addClass，再次执行相当于removeClass
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .change {
        color: aqua;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h1>我是变色龙</h1>
    <button id="btn">点击我呀</button>

    <script type="text/javascript">
      $('#btn').click(()=>{
        $('h1').toggleClass('change')
      })  
    </script>
  </body>
</html>
```
<br>


# 6、[jQuery基础（二)——DOM篇](https://www.imooc.com/learn/530)
就不讲太多的无用话了，下面直接进入正题。<br><br>


#### 原生js创建DOM节点及节点属性
创建的流程比较简单，大体为：创建节点、添加节点的一些属性、加入到文档中
```html
<!DOCTYPE html>
<html>
  <head>
    <meta content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .left, .right {
        width: 300px;
        height: 120px;
      }
      .left div, .right div {
        width: 100px;
        height: 90px;
        padding: 5px;
        margin: 5px;
        float: left;
        border: 1px solid #ccc;
      }
      .left div {
        background: #bbffaa;
      }
      .right div {
        background: yellow;
      }
    </style>
  </head>

  <body>
    <h2>动态创建元素节点</h2>
    <div class="left">
      <div class="aaron">点击body区域会动态创建元素节点</div>
    </div>

    <script type="text/javascript">
      var body = document.querySelector("body");
      document.addEventListener("click", function() {
        //创建2个div元素
        var rightdiv = document.createElement("div");
        var rightaaron = document.createElement("div");

        //给2个div设置不同的属性
        rightdiv.setAttribute("class", "right");
        rightaaron.className = "aaron";
        rightaaron.innerHTML = "动态创建DIV元素节点";

        //2个div合并成包含关系
        rightdiv.appendChild(rightaaron);

        //绘制到页面body
        body.appendChild(rightdiv);
      }, false)
    </script>
  </body>
</html>
```
<br>

#### jQuery节点创建与属性的处理
```html
<!DOCTYPE html>
<html>
  <head>
    <meta content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .left, .right {
        width: 300px;
        height: 120px;
      }
      .left div, .right div {
        width: 100px;
        height: 90px;
        padding: 5px;
        margin: 5px;
        float: left;
        border: 1px solid #ccc;
      }
      .left div {
        background: #bbffaa;
      }
      .right div {
        background: yellow;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h2>动态创建元素节点</h2>
    <button>点击通过jQuery动态创建元素节点</button>

    <script type="text/javascript">
      var $body = $("body");
      $body.on("click", function() {
        //通过jQuery生成div元素节点
        var div = $("<div class='right'><div class='aaron'>动态创建DIV元素节点</div></div>");
        $body.append(div);
      })
    </script>
  </body>
</html>
```
<br>


#### DOM内部插入append()与appendTo()
.append()和.appendTo()两种方法功能相同，主要的不同是内容和目标的位置不同
- append()前面是被插入的对象，后面是要在对象内插入的元素内容
- appendTo()前面是要插入的元素内容，而后面是被插入的对象
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <button id="btn1">append()插入</button>
    <button id="btn2">appendTo()插入</button>
    <p class="testp">我是一个要被插的元素</p>
    <p class="demop">我是另一个要被插的元素</p>

    <script>
      $("#btn1").on("click", () => {
        $(".testp").append("<span>新增的内容</span>");
      });
      $("#btn2").on("click", () => {
        $("<span>新增的内容</span>").appendTo(".demop");
      });
    </script>
  </body>
</html>
```
<br>


#### DOM外部插入after()与before()
- after向元素的后边添加html代码，如果元素后面有元素了，那将后面的元素后移，然后将html代码插入
- before向元素的前边添加html代码，如果元素前面有元素了，那将前面的元素前移，然后将html代码插
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <button id="btn1">after()插入</button>
    <button id="btn2">before()插入</button>
    <hr>
    <span class="testp">我是一个要被插的元素</span>

    <script>
      $("#btn1").on("click", () => {
        $(".testp").after("<span>after插入</span>");
      });
      $("#btn2").on("click", () => {
        $(".testp").before("<span>before插入</span>");
      });
    </script>
  </body>
</html>
```
<br>

#### DOM内部插入prepend()与prependTo()
- .prepend()方法将指定元素插入到匹配元素里面作为它的第一个子元素 (如果要作为最后一个子元素插入用.append())
- .prependTo()和.prepend()实现同样的功能，主要的不同是语法，插入的内容和目标的位置不同
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <button id="btn1">prepend()插入</button>
    <button id="btn2">prependTo()插入</button>
    <p class="testp">我是一个要被插的元素</p>
    <p class="demop">我是另一个要被插的元素</p>

    <script>
      $("#btn1").on("click", () => {
        $(".testp").prepend("<span>新增的内容</span>");
      });
      $("#btn2").on("click", () => {
        $("<span>新增的内容</span>").prependTo(".demop");
      });
    </script>
  </body>
</html>
```
<br>


#### DOM外部插入insertAfter()与insertBefore()
- .before()和.insertBefore()实现同样的功能。主要的区别是语法——内容和目标的位置。 对于before()选择表达式在函数前面，内容作为参数，而.insertBefore()刚好相反，内容在方法前面，它将被放在参数里元素的前面
- .after()和.insertAfter() 实现同样的功能。主要的不同是语法——特别是（插入）内容和目标的位置。 对于after()选择表达式在函数的前面，参数是将要插入的内容。对于 .insertAfter(), 刚好相反，内容在方法前面，它将被放在参数里元素的后面
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <button id="btn1">insertAfter()插入</button>
    <button id="btn2">insertBefore()插入</button>
    <hr>
    <span class="testp">我是一个要被插的元素</span>

    <script>
      $("#btn1").on("click", () => {
        $("<span>insertAfter插入</span>").insertAfter(".testp");
      });
      $("#btn2").on("click", () => {
        $("<span>insertBefore插入</span>").insertBefore(".testp");
      });
    </script>
  </body>
</html>
```
<br>

#### DOM节点删除之empty()的基本用法
empty 顾名思义，清空方法，但是与删除又有点不一样，因为它只移除了 指定元素中的所有子节点。
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <style>
      .test {
        height: 100px;
        width: 100px;
        border: 1px solid red;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <button id="btn">empty()删除</button>
    <hr>
    <div class="test">
      <p>子元素一</p>
      <p>子元素二</p>
    </div>

    <script>
      $("#btn").on("click", () => {
        $(".test").empty();
      });
    </script>
  </body>
</html>
```
<br>

#### DOM节点删除之remove()的有参用法和无参用法
remove与empty一样，都是移除元素的方法，但是remove会将元素自身移除，同时也会移除元素内部的一切，包括绑定的事件及与该元素相关的jQuery数据。
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <style>
      .test {
        height: 100px;
        width: 100px;
        border: 1px solid red;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <button id="btn">remove()删除</button>
    <hr>
    <div class="test">
      <p>子元素一</p>
      <p>子元素二</p>
    </div>

    <script>
      $("#btn").on("click", () => {
        $(".test").remove();
      });
    </script>
  </body>
</html>
```
remove比empty好用的地方就是可以传递一个选择器表达式用来过滤将被移除的匹配元素集合，可以选择性的删除指定的节点。我们可以通过$()选择一组相同的元素，然后通过remove（）传递筛选的规则，从而这样处理
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <style>
      .test {
        height: 100px;
        width: 100px;
        border: 1px solid red;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <button id="btn">remove()删除</button>
    <hr>
    <div class="test">
      <p>子元素一</p>
      <p>子元素二</p>
    </div>

    <script>
      $("#btn").on("click", () => {
        $("p").filter(":contains('二')").remove();
      });
    </script>
  </body>
</html>
```
<br>

#### DOM节点删除之保留数据的删除操作detach()
如果我们希望临时删除页面上的节点，但是又不希望节点上的数据与事件丢失，并且能在下一个时间段让这个删除的节点显示到页面，这时候就可以使用detach方法来处理。detach从字面上就很容易理解，让一个web元素托管，即从当前页面中移除该元素，但保留这个元素的内存模型对象。
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <button id="btn1">点击删除p元素</button>
    <button id="btn2">点击增加p元素</button>
    <hr />
    <p>元素一</p>
    <p>元素二</p>

    <script>
      $("p").on("click", (e) => {
        alert(e.target.innerHTML)
      })
      var p;
      $("#btn1").click(()=>{
        if($("p").length>0){
          p = $("p").detach()
        }        
      })
      $("#btn2").click(()=>{
        $("body").append(p)
      })
    </script>
  </body>
</html>
```
<br>

#### DOM拷贝clone()
clone方法比较简单就是克隆节点，但是需要注意，如果节点有事件或者数据之类的其他处理，我们需要通过clone(ture)传递一个布尔值ture用来指定，这样不仅仅只是克隆单纯的节点结构，还要把附带的事件与数据给一并克隆了
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
    <style>
      .left, .right {
        width: 300px;
        height: 120px;
      }
      .left div, .right div {
        width: 100px;
        height: 90px;
        padding: 5px;
        margin: 5px;
        float: left;
        border: 1px solid #ccc;
        background: #bbffaa;
      }
    </style>
  </head>

  <body>
    <h2>通过clone克隆元素</h2>
    <div class="left">
      <div class="aaron1">点击,clone浅拷贝</div>
      <div class="aaron2">点击,clone深拷贝,可以继续触发创建</div>
    </div>
    <script>
      //只克隆节点
      //不克隆事件
      $(".aaron1").on("click", function() {
        $(".left").append($(this).clone().css("color", "red"))
      })
      //克隆节点
      //克隆事件
      $(".aaron2").on("click", function() {
        $(".left").append($(this).clone(true).css("color", "blue"))
      })
    </script>
  </body>
</html>
```
<br>

#### DOM替换replaceWith()和replaceAll()
- .replaceWith( newContent )：用提供的内容替换集合中所有匹配的元素并且返回被删除元素的集合
- .replaceAll( target ) ：用集合的匹配元素替换每个目标元素，.replaceAll()和.replaceWith()功能类似，但是目标和源相反
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <div>
      <p>子元素一</p>
      <p>子元素二</p>
      <p>子元素三</p>
    </div>
    <button id="btn1">replaceWith()替换</button>
    <button id="btn2">replaceAll()替换</button>
    <script>
      $("#btn1").on("click",()=>{
        $("div > p:eq(1)").replaceWith("<p>被替换的子元素二</p>")
      })
      $("#btn2").click(()=>{
        $("<p>被替换的子元素三</p>").replaceAll("div > p:eq(2)")
      })
    </script>
  </body>
</html>
```
<br>

#### DOM包裹wrap()方法
如果要将元素用其他元素包裹起来，也就是给它增加一个父元素，针对这样的处理，JQuery提供了一个wrap方法
- .wrap( wrappingElement )：在集合中匹配的每个元素周围包裹一个HTML结构
- .wrap( function ) ：一个回调函数，返回用于包裹匹配元素的 HTML 内容或 jQuery 对象
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <p>p元素一</p>
    <p>p元素二</p>
    <span>span元素一</span>
    <span>span元素二</span>
    <hr />
    <button id="btn1">通过wrap方法给p元素增加父容器</button>
    <button id="btn2">通过wrap回调方法给span元素增加父容器</button>
    <script>
      $("#btn1").click(() => {
        $("p").wrap("<div></div>");
      });
      $("#btn2").on("click", () => {
        $("span").wrap(() => {
          return `<div class="test"></div>`;
        });
      });
    </script>
  </body>
</html>
```
<br>

#### DOM包裹unwrap()方法
我们可以通过wrap方法给选中元素增加一个包裹的父元素。相反，如果删除选中元素的父元素要如何处理 ?jQuery提供了一个unwrap()方法 ，作用与wrap方法是相反的。将匹配元素集合的父级元素删除，保留自身（和兄弟元素，如果存在）在原来的位置。
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <div><p>p元素一</p></div>
    <div><p>p元素二</p></div>
    <div><span>span元素一</span></div>
    <div><span>span元素二</span></div>
    <hr />
    <button id="btn1">通过unwrap方法给p元素增加父容器</button>
    <button id="btn2">通过unwrap回调方法给span元素增加父容器</button>
    <script>
      $("#btn1").click(() => {
        $("p").unwrap("<div></div>");
      });
      $("#btn2").on("click", () => {
        $("span").unwrap(() => {
          return `<div></div>`;
        });
      });
    </script>
  </body>
</html>
```
<br>

#### DOM包裹wrapAll()方法
wrap是针对单个dom元素处理，如果要将集合中的元素用其他元素包裹起来，也就是给他们增加一个父元素，针对这样的处理，JQuery提供了一个wrapAll方法
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <p>p元素一</p>
    <p>p元素二</p>
    <span>span元素一</span>
    <span>span元素二</span>
    <hr />
    <button id="btn1">通过wrapAll方法给p元素增加父容器</button>
    <button id="btn2">通过wrapAll回调方法给span元素增加父容器</button>
    <script>
      // 最后的结构，2个P元素都增加了一个父div的结构
      $("#btn1").click(() => {
        $("p").wrapAll("<div></div>");
      });
      // 通过回调的方式可以单独处理每一个元素
      $("#btn2").on("click", () => {
        $("span").wrapAll(() => {
          return `<div class="test"></div>`;
        });
      });
    </script>
  </body>
</html>
```
<br>

#### DOM包裹wrapInner()方法
如果要将合集中的元素内部所有的子元素用其他元素包裹起来，并当作指定元素的子元素，针对这样的处理，JQuery提供了一个wrapInner方法
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <p>p元素一</p>
    <p>p元素二</p>
    <span>span元素一</span>
    <span>span元素二</span>
    <hr />
    <button id="btn1">通过wrap方法给p元素增加父容器</button>
    <button id="btn2">通过wrap回调方法给p元素增加父容器</button>
    <script>
      // p元素中内容也被包裹在了span标签内
      $("#btn1").click(() => {
        $("p").wrapInner("<span>被添加的子元素</span>");
      });
      // span元素中内容也被包裹在了i标签内
      $("#btn2").on("click", () => {
        $("span").wrapInner(() => {
          return `<i class="test">被添加的子元素</i>`;
        });
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery遍历之children()方法
jQuery是一个合集对象，如果想快速查找合集里面的第一级子元素，此时可以用children()方法。这里需要注意：.children(selector) 方法是返回匹配元素集合中每个元素的所有子元素（仅儿子辈，这里可以理解为就是父亲-儿子的关系）
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <div>
      <span>子元素一</span>
      <span>子元素二</span>
    </div>
    <p>
      <span>子元素一</span>
      <span>子元素二</span>
    </p>
    <hr />
    <button id="btn1">children()无参数</button>
    <button id="btn2">children()有参数</button>
    <script>
      $("#btn1").click(() => {
        $("div").children().css("color","red");
      });
      $("#btn2").on("click", () => {
        $("p").children(":last").css("color", "blue");
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery遍历之find()方法
jQuery是一个合集对象，如果想快速查找DOM树中的这些元素的后代元素，此时可以用find()方法，这也是开发使用频率很高的方法。这里要注意 children与find方法的区别，children是父子关系查找，find是后代关系（包含父子关系）。find()方法要注意的知识点：
- find是遍历当前元素集合中每个元素的后代。只要符合，不管是儿子辈，孙子辈都可以。
- 与其他的树遍历方法不同，选择器表达式对于 .find() 是必需的参数。如果我们需要实现对所有后代元素的取回，可以传递通配选择器 '*'。
- find只在后代中遍历，不包括自己。
- 选择器 context 是由 .find() 方法实现的；因此，$('.item-ii').find('li') 等价于 $('li', '.item-ii')(找到类名为item-ii的标签下的li标签)。
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <div>
      <span>子元素一</span>
      <span class="select">子元素二</span>
      <span>子元素三</span>
    </div>
    <p>
      <span>子元素一</span>
      <span>子元素二</span>
      <span>子元素三</span>
    </p>
    <hr />
    <button>find()方法</button>
    <button>find()方法</button>
    <script>
      $("button:first").click(() => {
        $("div").find(".select").css("color","red");
      });
      $("button:last").on("click", () => {
        $("p").find("span:first").css("color", "blue");
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery遍历之parent()方法
jQuery是一个合集对象，如果想快速查找合集里面的每一个元素的父元素（这里可以理解为就是父亲-儿子的关系），此时可以用parent()方法，因为是父元素，这个方法只会向上查找一级
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <div>
      <span>子元素一</span>
      <span class="select">子元素二</span>
      <span>子元素三</span>
    </div>
    <p>
      <span class="select">子元素一</span>
      <span>子元素二</span>
      <span>子元素三</span>
    </p>
    <hr />
    <button>parent()方法无参数</button>
    <button>parent()方法有参数</button>
    <script>
      $("button:first").click(() => {
        $("span").parent().css("border","1px solid red");
      });
      $("button:last").on("click", () => {
        $(".select").parent(":first").css("color", "blue");
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery遍历之parents()方法
jQuery是一个合集对象，如果想快速查找合集里面的每一个元素的所有祖辈元素，此时可以用parents()方法。其实也类似find与children的区别，parent只会查找一级，parents则会往上一直查到查找到祖先节点
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .box {
        padding: 20px;
      }
      .box-child {
        padding: 10px;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <div class="box">
      <p class="box-child">
        <span>孙子元素</span>
      </p>
    </div>
    <hr />
    <button>parents()方法无参数</button>
    <button>parents()方法有参数</button>
    <script>
      $("button:first").click(() => {
        $("span").parents().css("border","1px solid black");
      });
      $("button:last").on("click", () => {
        $("span").parents(".box").css("border", "1px solid red");
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery遍历之closest()方法
以选定的元素为中心，往内查找可以通过find、children方法。如果往上查找，也就是查找当前元素的父辈祖辈元素，jQuery提供了closest()方法，这个方法类似parents但是又有一些细微的区别，属于使用频率很高的方法
- 起始位置不同：.closest开始于当前元素 .parents开始于父元素
- 遍历的目标不同：.closest要找到指定的目标，.parents遍历到文档根元素，closest向上查找，直到找到一个匹配的就停止查找，parents一直查找到根元素，并将匹配的元素加入集合
- 结果不同：.closest返回的是包含零个或一个元素的jquery对象，parents返回的是包含零个或一个或多个元素的jquery对象
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .box {
        padding: 20px;
      }
      .box-child {
        padding: 10px;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <div class="box">
      <p class="box-child">
        <span>孙子元素</span>
      </p>
    </div>
    <hr />
    <button>closest()方法</button>
    <button>closest()方法</button>
    <script>
      $("button:first").click(() => {
        let $p = $("p");
        $("span").closest($p).css("border","1px solid black");
      });
      $("button:last").on("click", () => {
        $("span").closest(".box").css("border", "1px solid red");
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery遍历之next()方法
jQuery是一个合集对象，如果想快速查找指定元素集合中每一个元素紧邻的后面同辈元素的元素集合，此时可以用next()方法
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .box {
        padding: 20px;
      }
      .box-child {
        padding: 10px;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <div class="box">
      <p class="box-child">
        <span>孙子元素1</span>
        <span>孙子元素2</span>
      </p>
      <div>兄弟元素1</div>
      <div>兄弟元素2</div>
    </div>
    <hr />
    <button>next()方法无参数</button>
    <button>next()方法有参数</button>
    <script>
      $("button:first").click(() => {
        $("p").next().css("border","1px solid blue");
      });
      $("button:last").on("click", () => {
        $("p").next(":last").css("color", "red");
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery遍历之prev()方法
jQuery是一个合集对象，如果想快速查找指定元素集合中每一个元素紧邻的前面同辈元素的元素集合，此时可以用prev()方法
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .box {
        padding: 20px;
      }
      .box-child {
        padding: 10px;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <div class="box">
      <div>兄弟元素1</div>
      <div>兄弟元素2</div>
      <p class="box-child">
        <span>孙子元素1</span>
        <span>孙子元素2</span>
      </p>
      <div>兄弟元素1</div>
      <div>兄弟元素2</div>
    </div>
    <hr />
    <button>prev()方法无参数</button>
    <button>prev()方法有参数</button>
    <script>
      $("button:first").click(() => {
        $("p").prev().css("border","1px solid blue");
      });
      $("button:last").on("click", () => {
        $("p").prev(":last").css("color", "red");
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery遍历之siblings()
jQuery是一个合集对象，如果想快速查找指定元素集合中每一个元素的同辈元素，此时可以用siblings()方法
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .box {
        padding: 20px;
      }
      .box-child {
        padding: 10px;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <div class="box">
      <div>兄弟元素1</div>
      <div>兄弟元素2</div>
      <p class="box-child">
        <span>孙子元素1</span>
        <span>孙子元素2</span>
      </p>
      <div>兄弟元素1</div>
      <div>兄弟元素2</div>
    </div>
    <hr />
    <button>siblings()方法无参数</button>
    <button>siblings()方法有参数</button>
    <script>
      $("button:first").click(() => {
        $("p").siblings().css("border","1px solid blue");
      });
      $("button:last").on("click", () => {
        $("p").siblings(":last").css("color", "red");
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery遍历之add()方法
jQuery是一个合集对象，通过$()方法找到指定的元素合集后可以进行一系列的操作。$()之后就意味着这个合集对象已经是确定的，如果后期需要再往这个合集中添加一新的元素要如何处理？jQuery为此提供add方法，用来创建一个新的jQuery对象 ，元素添加到匹配的元素集合中。.add()的参数可以几乎接受任何的$()，包括一个jQuery选择器表达式，DOM元素，或HTML片段引用。
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .box {
        padding: 20px;
      }
      .box-child {
        padding: 10px;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <div class="box">
      内容
    </div>
    <div class="change"></div>
    <hr />
    <button>add()方法传递元素标签</button>
    <button>add()方法传递html结构</button>
    <script>
      $("button:first").click(() => {
        $(".box").add("p").css("border","1px solid blue");
      });
      // 整个HTML结构都变了
      $("button:last").click(() => {
        $(".box").add("<p>新的p元素</p>").appendTo(".change");
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery遍历之each()
jQuery是一个合集对象，通过$()方法找到指定的元素合集后可以进行一系列的操作。比如我们操作$("li").css('') 给所有的li设置style值，因为jQuery是一个合集对象，所以css方法内部就必须封装一个遍历的方法，被称为隐式迭代的过程。要一个一个给合集中每一个li设置颜色，这里方法就是each。.each() 方法就是一个for循环的迭代器，它会迭代jQuery对象合集中的每一个DOM元素。每次回调函数执行时，会传递当前循环次数作为参数(从0开始计数)，所以大体上了解3个重点：
- each是一个for循环的包装迭代器
- each通过回调的方式处理，并且会有2个固定的实参，索引与元素
- each回调方法中的this指向当前迭代的dom元素
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <div class="box">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </div>
    <div class="change">
      <ul>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
      </ul>
    </div>
    <hr />
    <button>each方法遍历元素</button>
    <button>each方法回调判断</button>

    <script>
      $("button:first").click(function() {
        $("li").each(function(index, element) {
          $(this).css('border','1px solid red')
        })
      })
      $("button:last").click(function() {
        $("li").each(function(index, element) {
          if(index%2==0){
            $(this).css('color','blue')
          }
        })
      })
    </script>
  </body>
</html>
```
<br>


# 7、[jQuery基础(三)——事件篇](https://www.imooc.com/learn/429)
前言就不说什么了，撸起袖子就是干呀<br><br>

#### jQuery鼠标事件之click与dbclick事件
用交互操作中，最简单直接的操作就是点击操作。jQuery提供了两个方法一个是click方法用于监听用户单击操作，另一个方法是dbclick方法用于监听用户双击操作。这两个方法的用法是类似的，下面以click()事件为例
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <p class="p1">指定触发绑定的事件内容</p>
    <button>元素绑定事件,弹出回调中的this</button><br>
    <button>指定触发绑定的事件</button>
    <button>不同函数传递数据</button>

    <script>
      // 元素绑定事件,弹出回调中的this
      $("button:first").click(function() {
        alert(this)
      })

      // 指定触发绑定的事件
      $(".p1").click(function(e){
        alert(e.target.textContent)
      })
      $("button:eq(1)").click(function() {
        $(".p1").click()
      })

      // 不同函数传递数据
      function fn(e) {
        alert(e.data)
      }
      $("button:last").click("传入的值", fn)
    </script>
  </body>
</html>
```
<br>

#### jQuery鼠标事件之mousedown与mouseup事件
用户交互操作中，最简单直接的操作就是点击操作，因此jQuery提供了一个mousedown的快捷方法可以监听用户鼠标按下的操作，与其对应的还有一个方法mouseup快捷方法可以监听用户鼠标弹起的操作。两种方法用法类似，下面以mousedown()为例
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <p class="p1">指定触发绑定的事件内容</p>
    <button>弹出回调中的鼠标键</button><br>
    <button>指定触发绑定的事件</button><br>
    <button>不同函数传递数据</button>

    <script>
      // 元素绑定事件,弹出回调中的this
      $("button:first").mousedown(function(e) {
        alert(e.which)
      })

      // 指定触发绑定的事件
      $(".p1").mousedown(function(e){
        alert(e.target.textContent)
      })
      $("button:eq(1)").mousedown(function() {
        $(".p1").mousedown()
      })

      // 不同函数传递数据
      function fn(e) {
        alert(e.data)
      }
      $("button:last").mousedown("传入的值", fn)
    </script>
  </body>
</html>
```
<br>

#### jQuery鼠标事件之mousemove事件
用交互操作中，经常需要知道用户是否有移动的操作。基于移动的机制可以做出拖动、拖拽一系列的效果出来。针对移动事件，jQuery提供了一个mousemove的快捷方法可以监听用户移动的的操作，mousemove事件触发需要以下几点：
- mousemove事件是当鼠标指针移动时触发的，即使是一个像素
- 如果处理器做任何重大的处理，或者如果该事件存在多个处理函数，这可能造成浏览器的严重的性能问题
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .left div {
        width: 300px;
        height: 80px;
        padding: 5px;
        margin: 5px;
        border: 1px solid #ccc;
      }
      .left div {
        background: #bbffaa;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <div class="left">
      <div class="aaron1">
        <p>鼠标在绿色区域移动触发mousemove</p>
        <p>移动的X位置：</p>
      </div>
    </div>

    <script>
      //触发后修改内容
      $(".aaron1").mousemove(function(e) {
        $(this).find("p:last").html("移动的X位置：" + e.pageX);
      })
    </script>
  </body>
</html>
```
<br>

#### jQuery鼠标事件之mouseover与mouseout事件
在学JS的时候，大家还记得有两个方法叫移入移出事件吗？onmouseover()与onmouseout()事件~jQuery当中同样提供了这样的事件来监听用户的移入移出操作，mouseover()与mouseout()事件，两者用法类似，下面一mouseover为例：
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .left {
        width: 500px;
        height: 80px;
        padding: 5px;
        margin: 5px;
        border: 1px solid #ccc;
        background: #bbffaa;
      }
      .right {
        width: 500px;
        height: 80px;
        padding: 5px;
        margin: 5px;
        border: 1px solid #ccc;
        background: #bbffaa;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <div class="left">
      <div class="aaron1">
        <p>鼠标移进此区域触发mouseover事件</p>
        <p>进入元素内部,mouseover事件触发次数：</p>
      </div>
    </div>
    <div class="right">
      <div class="aaron1">
        <p>鼠标移进此区域触发mouseover事件</p>
        <p>进入元素内部,mouseover事件触发次数：</p>
      </div>
    </div>

    <script>
      // 绑定一个mouseover事件
      var n = 0;
      $(".left").mouseover(function(e) {
        $(this)
          .find("p:last")
          .html("进入元素内部,mouseover事件触发次数：" + ++n);
      });

      // 不同函数传递数据
      var j = 0;
      function fn(e){
        $(".right p:last").html('mouseover事件触发次数：' + (++j) + '传入数据为 ：'+ e.data)
      }
      $(".right").mouseover("data为慕课网", fn)
    </script>
  </body>
</html>
```
<br>

#### jQuery鼠标事件之mouseenter与mouseleave事件
用交互操作中，经常需要知道用户操作鼠标是否有移到元素内部或是元素外部，因此jQuery提供了一个mouseenter和mouseleave的快捷方法可以监听用户移动到内部的操作。mouseenter事件和mouseover的区别关键点就是：冒泡的方式处理问题，mouseover事件具有冒泡的特点。
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .left div,
      .right div {
        width: 350px;
        height: 150px;
        padding: 5px;
        margin: 5px;
        border: 1px solid #ccc;
      }
      p {
        height: 50px;
        border: 1px solid red;
        margin: 30px;
      }
      .left div {
        background: #bbffaa;
      }
      .right div {
        background: yellow;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h2>.mouseover()方法</h2>
    <div class="left">
      <div class="aaron1">
        <p>鼠标离开此区域触发mouseover事件</p>
        <a>mouseover事件触发次数：</a><br />
        <a>mouseover冒泡事件触发次数：</a>
      </div>
    </div>

    <h2>.mouseenter()方法</h2>
    <div class="right">
      <div class="aaron2">
        <p>鼠标进入此区域触发mouseenter事件</p>
        <a>mouseenter事件触发次数：</a><br />
        <a>mouseenter冒泡事件触发次数：</a>
      </div>
    </div>
    <br />

    <script type="text/javascript">
      // mouseover事件
      var i = 0;
      $(".aaron1 p").mouseover(function(e) {
        $(".aaron1 a:first").html("mouseover事件触发次数：" + ++i);
      });
      var n = 0;
      $(".aaron1").mouseover(function() {
        $(".aaron1 a:last").html("mouseover冒泡事件触发次数：" + ++n);
      });
      // mouseenter事件
      var j = 0;
      $(".aaron2 p").mouseenter(function(e) {
        $(".aaron2 a:first").html("mouseenter事件触发次数：" + ++j);
      });

      var m = 0;
      $(".aaron2").mouseenter(function() {
        $(".aaron2 a:last").html("mouseenter冒泡事件触发次数：" + ++m);
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery鼠标事件之hover事件
学了mouseover、mouseout、mouseenter、mouseleave事件，也理解了四个事件的相同点与不同点，现在可以用来给元素做一个简单的切换效果。在元素上移进移出切换其换色，一般通过2个事件配合就可以达到，这里用mouseenter与mouseleave，这样可以避免冒泡问题
```js
$(ele).mouseenter(function () {
  $(this).css("background", '#bbffaa');
})
$(ele).mouseleave(function () {
  $(this).css("background", 'red');
})
```
这样目的是达到了，代码稍微有点多，对于这样的简单逻辑jQuery直接提供了一个hover方法，可以便捷处理，只需要在hover方法中传递2个回调函数就可以了，不需要显示的绑定2个事件
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <div>触发hover事件</div>

    <script type="text/javascript">
      $("div").hover(function(){
        $(this).css("color", "red")
      },function(){
        $(this).css("color", "black")
      })
    </script>
  </body>
</html>
```
<br>

#### jQuery鼠标事件之focusin事件
当一个元素，或者其内部任何一个元素获得焦点的时候，例如：input元素，用户在点击聚焦的时候，如果开发者需要捕获这个动作的时候，jQuery提供了一个focusin事件
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .left div,
      .right div {
        width: 500px;
        height: 50px;
        padding: 5px;
        margin: 5px;
        float: left;
        border: 1px solid #ccc;
      }
      .left div {
        background: #bbffaa;
      }
      .right div {
        background: yellow;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h2>.focusin()方法</h2>
    <div class="left">
      <div class="aaron">点击聚焦<br /><input type="text" /></div>
    </div>
    <div class="right">
      <div class="aaron1">点击聚焦并传递参数<br /><input type="text" /></div>
    </div>

    <script>
      // 给input元素增加一个边框
      $("input:first").focusin(function() {
        $(this).css("border", "2px solid blue");
      })
      // 不同函数传递数据
      function fn(e) {
        $(this).val(e.data);
      }
      $("input:last").focusin("慕课网", fn);
    </script>
  </body>
</html>
```
<br>

#### jQuery鼠标事件之focusout事件
当一个元素，或者其内部任何一个元素失去焦点的时候，比如input元素，用户在点击失去焦的时候，如果开发者需要捕获这个动作，jQuery提供了一个focusout事件
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .left div,
      .right div {
        width: 500px;
        height: 50px;
        padding: 5px;
        margin: 5px;
        float: left;
        border: 1px solid #ccc;
      }
      .left div {
        background: #bbffaa;
      }

      .right div {
        background: yellow;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h2>.focusout()方法</h2>
    <div class="left">
      <div class="aaron">点击触发失去焦点<br><input type="text" /></div>
    </div>
    <div class="right">
      <div class="aaron1">
        点击触发失去焦点并传递参数<br><input type="text" />
      </div>
    </div>

    <script type="text/javascript">
      // 给input元素增加一个边框
      $("input:first").focusout(function() {
        $(this).css("border", "2px solid blue");
      });
      // 不同函数传递数据
      function fn(e) {
        $(this).val(e.data);
      }
      function a() {
        $("input:last").focusout("慕课网", fn);
      }
      a();
    </script>
  </body>
</html>
```
<br>

#### jQuery表单事件之blur与focus事件
在之前学过了表单处理事件focusin事件与focusout事件，同样用于处理表单焦点的事件还有blur与focus事件，它们之间的本质区别：是否支持冒泡处理
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .left div, .right div {
        width: 500px;
        height: 50px;
        padding: 5px;
        margin: 5px;
        border: 1px solid #ccc;
      }
      .left div {
        background: #bbffaa;
      }
      .right div {
        background: yellow;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h4>.focusin与blur</h4>
    <div class="left">
      <div class="aaron">
        点击触发焦点(无反应)：
        <input type="text" />
      </div>
      <div class="aaron1">
        点击触发焦点并冒泡：
        <input type="text" />
      </div>
    </div>

    <h4>.focusout与blur</h4>
    <div class="right">
      <div class="aaron3">
        点击触发失去焦点(无反应)：
        <input type="text" />
      </div>
      <div class="aaron4">
        点击触发失去焦点并冒泡：
        <input type="text" />
      </div>
    </div>
    <script>
      // .focusin与blur事件
      $(".aaron").focus(function() {
        $(this).css("border", "2px solid red");
      });
      $(".aaron1").focusin(function() {
        $(this).find("input").val("冒泡捕获了focusin事件");
      });

      // .focusout与blur事件
      $(".aaron3").blur(function() {
        $(this).css("border", "2px solid red");
      });
      $(".aaron4").focusout(function() {
        $(this).find("input").val("冒泡捕获了focusout事件").css("border", "2px solid red");
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery表单事件之change事件
`<input>`元素，`<textarea>`和`<select>`元素的值都是可以发生改变的，开发者可以通过change事件去监听这些改变的动作
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .left div, .right div {
        width: 100%;
        padding: 5px;
        margin: 5px;
        float: left;
        border: 1px solid #ccc;
      }
      .left div {
        background: #bbffaa;
      }
      .right div {
        background: yellow;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h2>input、textarea与select</h2>
    <div class="left">
      <div class="aaron">
        input<br>
        <input class="target1" type="text" value="监听input的改变" />
      </div>
      <div class="aaron1">
        select<br>
        <select class="target2">
          <option value="option1" selected="selected">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </div>
      <div class="aaron3">
        textarea<br>
        <textarea class="target3" rows="3" cols="20">多行的文本输入控件</textarea>
      </div>
    </div>
    <h2>输出结果：<small id="result"></small></h2>

    <script type="text/javascript">
      //监听input值的改变
      $(".target1").change(function(e) {
        $("#result").html(e.target.value);
      });
      //监听select：
      $(".target2").change(function(e) {
        $("#result").html(e.target.value);
      });
      //监听textarea：
      $(".target3").change(function(e) {
        $("#result").html(e.target.value);
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery表单事件之select事件
当 `textarea` 或文本类型的 `input` 元素中的文本被选择时，会发生 `select` 事件。这个函数会调用执行绑定到select事件的所有函数，包括浏览器的默认行为。可以通过在某个绑定的函数中返回false来防止触发浏览器的默认行为。select事件只能用于`<input>`元素与`<textarea>`元素
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .left div, .right div {
        width: 500px;
        height: 80px;
        padding: 5px;
        margin: 5px;
        border: 1px solid #ccc;
      }
      .left div {
        background: #bbffaa;
      }
      .right div {
        background: yellow;
      }
      select {
        height: 100px;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h2>input与textarea</h2>
    <div class="left">
      <h4>测试一</h4>
      <div class="aaron">
        选中文字<br>
        <input type="text" value="慕课网" />
      </div>
      <button id="bt1">触发input元素的select事件</button>

      <h4>测试二</h4>
      <div class="aaron">
        textarea<br>
        <textarea rows="3" cols="20">用鼠标选中文字</textarea>
      </div>
    </div>

    <script type="text/javascript">
      // 监听input元素中value的选中
      // 触发元素的select事件
      $("input").select(function(e) {
        alert(e.target.value);
        e.preventDefault();
      });
      $("#bt1").click(function() {
        $("input").select();
      });

      // 监听textarea元素中value的选中
      $("textarea").select(function(e) {
        alert(e.target.value);
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery表单事件之submit事件
提交表单是一个最常见的业务需求，比如用户注册，一些信息的输入都是需要表单的提交。同样的有时候开发者需要在表单提交的时候过滤一些的数据、做一些必要的操作（例如：验证表单输入的正确性，如果错误就阻止提交，从新输入）此时可以通过submit事件，监听下提交表单的这个动作
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .left div, .right div {
        width: 500px;
        height: 50px;
        padding: 5px;
        margin: 5px;
        float: left;
        border: 1px solid #ccc;
      }
      .left div {
        background: #bbffaa;
      }
      .right div {
        background: yellow;
      }
      select {
        height: 100px;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h2>submit</h2>
    <div class="left">
      <div class="aaron">
        <form id="target1" action="test.html">
          回车键或者点击提交表单<br>
          <input type="text" value="输入新的值" />
          <input type="submit" value="Go" />
        </form>
      </div>
      <div class="aaron">
        <form id="target2" action="destination.html">
          回车键或者点击提交表单,禁止浏览器默认跳转<br>
          <input type="text" value="输入新的值" />
          <input type="submit" value="Go" />
        </form>
      </div>
    </div>

    <script type="text/javascript">
      // 回车键或者点击提交表单
      $("#target1").submit(function(e) {
        alert("捕获提交表达动作,不阻止页面跳转");
      });
      // 回车键或者点击提交表单,禁止浏览器默认跳转
      $("#target2").submit(function() {
        alert("捕获提交表达动作,阻止页面跳转");
        return false;
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery键盘事件之keydown()与keyup()事件
鼠标有mousedown,mouseup之类的事件，这是根据人的手势动作分解的2个触发行为。相对应的键盘也有这类事件，将用户行为分解成2个动作，键盘按下与松手，针对这样的2种动作，jQuery分别提供了对应keydown与keyup方法来监听
- keydown是在键盘按下就会触发
- keyup是在键盘松手就会触发
- 理论上它可以绑定到任何元素，但keydown/keyup事件只是发送到具有焦点的元素上，不同的浏览器中，可获得焦点的元素略有不同，但是表单元素总是能获取焦点，所以对于此事件类型表单元素是最合适的
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .left div, .right div {
        width: 600px;
        height: 150px;
        padding: 5px;
        margin: 5px;
        border: 1px solid #ccc;
      }
      .left div {
        background: #bbffaa;
      }
      em {
        font-weight: 900;
        color: red;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h2>keydown()与keyup()事件</h2>
    <div class="left">
      <h4>测试一</h4>
      <div class="aaron">
        监听keydown输入<br> <input class="target1" type="text" value="" /><br />
        按下显示输入的值<br><em></em>
      </div>
      <h4>测试二</h4>
      <div class="aaron">
        监听keyup输入<br><input class="target2" type="text" value="" /><br />
        松手显示输入的值<br><em></em>
      </div>
    </div>

    <script type="text/javascript">
      //监听键盘按键
      //获取输入的值
      $(".target1").keydown(function(e) {
        $("em:first").text(e.target.value);
      });

      //监听键盘按键
      //获取输入的值
      $(".target2").keyup(function(e) {
        $("em:last").text(e.target.value);
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery键盘事件之keypress()事件
在input元素上绑定keydown事件会发现一个问题：每次获取的内容都是之前输入的，当前输入的获取不到<br>

keydown事件触发在文字还没敲进文本框，这时如果在keydown事件中输出文本框中的文本，得到的是触发键盘事件前的文本，而keyup事件触发时整个键盘事件的操作已经完成，获得的是触发键盘事件后的文本<br>

当浏览器捕获键盘输入时，还提供了一个keypress的响应，这个跟keydown是非常相似，这里使用请参考keydown这一节，具体说说不同点。keypress事件与keydown和keyup的主要区别
- 只能捕获单个字符，不能捕获组合键
- 无法响应系统功能键（如delete，backspace）
- 不区分小键盘和主键盘的数字字符

总而言之，KeyPress主要用来接收字母、数字等ANSI字符，而 KeyDown 和 KeyUP 事件过程可以处理任何不被 KeyPress 识别的击键。诸如：功能键（F1-F12）、编辑键、定位键以及任何这些键和键盘换档键的组合等。
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .left div, .right div {
        width: 500px;
        height: 150px;
        padding: 5px;
        margin: 5px;
        border: 1px solid #ccc;
      }
      .left div {
        background: #bbffaa;
      }
      em {
        font-weight: 900;
        color: red;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h2>keypress()事件</h2>
    <div class="left">
      <div class="aaron">
        监听keypress输入<br><input class="target1" type="text" value="" /><br />
        输入中文测试，无法显示<br><em></em>
      </div>
    </div>

    <script type="text/javascript">
      // 监听回车(enter)键盘按键
      // 获取输入的值
      $(".target1").keypress(function(e) {
        $("em").text(e.target.value);
      });
    </script>
  </body>
</html>
```
<br>

#### on()的多事件绑定
之前学的鼠标事件，表单事件与键盘事件都有个特点，就是直接给元素绑定一个处理函数，所有这类事件都是属于快捷处理。翻开源码其实可以看到，所有的快捷事件在底层的处理都是通过一个"on"方法来实现的。jQuery on()方法是官方推荐的绑定事件的一个方法。
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .left div, .right div {
        width: 100%;
        height: 50px;
        padding: 5px;
        margin: 5px;
        float: left;
        border: 1px solid #ccc;
      }
      .left div {
        background: #bbffaa;
      }
      .right div {
        background: yellow;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h4>测试一</h4>
    <div class="left">
      点击触发：on('click',fn)
      <div id="test1"></div>
    </div>
    <script type="text/javascript">
      // 事件绑定一
      $("#test1").on("click", function(e) {
        $(this).text("触发事件：" + e.type);
      });
    </script>

    <h4>测试二</h4>
    <div class="left">
      点击触发：on('mousedown mouseup')
      <div id="test2"></div>
    </div>
    <script type="text/javascript">
      //多事件绑定一
      $("#test2").on("mousedown mouseup", function(e) {
        $(this).text("触发事件：" + e.type);
      });
    </script>

    <h4>测试三</h4>
    <div class="right">
      点击触发：on(mousedown:fn1,mouseup:fn2)
      <div id="test3"></div>
    </div>
    <script type="text/javascript">
      //多事件绑定二
      $("#test3").on({
        mousedown: function(e) {
          $(this).text("触发事件：" + e.type);
        },
        mouseup: function(e) {
          $(this).text("触发事件：" + e.type);
        }
      });
    </script>
  </body>
</html>
```
<br>

#### on()的高级用法
针对自己处理机制中，不仅有on方法，还有根据on演变出来的live方法(1.7后去掉了)，delegate方法等等。这些方法的底层实现部分 还是on方法，这是利用了on的另一个事件机制委托的机制衍变而来的
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .left div,.right div {
        width: 500px;
        height: 50px;
        padding: 5px;
        margin: 5px;
        float: left;
        border: 1px solid #ccc;
      }
      .left div {
        background: #bbffaa;
      }
      .right div {
        background: yellow;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h2>on事件委托</h2>
    <div class="left">
      <div class="aaron">
        <a>点击这里</a>
      </div>
    </div>
    <script type="text/javascript">
      // 给body绑定一个click事件
      // 没有直接a元素绑定点击事件
      // 通过委托机制，点击a元素的时候，事件触发
      $("body").on("click", "a", function(e) {
        alert(e.target.textContent);
      });
    </script>
  </body>
</html>
```
<br>

#### 卸载事件off()方法
根据on绑定事件的一些特性，off方法也可以通过相应的传递组合的事件名，名字空间，选择器或处理函数来移除绑定在元素上指定的事件处理函数。当有多个过滤参数时，只有与这些参数完全匹配的事件处理函数才会被移除
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .left div, .right div {
        width: 100%;
        height: 50px;
        padding: 5px;
        margin: 5px;
        float: left;
        border: 1px solid #ccc;
      }
      .left div {
        background: #bbffaa;
      }
      .right div {
        background: yellow;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h4>测试一</h4>
    <div class="left">
      <div class="aaron">
        点击触发
        <span></span>
      </div>
    </div>
    <button>点击删除mousedown事件</button>
    <script type="text/javascript">
      var n = 0;
      //绑定事件
      $(".aaron").on("mousedown mouseup", function(e) {
        $("span").text("触发类型：" + e.type + ",次数" + ++n);
      });
      //删除事件
      $("button:first").click(function() {
        $(".aaron:first").off("mousedown");
      });
    </script>

    <h4>测试</h4>
    <div class="left">
      <div class="aaron">
        点击触发
        <em></em>
      </div>
    </div>
    <button>点击销毁所有事件off</button>
    <script type="text/javascript">
      var j = 0;
      //绑定事件
      $(".aaron:last").on("mousedown mouseup", function(e) {
        $("em").text("触发类型:" + e.type + ",次数" + ++j);
      });
      //删除事件
      $("button:last").click(function() {
        $(".aaron:last").off();
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery事件对象的作用
事件中的Event对象容易被初学者忽略掉，可能大多时候初学者不知道怎么去用它，但有些时候它还是非常有用的。<br>

在不同浏览器之间事件对象的获取, 以及事件对象的属性都有差异。jQuery根据 W3C 标准规范了事件对象，所以在jQuery事件回调方法中获取到的事件对象是经过兼容后处理过的一个标准的跨浏览器对象<br>

事件对象是用来记录一些事件发生时的相关信息的对象。事件对象只有事件发生时才会产生，并且只能是事件处理函数内部访问，在所有事件处理函数运行结束后，事件对象就被销毁<br>

回到上面的问题，既然事件对象是跟当前触发元素息息相关的，所以我们就能从里面相关的信息，从事件对象中找到 event.target。target 属性可以是注册事件时的元素，或者它的子元素。通常用于比较 event.target 和 this 来确定事件是不是由于冒泡而触发的。经常用于事件冒泡时处理事件委托。简单来说：event.target代表当前触发事件的元素，可以通过当前元素对象的一系列属性来判断是不是我们想要的元素
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .left div, .right div {
        width: 500px;
        height: 100px;
        padding: 5px;
        margin: 5px;
        float: left;
        border: 1px solid #ccc;
      }
      .left div {
        background: #bbffaa;
      }
      .right div {
        background: yellow;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h3>事件委托，通过事件对象区别触发元素</h3>
    <div class="left">
      <div class="aaron">
        <ul>
          <li>点击：触发一</li>
          <li>点击：触发二</li>
          <li>点击：触发三</li>
          <li>点击：触发四</li>
        </ul>
      </div>
    </div>

    <script>
      //多事件绑定一
      $("ul").on("click", function(e) {
        alert("触发的元素是内容是: " + e.target.textContent);
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery事件对象的属性和方法
事件对象的属于与方法有很多，但是我们经常用的只有那么几个
- event.type：获取事件的类型
- event.pageX和event.pageY：获取鼠标当前相对于页面的坐标
- event.preventDefault()方法：阻止默认行为
- event.stopPropagation()方法：阻止事件冒泡
- event.which：获取在鼠标单击时，单击的是鼠标的哪个键
- event.currentTarget: 在事件冒泡过程中的当前DOM元素
- this和event.target的区别：js中事件是会冒泡的，所以this是可以变化的，但event.target不会变化，它永远是直接接受事件的目标DOM元素
- .this和event.target都是dom对象：如果要使用jquey中的方法可以将他们转换为jquery对象。比如this和$(this)的使用、event.target和$(event.target)的使用
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .left div, .right div {
        width: 500px;
        height: 100px;
        padding: 5px;
        margin: 5px;
        float: left;
        border: 1px solid #ccc;
      }
      .left div {
        background: #bbffaa;
      }
      .right div {
        background: yellow;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h3>事件对象的属性与方法</h3>
    <div class="left">
      <div id="content">
        外层div元素
        <br />
        <span style="background: silver;">内层span元素</span>
        <br />
        外层div元素
      </div>
      <br />
      <div id="msg"></div>
    </div>
    <script type="text/javascript">
      //为 <span> 元素绑定 click 事件
      $("span").click(function() {
        $("#msg").html($("#msg").html() + "<p>内层span元素被单击</p>");
      });
      //为 Id 为 content 的 <div> 元素绑定 click 事件
      $("#content").click(function(event) {
        $("#msg").html($("#msg").html() + "<p>外层div元素被单击</p>");
        event.stopPropagation(); //阻止事件冒泡
      });
      //为 <body> 元素绑定 click 事件
      $("body").click(function() {
        $("#msg").html($("#msg").html() + "<p>body元素被单击</p>");
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery自定义事件之trigger事件
众所周知类似于mousedown、click、keydown等等这类型的事件都是浏览器提供的，通俗叫原生事件，这类型的事件是需要有交互行为才能被触发。如果不同用户交互是否能在某一时刻自动触发该事件呢？ 正常来说是不可以的，但是jQuery解决了这个问题，提供了一个trigger方法来触发浏览器事件。trigger除了能够触发浏览器事件，同时还支持自定义事件，并且自定义时间还支持传递参数
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <button id="btn">页面加载触发自定义事件</button>
    <button id="btn1">页面加载触发自定义事件并且传参</button>
    <p id="test"></p>

    <script>
      $("#btn").on("testClick", function(){
        alert("自定义事件触发")
      })  
      // 页面加载自动执行自定义事件testClick
      $("#btn").trigger("testClick");

      // 自定义事件并且传参
      $("#btn1").bind("myClick", function (event, message1, message2) {
        $("#test").append("<p>" + message1 + message2 + "</p>");
      });
      $("#btn1").trigger("myClick",["我的自定义","事件"]);
    </script>
  </body>
</html>
```
<br>

#### jQuery自定义事件之triggerHandler事件
trigger事件还有一个特性：会在DOM树上冒泡，所以如果要阻止冒泡就需要在事件处理程序中返回false或调用事件对象中的.stopPropagation() 方法可以使事件停止冒泡<br>

trigger事件是具有触发原生与自定义能力的，但是存在一个不可避免的问题： 事件对象event无法完美的实现，毕竟一个是浏览器给的，一个是自己模拟的。尽管 .trigger() 模拟事件对象，但是它并没有完美的复制自然发生的事件，若要触发通过 jQuery 绑定的事件处理函数，而不触发原生的事件，使用.triggerHandler() 来代替，triggerHandler与trigger的用法是一样的，重点看不同之处：<br>
- triggerHandler不会触发浏览器的默认行为，.triggerHandler( "submit" )将不会调用表单上的.submit()
- trigger() 会影响所有与 jQuery 对象相匹配的元素，而 .triggerHandler() 仅影响第一个匹配到的元素
- 使用 .triggerHandler() 触发的事件，并不会在 DOM 树中向上冒泡。 如果它们不是由目标元素直接触发的，那么它就不会进行任何处理
- 与普通的方法返回 jQuery 对象(这样就能够使用链式用法)相反，.triggerHandler() 返回最后一个处理的事件的返回值。如果没有触发任何事件，会返回 undefined
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .left div, .right div {
        width: 500px;
        height: 50px;
        padding: 5px;
        margin: 5px;
        border: 1px solid #ccc;
      }
      .left div {
        background: #bbffaa;
      }
      .right div {
        background: yellow;
      }
    </style>
    <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h2>自定义事件triggerHandler</h2>
    <div class="left">
      <div id="accident">
        <a>triggerHandler事件</a>
        <input type="text" />
      </div>
      <button>事件冒泡,触发浏览器默认聚焦行为</button><br />
      <button>不会冒泡，不触发浏览器默认聚焦行为</button>
    </div>
    <script type="text/javascript">
      //给input绑定一个聚焦事件
      $("input").on("focus", function(event, title) {
        $(this).val(title);
      });

      $("#accident").on("click", function() {
        alert("trigger触发的事件会在 DOM 树中向上冒泡");
      });
      //trigger触发focus
      $("button:first").click(function() {
        $("a").trigger("click");
        $("input").trigger("focus");
      });

      //triggerHandler触发focus
      $("button:last").click(function() {
        $("a").triggerHandler("click");
        $("input").triggerHandler("focus", "没有触发默认聚焦事件");
      });
    </script>
  </body>
</html>
```
<br>

# 8、[jQuery基础(四)—动画篇](https://www.imooc.com/learn/430)
直接进入正题，不扯太多了<br>

#### jQuery中隐藏元素的hide方法
让页面上的元素不可见，一般可以通过设置css的display为none属性。但是通过css直接修改是静态的布局，如果在代码执行的时候，一般是通过js控制元素的style属性，这里jQuery提供了一个快捷的方法.hide()来达到这个效果。jQuery在做hide操作的时候，是会保存本身的元素的原始属性值，再之后通过对应的方法还原的时候还是初始值。比如一个元素的display属性值为inline，那么隐藏再显示时，这个元素将再次显示inline。一旦透明度 达到0，display样式属性将被设置为none，这个元素将不再在页面中影响布局
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .left div, .right div {
        width: 100%;
        height: 50px;
        padding: 5px;
        margin: 5px;
        float: left;
        border: 1px solid #ccc;
      }
      .left div {
        background: #bbffaa;
      }
      .right div {
        background: yellow;
      }
    </style>
    <script src="https://libs.baidu.com/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h2>hide</h2>
    <div class="left">
      <h4>测试一</h4>
      <div id="a1">hide操作</div>
      <button>直接hide</button>
      <script type="text/javascript">
        $("button:first").click(function() {
          $("#a1").hide();
        });
      </script>

      <h4>测试二</h4>
      <div id="a2">hide动画操作</div>
      <button>hide带动画</button>
      <script type="text/javascript">
        $("button:last").click(function() {
          $("#a2").hide({
            duration: 3000,
            complete: function() {
              alert("执行3000ms动画完毕");
            }
          });
        });
      </script>
    </div>
  </body>
</html>
```
<br>

#### jQuery中显示元素的show方法
css中有display:none属性，同时也有display:block，所以jQuery同样提供了与hide相反的show方法，方法的使用几乎与hide是一致的，hide是让元素显示到隐藏，show则是相反，让元素从隐藏到显示，看一段代码：使用上一致，结果相反
```js
// 让元素执行3秒的隐藏动画，然后执行3秒的显示动画。
$('elem').hide(3000).show(3000)
```
show与hide方法是非常常用的，但是一般很少会基于这2个属性执行动画，大多情况下还是直接操作元素的显示与隐藏为主，在使用的时候需要注意以下几点
- show与hide方法是修改的display属性，通过是visibility属性布局需要通过css方法单独设置
- 如果使用!important在你的样式中，比如display: none !important，如果你希望.show()方法正常工作，必须使用.css('display', 'block !important')重写样式
- 如果让show与hide成为一个动画，那么默认执行动画会改变元素的高度，高度，透明度<br><br>


#### jQuery中显示与隐藏切换toggle方法
show与hide是一对互斥的方法。需要对元素进行显示隐藏的互斥切换，通常情况是需要先判断元素的display状态，然后调用其对应的处理方法。比如显示的元素，那么就要调用hide，反之亦然。 对于这样的操作行为，jQuery提供了一个便捷方法toggle用于切换显示或隐藏匹配元素
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      div {
        width: 500px;
        height: 50px;
        padding: 5px;
        margin: 5px;
        border: 1px solid #ccc;
      }
      .left {
        background: #bbffaa;
      }
      .right {
        background: yellow;
        display: none;
      }
    </style>
    <script src="https://libs.baidu.com/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h2>通过toggle切换显示与隐藏</h2>
    <div class="left">显示到隐藏</div>
    <div class="right">隐藏到显示</div>
    <button>直接show-hide动画</button>
    <button>直接hide-show动画</button>
    <script>
      $("button:first").click(function() {
        $(".left").toggle(3000);
      });

      $("button:last").click(function() {
        $(".right").toggle(3000);
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery中下拉动画slideDown
对于隐藏的元素，在将其显示出来的过程中，可以对其进行一些变化的动画效果。之前学过了show方法，show方法在显示的过程中也可以有动画，但是.show()方法将会匹配元素的宽度，高度，以及不透明度，同时进行动画操作。这里将要学习一个新的显示方法slideDown方法，需要注意以下几点
- 下拉动画是从无到有，所以一开始元素是需要先隐藏起来的，可以设置display:none
- 如果提供回调函数参数，callback会在动画完成的时候调用。将不同的动画串联在一起按顺序排列执行是非常有用的。这个回调函数不设置任何参数，但是 this会设成将要执行动画的那个DOM元素，如果多个元素一起做动画效果，那么要非常注意，回调函数会在每一个元素执行完动画后都执行一次，而不是这组 动画整体才执行一次
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .left div, .right div {
        width: 100%;
        height: 50px;
        padding: 5px;
        margin: 5px;
        border: 1px solid #ccc;
        display: none;
      }
      .left div {
        background: #bbffaa;
      }
      .right div {
        background: yellow;
      }
    </style>
    <script src="https://lib.sinaapp.com/js/jquery/1.9.1/jquery-1.9.1.min.js"></script>
  </head>

  <body>
    <div class="left">
      <h4>测试一</h4>
      <div id="a1">hide-show</div>
      <button>点击slideDown显示动画</button>
    </div>
    <div class="right">
      <h4>测试二</h4>
      <div id="a2">hide-show</div>
      <button>点击slideDown执行回调</button>
    </div>

    <script>
      $("button:first").click(function() {
        $("#a1").slideDown(3000);
      });

      $("button:last").click(function() {
        $("#a2").slideDown(3000, function() {
          alert("动画执行结束");
        });
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery中上卷动画slideUp
对于显示的元素，在将其隐藏的过程中，可以对其进行一些变化的动画效果。之前学过了hide方法，hide方法在显示的过程中也可以有动画，但 是.hide()方法将为匹配元素的宽度，高度，以及不透明度，同时进行动画操作。这里将要学习一个新的显示方法slideUp方法，需要知道一点的就是：因为动画是异步的，所以要在动画之后执行某些操作就必须要写到回调函数里面，这里要特别注意
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .left div, .right div {
        width: 100%;
        height: 50px;
        padding: 5px;
        margin: 5px;
        border: 1px solid #ccc;
      }
      .left div {
        background: #bbffaa;
      }
      .right div {
        background: yellow;
      }
    </style>
    <script src="http://libs.baidu.com/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <div class="left">
      <h4>测试一</h4>
      <div id="a1"></div>
      <button>点击slideUp隐藏动画</button>
    </div>

    <div class="right">
      <h4>测试二</h4>
      <div id="a2"></div>
      <button>点击slideUp执行回调</button>
    </div>
    <script>
      $("button:first").click(function() {
        $("#a1").slideUp(3000);
      });

      $("button:last").click(function() {
        $("#a2").slideUp(3000, function() {
          alert("动画执行结束");
        });
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery中上卷下拉切换slideToggle
slideDown与slideUp是一对相反的方法。需要对元素进行上下拉卷效果的切换，jQuery提供了一个便捷方法slideToggle用滑动动画显示或隐藏一个匹配元素
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .left div, .right div {
        width: 100%;
        height: 50px;
        padding: 5px;
        margin: 5px;
        border: 1px solid #ccc;
      }
      .left div {
        background: #bbffaa;
      }
      .right div {
        background: yellow;
      }
    </style>
    <script src="http://libs.baidu.com/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <div class="left">
      <h4>测试一</h4>
      <div id="a1"></div>
      <button>点击slideToggle隐藏动画</button>
    </div>

    <div class="right">
      <h4>测试二</h4>
      <div id="a2"></div>
      <button>点击slideToggle执行回调</button>
    </div>
    <script>
      $("button:first").click(function() {
        $("#a1").slideToggle(3000);
      });

      $("button:last").click(function() {
        $("#a2").slideToggle(3000, function() {
          alert("动画执行结束");
        });
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery中淡出动画fadeOut
让元素在页面不可见，常用的办法就是通过设置样式的display:none。除此之外还可以一些类似的办法可以达到这个目的。这里要提一个透明度的方法，设置元素透明度为0，可以让元素不可见，透明度的参数是0~1之间的值，通过改变这个值可以让元素有一个透明度的效果。常见的淡入淡出动画正是这样的原理。
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      p {
        color: red;
      }
    </style>
    <script src="http://libs.baidu.com/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h2>fadeOut</h2>
    <p>测试文字淡入效果</p>
    <p>慕课网,专注分享</p>
    淡出的隐藏效果：
    <select id="animation">
      <option value="1">fadeOut( )</option>
      <option value="2">fadeOut( "slow" )</option>
      <option value="3">fadeOut( 3000 )</option>
      <option value="4">fadeOut( 1000, complete )</option>
      <option value="5">fadeOut( 1000, "linear" )</option>
      <option value="6">fadeOut( options )</option>
    </select>
    </br></br>
      
    <input id="btnFadeOut" type="button" value="点击淡出隐藏" />
    <input id="btnShow" type="button" value="显示" />
    <script>
      // 显示
      $("#btnShow").click(function(){
        $("p").show();
      })
      // 隐藏
      $("#btnFadeOut").click(function(){
        var v = $("#animation").val();
        if(v=="1"){
          $("p").fadeOut();
        } else if(v=="2"){
          $("p").fadeOut("slow");
        } else if(v=="3"){
          $("p").fadeOut(3000);
        } else if(v=="4"){
          $("p").fadeOut(1000, function(){
            // 弹两次，因为p元素有两个
            alert("隐藏完毕");
          });
        } else if(v=="5"){
          $("p").fadeOut(1000, "linear");
        } else if(v=="6"){
          $("p").fadeOut({
            duration: 3000
          });
        }
      })
    </script>
  </body>
</html>
```
<br>

#### jQuery中淡入动画fadeIn
fadeOut是淡出效果，相反的还有淡入效果fadeIn,方法使用上两者都是一致的，只是结果相反
- 淡入的动画原理：操作元素的不透明度从0%逐渐增加到100%
- 如果元素本身是可见的，不对其作任何改变。如果元素是隐藏的，则使其可见
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      p {
        color: red;
      }
    </style>
    <script src="http://libs.baidu.com/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h2>fadeIn</h2>
    <p>测试文字淡出效果</p>
    <p>慕课网,专注分享</p>
    淡入的显示效果：
    <select id="animation">
      <option value="1">fadeIn( )</option>
      <option value="2">fadeIn( "slow" )</option>
      <option value="3">fadeIn( 3000 )</option>
      <option value="4">fadeIn( 1000, complete )</option>
      <option value="5">fadeIn( 1000, "linear" )</option>
      <option value="6">fadeIn( options )</option>
    </select>
    </br></br>
      
    <input id="btnFadeOut" type="button" value="点击淡入显示" />
    <input id="btnShow" type="button" value="隐藏" />
    <script>
      // 显示
      $("#btnShow").click(function(){
        $("p").hide();
      })
      // 隐藏
      $("#btnFadeOut").click(function(){
        var v = $("#animation").val();
        if(v=="1"){
          $("p").fadeIn();
        } else if(v=="2"){
          $("p").fadeIn("slow");
        } else if(v=="3"){
          $("p").fadeIn(3000);
        } else if(v=="4"){
          $("p").fadeIn(1000, function(){
            // 弹两次，因为p元素有两个
            alert("显示完毕");
          });
        } else if(v=="5"){
          $("p").fadeIn(1000, "linear");
        } else if(v=="6"){
          $("p").fadeIn({
            duration: 3000
          });
        }
      })
    </script>
  </body>
</html>
```
<br>

#### jQuery中淡入淡出切换fadeToggle
fadeToggle()函数用于切换所有匹配的元素，并带有淡入/淡出的过渡动画效果。之前也学过toggle、slideToggle 也是类似的处理方式。fadeToggle切换fadeOut与fadeIn效果，所谓"切换"，即如果元素当前是可见的，则将其隐藏(淡出)；如果元素当前是隐藏的，则使其显示(淡入)。
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      p {
        color: red;
      }
    </style>
    <script src="http://libs.baidu.com/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h2>fadeToggle</h2>
    <p>测试文字淡出/淡入效果</p>
    <p>慕课网,专注分享</p>
    淡入淡出的效果：
    <select id="animation">
      <option value="1">fadeToggle( )</option>
      <option value="2">fadeToggle( "slow" )</option>
      <option value="3">fadeToggle( 3000 )</option>
      <option value="4">fadeToggle( 1000, complete )</option>
      <option value="5">fadeToggle( 1000, "linear" )</option>
      <option value="6">fadeToggle( options )</option>
    </select>
    </br></br>
      
    <input id="btnFadeSwitch" type="button" value="点击切换淡入/淡出" />
    <script>
      $("#btnFadeSwitch").click(function(){
        var v = $("#animation").val();
        if(v=="1"){
          $("p").fadeToggle();
        } else if(v=="2"){
          $("p").fadeToggle("slow");
        } else if(v=="3"){
          $("p").fadeToggle(3000);
        } else if(v=="4"){
          $("p").fadeToggle(1000, function(){
            // 弹两次，因为p元素有两个
            alert("显示完毕");
          });
        } else if(v=="5"){
          $("p").fadeToggle(1000, "linear");
        } else if(v=="6"){
          $("p").fadeToggle({
            duration: 3000
          });
        }
      })
    </script>
  </body>
</html>
```
<br>

#### jQuery中淡入效果fadeTo
淡入淡出fadeIn与fadeOut都是修改元素样式的opacity属性，但是他们都有个共同的特点，变化的区间要么是0，要么是1。如果要让元素保持动画效果，执行opacity = 0.5的效果时，要如何处理？<br>

如果不考虑CSS3，我们用JS实现的话，基本就是通过定时器，在设定的时间内一点点的修改opacity的值，最终为0.5，原理虽说简单，但是总不如一键设置这么舒服，jQuery提供了fadeTo方法，可以让改变透明度一步到位
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      p {
        color: red;
      }
    </style>
    <script src="https://libs.baidu.com/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h2>fadeTo</h2>
    <p>测试文字透明度效果</p>
    <p>慕课网,专注分享</p>
    透明度的设置效果：
    <select id="animation">
      <option value="1">fadeTo( "slow" ,0.5 )</option>
      <option value="2">fadeTo( 1000 ,0.2 )</option>
      <option value="3">fadeTo( 1000 ,0.9 ,complete)</option>
    </select>
    <input id="btnFadeSwitch" type="button" value="点击切换显示/隐藏" />
    <script type="text/javascript">
      //【切换显示/隐藏】按钮
      $("#btnFadeSwitch").click(function() {
        var v = $("#animation").val();
        if (v == "1") {
          $("p").fadeTo("slow", 0.5);
        } else if (v == "2") {
          $("p").fadeTo(1000, 0.2);
        } else if (v == "3") {
          $("p").fadeTo(1000, 0.9, function() {
            alert("完成");
          });
        }
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery中toggle与slideToggle以及fadeToggle的比较
- toggle：切换显示与隐藏效果，动态效果为从右至左。横向动作，toggle通过display来判断切换所有匹配元素的可见性
- sildeToggle：切换上下拉卷滚效果，动态效果从下至上。竖向动作，slideToggle 通过高度变化来切换所有匹配元素的可见性
- fadeToggle：切换淡入淡出效果，fadeToggle() 方法在 fadeIn() 和 fadeOut() 方法之间切换
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      div {
        padding: 20px;
        width: 100vw;
        background-color: aquamarine;
      }
      p {
        color: red;
      }
    </style>
    <script src="https://libs.baidu.com/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h2>toggle与slideToggle以及fadeToggle的比较</h2>
    <div>
      <p>测试文字淡入效果</p>
      <p>慕课网,专注分享</p>
    </div>
    动画切换：
    <select id="animation">
      <option value="1">toggle</option>
      <option value="2">slideToggle</option>
      <option value="3">fadeToggle</option>
    </select>
    <input id="btnShow" type="button" value="点击切换" />
    <script type="text/javascript">
      $("#btnShow").click(function() {
        var v = $("#animation").val();
        if (v == "1") {
          $("div").toggle();
        } else if (v == "2") {
          $("div").slideToggle("slow");
        } else if (v == "3") {
          $("div").fadeToggle(1000, "linear");
        }
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery中动画animate(上)
有些复杂的动画通过之前学到的几个动画函数是不能够实现，这时候就需要强大的animate方法了我们先来看看它的基本语法
- .animate( properties ,[ duration ], [ easing ], [ complete ] )（基本）
- .animate( properties, options )（进阶）

下面我们再来看看语法中各个参数代表的含义
- properties：一个或多个css属性的键值对所构成的Object对象。要特别注意所有用于动画的属性必须是数字的，除非另有说明；这些属性如果不是数字的将不能使用基本的jQuery功能。比如常见的，border、margin、padding、width、height、font、left、top、right、bottom、wordSpacing等等这些都是能产生动画效果的。background-color很明显不可以，因为参数是red或者GBG这样的值，非常用插件，否则正常情况下是不能只用动画效果的。注意，CSS 样式使用 DOM 名称（比如 "fontSize"）来设置，而非 CSS 名称（比如 "font-size"）。
- duration：动画执行的时间，持续时间是以毫秒为单位的；值越大表示动画执行的越慢，不是越快。还可以提供'fast' 和 'slow'字符串，分别表示持续时间为200 和 600毫秒。
- easing：jQuery库中默认调用 swing。如果需要其他的动画算法，请查找相关的插件
- complete：动画完成时执行的回调函数，这个可以保证当前动画确定完成后发会触发
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      p {
        color: red;
      }
      div {
        width: 200px;
        height: 100px;
        background-color: yellow;
        color: red;
      }
    </style>
    <script src="https://libs.baidu.com/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h2>animate(上)</h2>
    <p>慕课网,专注分享</p>
    <div id="aaron">内部动画</div>
    点击观察动画效果：
    <select id="animation">
      <option value="1">动画1</option>
      <option value="2">动画2</option>
      <option value="3">动画3</option>
      <option value="4">动画4</option>
    </select>
    <input id="exec" type="button" value="执行动画" />

    <script>
      $("#exec").click(function() {
        var v = $("#animation").val();
        var $aaron = $("#aaron");
        if (v == "1") {
          // 数值的单位默认是px
          $aaron.animate({
            width: 300,
            height: 300
          });
        } else if (v == "2") {
          // 在现有高度的基础上增加100px
          $aaron.animate({
            width: "+=100px",
            height: "+=100px"
          });
        } else if (v == "3") {
          $aaron.animate({
            fontSize: "26px"
          },2000,function() {
            alert("动画 fontSize执行完毕!");
          });
        } else if (v == "4") {
          //通过toggle参数切换高度
          $aaron.animate({
            width: "toggle"
          });
        }
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery中动画animate(下)
animate在执行动画中，如果需要观察动画的一些执行情况，或者在动画进行中的某一时刻进行一些其他处理，我们可以通过animate提供的第二种设置语法，传递一个对象参数，可以拿到动画执行状态一些通知，此时我们可以来分析下动画的进阶语法：`.animate( properties, options )`，其中options中参数可以是
- uration：设置动画执行的时间
- asing：规定要使用的 easing 函数，过渡使用哪种缓动函数
- tep：规定每个动画的每一步完成之后要执行的函数
- rogress：每一次动画调用的时候会执行这个回调，就是一个进度的概念
- omplete：动画完成回调
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      p {
        color: red;
      }
      div {
        width: 200px;
        height: 100px;
        background-color: yellow;
        color: red;
      }
      a {
        display: block;
      }
    </style>
    <script src="http://libs.baidu.com/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h2>animate(下)</h2>
    <p>慕课网,专注分享</p>
    <div id="aaron">内部动画</div>
    点击观察动画效果：
    <select id="animation">
      <option value="1">动画step动画</option>
      <option value="2">动画progress回调</option>
    </select>
    <a></a>
    <input id="exec" type="button" value="执行动画" />

    <script>
      $("#exec").click(function() {
        var v = $("#animation").val();
        var $aaron = $("#aaron");
        if (v == "1") {
          //观察每一次动画的改变
          $aaron.animate({
            height: "50"
          },{
            duration: 2000,
            //每一个动画都会调用
            step: function(now, fx) {
              $aaron.text("高度的改变值:" + now);
            }
          });
        } else if (v == "2") {
          //观察每一次进度的变化
          $aaron.animate({
            height: "50"
          },{
            duration: 2000,
            //每一步动画完成后调用的一个函数，
            //无论动画属性有多少，每个动画元素都执行单独的函数
            progress: function(now, fx) {
              $aaron.text("进度:" + arguments[1]);
            }
          });
        }
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery中停止动画stop
动画在执行过程中是允许被暂停的，当一个元素调用.stop()方法，当前正在运行的动画（如果有的话）立即停止，基本语法有以下两种
- .stop( [clearQueue ], [ jumpToEnd ] )
- .stop( [queue ], [ clearQueue ] ,[ jumpToEnd ] )

stop还有几个可选的参数，简单来说可以这3种情况
- .stop(); 停止当前动画，点击在暂停处继续开始
- .stop(true); 如果同一元素调用多个动画方法，尚未被执行的动画被放置在元素的效果队列中。这些动画不会开始，直到第一个完成。当调用.stop()的时候，队列中的下一个动画立即开始。如果clearQueue参数提供true值,那么在队列中的动画其余被删除并永远不会运行
- .stop(true,true); 当前动画将停止，但该元素上的 CSS 属性会被立刻修改成动画的目标值
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      p {
        color: red;
      }
      div {
        width: 200px;
        height: 100px;
        background-color: yellow;
        color: red;
      }
      a {
        display: block;
      }
    </style>
    <script src="https://libs.baidu.com/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h2>stop</h2>
    <p>慕课网,专注分享</p>
    <div id="aaron">内部动画</div>
    <input id="exec" type="button" value="执行动画" /><br /><br />

    点击观察动画效果：
    <select id="animation">
      <option value="1">stop()</option>
      <option value="2">stop(true)</option>
      <option value="3">stop(true,true)</option>
    </select>
    <a></a>
    <input id="stop" type="button" value="停止动画" />

    <script type="text/javascript">
      // 点击执行动画
      $("#exec").click(function() {
        $("#aaron").animate({
          height: 300
        },5000);
        $("#aaron").animate({
          width: 300
        },5000);
        $("#aaron").animate({
          opacity: 0.6
        },2000);
      });
      // 点击停止动画
      $("#stop").click(function() {
        var v = $("#animation").val();
        var $aaron = $("#aaron");
        if (v == "1") {
          //当前当前动画
          $aaron.stop();
        } else if (v == "2") {
          //停止所以队列
          $aaron.stop(true);
        } else if (v == "3") {
          //停止动画，直接跳到当前动画的结束
          $aaron.stop(true, true);
        }
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery中each方法的应用
jQuery中有个很重要的核心方法each，大部分jQuery方法在内部都会调用each，其主要的原因的就是jQuery的实例是一个元素合集。jQuery的大部分方法都是针元素合集的操作，所以jQuery会提供$(selector).each()来遍历jQuery对象。.each只是处理jQuery对象的方法，jQuery还提供了一个通用的jQuery.each方法，用来处理对象和数组的遍历
```js
jQuery.each(array, callback )
jQuery.each(object, callback )
```
第一个参数传递的就是一个对象或者数组，第二个是回调函数
```js
$.each(["Aaron", "慕课网"], function(index, value) {
  // index是索引,也就是数组的索引
  // value就是数组中的值了
})
```

each就是for循环方法的一个包装，内部就是通过for遍历数组与对象，通过回调函数返回内部迭代的一些参数，第一个参数是当前迭代成员在对象或数组中的索引值(从0开始计数)，第二个参数是当前迭代成员(与this的引用相同。<br>

jQuery.each()函数还会根据每次调用函数callback的返回值来决定后续动作。如果返回值为false，则停止循环(相当于普通循环中的break)；如果返回其他任何值，均表示继续执行下一个循环。
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      p {
        color: red;
      }
      div {
        width: 400px;
        height: 150px;
        background-color: yellow;
        color: red;
      }
    </style>
    <script src="https://libs.baidu.com/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h2>each方法</h2>
    <p>慕课网,专注分享</p>
    <div id="aaron"></div>
    点击观察结果：
    <select id="animation">
      <option value="1">each数组</option>
      <option value="2">each对象</option>
    </select>
    <input id="exec" type="button" value="执行动画" />

    <script>
      $("#exec").click(function() {
        var v = $("#animation").val();
        var $aaron = $("#aaron");
        $aaron.empty();
        if (v == "1") {
          // 遍历数组元素
          $.each(["Aaron", "慕课网"], function(i, item) {
            $aaron.append("索引=" + i + "; 元素=" + item + "<br>");
          });
        } else if (v == "2") {
          // 遍历对象属性
          $.each({
            name: "张三",
            age: 18
          },function(property, value) {
            $aaron.append("属性名=" + property + "; 属性值=" + value + "<br>");
          });
        }
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery中查找数组中的索引inArray
在PHP有in_array()判断某个元素是否存在数组中，JavaScript却没有，但是jQuery封装了inArray()函数判断元素是否存在数组中。注意了：在ECMAScript5已经有数据的indexOf方法支持了，但是jQuery保持了版本向下兼容，所以封装了一个inArray方法。jQuery.inArray()函数用于在数组中搜索指定的值，并返回其索引值。如果数组中不存在该值，则返回 -1。

用法非常简单，传递一个检测的目标值，然后传递原始的数组，可以通过fromIndex规定查找的起始值，默认数组是0开始
```js
jQuery.inArray( value, array ,[ fromIndex ] )
```
可以看下面代码加强印象
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      p {
        color: red;
      }
      div {
        width: 200px;
        height: 100px;
        background-color: yellow;
        color: red;
      }
    </style>
    <script src="http://libs.baidu.com/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h2>inArray方法</h2>
    <p>慕课网,专注分享</p>
    <div id="aaron"></div>
    点击观察结果：
    <select id="animation">
      <option value="1">inArray</option>
      <option value="2">inArray</option>
    </select>
    <input id="exec" type="button" value="执行动画" />
    
    <script>
      $("#exec").click(function() {
        var v = $("#animation").val();
        var $aaron = $("#aaron");
        $aaron.empty();
        if (v == "1") {
          var index = $.inArray("Aaron", ["test", "Aaron", "array", "慕课网"]);
          $aaron.text("Aaron的索引是: " + index);
        } else if (v == "2") {
          //指定索引开始的位置
          var index = $.inArray("a", ["a", "b", "c", "d", "a", "c"], 2);
          $aaron.text("a的索引是: " + index);
        }
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery中去空格神器trim方法
页面中，通过input可以获取用户的输入值，例如常见的登录信息的提交处理。用户的输入不一定是标准的，输入一段密码：'  1123456  "，注意了： 密码的前后会留空，这可能是用户的无心的行为，但是密码确实又没错，针对这样的行为，开发者应该要判断输入值的前后是否有空白符、换行符、制表符这样明显的无意义的输入值。需要注意的是：
- 移除字符串开始和结尾处的所有换行符，空格(包括连续的空格)和制表符（tab）
- 如果这些空白字符在字符串中间时，它们将被保留，不会被移除
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <script src="https://libs.baidu.com/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h2>trim方法</h2>
    未处理
    <input type="text" name="" id="results1" value=" 前后留空 " />
    <input id="exec1" type="button" value="点击执行" /> <br />
    trim处理
    <input type="text" name="" id="results2" value=" 前后留空 " />
    <input id="exec2" type="button" value="点击执行" />
    
    <script>
      $("#exec1").click(function() {
        alert("值的长度：" + $("#results1").val().length);
      });

      $("#exec2").click(function() {
        alert("值的长度：" + $.trim($("#results2").val()).length);
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery中DOM元素的获取get方法
jQuery是一个合集对象，如果需要单独操作合集中的的某一个元素，可以通过.get()方法获取到，注意三点
- get方法是获取的dom对象，也就是通过document.getElementById获取的对象
- get方法从前往后索引是从0开始索引
- get方法还可以从后往前索引，传递一个负索引值，注意的负值的索引起始值是-1
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      a {
        font-size: 30px;
        font-weight: 900;
      }
      div {
        width: 200px;
        height: 100px;
        background-color: yellow;
        color: red;
      }
    </style>
    <script src="http://libs.baidu.com/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h2>get方法</h2>
    <div id="aaron">
      <a>1</a>
      <a>2</a>
      <a>3</a>
      <a>4</a>
      <a>5</a>
    </div>
    <select id="animation">
      <option value="1">get正数索引参数</option>
      <option value="2">get负数索引参数</option>
    </select>
    <input id="exec" type="button" value="点击执行" />

    <script>
      $("#exec").click(function() {
        var v = $("#animation").val();
        var $aaron = $("#aaron a");
        //通过get找到第二个a元素，并修改蓝色字体
        if (v == "1") {
          $aaron.get(1).style.color = "blue";
        } else if (v == "2") {
          //通过get找到最后一个a元素，并修改字体颜色
          $aaron.get(-1).style.color = "#8A2BE2";
        }
      });
    </script>
  </body>
</html>
```
<br>

#### jQuery中DOM元素的获取index方法
get方法是通过已知的索引在合集中找到对应的元素。如果反过来，已知元素如何在合集中找到对应的索引呢？.index()方法，从匹配的元素中搜索给定元素的索引值，从0开始计数。
- 如果不传递任何参数给 .index() 方法，则返回值就是jQuery对象中第一个元素相对于它同辈元素的位置
- 如果在一组元素上调用 .index() ，并且参数是一个DOM元素或jQuery对象， .index() 返回值就是传入的元素相对于原先集合的位置
- 如果参数是一个选择器， .index() 返回值就是原先元素相对于选择器匹配元素的位置。如果找不到匹配的元素，则 .index() 返回 -1
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      a {
        font-size: 30px;
        font-weight: 900;
      }
    </style>
    <script src="https://libs.baidu.com/jquery/1.9.1/jquery.js"></script>
  </head>

  <body>
    <h2>index方法</h2>
    <ul>
      <a></a>
      <a></a>
      <li id="test1">1</li>
      <li id="test2">2</li>
      <li id="test3">3</li>
    </ul>
    <ul>
      <li id="test4">4</li>
      <li id="test5">5</li>
      <li id="test6">6</li>
    </ul>
    <select id="animation">
      <option value="1">index无参数</option>
      <option value="2">index传递dom</option>
      <option value="3">index传递jQuery对象</option>
    </select>
    <input id="exec" type="button" value="点击执行" />
    <br />
    <br />
    索引结果：
    <span></span>

    <script>
      $("#exec").click(function() {
        var v = $("#animation").val();
        var $span = $("span");
        $span.empty();
        if (v == "1") {
          //找到第一个li的同辈节点中的索引位置
          $span.text($("li").index());
        } else if (v == "2") {
          //通过传递dom查找
          $span.text($("li").index(document.getElementById("test5")));
        } else if (v == "3") {
          //通过传递jQuery对象查找
          $span.text($("li").index($("#test6")));
        }
      });
    </script>
  </body>
</html>
```
<br>










