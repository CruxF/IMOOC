# :open_mouth:1、page=>分页页码制作

该demo源自慕课网，看了老师的教程，自己重新实现了一遍，以下知识点对初入HTML和CSS的新手还是记一下比较好<br>

**:no_good:case02.html**<br>
发现的问题：相邻元素中间莫名出现空隙;<br>
产生的原因：换行符、tab（制表符）和空格产生空隙;<br>
解决方法：<br>
1、元素写成一行，消除空格。优点是简单，缺点是代码忒难看了，不利于阅读和维护。<br>
2、设置font-size:0;推荐使用这种方式，简单好用，具体使用技巧在源码中有解释。<br>
户外拓展：<br>
其实解决方法还有蛮多的，在这就不一一解释了，毕竟这个并不是什么重点和难点，继续讨论下去就有点像孔乙已那般：“你知道‘回’字有几种写法吗？”<br><br>

**:bride_with_veil:case03.html**<br>
使用css中元素border特点制作三角图形的原理简单解释为:<br>
元素内部的border是由上下左右四个三角形组合而成。<br>

#### :nail_care:代码展示

[直角分页页码](https://cruxf.github.io/IMOOC/HTML_CSS/Page/case01.html)<br>
[修复元素之间的间隔](https://cruxf.github.io/IMOOC/HTML_CSS/Page/case02.html)<br>
[为分页页码插入小图标](https://cruxf.github.io/IMOOC/HTML_CSS/Page/case03.html)<br><br>


# :sunglasses:2、Car=>帝都抢车位制作

该课程给的源码其实是非常不科学的，哪有这样停车的？而且动画还完全没有实现好，一怒之下，自己花了几分钟修改了一下。<br>

**:grey_question:感悟:**<br>
实现思路其实一点难度也没有，就是通过jQuery绑定节点，然后添加点击事件，接着为事件绑定相关的动画。唯一学到的是：何谓[同源策略](https://github.com/acgotaku/WebSecurity/blob/master/docs/content/Browser_Security/Same-Origin-Policy.md)？<br>

**加强认知：** <br>
下面两个demo中的源码几乎一模一样，但是由于使用CDN引入的jQuery文件的协议不同（一个为http协议，一个为https协议），从而导致的结果也不同。造成这种情况的原因是因为浏览器使用的协议是安全性更高的https协议,可以在控制台查看错误信息<br>

[使用https协议](https://cruxf.github.io/IMOOC/HTML_CSS/Car/index.html)<br>
[使用http协议](https://cruxf.github.io/IMOOC/HTML_CSS/Car/index01.html)<br><br>


# :alien:3、BackTop=>回到顶部效果

除了课程内的那套JavaScript实现方法，另外增加了jQuery的实现方法。实现过程中，小细节很多，主要是需要经常刻意训练自己的思维，毕竟这些业务的写法都差不多，不会变到哪里去的。一个词：“熟能生巧”，关于代码的一些分析都写成注释了。可以从下面的demo中进行查看：<br>

[JavaScript写法](https://cruxf.github.io/IMOOC/HTML_CSS/BackTop/index.html)<br>
[jQuery写法](https://cruxf.github.io/IMOOC/HTML_CSS/BackTop/index01.html)<br>

