# 前言

为了优化大家的阅读体验，强烈建议安装Chrome浏览器的插件——GayHub。[下载安装地址](https://github.com/jawil/GayHub)<br>


# [1、进击Node.js基础（一）](https://www.imooc.com/learn/348)
刷了两遍这门课程，印象最深刻的就是“大佬真会开车！”。好了，说正经，由于这门课程的三年前的了（后悔自己现在才认真学，嘤嘤嘤~），不过亮点还是有的，下面请看我十分繁琐但具体的学习笔记。<br>

### 概念
Node只是一个基于Chrome浏览器V8引擎的平台，并不是一门语言，它选择JavaScript作为运行在该平台上的编程语言。<br>

在维基百科上是这么解释的：Node.js是一个能够在服务器端运行JavaScript的开放源代码、跨平台JavaScript 运行环境。Node.js由Node.js基金会持有和维护，并与Linux基金会有合作关系。Node.js采用Google开发的V8运行代码，使用事件驱动、非阻塞和 异步输入输出模型等技术来提高性能，可优化应用程序的传输量和规模。这些技术通常用于数据密集的实时应用程序。<br>

Node.js大部分基本模块都用JavaScript语言编写。在Node.js出现之前，JavaScript通常作为客户端程序设计语言使用，以JavaScript写出的程序常在用户的浏览器上运行。Node.js的出现使JavaScript也能用于服务器端编程。Node.js含有一系列内置模块，使得程序可以脱离Apache HTTP Server或IIS，作为独立服务器运行。关于更多关于Node的知识请[点击这里](https://zh.wikipedia.org/wiki/Node.js)<br><br>

### 模块与包管理工具
在JavaScript发展初期就是为了实现简单的页面交互逻辑，寥寥数语即可；如今CPU、浏览器性能得到了极大的提升，很多页面逻辑迁移到了客户端（表单验证等），随着web2.0时代的到来，Ajax技术得到广泛应用，jQuery等前端库层出不穷，前端代码日益膨胀，这时候JavaScript作为嵌入式的脚本语言的定位动摇了，JavaScript却没有为组织代码提供任何明显帮助，甚至没有类的概念，更不用说模块（module）了，JavaScript极其简单的代码组织规范不足以驾驭如此庞大规模的代码。<br>

既然JavaScript不能handle如此大规模的代码，我们可以借鉴一下其它语言是怎么处理大规模程序设计的，在Java中有一个重要带概念——package，逻辑上相关的代码组织到同一个包内，包内是一个相对独立的王国，不用担心命名冲突什么的，那么外部如果使用呢？直接import对应的package即可。<br>

遗憾的是JavaScript在设计时定位原因，没有提供类似的功能，开发者需要模拟出类似的功能，来隔离、组织复杂的JavaScript代码，我们称为模块化。一个模块就是实现特定功能的文件，有了模块，我们就可以更方便地使用别人的代码，想要什么功能，就加载什么模块。而包管理工具就是用来管理JavaScript各个模块，它们之间的关系可以看看下面一张图
![](https://github.com/CruxF/IMOOC/blob/master/Node/NodeBaseOne/imgs/%E6%A8%A1%E5%9D%97%E4%B8%8E%E5%8C%85%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7.jpg?raw=true)<br><br>

### Commonjs规范与Node的关系
CommonJS规范是由NodeJS发扬光大，这标志着JavaScript模块化编程正式登上舞台。根据CommonJS规范，一个单独的文件就是一个模块。每一个模块都是一个单独的作用域，也就是说，在该模块内部定义的变量，无法被其他模块读取，除非定义为global对象的属性。<br>

模块只有一个出口，module.exports对象，我们需要把模块希望输出的内容放入该对象。加载模块使用require方法，该方法读取一个文件并执行，返回文件内部的module.exports对象。课程对commonjs的解读以及和Node之间的关系浓缩在了下面两张图里
图一
![](https://github.com/CruxF/IMOOC/blob/master/Node/NodeBaseOne/imgs/commonjs%E8%A7%84%E8%8C%83.jpg?raw=true)
图二
![](https://github.com/CruxF/IMOOC/blob/master/Node/NodeBaseOne/imgs/Node%E4%B8%8ECommonjs%E8%A7%84%E8%8C%83%E7%9A%84%E5%85%B3%E7%B3%BB.jpg?raw=true)<br><br>

### 模块的分类
不多说了，请看下图
![](https://github.com/CruxF/IMOOC/blob/master/Node/NodeBaseOne/imgs/%E6%A8%A1%E5%9D%97%E7%9A%84%E5%88%86%E7%B1%BB.jpg?raw=true)<br><br>

### 模块的流程
关于模块的执行流程，老师在课程中已经用一张图完全体现出来了，并且还给出了相关的demo，有兴趣的可以[点击这里查看完整的demo源码](https://github.com/CruxF/IMOOC/tree/master/Node/NodeBaseOne/node4-3/school?1541586257122)，包括老师没有敲完的那一段。
![](https://github.com/CruxF/IMOOC/blob/master/Node/NodeBaseOne/imgs/%E6%A8%A1%E5%9D%97%E7%9A%84%E6%B5%81%E7%A8%8B.jpg?raw=true)<br><br>

### exports和module.exports的区别















