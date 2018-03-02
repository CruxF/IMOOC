# 前言

为了优化大家的阅读体验，强烈建议安装Chrome浏览器的插件——GayHub。[下载安装地址](https://github.com/jawil/GayHub)<br>


# 1、page=>分页页码制作

该demo源自慕课网，看了老师的教程，自己重新实现了一遍，以下知识点对初入HTML和CSS的新手还是记一下比较好<br>

**:no_good:case02.html**<br>
发现的问题：相邻元素中间莫名出现空隙;<br>
产生的原因：换行符、tab（制表符）和空格产生空隙;<br>
解决方法：<br>
1、元素写成一行，消除空格。优点是简单，缺点是代码忒难看了，不利于阅读和维护。<br>
2、设置font-size:0;推荐使用这种方式，简单好用，具体使用技巧在源码中有解释。<br>
户外拓展：<br>
其实解决方法还有蛮多的，在这就不一一解释了，毕竟这个并不是什么重点和难点，继续讨论下去就有点像孔乙已那般：“你知道‘回’字有几种写法吗？”<br>

**:bride_with_veil:case03.html**<br>
使用css中元素border特点制作三角图形的原理简单解释为:<br>
元素内部的border是由上下左右四个三角形组合而成。<br>

#### :nail_care:代码效果展示

[直角分页页码](https://cruxf.github.io/IMOOC/HTML_CSS/Page/case01.html)<br>
[修复元素之间的间隔](https://cruxf.github.io/IMOOC/HTML_CSS/Page/case02.html)<br>
[为分页页码插入小图标](https://cruxf.github.io/IMOOC/HTML_CSS/Page/case03.html)<br><br>


# 2、Car=>帝都抢车位制作

该课程给的源码其实是非常不科学的，哪有这样停车的？而且动画还完全没有实现好，一怒之下，自己花了几分钟修改了一下。<br>

**:grey_question:感悟:**<br>
实现思路其实一点难度也没有，就是通过jQuery绑定节点，然后添加点击事件，接着为事件绑定相关的动画。唯一学到的是：何谓[同源策略](https://github.com/acgotaku/WebSecurity/blob/master/docs/content/Browser_Security/Same-Origin-Policy.md)？<br>

**加强认知：** <br>
下面两个demo中的源码几乎一模一样，但是由于使用CDN引入的jQuery文件的协议不同（一个为http协议，一个为https协议），从而导致的结果也不同。造成这种情况的原因是因为浏览器使用的协议是安全性更高的https协议，可以在控制台查看错误信息。<br>

#### :nail_care:代码效果展示

[使用https协议](https://cruxf.github.io/IMOOC/HTML_CSS/Car/index.html)<br>
[使用http协议](https://cruxf.github.io/IMOOC/HTML_CSS/Car/index01.html)<br><br>


# 3、BackTop=>回到顶部效果

除了课程内的那套JavaScript实现方法，另外增加了jQuery的实现方法。实现过程中，小细节很多，主要是需要经常刻意训练自己的思维，毕竟这些业务的写法都差不多，不会变到哪里去的。一个词：“熟能生巧”，关于代码的一些分析都写成注释了。可以从下面的demo中进行查看：<br>

#### :nail_care:代码效果展示

[JavaScript写法](https://cruxf.github.io/IMOOC/HTML_CSS/BackTop/index.html)<br>
[jQuery写法](https://cruxf.github.io/IMOOC/HTML_CSS/BackTop/index01.html)<br><br>


# 4、Accordion=>手风琴效果

之前一直有怀疑自己：到底会不会CSS？今天终于确定下来了：根本就不会好吧:persevere:<br>

JavaScript没把我绕晕，倒是课程的CSS部分让我一愣一愣的。课后根据自己的理解，写了一份简陋版的，代码层层递进，非常易于理解。当然啦，效果肯定没有老师的好，主要是为了明白手风琴效果的基本原理<br>

#### :nail_care:代码效果展示

[课程demo](https://cruxf.github.io/IMOOC/HTML_CSS/Accordion/index.html)<br>
[自己demo](https://cruxf.github.io/IMOOC/HTML_CSS/Accordion/index01.html)<br><br>


# 5、FormBea=>表单美化

该课程算是比较古老的，里面很多方法和技巧都已经过了时，不过还是有一些可取之处。看了那么多教学视频，也是第一次意识到，有时候思路跟着老师走容易走进一条死胡同，最好的办法就是取之精华，弃其糟粕，然后再按照自己思路实现一次。下面来看看我的代码和课程老师的代码：<br>

**:bird:单选按钮篇** <br>

老师：利用dl来模拟单选按钮，在语义化这一块已经很大问题了，效果实现是利用了css中`background-position`属性。<br>
[点击查看效果](https://cruxf.github.io/IMOOC/HTML_CSS/FormBea/radio.html)<br>

本人：将代码语义化，把实现思路变得简单化。第一个demo效果并不怎么吸引人，并且鼠标滑动的时候就选定了单选按钮；第二个demo使用相关技巧增加了一定效果，同时解决了鼠标滑动的时候就选定了单选按钮这个问题。<br>
[点击查看效果1](https://cruxf.github.io/IMOOC/HTML_CSS/FormBea/radio01.html)<br>
[点击查看效果2](https://cruxf.github.io/IMOOC/HTML_CSS/FormBea/radio02.html)<br>

**:turtle:复选框篇** <br>

老师：代码量巨大，实现过程繁琐。<br>
[点击查看效果](https://cruxf.github.io/IMOOC/HTML_CSS/FormBea/checkbox.html)<br>

本人：利用CSS3特性和一些相关的技巧，极大地简化了代码，并且没有引用外部图片资源，一定程度上提高网页的加载性能。<br>
[点击查看效果](https://cruxf.github.io/IMOOC/HTML_CSS/FormBea/checkbox01.html)<br>

**:cow2:文本框篇** <br>

老师：没啥问题，实现思路清晰明了，实在是要找问题的话，那只能是引用了外部的图片资源这一点。<br>
[点击查看效果](https://cruxf.github.io/IMOOC/HTML_CSS/FormBea/text.html)<br>

本人：增加了JavaScript代码，将外部图片资源改为内部文本内容。<br>
[点击查看效果](https://cruxf.github.io/IMOOC/HTML_CSS/FormBea/text01.html)<br>

**:dog2:下拉列表篇** <br>

老师：代码量庞大，代码结构复杂，不易让人理解，并且在下拉菜单出现的时候会有页面抖动的不良效果。<br>
[点击查看效果](https://cruxf.github.io/IMOOC/HTML_CSS/FormBea/select_finished.html)<br>

本人：缩减了代码，改善了代码结构，为了更易理解，增加了注释，解决了下拉菜单出现的时候页面抖动的不良效果。<br>
[点击查看效果](https://cruxf.github.io/IMOOC/HTML_CSS/FormBea/select_finished01.html)<br><br>


# 6、NavMenu=>导航条菜单的制作

课程虽然才短短二十几分钟，但是如果深入了解的话会发现非常多的知识点。包括CSS3的新属性、BFC概念、层级概念、盒子模型中的边框、定位布局、伪类以及伪元素、JavaScript中的定时器和jQuery中的API等，下面来看相关的demo：<br>

**:snowflake:垂直菜单：** <br>

老师的实现方法很精炼，而我的只是稍微做了一点动画的处理。<br>
[老师的demo](https://cruxf.github.io/IMOOC/HTML_CSS/NavMenu/vertical.html)<br>
[本人的demo](https://cruxf.github.io/IMOOC/HTML_CSS/NavMenu/vertical01.html)<br>

**:cyclone:水平菜单——高度伸缩：** <br>

几乎完整的将源码照般过来，在demo2中我应用了BFC解决了父元素塌陷的问题，更多BFC知识我会在未来的某一天进行整理。其中盒子高度伸缩一个重要的点就是在伸缩的时候margin的值。<br>
[老师的demo](https://cruxf.github.io/IMOOC/HTML_CSS/NavMenu/level.html)<br>
[本人的demo1](https://cruxf.github.io/IMOOC/HTML_CSS/NavMenu/level01.html)<br>
[本人的demo2](https://cruxf.github.io/IMOOC/HTML_CSS/NavMenu/level02.html)<br>

**:cat:水平菜单——长度伸缩：** <br>

其实实现该效果完全没必要用到JavaScript和jQuery，老师这么做，我猜应该是想给新手打开一个新的学习之门，而且在JavaScript实现效果中，关于定时器各方面的讲解和考虑还是挺有用的。<br>
[老师的demo1](https://cruxf.github.io/IMOOC/HTML_CSS/NavMenu/jsLevel.html)<br>
[老师的demo2](https://cruxf.github.io/IMOOC/HTML_CSS/NavMenu/jqLevel.html)<br>
[本人的demo](https://cruxf.github.io/IMOOC/HTML_CSS/NavMenu/csLevel.html)<br>

**:hamster:圆角菜单：** <br>

老师采用了鼠标滑动改变背影图片的位置的方法来实现菜单的圆角效果，其实这个方法在CSS3规范出来的时候就已经完全过时了，不仅实现麻烦，还额外请求了外部资源，影响性能。<br>
[老师的demo](https://cruxf.github.io/IMOOC/HTML_CSS/NavMenu/cirLevel.html)<br>
[本人的demo1](https://cruxf.github.io/IMOOC/HTML_CSS/NavMenu/cirLevel01.html)<br>

**:frog:三角形菜单：** <br>

在课程接近尾声的时候，老师布置了一个任务：实现带三角形的水平菜单。刚开始是有些头绪，知道是要用到定位的知识和边框的知识，但是遗漏了两点：<br>
1、如何实现两个元素之间的绑定？<br>
2、视图上元素的显示受到哪个属性的影响？<br>
后来当我想通了，意识到使用伪元素，比如:after或者:before就能够和原来的元素绑定在一起；视图上元素的显示和z-index有关系。随之而来，问题迎刃而解，原来CSS中真的是有魔法^_^<br>
[本人的demo](https://cruxf.github.io/IMOOC/HTML_CSS/NavMenu/index01.html)<br>

**:bear:二级菜单：** <br>

最后的任务是实现一个二级菜单，课程要求利用JavaScript来实现，参考课程之前使用定时器制作水平菜单那视频，应该很快就能明白过来如何下手。不过还是使用CSS来实现会方便非常多。<br>
[JavaScript演示效果](https://cruxf.github.io/IMOOC/HTML_CSS/NavMenu/test.html)<br>
[CSS演示效果](https://cruxf.github.io/IMOOC/HTML_CSS/NavMenu/test01.html)<br>


# 7、WebSocket=>基于WebSocket的火拼俄罗斯方块

这是一个很长的系列，希望大家有耐心的学下去，看下去，在开始实战练习之前，不妨先看看这篇博客：[浅谈websocket](https://github.com/CruxF/Blog/issues/2)<br>

## 基础篇

**1、websocket初体验：** <br>
创建一个HTML文件，开始踏进websocket的大门，服务器使用的是官方所提供的，因此能够直接看到演示的效果(注意：留意同源策略问题)。<br>
[点击我呀查看效果](https://cruxf.github.io/IMOOC/HTML_CSS/WebSocket/index.html)<br>
[客户端源码](https://github.com/CruxF/IMOOC/blob/master/HTML_CSS/WebSocket/index.html)<br>

**2、搭建自己的websocket server：**<br>
步骤一：安装nodejs-websocket（npm install nodejs-websocket）;<br>
步骤二：创建一个js文件，将[nodejs-websocket的地址](https://github.com/sitegui/nodejs-websocket)中的相关代码复制进来；<br>
步骤三：运行项目中的js文件（node 文件名.js）；<br>
步骤四：修改html文件中websocket的服务器地址；<br>
步骤五：本地打开查看效果。（由于没有导入庞大的node_modules包，因此无法直接在线上查看效果，需要你们下载代码到本地项目中，然后安装nodejs-websocket才能正常运行）；<br>

**小毛病：** 关闭页面控制台会报错，意思就是说server挂掉了，再次打开页面需要重新开启服务。<br>

原因分析：由于nodejs-websocket文档中的示例代码并有添加错误处理事件，因此导致server直接挂掉。<br>
解决方式：在原js文件中添加一个错误处理函数即可。这样就能实现关闭页面，只是显示出错误信息，server并没有挂掉，重新运行html文件依然能够成功，下面是相关的源码。<br>
[客户端源码](https://github.com/CruxF/IMOOC/blob/master/HTML_CSS/WebSocket/index02.html)<br>
[服务器端源码](https://github.com/CruxF/IMOOC/blob/master/HTML_CSS/WebSocket/wsServer02.js)<br>

**3、实现简单的聊天功能：** <br>
1、首先，在客户端中用JavaScript构建一个websocket实例，并且为它绑定一个需要连接到的服务器地址；<br>
2、接着，网络连接开始建立，触发了websocket中的onopen事件，该事件向服务器端发送数据；<br>
3、然后，服务器端接收数据，并对其处理，里面有个广播函数，是向所有的连接触发事件；<br>
4、最后，客户端中的websocket里的onmessage事件被触发，返回数据到客户端。<br>

解释不是很到位，希望多多包涵，当然也希望有大佬再好好跟我讲解讲解。你们可以根据这篇博客：[浅谈websocket](https://github.com/CruxF/Blog/issues/2)和下面两份源代码自己重新分析一次<br>
[客户端源码](https://github.com/CruxF/IMOOC/blob/master/HTML_CSS/WebSocket/index03.html)<br>
[服务器端源码](https://github.com/CruxF/IMOOC/blob/master/HTML_CSS/WebSocket/wsServer03.js)<br>

**4、使用Socket.io：** <br>

什么是socket.io？<br>
答：socket.io是一个面向实时web应用的JavaScript库，它使得服务器和客户端之间实时双向的通信成为可能。他有两个部分组成：在浏览器中运行的客户端库，和面向node.js的服务端库。两者有着几乎一样的API，像node.js一样，它也是事件驱动的。<br>

为什么需要使用socket.io？<br>
答：可以直接发送一个字符串，不用像websocket那样先把对象转化为字符串发送，然后再转化回来；可以发送自定义事件，不需要定义type这个属性去识别消息类型。下面请看两份两份源码来进行分析。<br>
[客户端源码](https://github.com/CruxF/IMOOC/blob/master/HTML_CSS/WebSocket/index06.html)<br>
[服务器端源码](https://github.com/CruxF/IMOOC/blob/master/HTML_CSS/WebSocket/wsServer06.js)<br>

**注意：** 在开发程序之前，需要下载安装：npm install socket.io<br>


## 单机篇

虽然看着头晕啊，不过还是阻止不了我将源码弄到手:joy:，先放着再说，日后再来好好分析分析。<br>
[点我查看效果呀](https://cruxf.github.io/IMOOC/HTML_CSS/WebSocket/singleTetris/single.html)<br>
[我是源码](https://github.com/CruxF/IMOOC/tree/master/HTML_CSS/WebSocket/singleTetris)<br>


# 8、PSD => 从PSD到HTML

**前言：** <br>
有很多人反映素材下载了打不开，其实解决办法非常简单：将17193的包重命名为psd3.rar，将1e00a的包重命名为psd2.rar，然后选择两个文件同时“解压每个包到单独文件”，那么肯定有一个文件夹里面会有一张PSD稿（亲测有效）。问题轻松解决，想知道原理的去百度吧，别太懒了。<br>

这是一个简单的切图视频，没有什么难点，然而其中包含的软技能却是十分有用，让我慢慢领悟到了：面向结果编程。<br>

刚看到这张PSD图的时候，本来打算自己写一遍，后来想一想，还是算了。虽然自己写的速度可能比较快，但是在过程中由于经验与视野有限，肯定考虑到的方面不会很多，然后就跟着老师一起敲代码，一起思考，果不其然，深受启发。<br>

比如，开发的顺序：尽量先开发不易更改的公共部分；代码规范和命名；良好的HTML结构；公共样式的书写；兼容性上的问题及解决方式。下面是演示效果，解决了老师代码中缩小浏览器窗口底部样式缺失的问题。<br>
[点我查看效果呀](https://cruxf.github.io/IMOOC/HTML_CSS/PSD/index.html)<br>

下面是自己写的一些切图技巧，不过应该只有自己看的懂:joy:<br>
[切图总结](https://github.com/CruxF/IMOOC/blob/master/HTML_CSS/PSD/%E8%AF%B4%E6%98%8E.txt)<br><br>


# 9、EBusiness => 手把手教你实现电商网站开发

这门课程我认为最能锻炼人的就是耐心与细心:joy:整个代码敲下来，难点并不是很多，甚至可以说是根本没有，浮动布局在如今几乎很少被使用到了，完全可以利用display:inline-block;来代替，并且还有最新的flex布局以及网格布局等。仔细去研究的话，还会发现很多不合理的地方，比如标签与标签之间的嵌套关系，繁多的div嵌套关系，我个人觉得缺陷有些大的就是各个模块之间的CSS没有将其独立，而且代码规范实在一般般，看得实在头疼，对于一门教学课程来说，这个缺陷实在是有点大。<br>

这当然不是说该门课程毫无价值，对初学者还是挺不错的上手项目。首先，锻炼你的耐心和细心；接着可以让你明白编程不是一件那么轻松的事情；最后就是当你完完全全做出来的时候，那成就感可是满满的。<br>

下面是模块之间的演示部分，跳转链接只增加了一部分，并且修复了当浏览器窗口缩小时顶部和底部样式丢失的问题。部分代码格式没有处理好，大家可以将代码下载到本地，自己动手整理一下，[这是所有资源](https://github.com/CruxF/IMOOC/tree/master/HTML_CSS/EBusiness)<br>
[1、首页](https://cruxf.github.io/IMOOC/HTML_CSS/EBusiness/index.html)<br>
[2、产品列表](https://cruxf.github.io/IMOOC/HTML_CSS/EBusiness/product.html)<br>
[3、产品筛选](https://cruxf.github.io/IMOOC/HTML_CSS/EBusiness/filter.html)<br>
[4、产品介绍](https://cruxf.github.io/IMOOC/HTML_CSS/EBusiness/proIntroduce.html)<br>
[5、购物车](https://cruxf.github.io/IMOOC/HTML_CSS/EBusiness/shopCart.html)<br>
[6、登录](https://cruxf.github.io/IMOOC/HTML_CSS/EBusiness/login.html)<br>
[7、注册](https://cruxf.github.io/IMOOC/HTML_CSS/EBusiness/register.html)<br><br>


# 10、DelaBlog => HTML5和CSS3扁平化风格博客

这门课程最终实现的静态效果很喜欢，符合现代PC端简洁明了的静态网页风格。在课堂上老师说了一个非常正确的开发思路：首先考虑整体布局，接着再考虑样式细节。其实前端页面开发的基本套路就是这样的，只要你页面的结构和整体布局搭建好了，那么剩下的细节补充就容易多了，并且还能让人专注于某个小模块的开发。<br>

总体来说，课程难度并不大，跟着老师一点点的敲代码很快就能实现页面效果，并且理解其中的开发原理。我是一部分跟着老师敲，另外一部分是根据自己的喜好额外添加上去的，没太多的技术点，部分说明也以注释的形式写进了代码中，大家可以在源码中进行查看，下面是页面展示效果。<br>
[点我查看效果呀](https://cruxf.github.io/IMOOC/HTML_CSS/DelaBlog/index.html)<br><br>


# 11、DomBase => DOM探索之基础详解篇

挺不错的一门课程，老师真的是功力深厚，学到了很多，同时也发现了一位大佬——[jaxil](https://github.com/jawil)。这位大佬的学习态度真的让人赞赏，并且他根据这门课程，认认真真的做了非常详细的总结，地址：[《DOM探索之基础详解篇》学习笔记 ](https://github.com/jawil/blog/issues/9)。站在大佬的肩膀上，我就不总结什么了，免得误人子弟，但是也不能什么也不留吧:joy:，下面给大家展示一下关于滑动门的效果，额外增加了动画。<br>
[点我查看效果呀](https://cruxf.github.io/IMOOC/HTML_CSS/DomBase/index.html)<br><br>


# 12、WebMobile => 移动web开发适配秘籍Rem

适合入门响应式设计和简单的移动端适配，学习了这门课程，我记录了一些课程的笔记，以及最后案例是如何开发出来的详细步骤，[请点击这里](https://github.com/CruxF/IMOOC/issues/3)





