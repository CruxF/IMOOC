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


# 6、[jQuery基础（二）](https://www.imooc.com/learn/530)
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






