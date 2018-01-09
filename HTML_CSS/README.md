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

老师：利用dl来模拟单选按钮，单单在语义化这一块就已经很大问题了，效果实现是利用了css中`background-position`属性。<br>
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
[点击查看效果](https://cruxf.github.io/IMOOC/HTML_CSS/FormBea/select_finished01.html)<br>


