# 前言

为了优化大家的阅读体验，强烈建议安装Chrome浏览器的插件——GayHub。[下载安装地址](https://github.com/jawil/GayHub)<br>


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

1、章节3-1：创建HTML结构和填写CSS样式。看到很多人对讲师没有提供背景图而发牢骚，此时我只能说：要么智商需要充值，要么就是不善思考。在截图软件遍布的时代，居然还不能在获得网页上的一张图片，也是让人匪夷所思。在课程章节2-1中，1:42处，可以利用QQ、微信或者其他软件将背景图截取下来，这么做需要修改的东西仅仅是CSS代码中width、height和background-position属性值，下面这个课程章节的源码和演示。<br>
[我是源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/StarScore/index3-1.html)<br>
[我是效果](https://cruxf.github.io/IMOOC/JavaScript/StarScore/index3-1.html)<br><br>

2、章节3-2：这节课程代码很容易理解，毕竟是面向结构编程的。首先我们需要明白什么是jQuery对象？什么DOM对象？简单的来说jQuery对象与DOM对象是不一样的，大概就是：jQuery是一个类数组对象，而DOM对象就是一个单独的DOM元素。具体有以下区别：
- （1）通过jQuery方法包装后的对象，是一个类数组对象。它与DOM对象完全不同，唯一相似的是它们都能操作DOM。
- （2）通过jQuery处理DOM的操作，可以让开发者更专注业务逻辑的开发，而不需要我们具体知道哪个DOM节点有那些方法，也不需要关心不同浏览器的兼容性问题，我们通过jQuery提供的API进行开发，代码也会更加精短。

在lightOn函数中，遍历了以类名为`rating-item`的一个集合，当集合中某些元素的下标（index）小于num，那么就设置当前元素的css中的background-position，$(this)代表的是当前类名为`rating-item`的元素。<br>

在鼠标移入、点击和移出事件中的代码也十分容易理解，明白`$(this).index()`为当前元素的下标（下标从0开始），以及知道num是个全局变量即可，下面这个课程章节的源码和演示。<br>
[我是源码](https://github.com/CruxF/IMOOC/blob/master/JavaScript/StarScore/index3-2.html)<br>
[我是效果](https://cruxf.github.io/IMOOC/JavaScript/StarScore/index3-2.html)<br><br>

















