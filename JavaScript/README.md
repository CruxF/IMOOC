# 前言

由于这会是一篇很长的课程学习总结，为了优化大家的阅读体验，强烈建议安装Chrome浏览器的插件——GayHub。[下载安装地址](https://github.com/jawil/GayHub)<br>


# 1、RegExp => [JavaScript正则表达式](https://www.imooc.com/learn/706)

这是非常好的一门入门正则表达式的课程，但是总感觉少了点什么。后来想了想，少的东西应该是一些案例的训练，为此我额外写了篇博文，以此来更好的学习和进阶JavaScript正则表达式，[点我呀](https://github.com/CruxF/Blog/issues/3)<br>

下面这篇是写给自己看，旁人慎入....::joy::<br>
[什么乱七八糟呀](https://github.com/CruxF/IMOOC/blob/master/JavaScript/RegExp/%E8%AF%B4%E6%98%8E.txt)<br>


# 2、ProgressBar => [常用的网页加载进度条](https://www.imooc.com/learn/858)

#### 或许有用的网站
1、[免费的gif动画下载](https://icons8.com/preloaders);<br>
2、[另外一个免费的gif动画下载](https://loading.io/);<br>
3、[自动处理CSS 3前缀在线网站](http://autoprefixer.github.io),代码粘贴进去，等待一段时间即可。<br>

#### Demo1定时的进度条
这是一个伪加载完成的进度条，页面跳转时间由自己来设置，实用性并不高。<br>
[案例演示](https://cruxf.github.io/IMOOC/JavaScript/ProgressBar/Demo1.html)

#### Demo2通过加载状态触发的进度条
知识点：<br>
1、document.onreadystatechange  页面加载状态改变时的事件<br>
2、document.readyState  返回当前文档的状态<br>
相关readyState状态码：<br>
1、uninitialized  还未开始载入<br>
2、loading  载入中<br>
3、interactive  已加载，文档与用户可以开始交互<br>
4、complete  载入完成<br><br>
通过对页面的加载状态来触发相应的事件，这是一种合适的进度条制作。<br>
[案例演示](https://cruxf.github.io/IMOOC/JavaScript/ProgressBar/Demo2.html)

#### Demo3通过CSS3制作进度条
利用CSS3动画制作的进度条效果，简单好玩，同样也是通过加载状态来触发相应的事件。<br>
[案例演示](https://cruxf.github.io/IMOOC/JavaScript/ProgressBar/Demo3.html)

#### Demo4固定在头部的进度条
在每一段结构代码后面添加jQuery中的animate方法增加固定在顶部元素的长度，当长度达100%后触发事件，隐藏遮罩层，这也是一种伪加载完毕事件，实用性并不强。<br>
[案例演示](https://cruxf.github.io/IMOOC/JavaScript/ProgressBar/Demo4.html)

#### Demo5实时监测加载的进度条
知识点：<br>
1、建立图像对象：var 名称 = new Image()<br>
2、属性：border complete height...<br>
3、事件：onload onerror onkeydown onkeypress...<br>
4、src属性一定要写到onload的后面，否则程序在IE中会出错<br>
用户体验比较好的一种加载方式，能够随时随地知道资源加载到了哪一步。<br>
[案例演示](https://cruxf.github.io/IMOOC/JavaScript/ProgressBar/Demo5.html)<br><br>


# 3、DelaBlog => [CSS3扁平化博客之文章页及常用组件](https://www.imooc.com/learn/598)

该课程是一个系列的，之前的源码和分析在这里——[《HTML5和CSS3扁平化风格博客》](https://github.com/CruxF/IMOOC/tree/master/HTML_CSS)。相比于之前的课程，增加了蒙层、侧边栏弹出、回到顶部效果，以及一个博文页面。<br>

实现效果的过程并不复杂，首先获取目标元素，接着为目标元素绑定事件。在使用jQuery绑定事件中，一共有四种方式，分别是bind、live、delegate和on，其中bind应用的最为广泛，on为官方推荐使用，因为其效率高，[拓展阅读](https://www.cnblogs.com/sunliyuan/p/5804803.html)<br>

只要大体上思路有了，那么剩下的代码实现就是对jQuery中API的记忆，比如：`fadeIn()`、`fadeOut()`、`animate()`和`trigger（）`的概念和如何使用的。关于文章那个页面，实现更为简单，我将CSS代码抽离出来，使其成为一个单独的css文件，这样有利于日后的修改和管理。<br>
[案例演示](https://cruxf.github.io/IMOOC/JavaScript/DelaBlog/index.html)<br><br>


# 4、Popup => [弹出层效果](https://www.imooc.com/learn/58)

一大早看了这门课程，也是醉了，如果现在你用该方式去开发一个网站，估计会被同事揍得不要不要的。该课程的缺陷很多，首先，在表现与结构分离的今天，这显然是不合适的；接着，代码风格很混乱；然后就是明明十分简单的一件事情，可能为了凑时间，硬是搞得很复杂，并且有很多代码明显的不合理。<br>

针对这种情况，我基本重写了一次课程代码，大家可以结合[课程源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/Popup/demo.html)来对比，来分析。我的[JS代码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/Popup/js/index.js)也有需要改进的地方，比如将`document.getElementById()`封装成一个方法来获取HTML的DOM会使代码更加简洁和优美，在这只是给大家提个简单的思路。下面是我重写后的代码效果，与课程的效果一毛一样。<br>
[案例演示](https://cruxf.github.io/IMOOC/JavaScript/Popup/index.html)<br><br>


# 5、TabCar => [Tab选项卡切换效果](https://www.imooc.com/learn/176)

课程的JavaScript部分有很多亮点，比如一开始就使用一个$()封装了频繁用到的documen.getElementById()。
```
function $(id) {
  return typeof id === 'string' ? document.getElementById(id) : id;
}
```
课程循序渐进，简洁明了的注释，让我们充分的理解了定时器，以及学会如何去使用。代码逻辑容易明白，在开发中比较常见的问题一个是this的指向问题，另外一个就是清除定时器问题。关于这两个问题老师有提到，而我也在[源码](https://github.com/CruxF/IMOOC/tree/master/JavaScript/TabCar)中有总结了一些，有兴趣的可以去看看。<br>

由于这是一个分步讲解课程，我将代码也写成了分步，为了能够与课程同步以及方便进行分析，编程训练也摘抄了一些认为较好的贴了上来，下面是一堆的演示效果。<br>
1、[滑动、点击切换效果](https://cruxf.github.io/IMOOC/JavaScript/TabCar/index1-4.html)<br>
2、[编程练习一效果](https://cruxf.github.io/IMOOC/JavaScript/TabCar/test01.html)<br>
3、[延迟切换效果](https://cruxf.github.io/IMOOC/JavaScript/TabCar/index2-1.html)<br>
4、[JavaScript自动切换效果](https://cruxf.github.io/IMOOC/JavaScript/TabCar/index3-1.html)<br>
5、[JavaScript自动/手动切换效果](https://cruxf.github.io/IMOOC/JavaScript/TabCar/index3-2.html)<br>
6、[JavaScript自动切换代码优化效果](https://cruxf.github.io/IMOOC/JavaScript/TabCar/index3-3.html)<br>
7、[编程练习二效果](https://cruxf.github.io/IMOOC/JavaScript/TabCar/test02.html)<br>
8、[编程练习三效果](https://cruxf.github.io/IMOOC/JavaScript/TabCar/test03.html)<br><br>

# 6、BinaryTree => [JavaScript实现二叉树算法](https://www.imooc.com/learn/888)

根据该课程，我写了一篇文章，那里有比较详细的笔记，[点击我呀](https://github.com/CruxF/IMOOC/issues/2)，由于在最后小游戏制作过程中，老师貌似少录制了一节课程，导致小游戏运行不起来。最后，我在问答区找到了一份能够跑起来的代码，并将它copy下来，[可点击这里进行查看](https://github.com/CruxF/IMOOC/blob/master/JavaScript/BinaryTree/index01.html?1519633599043)，可点击下方按钮查看运行效果。
[点击我呀](https://cruxf.github.io/IMOOC/JavaScript/BinaryTree/index01.html)<br><br>

# 7、StarScore => [星级评分原理和实现(上)](https://www.imooc.com/learn/842)

这是十分优秀与高级的一门课程，干货满满。讲师在课程中分享了众多JavaScript开发的重点与难点，如果你们非要认为这是jQuery的知识点而不是JS的，那我也无法可说了。<br>

由于这门课程是层层深入的，因此为了更好的去剖析和理解代码，我也将课程每个章节的源码独立开了，下面是我对每个章节代码的理解与分析，如有不当，希望指出。<br>

**1、章节3-1：**<br> 
创建HTML结构和填写CSS样式。看到很多人对讲师没有提供背景图而发牢骚，此时我只能说：要么智商需要充值，要么就是不善思考。在截图软件遍布的时代，居然还不能获得网页上的一张图片，也是让人匪夷所思。在课程章节2-1中，1:42处，可以利用QQ、微信或者其他截图软件将背景图截取下来，这么做需要修改的东西仅仅是CSS代码中width、height和background-position属性值，下面是这个课程章节的源码和演示。<br>
[我是源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/StarScore/index3-1.html)<br>
[我是效果](https://cruxf.github.io/IMOOC/JavaScript/StarScore/index3-1.html)<br><br>

**2、章节3-2：**<br> 
这节课程代码很容易理解，毕竟是面向结构编程的。首先我们需要明白什么是jQuery对象？什么DOM对象？简单的来说jQuery对象与DOM对象是不一样的，大概就是：jQuery是一个类数组对象，而DOM对象就是一个单独的DOM元素。具体有以下区别：
- （1）通过jQuery方法包装后的对象，是一个类数组对象。它与DOM对象完全不同，唯一相似的是它们都能操作DOM。
- （2）通过jQuery处理DOM的操作，可以让开发者更专注业务逻辑的开发，而不需要我们具体知道哪个DOM节点有那些方法，也不需要关心不同浏览器的兼容性问题，我们通过jQuery提供的API进行开发，代码也会更加精短。

记得刚开始的时候要将经常使用到的元素用一个变量缓存起来，以此来提高网站的性能。在lightOn函数中，遍历了以类名为`rating-item`的一个集合，当集合中某些元素的下标（index）小于num，那么就设置当前元素的css中的background-position，$(this)代表的是当前类名为`rating-item`的元素。<br>

在鼠标移入、点击和移出事件中的代码也十分容易理解，明白`$(this).index()`为当前元素的下标（下标从0开始），以及知道num是个全局变量即可，下面是这个课程章节的源码和演示。<br>
[我是源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/StarScore/index3-2.html)<br>
[我是效果](https://cruxf.github.io/IMOOC/JavaScript/StarScore/index3-2.html)<br><br>

**3、章节3-4：**<br> 
从这个章节开始，干货就满满了，下面稍微提一下我认为比较重要和有用的几个方面。
- 为了避免全局变量的污染，使用立即执行函数形成了一个单独的作用域，封装了一些外部无法读取的私有变量。虽然ES6规范出来了，使得JavaScript有了块作用域，以及let和const关键字能够解决全局变量带来的问题，但是这个知识点仍然是有用的。
- 使用事件委托减少访问DOM的次数，从而减少浏览器的重绘和重排，提高程序的性能。什么是事件委托？其中的原理是什么？在[这篇文章中](https://www.cnblogs.com/liugang-vip/p/5616484.html)讲解的十分详细。

下面正式开始对一些代码的分析，我分析代码的思路一般是这样的：顺着数据（参数）的流向，一步一步的使用console.log()进行分析。<br>

程序开始执行的代码：`rating.initfn('#rating', 2);`，当你们知道在JavaScript中，函数为一等公民时，那么就能够知道虽然rating是被定义好的一个立即执行函数的名称，但是此时rating代表的却是一个对象，调用了它的内部return出来的这个initfn函数；initfn代表的是立即执行函数中init这个初始函数。<br>

接着传入的数据流向了下面这段代码：
```
var init = function(el, num) {
  var $rating = $(el);
  var $item = $rating.find('.rating-item');
  // 调用lightOn函数，并传入参数
  lightOn($item, num);
  // 事件绑定(将子元素的事件委托给父元素处理)
  $rating.on('mouseover', '.rating-item', function() {
    lightOn($item, $(this).index() + 1);
  }).on('click', '.rating-item', function() {
    num = $(this).index() + 1;
  }).on('mouseout', function() {
    lightOn($item, num);
  });
};
```
el代表的就是传入进来的id值#rating，在执行鼠标事件之前，调用了外部函数lightOn，并且传入相关的参数。在鼠标事件中，希望你们能够理解jQuery事件委托的写法，在这不说明，毕竟语法清晰易懂。下面来看看lightOn的代码：
```
var lightOn = function($item, num) {
  $item.each(function(index) {
    if(index < num) {
      $(this).css('background-position', '0 -40px');
    } else {
      $(this).css('background-position', '0 0');
    }
  })
}
```
同样清晰易懂，$item代表的是传入进来的以类名为rating-item的一个集合，num就是传入进来的要被点亮的星星数量。<br>

最后我们来看一下将rating函数以插件的方式进行调用的核心代码：
```
$.fn.extend({
  ratingStar: function(num) {
    return this.each(function() {
      init(this, num)
    })
  }
})
```
不知道你们有没有想过，为什么要把一个jQuery函数封装成插件形式给外部调用？目前我认为的原因是：保证函数内部代码的安全；提高代码的复用性；使外部调用函数更加简洁方便。<br>

瞎扯了这么多，现在我们先分析一下`$.fn.extend`是什么意思。从字面理解就是扩展$.fn的方法，通过查阅资料得知`$.fn =  jQuery.fn = jQuery.prototype = 原型`，因此`$.fn.extend`的意思就是在jQuery原型上扩展了一个方法，从下面可知，这个方法能够从外部接收一个参数，名称叫ratingStar。<br>

ratingStar方法中return的第一个this代表的是一个数组，这个数组到底是啥我也是很懵逼，老师说这两个this都代表的是传入进来的值，因为传入值可能是个类，所以会有多个，因此才写了each遍历，额，更懵逼了；第二个this代表的是传入进来的值。下面我们来测试一下老师说的this代表的值，测试方法很简单，将插件式调用那块的传入值修改为class名即可：
```
// rating.initfn('#rating', 2);
// rating.initfn('#ratingOne', 3);
// 插件式调用
$('.rating').ratingStar(4);
```
果然，老师说的没错啊！牛逼的老师，牛逼的JS，你们也会很牛逼的，加油！下面是这个课程章节的源码和演示。<br>
[我是源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/StarScore/index3-4.html)<br>
[我是效果](https://cruxf.github.io/IMOOC/JavaScript/StarScore/index3-4.html)<br><br>

**4、章节4-3：**<br> 
在这章节中，老师讲了关于设计模式和JavaScript原型的知识，都是成为一个高级开发者的重点和难点啊，下面是我原封不动摘抄的内容。<br>

什么是设计模式？
- 大白话：当封装一个函数时，你是在复用代码；而当使用一个设计模式时，你是在复用他人的经验。
- GoF定义：设计模式是在面向对象软件设计过程中针对特定问题的简洁而优雅的解决方案。
- 百度百科定义：设计模式是一套被反复使用、多数人知晓的、经过分类编目的、代码设计经验的总结。

都有哪些设计模式？
- 创建型模式：单例模式、抽象工厂模式、建造者模式、工厂模式、原型模式；
- 结构型模式：适配器模式、桥接模式、装饰模式、组合模式、外观模式、享元模式、代理模式；
- 行为型模式：模板方法模式、命令模式、迭代器模式、观察者模式、中介者模式、备忘录模式、解释器模式、状态模式、策略模式、职责链模式、访问者模式。

为什么要学习设计模式？
- 和其他程序猿之间有共同语言；
- 保证代码的可维护性、扩展性、复用性和灵活性。

学习设计模式的各个阶段
- 一点儿不懂，根本想不到用设计模式，代码写的往往比较糟糕；
- 很开心，到处想着想要学过的模式，时常造成误用模式而不自知；
- 觉得好多模式长得都一样，困惑，但深知误用之害，使用时犹豫；
- 灵活的运用模式，甚至不用具体的某种模式也能设计出优秀的代。

关于原型和原型链的知识，这里有一篇我有史以来看过最好的解读，[传送门](https://github.com/mqyqingfeng/Blog/issues/2)，下面是这个课程章节的源码和演示（记得F12看效果）。<br>
[我是源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/StarScore/index4-3.html)<br>
[我是效果](https://cruxf.github.io/IMOOC/JavaScript/StarScore/index4-3.html)<br><br>

**5、章节4-5：**<br> 
这个章节要说的东西太多了，因此我在这里分为两部分，第一部分讲述的是如何利用原型实现整颗星的展示方式，第二部分讲述的是如何制作类似分页功能的过程，下面来看下第一部分代码的实现思路，分析过程依然是跟着数据流向走。

数据首先从这段代码中进入：
```
rating.initfn('#rating', {
  num: 3,
});
```
以上各个值代表什么之前有说明，在这里不进行重复。<br>

接着数据就来到了这段代码：
```
var init = function(el, options) {
  options = $.extend({}, defaults, options);
  new LightEntire(el, options).init()
};
```
其中el代表的是传入过来的id或者class，options代表的是传递过来的对象。然而第二个options代表的又是什么呢？首先我们需要知道$.extend()能够合并对象，并且后一个对象中的属性值会覆盖掉前一个对象中同名属性的值，defaults是一个定义了默认值的对象。那么由此可知这一行代码`$.extend({}, defaults, options);`的意思就很明确了，就是把options对象和defaults对象进行合并，然后将合并后的属性值放到前面的空对象中。因此，第二个options代表的就是由传入对象和默认对象合并之后的一个对象。最后再把el和options以参数的方式赋给LightEntire这个构造函数，这个构造函数又调用了它内部的init()方法。<br>

然后数据来到LightEntire这个构造函数中：
```
var LightEntire = function(el, options) {
  this.$el = $(el);
  this.$item = this.$el.find('.rating-item');
  this.opts = options;
};
```
以上代码都很容易理解，各个值代表什么一眼就能发现，如果还是很迷糊，你们可以自己使用console.log()测试各个值到底是啥。<br>

最后数据就来到了构造函数中的init方法上：
```
LightEntire.prototype.init = function() {
  this.lightOn(this.opts.num);
  this.bindEvent();
};
```
总之，第一部分的代码很容易理解。仔细+认真跟着老师的思路、跟着数据的流动走，那么就能够快速的理清自己的头绪。下面来看第二部分代码的分析。<br><br>


第二部分代码和第一部分的代码大部分类似，数据的流向也是一样，不同的是在bindEvent()这个方法中增加了很多处理。首先看这么一段代码：
```
if(!this.opts.readOnly) {
  this.bindEvent();
}
```
这段代码的作用就是判断是否需要动态修改点亮星星的数量，readOnly值的真假我们能够自行设置。<br>

接着我们来看第一种实现分页效果方法的核心代码：
```
// 方法实现代码
LightEntire.prototype.bindEvent = function() {
  var self = this;
  var itemLength = self.$item.length;
  
  self.$el.on('mouseover', '.rating-item', function() {
    var num = $(this).index() + 1;
    self.lightOn(num);
    (typeof self.opts.select === 'function') && self.opts.select.call(this, num, itemLength);
  }).on('click', '.rating-item', function() {
    self.opts.num = $(this).index() + 1;
    (typeof self.opts.chosen === 'function') && self.opts.chosen.call(this, self.opts.num, itemLength);
  }).on('mouseout', function() {
    self.lightOn(self.opts.num);
  });
};

// 调用方法传参
rating.initfn('#rating', {
  num: 4,
  select: function(num, total) {
    console.log(num + '/' + total);
  },
  chosen: function(num, total) {
    console.log(num + '/' + total);
  }
});
```
其他的不说，最核心、最主要和最优美的是这行代码：`(typeof self.opts.select === 'function') && self.opts.select.call(this, num, itemLength)`，这行代码的首先判断了传入值select值是否为一个函数，如果是的话则执行opts对象中select()这个方法，如果否的则不执行。为什么会这样？看一下JavaScript中的规则即可：
- && 操作符特点：逻辑运算表达式中只要一个是false就取false的值，都是true取后面，都是false取前面。
- || 操作符特点：逻辑运算表达式中只要一个是true就取true的值，都是true取前面，都是false取后面。

因为只要传入对象中含有select这个值，那么`self.opts.select.call(this, num, itemLength)`就为true，所以只要判断`(typeof self.opts.select === 'function')`为true，那么这代码`self.opts.select.call(this, num, itemLength)`就会被执行，其中call的作用是强制把this的作用域绑定到了当前调用者的位置上。<br>

第二种实现分页效果方法的核心代码：
```
// 方法实现代码
LightEntire.prototype.bindEvent = function() {
  var self = this;
  var itemLength = self.$item.length;
  
  self.$el.on('mouseover', '.rating-item', function() {
    var num = $(this).index() + 1;
    self.lightOn(num);
    self.$el.trigger('select', [num, itemLength]);
  }).on('click', '.rating-item', function() {
    self.opts.num = $(this).index() + 1;
    self.$el.trigger('chosen', [self.opts.num, itemLength]);
  }).on('mouseout', function() {
    self.lightOn(self.opts.num);
  });
};

// 调用方法传参
rating.initfn('#rating', {
  num: 4
});
$('#rating').on('select', function(e, num, total) {
  console.log(num + '/' + total);
}).on('chosen', function(e, num, total) {
  console.log(num + '/' + total);
});
```
这种实现方式就有意思了，主要看这行代码：`self.$el.trigger('select', [num, itemLength])`，其中的原理是这样的：当鼠标事件发生的时候，trigger()这个方法能够向外部发布一个自定义事件select，同时传入相关的参数。最后外部开开心心的执行那个自定义select事件就可以了：
```
$('#rating').on('select', function(e, num, total) {
  console.log(num + '/' + total);
})
```
这种方式有个专业名词，就是发布订阅模式。意思就是一方发布一个事件，另一方订阅（执行）该事件。<br>

这个章节的代码就分析到这，下面是这个课程章节的源码和演示。<br>
[我是源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/StarScore/index4-5.html)<br>
[我是效果](https://cruxf.github.io/IMOOC/JavaScript/StarScore/index4-5.html)<br><br>

**6、章节4-6：**<br> 
该怎么说这个章节的代码，说简单也不是很简单，说困难也不是很困难，我的内心对这一节的代码也是很疑惑的（后来再看一遍视频懂了^-^）。不管这么多了，先说一下我比较理解的代码，在这一节中主要添加的是实现半颗星星的实现方法，下面来看页面载入的初始代码：
```
LightHalf.prototype.lightOn = function(num) {
  var count = parseInt(num);
  var isHalf = count !== num;
  this.$item.each(function(index) {
    if(index < count) {
      $(this).css('background-position', '0 -40px');
    } else {
      $(this).css('background-position', '0 0');
    }
  });
  if(isHalf) {
    this.$item.eq(count).css('background-position', '0 -80px')
  }
};
```
这个方法实现的就是当传入值num不为整数的时候，那么就通过调整雪碧图的background-position把半颗星显示出来即可，没啥好说的，略微简单。<br>

接下来看一下鼠标事件代码：
```
LightHalf.prototype.bindEvent = function() {
  var self = this;
  var itemLength = self.$item.length;
  self.$el.on('mousemove', '.rating-item', function(e) {
    var $this = $(this);
    var num = 0;
    if(e.pageX - $this.offset().left < $this.width() / 2) {
      self.add = 0.5;
    } else {
      self.add = 1;
    }
    num = $this.index() + self.add;
    self.lightOn(num);
  }).on('click', '.rating-item', function() {
    self.opts.num = $(this).index() + self.add;
  }).on('mouseout', function() {
    self.lightOn(self.opts.num);
  });
};
```
此时，要把mouseover事件换成mousemove事件，原因是前者只执行鼠标移入的那一次事件，而后者是随时监听鼠标在星星区域移动的位置而执行相应的程序。代码中e.pageX代表的是鼠标距离浏览器窗口最左边的距离，$this.offset().left代表的是当前星星容器左侧距离浏览器最左边窗口的距离，$this.width()代表的是整个星星容器的宽度。动手画个图，然后利用数学思维和空间思维稍微一想，就能明白了上述代码的含义。<br>

让我一开始感到迷糊和疑惑的是下面一段代码：
```
// 默认参数
var defaults = {
  mode: 'LightEntire',
  num: 0,
  readOnly: false,
  select: function() {},
  chosen: function() {}
};

var mode = {
  'LightEntire': LightEntire,
  'LightHalf': LightHalf
}

// 创建初始方法
var init = function(el, options) {
  options = $.extend({}, defaults, options);
  if(!mode[options.mode]) {
    options.mode = 'LightEntire';
  }
  new mode[options.mode](el, options).init();
};
```
mode到底是个啥玩意啊！！！？？一开始十分痛苦，想不出所以然，mode简直让人傻傻分不清楚；后来再看几次视频，豁然开朗，终于得知这段代码的奥义，也明白了老师实在是皮的很。<br>

一切的分析从这段代码开始：
```
var init = function(el, options) {
  options = $.extend({}, defaults, options);
  if(!mode[options.mode]) {
    options.mode = 'LightEntire';
  }
  new mode[options.mode](el, options).init();
};
```
这么多mode，看着实在是让人神经混乱，还好我理清了。这行代码`mode[options.mode]`中，第一个mode代表的是var mode = {}这个对象，第二mode代表的是传递过来的mode值。由于在var mode = {}对象中，字符串'LightEntire'映射的是LightEntire这个构造函数，字符串'LightHalf'映射的是LightHalf这个构造函数，于是我们便能得知：当传入进来的mode值为LightHalf，那么mode[LightHalf]就映射到了LightHalf这个构造函数中，同理传入进来的mode值为LightEntire，那么mode[LightEntire]就映射到了LightEntire这个构造函数中。假如传入值既不为LightEntire也不为LightHalf，那么就默认将options.mode值设为LightEntire。<br>

如果还是很迷糊，那么将最开始的一段代码这么改造即可：
```
// 默认参数
var defaults = {
  mode: 'LightEntire',
  num: 0,
  readOnly: false,
  select: function() {},
  chosen: function() {}
};

var modeValue = {
  'LightEntire': LightEntire,
  'LightHalf': LightHalf
}

// 创建初始方法
var init = function(el, options) {
  options = $.extend({}, defaults, options);
  if(!modeValue[options.mode]) {
    options.mode = 'LightEntire';
  }
  new modeValue[options.mode](el, options).init();
};
```
是不是马上就明白过来了呢？好了，这个章节的代码分析就到这，下面是这个课程章节的源码和演示。<br>
[我是源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/StarScore/index4-6.html)<br>
[我是效果](https://cruxf.github.io/IMOOC/JavaScript/StarScore/index4-6.html)<br><br>

**7、章节4-7：**<br> 
~~这章节的代码真的是十分迷糊啊，完全讲不清，虽然自己懂得大概的实现思路，代码也看得懂，但是就是讲不清楚，脑子一团浆糊，看来还是由于JS功底不够扎实啊。下面贴课程章节的源码和演示谢罪。~~ 

本来这节的分析是已经放弃了，然而在看老师下一个课程的时候，发现这节的没搞懂，接下来有很多章节的知识点都无法明白，于是又再次逼自己回来重新看一遍。现在已经有些思路，下面做简单的一些分析。<br>

这章节的代码精髓首先是抽象出一个父类，这个父类的特点就是含有实现整颗星星和实现半颗星星的共有方法和属性，其中需要明白的是在bindEvent()这个方法中，`self.select(e,$this)`实现的就是返回self.add这个值让lightOn()判断是到底显示整颗星还是半颗星。下面看重点代码段分析：
```
// 点亮半颗星星
var LightHalf = function(el, options) {
  Light.call(this, el, options);
  this.selectEvent = 'mousemove';
};
extend(LightHalf, Light);
LightHalf.prototype.lightOn = function(num) {
  var count = parseInt(num);
  var isHalf = count !== num;
  Light.prototype.lightOn.call(this, count);
  if(isHalf) {
    // 获取当前的星星位置，让它变成半星
    this.$item.eq(count).css('background-position', '0 -80px')
  }
};
LightHalf.prototype.select = function(e, $this) {
  if(e.pageX - $this.offset().left < $this.width() / 2) {
    this.add = 0.5;
  } else {
    this.add = 1;
  }
};
```
为什么要贴这段代码，因为这一段代码搞明白了，那么就能理解子类继承父类的流程。首先子类继承父类的属性：`Light.call(this, el, options);`，call的作用是让this强制绑定LightEntire这个子类对象，` this.selectEvent = 'mousemove';`是覆盖父类的一个属性。<br>

接下来是子类继承父类中所有的方法：`extend(LightHalf, Light);`，重写了父类lightOn()这个方法中的部分代码，实现显示半颗星的功能。现在问题来了，既然在外部已经继承了父类的所有方法，为什么还要在内部重新继承一次：`Light.prototype.lightOn.call(this, count);`？我个人的理解是为了让this强制绑定子类对象。接着在子类中完全重写select()这个方法即可。<br>

最后就是继承方法的解析，有点绕，真不好说：
```
var extend = function(subClass, superClass) {
  var F = function() {};
  F.prototype = superClass.prototype;
  subClass.prototype = new F();
  subClass.prototype.constructor = subClass;
};
```
首先分析下两个参数和一个变量代表的是什么。subClass代表的是传入进来的子类构造函数，superClass代表的是传入进来的父类构造函数，F代表的是一个空的构造函数。接下来，求你们看[这篇文章](https://github.com/mqyqingfeng/Blog/issues/2)吧，我就不在这里误人子弟了。下面贴课程章节的源码和演示：<br>
[我是源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/StarScore/index4-7.html)<br>
[我是效果](https://cruxf.github.io/IMOOC/JavaScript/StarScore/index4-7.html)<br><br>

**7、章节4-8：**<br> 
~~一脸懵逼，老师能力杠杠的，自己还是个小弱鸡，只能默默努力，只能默默贴上课程章节的源码和演示。~~ 

重新分析还是之前的原因，编程啊，果然是不能偷懒的，不然结下的苦果会无边无际。好了，废话不多说，下面开始进行核心代码分析：
```
// 创建初始方法
var init = function(el, option) {
  var $el = $(el);
  var rating = $el.data('ratingData');
  var options = $.extend({}, defaults, typeof option === 'object' && option);
  if(!mode[options.mode]) {
    options.mode = 'LightEntire';
  }
  if(!rating) {
    $el.data('ratingData', (rating = new mode[options.mode](el, options)));
    rating.init();
  }
  if(typeof option === 'string') {
    rating[option]();
  }
};
```
以上代码有所改动，为了更好的分析，将课程的rating变量更换为ratingData变量。这样代码之间逻辑就很清晰了，首先我们需要明白在jQuery中data() 方法是向被选元素附加数据，或者从被选元素获取数据。那么我们就能知道这行代码`$el.data('ratingData', (rating = new mode[options.mode](el, options)));`的目的是将创建的LightEntire实例或者LightHalf实例保存在ratingData变量中，假如在开始并没有取到ratingData变量的值，那么那行代码就会被执行从而向ratingData变量中存放一个实例对象，这么来写其实为了程序的调用中最好只有一个实例。<br>

接下来就是判断的传递过来option是否为一个字符串，如果是的话则执行`rating[option]();`方法，这行代码其实等同于`rating.unbindEvent()`。这样来写，是不是整个逻辑就变得清晰很多？之前思路一直卡在这里，也是不知道为什么，休息几天再仔细研究了一下代码马上就发现了奥秘的所在。下面贴课程章节的源码和演示：<br>[我是源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/StarScore/index4-8.html)<br>
[我是效果](https://cruxf.github.io/IMOOC/JavaScript/StarScore/index4-8.html)<br><br>

**8、章节5-1：**<br> 
和前面两个章节比起来，这节就十分简单了，只要修改HTML结构和CSS代码即可，看一遍视频就能懂，思路不过就是改变了图片的引用地址，没啥好说的，下面贴上课程章节的源码和演示。<br>
[我是源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/StarScore/index5-1.html)<br>
[我是效果](https://cruxf.github.io/IMOOC/JavaScript/StarScore/index5-1.html)<br>

虽然被这门课程折磨的不要不要的，可是我依然会选择继续观看该课程的下个系列，加油！<br><br>


# 8、StarScoreTwo => [星级评分原理和实现(下)](https://www.imooc.com/learn/848)

这门课程的总结还是按照之前的方式来进行，分成一个个章节，逐步分析与理解，下面开始进入正文。<br>

**1、章节1-2：** <br>
这个章节老师为我们演示了使用CSS实现选择星级的大概思路：首先在一个大容器里设置背景图片，接着设置五个独立的小容器，当鼠标滑过每个小容器的时候，都为这五个小容器添加星级背景图（background），并且设置背景图的位置（background-position）。这一章节的核心就是z-index这个属性，它的作用是：设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。因此当鼠标滑过那五个小容器的时候，大容器中所有内容都会被盖在了下面。接下来贴上课程章节的源码和演示。<br>
[我是源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/StarScoreTwo/index1-2.html)<br>
[我是效果](https://cruxf.github.io/IMOOC/JavaScript/StarScoreTwo/index1-2.html)<br><br>

**2、章节1-3：** <br>
这个章节内容挺绕的，实现了鼠标点击保存星星点亮数目的功能。如果是CSS和HTML基础不过关的话会看晕，实现的核心就是利用到了锚点这一块的知识，无论是使用:target伪类，还是使用了overflow: hidden;都与锚点逃脱不了关系，具体的实现过程不说了，不仅是因为很基础很简单，其实说起来真的是绕。接下来贴上课程章节的源码和演示。<br>
[我是源码1](https://github.com/CruxF/IMOOC/blob/master/JavaScript/StarScoreTwo/index1-3-1.html)<br>
[我是效果](https://cruxf.github.io/IMOOC/JavaScript/StarScoreTwo/index1-3-1.html)<br>
[我是源码2](https://github.com/CruxF/IMOOC/blob/master/JavaScript/StarScoreTwo/index1-3-2.html)<br>
[我是效果2](https://cruxf.github.io/IMOOC/JavaScript/StarScoreTwo/index1-3-2.html)<br><br>

**3、章节2-1：** <br>
这个章节的内容可有意思了，当鼠标移到子元素上的时候，全部子元素的位置都移动到最左边，并且让星星出现，请看下面这段代码：
```
.rating-item:hover {
  left: 0;
  z-index: 2;
  background: url(img/twoStar.jpg) repeat-x 0 -56px;
}
```
当我们的鼠标的移动到某个子元素时，该子元素的长度发生变化，同时所有子元素的位置也变化了，因此鼠标滑动星星出现的功能就这么实现了，接下来贴上课程章节的源码和演示。<br>
[我是源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/StarScoreTwo/index2-1.html)<br>
[我是效果](https://cruxf.github.io/IMOOC/JavaScript/StarScoreTwo/index2-1.html)<br><br>

**4、章节2-3：** <br>
这个章节的代码十分绕，一不小心就要晕，我们一点点来分析，首先看一下点击保存点亮星星的代码：
```
input:checked + .rating-item {
  left: 0;
  z-index: 1;
  background: url(img/twoStar.jpg) repeat-x 0 -56px;
}
.rating-item-3:hover, #rating-3:checked + .rating-item {
  width: 170px;
}
```
鼠标滑过事件在上一节代码中有讲解，在此不说明。上面那段代码的含义就是：单选按钮被点击，那么单选按钮的下一个类名为.rating-item的元素的left值为0，同时背景图位置为`background: url(img/twoStar.jpg) repeat-x 0 -56px;`，接着就是单选按钮的下一个类名为.rating-item的元素的宽度改变，从而达到显示几颗星星的效果。<br>

为了实现保存点亮星星后，鼠标滑动还是能够选择点亮的星星，那么各个元素间的层级关系就要设置的合理，下面看代码：
```
.rating:hover .rating-item {
  background-image: none;
}
.rating-item {
  position: absolute;
  top: 0;
  z-index: 3;
  width: 70px;
  height: 56px;
}
.rating-item:hover {
  left: 0;
  z-index: 2;
  background: url(img/twoStar.jpg) repeat-x 0 -56px !important;
}
input:checked + .rating-item {
  left: 0;
  z-index: 1;
  background: url(img/twoStar.jpg) repeat-x 0 -56px;
}
input:checked + .rating-item ~ .rating-item {
  z-index: 0;
}
```
其中的逻辑关系不是很复杂，大家细细体会下吧，不说明啦，会绕晕你们。接下来贴上课程章节的源码和演示。<br>
[我是源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/StarScoreTwo/index2-3html)<br>
[我是效果](https://cruxf.github.io/IMOOC/JavaScript/StarScoreTwo/index2-3html)<br><br>

**5、章节3-2：** <br>
这个章节代码很简单，就是搭建一个显示星星的大概结构和样式。主要思路就是：在类名为rating的父容器中创建两个子容器，一个子容器通过控制长度来达到显示星星数目的功能，因为这个容器的background-position已经设置好，只要设置该容器的长度就就能够达到显示N个星星的目的，另一个子容器的目的是为了接下来对含有星星背景图的子容器的长度进行控制。接下来贴上课程章节的源码和演示。<br>
[我是源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/StarScoreTwo/index3-2.html)<br>
[我是效果](https://cruxf.github.io/IMOOC/JavaScript/StarScoreTwo/index3-2.html)<br><br>

**6、章节3-3：** <br>
可能和之前的分析有关，这个章节的代码莫名觉得十分容易理解。之前重复的不再进行分析，下面说一下核心的两段代码：
```
Rating.prototype.buildHTML = function() {
  var html = '';
  html += '<div class="rating-display"></div><ul class="rating-mask">';
  for(var i = 0; i < this.opts.total; i++) {
    html += '<li class="rating-item"></li>';
  }
  html += '</ul>';
  this.$el.html(html);
};
```
这段代母实现的就是根据this.opts.total的值动态增加HTML结构。html() 方法返回或设置被选元素的内容，在这段代码中就是返回动态增加的HTML结构。<br>

```
Rating.prototype.setCSS = function() {
  this.$el.width(this.opts.total * this.itemWidth);
  this.$display = this.$el.find('.rating-display');
  this.$display.width(this.displayWidth);
  this.$el.find('.rating-item').width(this.itemWidth);
};
```
这段代码实现的就是设置父容器的宽度，和设置子容器的宽度。鼠标事件是定义在另一个容器中，实现的控制父容器的宽度和子容器的宽度。剩下的难点之前都有说明与分析，就不再重复了，接下来贴上课程章节的源码和演示。<br>
[我是源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/StarScoreTwo/index3-3.html)<br>
[我是效果](https://cruxf.github.io/IMOOC/JavaScript/StarScoreTwo/index3-3.html)<br><br>

**7、章节3-4：** <br>
这章节的代码没啥好说的，其中的原理和实现过程前面都有提到，几乎是一毛一样的（其实就是），下面直接贴上课程章节的源码和演示。<br>
[我是源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/StarScoreTwo/index3-4.html)<br>
[我是效果](https://cruxf.github.io/IMOOC/JavaScript/StarScoreTwo/index3-4.html)<br><br>

**8、章节3-5：** <br>
这章节的代码只要搞清楚下面一段即可：
```
var Rating = function(el, optios) {
  this.$el = $(el);
  this.opts = $.extend({}, Rating.DEFAULTS, optios);
  this.opts.total *= 2;
  this.opts.num *= 2;
  this.itemWidth = 60 / 2;
  this.displayWidth = this.opts.num * this.itemWidth;
};
```
为啥total和num都要乘以2？因为这是为了实现显示半颗星星的功能，由于容纳星星的子容器itemWidth值缩小了一半，那么和itemWidth值相关的变量就得全部增加一半，记得联系全文的代码哦。不多说了，下面直接贴上课程章节的源码和演示。<br>
[我是源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/StarScoreTwo/index3-5.html)<br>
[我是效果](https://cruxf.github.io/IMOOC/JavaScript/StarScoreTwo/index3-5.html)<br><br>

**8、章节3-6：** <br>
在这节课程中老师讲了一个JS开发模式，那就是策略模式。
- 策略模式：定义一系列的算法，一个个封装起来，并且可以相互替换。
- [更多详解](https://baike.baidu.com/item/%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F/646307?fr=aladdin)

为了更好的理解策略模式，下面来看一大段代码：
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>策略模式展示</title>
  </head>
  <body>

    <script>
      // 第一种实现思路
      var calculateBonusOne = function(level, salary) {
        if(level === 'S') {
          return salary * 4;
        }
        if(level === 'A') {
          return salary * 3;
        }
        if(level === 'B') {
          return salary * 2;
        }
        if(level === 'C') {
          return salary * 1;
        }
      };
      console.log(calculateBonusOne('S', 8000));

      // 第二种实现思路
      var performanceS = function(salary) {
        return salary * 4;
      };
      var performanceA = function(salary) {
        return salary * 3;
      };
      var performanceB = function(salary) {
        return salary * 2;
      };
      var performanceC = function(salary) {
        return salary * 1;
      };
      var calculateBonusTwo = function(level, salary) {
        if(level === 'S') {
          return performanceS(salary);
        }
        if(level === 'A') {
          return performanceA(salary);
        }
        if(level === 'B') {
          return performanceB(salary);
        }
        if(level === 'C') {
          return performanceC(salary);
        }
      };
      console.log(calculateBonusTwo('S', 6000));

      // 第三种实现思路
      var strategies = {
        S: function(salary) {
          return salary * 4;
        },
        A: function(salary) {
          return salary * 3;
        },
        B: function(salary) {
          return salary * 2;
        },
        C: function(salary) {
          return salary * 1;
        }
      };
      var calculateBonusThree = function(level, salary) {
        return strategies[level](salary);
      }
      console.log(calculateBonusThree('S', 4000));
    </script>
  </body>
</html>
```
第三种实现方式就是使用了策略模式，相对其他两种实现方式，有以下几个优点：
- 增大了程序弹性，能够轻易修改参数和复用代码
- 减少代码数量
- 新增功能代码的时候不会对原有的代码进行破坏
- 性能算是比较好

体会到了策略模式的优雅，那么下面再来看看这个章节的核心代码：
```
// 策略模式
var strategies = {
  entire: function() {
    return 1;
  },
  half: function() {
    return 2;
  },
  quarter: function() {
    return 4;
  }
}
var Rating = function(el, optios) {
  this.$el = $(el);
  this.opts = $.extend({}, Rating.DEFAULTS, optios);
  if(!strategies[this.opts.mode]) {
    this.opts.mode = 'entire';
  };
  this.ratio = strategies[this.opts.mode]();
  this.opts.total *= this.ratio;
  this.opts.num *= this.ratio;
  this.itemWidth = 60 / this.ratio;
  this.displayWidth = this.opts.num * this.itemWidth;
};
```
是不是感觉很熟悉？如果不是的话，那么一定是没有好好看老师的视频或者没有看我之前的分析。多余的话就不说啦，下面直接贴上课程章节的源码和演示。<br>
[我是源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/StarScoreTwo/index3-6-2.html)<br>
[我是效果](https://cruxf.github.io/IMOOC/JavaScript/StarScoreTwo/index3-6-2.html)<br><br>

**尾声** <br>
总算是实打实的把这两门课程实打实的看下来了、分析下来了，真的是收获满满，虽然让自己现在盲敲一遍肯定是不行的，但是至少明白了JavaScript原型的强大以及各种前端开发需要注意的地方。love这位讲师，下面还是会继续看他的其他视频，不断学习，不断总结。<br><br>


# 9、ImgPreloading => [图片预加载](https://www.imooc.com/learn/502)

依然是Alex Wang讲师的课程，亮点十足，干货满满。这门课程的总结还是按照之前的方式来进行，分成一个个章节，逐步分析与理解，下面开始进入正文。<br>

**1、章节2-1：** <br>
这节课的代码没啥好解读的，跟着老师敲就对了。不过我自己修改了部分CSS代码，为了页面更合理与美观，下面直接贴上课程章节的源码和演示（有点H，慎点）。<br>
[我是源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/ImgPreloading/index2-1.html)<br>
[我是效果](https://cruxf.github.io/IMOOC/JavaScript/ImgPreloading/index2-1.html)<br><br>

**2、章节2-2：** <br>
从这节课程开始，正式进入了精髓的部分。首先说一下调用jQuery的两种方式：第一种方式是下载jQuery源码到本地项目中，然后引用；第二种是通过CDN引用，不过需要注意的是，如果要在github进行效果演示，传输协议必须为https，而不能为http，比如：
```
<script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
```

和课程稍有不同的是，我定义了一个图片数组，数组内是N个对象，每个对象中存储了图片的地址和标题的值，我认为这样是比较合理的，下面请看代码：
```
var images = [{
  url: 'https://github.com/CruxF/IMOOC/blob/master/ProImages/ImgPreloading01.jpg?raw=true',
  name: '无敌美少女一号'
}, {
  url: 'https://github.com/CruxF/IMOOC/blob/master/ProImages/ImgPreloading02.jpg?raw=true',
  name: '无敌美少女二号'
}];
```

在点击事件中，如果鼠标点击了data-control的值为prev，则表示是上一张，此时的index需要做减法运算。在这一步中有一个简便的计算方式，请看下面代码
```
$('.btn').on('click', function() {
  if($(this).data('control') === 'prev') {
    // 第一种实现方法
    index--;
    if(index < 0) {
      index = 0;
    }
    // 第二种实现方法,Math.max()的作用是返回内部的最大值
    index = Math.max(0, --index);
  } else {
    index = Math.min(len - 1, ++index);
  }
  // 更改网页标题
  document.title = (index + 1) + '/' + len;
  // 更改图片src、title和alt的值
  $('#img').attr({
    'src': images[index].url,
    'title': images[index].name,
    'alt': images[index].name
  });
})
```
在这节课中，我对讲师的源码也有所改动，为的就是让代码更加的合理。在接下来的演示中你会发现图片的预加载会是多么的重要<br>
[我是源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/ImgPreloading/index2-2.html)<br>
[我是效果](https://cruxf.github.io/IMOOC/JavaScript/ImgPreloading/index2-2.html)<br><br>

**3、章节2-3：** <br>
这节课程的核心代码是下面那一段
```
// 遍历数组,i代表的是数组下标，src代表的是对应数组下标的对象或者属性值
$.each(images, function(i, src) {
  var imgObj = new Image();
  $(imgObj).on('load error', function() {
    $progress.html(Math.round((count + 1) / len * 100) + '%');
    if(count >= len - 1) {
      $('.loading').hide();
    }
    count++;
  });
  imgObj.src = src.url;
});
```
这段代码的作用很明显，就是每遍历一次images数组，就创建一个img元素，并将图片的数据保存下来。同时发生变化的还有遮罩层的文字以及遮罩效果，这些代码在每一张图片加载的时候运行，都是挺容易理解的，不细说了，关于Image()函数的更多知识点可以[点击这里](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement/Image)。下面直接贴上课程章节的源码和演示（通过与章节2-2的效果对比一下，就能体会到图片预加载的魔力了）。<br>
[我是源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/ImgPreloading/index2-3.html)<br>
[我是效果](https://cruxf.github.io/IMOOC/JavaScript/ImgPreloading/index2-3.html)<br><br>

**4、章节2-4：** <br>
为什么要把核心代码封装成一个插件呢？无非是这三个原因：代码复用性、代码安全性、代码维护性。首先我们来看一下数据的进入口：
```
// 调用插件
$.preload(imgs, {
  // 实现遍历的功能
  each: function(count) {
    $progress.html(Math.round((count + 1) / len * 100) + '%');
  },
  // 实现隐藏遮罩层的功能
  all: function() {
    $('.loading').hide();
  }
})
```
因为在插件中，使用了$.extend()在jQuery原型中定义了preload这个方法，所以我们能够在外部调用这个方法，并传入相应的参数。在上述代码中，preload方法里传入了两个参数，一个为imgs数组，另一个为对象，对象里面又包含了each函数和all函数。接着数据就进入到了插件内部，执行了这段代码：
```
$.extend({
  preload: function(imgs, opts) {
    new PreLoad(imgs, opts);
  }
});
```
上诉代码实例化PreLoad构造函数之后，那么就能够执行其原型上的方法_unoredered，关于插件里的一些方法说明，在我上面两篇《星级评分原理》都有十分详细的解释，而且源码中也有相关的注释，因此不再说明了。下面直接贴上课程章节的源码和演示。<br>
[我是结构源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/ImgPreloading/index2-4.html)<br>
[我是插件源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/ImgPreloading/js/index2-4.js)<br>
[我是效果](https://cruxf.github.io/IMOOC/JavaScript/ImgPreloading/index2-4.html)<br><br>

**5、章节3-1：** <br>
这节课程在代码上没啥好说的，其他要说明的就是评论区的两件事情：1、能够通过屏幕截图将按钮图片截取下来；2、QQ表情gif图已经有人分享出来了。关于素材的问题，就有了很好的解决，接下来要记住的就是这段很实用的代码：`li*30>img[src="img/$.gif"]`，能快速生成30行`<li><img src="img/(1-30).gif" alt="" /></li>`代码，需要注意的是，这种语法编辑器能够支持。下面直接贴上课程章节的源码和演示。<br>
[我是源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/ImgPreloading/index3-1.html)<br>
[我是效果](https://cruxf.github.io/IMOOC/JavaScript/ImgPreloading/index3-1.html)<br><br>

**6、章节3-2：** <br>
讲师还是那么的皮，命名总是会让人感到云里雾里。下面来看这节课程的核心代码：
```
$btn.on('click', function(e) {
  // 解决事件冒泡
  e.stopPropagation();
  $panel.show();
  // 调用插件
  $.preload(imgs, {
    all: function() {
      var htmlValue = '';
      htmlValue += '<ul class="list">';
      for(var i = 0; i < len; i++) {
        htmlValue += '<li><img src="' + imgs[i] + '" alt=""></li>';
      }
      htmlValue += '</ul>';
      setTimeout(function() {
        $panel.html(htmlValue);
      }, 2000);
    }
  })
})
```
JavaScript中事件冒泡，相信大家都已经十分清楚了，就是一个事件会从具体的元素向上一级元素传递，上一级元素又会向上上级元素传递，直到传递到了根元素。在调用插件传递数据的时候，在插件内部，每遍历一次imgs数组，那么就会加载一次传递过过来的all()方法，事已至此，代码执行流程已经很清晰。需要注意的是`opts.each()`中的each()方法根本就不是jQuery中的each()方法，讲师的命名方式，实在是坑到我了。

下面贴课程章节的源码和演示。<br>
[我是源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/ImgPreloading/index3-2.html)<br>
[我是效果](https://cruxf.github.io/IMOOC/JavaScript/ImgPreloading/index3-2.html)<br><br>

**7、章节3-3：** <br>
这节课程代码没啥好说的，下面直接贴上课程章节的源码和演示（我没有涉H，别瞎说啊）。<br>
[我是源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/ImgPreloading/index3-3.html)<br>
[我是效果](https://cruxf.github.io/IMOOC/JavaScript/ImgPreloading/index3-3.html)<br><br>

**8、章节3-4：** <br>
这节课程实现的有序预加载图片，关于有序和无序之间的区别，我想对比下相互之间的核心代码应该很容易就能理解：
```
// 有序预加载
function load() {
  var imgObj = new Image();
  $(imgObj).on('load error', function() {
    if(count >= len) {
      // 所有图片加载完毕
    } else {
      load();
    }
    count++;
  });
  imgObj.src = imgs[count];
}
load();

// 无序预加载
$.each(images, function(i, src) {
  var imgObj = new Image();
  $(imgObj).on('load error', function() {
    $progress.html(Math.round((count + 1) / len * 100) + '%');
    if(count >= len - 1) {
      $('.loading').hide();
    }
    count++;
  });
  imgObj.src = src.url;
});
```
从代码结构就能够看出来，有序预加载必定是加载完一张图片之后才能对下一张图片进行加载；无序预加载是加载完全部图片之后才隐藏遮罩层显示第一张图片，下面直接贴上课程章节的源码和演示。<br>
[我是源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/ImgPreloading/index3-4.html)<br>
[我是效果](https://cruxf.github.io/IMOOC/JavaScript/ImgPreloading/index3-4.html)<br><br>

**9、章节4-1：** <br>
有了之前课程章节的基础，我想这节课程的代码不用解释大家也相当清楚了，下面直接贴上课程章节的源码和演示。<br>
[我是结构源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/ImgPreloading/index4-1.html)<br>
[我是插件源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/ImgPreloading/js/index4-1.js)<br>
[我是效果](https://cruxf.github.io/IMOOC/JavaScript/ImgPreloading/index4-1.html)<br><br>

**尾声** <br>
看这位讲师的课程已经开始觉得轻松了，慢慢地能够领悟到他的开发思路以及开发模式和套路，这是否也是一种进步呢？






