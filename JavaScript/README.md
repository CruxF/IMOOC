# 前言

为了优化大家的阅读体验，强烈建议安装Chrome浏览器的插件——GayHub。[下载安装地址](https://github.com/jawil/GayHub)<br>


# 1、RegExp => JavaScript正则表达式

这是非常好的一门入门正则表达式的课程，但是总感觉少了点什么。后来想了想，少的东西应该是一些案例的训练，为此我额外写了篇博文，以此来更好的学习和进阶JavaScript正则表达式，[点我呀](https://github.com/CruxF/Blog/issues/3)<br>

下面这篇是写给自己看，旁人慎入....::joy::<br>
[什么乱七八糟呀](https://github.com/CruxF/IMOOC/blob/master/JavaScript/RegExp/%E8%AF%B4%E6%98%8E.txt)<br>


# 2、ProgressBar => 常用的网页加载进度条

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


# 3、DelaBlog => CSS3扁平化博客之纹章页及常用组件

该课程是一个系列的，之前的源码和分析在这里——[《HTML5和CSS3扁平化风格博客》](https://github.com/CruxF/IMOOC/tree/master/HTML_CSS)。相比于之前的课程，增加了蒙层、侧边栏弹出、回到顶部效果，以及一个博文页面。<br>

实现效果的过程并不复杂，首先获取目标元素，接着为目标元素绑定事件。在使用jQuery绑定事件中，一共有四种方式，分别是bind、live、delegate和on，其中bind应用的最为广泛，on为官方推荐使用，因为其效率高，[拓展阅读](https://www.cnblogs.com/sunliyuan/p/5804803.html)<br>

只要大体上思路有了，那么剩下的代码实现就是对jQuery中API的记忆，比如：`fadeIn()`、`fadeOut()`、`animate()`和`trigger（）`的概念和如何使用的。关于文章那个页面，实现更为简单，我将CSS代码抽离出来，使其成为一个单独的css文件，这样有利于日后的修改和管理。<br>
[案例演示](https://cruxf.github.io/IMOOC/JavaScript/DelaBlog/index.html)<br><br>

