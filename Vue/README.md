# 前言

为了优化大家的阅读体验，强烈建议安装Chrome浏览器的插件——GayHub。[下载安装地址](https://github.com/jawil/GayHub)<br>


# 1、VueBase => Vue.js入门基础

这是慕课网一门古老的Vue入门课程，然而在里面能够学习的东东还是十分多的，比如数据绑定，组件传参和localstorage等。下面引出三道基础的Vue面试题：

- v-if和v-show的区别是什么？
- v-html和v-text的区别是什么？
- 父子组件如何进行传值？

以上三个问题我都记录在了[前端开发面试题大合集](https://github.com/CruxF/Blog/issues/4)，有需要的可以来看看。


### 开发步骤以及其他


**一：环境准备**

我的是：node -v(8.10.0)、npm-v(5.7.1)、webpack -v（3.10.0）

**二：[脚手架搭建](http://www.cnblogs.com/fengxiongZz/p/7994448.html)**

**三：功能实现**

1、localstorage：简单谈一下我对这个功能实现的流程，如有错误的希望能及时告知。首先，通过点击事件addNew()把数据push进了对象items中；然后vue中的监听器侦测到items对象的数据变化，于是调用了外部对象Store的save方法，将数据存储到了本地；最后调用Store对象中的fetch()方法，将数据显示出来。

2、父子组件传值和自定义事件：对这两个功能的实现理解还不是很透彻，下面贴核心代码让大家研究研究先。
```
父组件.vue
<template>
  <div id="app">
    <ComponentA msgfromfather="父亲的值" v-on:child-tell-me-something="listenToMyBoy"></ComponentA>
  </div>
</template>
<script>
  //导入组件
  import ComponentA from './componentA';
  export default {
    name: 'App',
    data() {
      return {
        childWords: ''
      }
    },
    methods: {
      listenToMyBoy(msg) {
        console.log(msg);
        this.childWords = msg;
      }
    },
    //注册组件
    components: {
      ComponentA
    }
  }
</script>

子组件.vue
<template>
  <div class="hello">
    <h1>{{message}}</h1>
    <button v-on:click="onClickMe">点击我！</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        message: "hello vuee"
      }
    },
    //父子组件传值
    props: ['msgfromfather'],
    methods: {
      onClickMe() {
        console.log(this.msgfromfather);
        this.$emit('child-tell-me-something',this.message);
      }
    }
  }
</script>
```
以上就是关于第一个todoList的简单分析，功能实现难度不大。最最让我崩溃的是根据课程实现的第二个todoList，发现很多难以理解的bug，[问题描述](https://github.com/CruxF/IMOOC/blob/master/Vue/VueBase/%E9%97%AE%E9%A2%98%E5%8F%91%E7%8E%B0.txt)，具体的可以下载我的代码运行进行查看即可。

**下载运行方式一**
- 将我的整个项目下载到本地：`git clone https://github.com/cruxf/IMOOC.git`
- 然后进入到这个项目中
- 安装依赖包：npm install
- 运行：npm run dev

**下载运行方式二**
- 已经搭建好vue-cli
- 将[src目录](https://github.com/CruxF/IMOOC/tree/master/Vue/VueBase/src)下的所有代码copy即可
- 运行：npm run dev

