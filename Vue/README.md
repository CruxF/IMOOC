# 前言

为了优化大家的阅读体验，强烈建议安装Chrome浏览器的插件——GayHub。[下载安装地址](https://github.com/jawil/GayHub)<br>


# 1、VueBase => [Vue.js入门基础](https://www.imooc.com/learn/694)

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


# 2、vue-cart => [使用Vue2.0实现购物车和地址选配功能](https://www.imooc.com/learn/796)

### 前言

该案例来源于慕课网的教程，根据这门课程，做了一些总结和分析，进一步提升自己的vue使用水平。<br>

在文件夹目录中，[cart.html](https://github.com/CruxF/Vue-base/blob/master/vue-cart/cart.html)和[address](https://github.com/CruxF/Vue-base/blob/master/vue-cart/address.html)为原始代码，没有做过任何的修改，可以在充分理解该门课程下，自己动手实现一遍案例中的功能。因为vue-resource已经不被推荐使用，于是我用了axios替代了vue-resource来获取json中的数据。<br>

**【注意】：** <br>
由于本地的vue和vue-resource会面临过时的危机，而自己一开始也是因为使用别人那个过时vue-resource，一直无法取得json中的数据，所以我们最好通过CDN引入外部资源，该案例需要用到的相关资源地址：<br>
[vue官网](https://cn.vuejs.org/v2/guide/)<br>
[vue-resource](https://github.com/pagekit/vue-resource)<br>
[axios](https://github.com/axios/axios)<br><br>

### 训练方法

一步一个脚印，我们首先分析下**购物车** 实现所有功能的过程。<br>

1、渲染商品信息、商品金额、商品数量以及每一种商品的总额。<br>
【分析】<br>
由于以上所有的数据都保存在一个json文件中，那么我们肯定要先将所需要的数据取出来，然后使用一个数组将得到的数据保存起来。为了程序的健壮性和易读性，我们需要将获取json数据封装成一个方法，接着在某一个钩子函数中调用该方法。<br>

以上是对实例化一个Vue里面JavaScript代码的编写思路，下面我们就得寻思如何将获取到的数据渲染到html页面，这时候应该每个人都能想到使用v-for指令来循环，但是也要更深的思考一下：v-for的位置应该放在哪？v-for里面的值分别代表了哪些数据？图片的路径该如何绑定？总价格该怎么去计算？v-for里面是否还可以继续嵌套v-for？为什么需要在v-for里面再嵌套一层v-for？把这些慢慢地捋清楚了，对我们的编程思维会有很大的提升，从此也就能够举一反三了。<br><br>


2、格式化金额<br>
【分析】<br>
一般情况下，在一个Vue项目中要对某一类数据进行格式化，那么肯定得用到过滤器。既然如此，那我们的思路就很清晰了：首先得定义一个过滤器，在这个过程中得分清楚局部过滤器和全局过滤器的定义以及应用的场景，接着我们就得在html页面上调用这个过滤器，如何去调用？如何传递额外的参数？这些我们都得熟悉。<br><br>


3、单件商品金额计算<br>
【分析】<br>
商品金额与商品数量挂钩，想到商品数量的增减，一般人会定义两个不同的方法。其实完全没必要，我们只要在传递的参数上动动手脚就行了。这时候我们就要很清楚：单击数据改变，那么双向数据绑定是一定需要的，也需要在两个按钮中绑定事件，触发事件则调用方法。那么该如何传递参数？每一个参数又代表什么呢？商品数量的上下限怎么去设置？这些我们想明白后，下手就容易多了。<br><br>


4、商品单选功能。<br>
【分析】<br>
经过测试，我们在相应的元素添加上check类名，那单选按钮的样式就显示出来了。那这样有眉目了，下面先看一段代码解读。<br>
v-bind:class="{'check': item.checked}"含义是当item.checked为真的时候，check这个类名会被附加，即页面最终渲染会是class="item-check-btn check"。<br>
这时候我们就需要定义一个事件来改变item.checked的值，由于json文件中并没有checked这个属性，因此我们必须自己来注册属性，如何去注册一个对象的属性？这才是我们应该掌握的知识点。<br><br>


5、全选和取消全选
这段代码有点绕，讲不太清楚，我还是直接放代码，根据代码来理解。<br>
```
<div class="item-all-check">
  <a href="javascript:void 0">
    <span class="item-check-btn" :class="{'check':checkAllFlag}">
      <svg class="icon icon-ok"><use xlink:href="#icon-ok"></use></svg>
    </span>
    <span v-show="!checkAllFlag" @click="checkAll(true)">全选</span>
  </a>
</div>
<div class="item-all-del">
  <a href="javascript:void 0" class="item-del-btn" @click="checkAll(false)">
    <span v-show="checkAllFlag">取消全选</span>
  </a>
</div>
```
下面是JavaScript处理方法：<br>
```
checkAll: function (flag) {
  this.checkAllFlag = flag;
  var _this = this;
  this.productList.forEach(function (item, index) {
    if (typeof item.checked == 'undefined') {
      _this.$set(item, "checked", flag);
    } else {
      item.checked = flag;
    }
  });
}
```
根据上面两段代码来分析：点击全选，checkAllFlag的值变成true，而productList对象组里的对象checked属性要么被创建赋值为true，要么直接被赋值为true（已经被单选上的商品）。此刻对应的页面就是全选按钮样式被添加上，“全选”两个字消失，而“取消全选”两个字出现。对于点击取消全选，执行流程也是一样的，即不说了，需要时刻记住的是：Vue项目中数据是能够共享的。<br><br>


6、商品总金额计算<br>
【分析】<br>
商品的总金额 = 各类商品数量X各类商品金额。实现思路很简单，只要定义一个方法，当商品的按钮被点击选中的时候，那么计算总金额，需要注意的是金额的叠加问题和清除问题，然后就是在何时何地调用该方法，最后就是将总金额渲染到html页面。<br><br>


7、删除商品<br>
【分析】<br>
在html代码中，有一个蒙层效果`<div class="md-overlay" v-if="delFlag"></div>`，我们在删除商品这个过程中需要定义两个比较重要的点击事件：一个事件点击删除，我们需要把要删除的对象保存起来，同时显示出蒙层；另外一个事件就是要从对象组里面获取该对象的索引值，然后根据splice方法删除索引值从而达到删除对象的效果。<br><br>

关于购物车功能的实现思路就分析到这里，还有更多的小细节可以自己试着补充一下。如果觉得这分析欠妥的话，希望给些建议，疑义相与析，[点击查看演示](https://cruxf.github.io/Vue-base/vue-cart/cart01.html)。下面开始关于地址选项的分析。<br><br>


**地址选项分析：** <br>

1、渲染出所有地址<br>
【分析】<br>
这个和前面的购物车渲染商品信息大同小异，需要注意的是json里面的数据，因为有时候数据的不用，我们调取json数据要写的代码也是不一样的。<br><br>

2、开始默认显示3组数据<br>
【分析】<br>
要实现这个功能，我们需要明白的就是v-for指令里面不仅仅可以循环对象组，还可以循环方法，只要方法中返回的是一组对象即可，并且该方法要在计算属性中定义，因为在截取数据前，首先的缓存数据，截取数据使用的方法为：slice()。<br><br>

3、显示更多<br>
【分析】<br>
可以定义一个方法，改变数据截取的数量。下面介绍一个利用三元运算符来实现这个功能：<br>
`<a class="addr-more-btn up-down-btn" href="javascript:" @click="(limitNum == 3) ? limitNum=addressList.length : limitNum=3">`<br><br>

4、选中样式切换<br>
【分析】<br>
我们都知道，在v-for指令中，能将数据的索引值遍历出来，那么这个索引值有什么用呢？下面请看一段代码：<br>
`<li v-for="(item,index) in filterAddress" v-bind:class="{'check': index == currentIndex}" @click="currentIndex=index">`<br>
该段代码十分巧妙的使用索引值来实现点击切换样式，它的实现原理就像是：2 = y？然后点击事件触发的时候，就把y赋值为2（2在这象征的是索引值），因此2 = y为true，故check这个类被添加进去。<br><br>

5、设置默认地址<br>
【分析】<br>
在json文件中，我们有个属性是用来说明页面是显式“设为默认”还是“默认地址”，这个功能我们可以通过v-if去实现。当我们点击“设为默认”的时候，可以调用一个方法，传递的参数为当前对象的ID值，接着我们去遍历对象组，判断对象组里面是否有对象的ID值等于传递进来的对象ID值，如果相等，则把“默认地址”显示出来，而其他的则隐藏。<br><br>

6、配送方式选项<br>
【分析】<br>
实现思路与技巧都与第4步“选中样式切换”一样。可以看以下代码：<br>
```
<li v-bind:class="{'check': shippingMethod == 1}" @click="shippingMethod = 1">
  <div class="name">标准配送</div>
  <div class="price">Free</div>
</li>
<li v-bind:class="{'check': shippingMethod == 2}" @click="shippingMethod = 2">
  <div class="name">高级配送</div>
  <div class="price">180</div>
</li>
```
费了好长段时间，终于分析完了，[点击查看演示](https://cruxf.github.io/Vue-base/vue-cart/cart01.html)。之前断断续续看了几遍视频，却总是不明就里，原来是过于浮躁，急于求成，导致浪费很多时间。其实对于技术，我现在才明白：不努力去理解代码，那么敲再多、敲再久能力也不会有任何的提高。<br><br>


# 3、Vue2.5 => [Vue2.5入门基础](https://www.imooc.com/learn/694)

这是慕课网非常好的一门课程，让我对Vue基础且重要的某些知识有了进一步的认识与理解，在[这份源码中](https://github.com/CruxF/IMOOC/tree/master/Vue/Vue2.5?1524482350894&1524482361361)，[test.html](https://github.com/CruxF/IMOOC/tree/master/Vue/Vue2.5/test.html)是使用最原始的方式进行编写的，粘贴复制能够直接运行，剩下的就是通过vue-cli来实现的，至于该如何运行vue-cli构建的项目呢，大家自行上网百度一下，下面请看我的一些总结。

#### 1、TodoList增加功能实现思路
由于数据是从一个数组里面遍历出来的，因此我们一开始就能够确定的就是需要定义一个数组和一个数据。那么该如何将每一条数据增加进数组里面然后再遍历出来呢？从这里我们就可以想到需要定义一个触发增加的事件（键盘事件或者鼠标事件），这个事件的内部逻辑很简单，就是获得页面双向绑定的数据，然后将该数据增加到数组中，这么一想，整个实现流程就很明朗了。

**备注**：在v-for增加:key属性能够提升每一项的渲染效率或者性能，:key属性的值的要求是每一项都不能相同，所以可以这样设置:key="index"(前提是index被定义出来了，如:v-for="(item,index) of list")


#### 2、父子组件传值的思路
其实父组件传值给子组件的地方是在调用子组件的那个位置，通过一个属性，那个属性一定得有值（不然为啥叫父子组件传值呢？），比如:content="item"中，属性为content，而属性值则是被v-for遍历出来的值item，这是在父组件里发生的事情。

在子组件中相对来说就比较简单了，就是通过props接收从父组件传递过来的属性，然后再调用那个属性即能够将相应的属性值渲染出来。


#### 3、TodoList删除功能实现思路
由于真正的属性值(也就是数据)是从父组件那里传递过来的，数据也是在父组件里存储的，因此要删除子组件中的数据，那么只能从父组件那边下手。这时就要考虑到父子组件的通信了，也就是发布订阅模式。

当子组件某个事件被触发时，那么子组件内部就会发布一个自定义事件和相对应的参数；此时父组件监听(也称为订阅)子组件自定义的事件，当该自定义事件被触发的时候,则在父组件里调用一个方法，实现删除的功能。

**备注**：如果不在子组件添加对应的参数index，那么结果会是如何呢？如果在模板中这么定义:@delete="handleDelete()"会发生什么情况呢？为什么？该如何修改才能达到这么定义:@delete="handleDelete"的效果？
[戳这里查看演示](https://cruxf.github.io/IMOOC/Vue/Vue2.5/test.html)<br><br>


# 4、JokcyVueTodo => [Vue+Webpack打造todo应用](https://www.imooc.com/learn/935)

### 前言

这节课程，该怎么说呢？该如何说呢？讲师为我打开了一扇门，一扇何为架构师的门。讲师真的是能力超群，我看了好几遍，依然觉得懵逼，其中蕴含的编程思想和思维逻辑真的是能让人大脑炸裂，仅仅是一个小demo，就包含这么多的精华和亮点，不敢想象，要是一个项目，该是一副怎样的情景，自己还是太菜了，需好好努力。

对于课程中webpack相关配置，我完全不知道如何说起，这是一个webpack基础的问题，同时也是你的架构能力和编程经验的问题，所以暂时不说先，如果非要扯一点的话，那么请看我的一些杂乱无章的[笔记](https://github.com/CruxF/IMOOC/blob/master/Vue/JokcyVueTodo/%E8%AF%B4%E6%98%8E.txt)，以及一些相关webpack[配置文件的注释](https://github.com/CruxF/IMOOC/blob/master/Vue/JokcyVueTodo/webpack.config.js)。下面简单分析下业务逻辑的代码。<br>

**todo组件**<br>
该demo的主要业务在于todo.vue这个组件，而这个组件中又包含了两个子组件，下面是todo.vue组件的结构组成代码
```
<template>
  <section class="real-app">
    <input type="text" class="add-input" autofocus="autofocus" placeholder="接下去要做什么？" @keyup.enter="addTodo">
    <item :todo="todo" v-for="todo in filteredTodos" :key="todo.id" @del="deleteTodo" />
    <tabs :filter="filter" :todos="todos" @toggle="toggleFilter" @clearAllCompleted="clearAllCompleted" />
  </section>
</template>
```

我们先分析一下input元素到底做了什么。它的作用很简单，就是按下回车键（enter）的时候往一个数组里面添加数据，这个数据是一个对象，里面包含了三个属性，分别是id、content和completed，下面来看核心代码
```
addTodo(e) {
  this.todos.unshift({
    id: id++,
    content: e.target.value.trim(),
    completed: false
  })
  e.target.value = ''
}
```


**item组件**<br>
接下来就是item这个组件，比较简单。它的作用是接收todo.vue这个父组件传过来的数据，然后呈现出这些数据，记得这些数据是来自`v-for="todo in filteredTodos"`这里。通过v-model指令在input元素中特性更改todo.completed这个值是为true还是为false，从而达到样式的改变。并且在这个子组件中，当我们点击删除的时候，会派发一个事件到父组件，同时传递参数。下面请看核心代码
```
<template>
  <div :class="['todo-item', todo.completed ? 'completed' : '']">
    <input type="checkbox" class="toggle" v-model="todo.completed">
    <label>{{todo.content}}</label>
    <button class="destory" @click="deleteTodo"></button>
  </div>
</template>

<script>
  export default {
    props: {
      todo: {
        type: Object,
        required: true,
      }
    },
    methods: {
      deleteTodo() {
        this.$emit('del', this.todo.id)
      }
    }
  }
</script>
```

对于在父组件中的这个计算属性也不得不看，属于重点内容。可能看视频会挺懵的，但是换成下面那种写法应该很好理解
```
computed: {
  filteredTodos() {
    if(this.filter === 'all') {
      return this.todos
    }
    const completed = (this.filter === 'completed')
    return this.todos.filter(function(Obj) {
      return completed === Obj.completed
    })
  }
},
```
当filter的值等于all的时候，那么就向item组件传递所有数据；当filter的值等于completed的时候，那么就向item组件传递已经完成的数据。其中在过滤函数（filter）中，Obj代表的是todos这个数组对象。<br><br>

继续item组件派发出来的一个删除事件，直接看源码
```
deleteTodo(id) {
  this.todos.splice(this.todos.findIndex(function(Obj) {
    return Obj.id === id
  }), 1)
},
```
即当子组件item中的deleteTodo方法被触发的时候，那么在父组件todo中这个del事件就会被触发，那么父组件中的这个deleteTodo方法就会被执行，删除对应的数据。<br>


**tabs组件**<br>
这个组件是最为复杂的组件，同时也是最重要的，父组件todo向这个子组件中传递了两个参数todos[]数组和filter状态码。下面请看代码
```
<template>
  <div class="helper">
    <span class="left">{{unFinishedTodoLength}} items left</span>
    <span class="tabs">
      <span
        v-for="state in states"
        :key="state"
        :class="[state, filter === state ? 'actived' : '']"
        @click="toggleFilter(state)"
      >
        {{state}}
      </span>
    </span>
    <span class="clear" @click="clearAllCompleted">Clear Completed</span>
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: String,
      required: true,
    },
    todos: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      states: ['all', 'active', 'completed']
    }
  },
  computed: {
    unFinishedTodoLength() {
      return this.todos.filter(function(Obj){
      	return !Obj.completed
      }).length
    }
  },
  methods: {
    clearAllCompleted() {
      this.$emit('clearAllCompleted')
    },
    toggleFilter(state) {
      this.$emit('toggle', state)
    }
  }
}
</script>
```
关于删除和遍历数据的解读，应该是没必要了。因为和之前的解读类似，下面具体来解析下当点击了active按钮，数据的改变流程<br>
1、在子组件中点击active这个按钮，那么子组件的toggleFilter方法被调用，state值（active）被派发出去；<br>
2、在父组件中，监听到子组件的事件被触发，那么父组件的toggleFilter被调用，父组件的filter值被赋值为‘actibve’；<br>
3、在父组件中的计算属性内，`const completed = (this.filter === 'completed')`为false，那么在这段代码中
```
const completed = (this.filter === 'completed')
return this.todos.filter(function(Obj) {
  return completed === Obj.completed
})
```
什么时候`completed === Obj.completed`为ture呢，就是当父组件内todos数组对象中completed为fase的时候，也就是任务没被完成的状态。我知道本意不是这样的，但是大概意思就是那样，可以把state值为completed代入再重新捋一捋思路，那么应该就清晰明了。下面是该项目的运行效果<br>
[点我查看效果](https://cruxf.github.io/IMOOC/Vue/JokcyVueTodo/index.html)<br>

### 尾声
讲师实在是牛批的不行，佩服，同时也感谢他带我跨进了一道门，代码，真的是有意思。<br><br>


# 5、VueEbook => [快速入门Web阅读器开发](https://www.imooc.com/learn/1038)

很久没有看到这种有质量的课程啦，讲师的思路很清晰，其中关于编程的思想也有涉及到，总之一开口就能人觉得不简单。由于这不是一门Vue的基础课程，因此没有任何Vue基础或者是基础不牢固的可以先[来这里学习一波](https://github.com/CruxF/Vue-base/issues/1)。下面就是一些我做的简单笔记，有兴趣的可以看一看。<br><br>

### 笔记1：阅读器工作原理简介
各种格式(txt、pdf、epub、mobi...)的电子书  ==>  解析电子书(书名、作者、目录、封面、章节...)  ==> (通过阅读器引擎)  ==>  渲染  ==>  功能(字号、背景色、目录、书签、笔记...)<br>

【注】<br>
epub：全称是Electronic Publication，是一种电子出版物<br>
mobi：是Amazon Kindle的电子书格式<br><br>

### 笔记2：生成字体图标
- 步骤一：进入[网址](https://icomoon.io/app/#/select), 然后跟着视频点击左上角新建一个图标集合(new empty set),接着点击图标集合的properties，进入里面再修改(Edit Metadata)集合信息
- 步骤二：点击图标集合的Import to set导入svg文件，之后再选择全部(select all)
- 步骤三：点击右下角的generate font，之后再点击download<br>


### 笔记3：创建一个vue-cli项目
由于我之前在本地中全局安装了webpack和[vue-cli](http://www.cnblogs.com/fengxiongZz/p/7994448.html)，因此初始化该项目我只要这么做即可
![](https://github.com/CruxF/IMOOC/ProImages/vueEbook_webpack.jpg)

接着我们把这个项目拖进VScode编辑中，然后进入终端，运行npm run dev就将项目跑起来了。在vscode这个编辑中我们能够打开两个终端，这样是十分方便开发的。比如在打开项目服务器的同时也能够在另一个终端查看当前的IP地址。<br><br>


### 笔记4：通过IP地址访问项目
首先通过命令在终端查看到本地IP，接着在config文件夹中修改index.js文件的host为0.0.0.0，那么我们就能在浏览器通过下面那种方式访问了
```
http://192.168.0.***:8080/#/
```

### 笔记5：项目正式开始
- 将电子书复制到static文件夹中
- 下载sass依赖包npm install node-sass sass-loader --save-dev(这个可能需要管理员身份来进行安装)
- 下载阅读引擎npm install epubjs --save
- 将字体图标复制进来，导入项目中的文件包括一个css文件以及一个fonts字体文件夹，使用方法是在某个元素上添加定义好的类名)，记得css文件中的相关路径需要根据实际情况进行更改。<br>


### 笔记6：rem的相关知识
rem是CSS3新增的一个相对长度单位，rem的值相当于根元素font-size值的倍数，比如
```
1rem = 根元素font-size
2rem = 根元素font-size * 2
```

我们通过DOMContentLoaded事件动态设置html根元素font-size，举个栗子，在APP.vue中做如下设置
```js
<script>
export default {
  name: 'App'
}
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
})
</script>
```
注：当初始的HTML文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完成加载。<br><br>


### 笔记7：写一个全局的px转rem的方法
首先定好转换的规则
```scss
@import 'reset';
// 因为1rem = fontSize px,1px = (1/fontSize)rem，所以得以下代码
$fonSize: 37.5;
@function px2rem($px) {
  @return ($px / $fonSize) + rem;
}
@mixin center() {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

接着就在组件中进行调用即可
```scss
<style lang='scss' scoped>
  @import '@/assets/styles/global.scss';
  .mask {
    height: px2rem(100);
  }
</style>
```


### 笔记8：epubjs的核心工作原理解析
- epub格式的电子书 ==> Book(通过epub.js实例化了一个Book对象)
- Book ==> Rendition(通过renderTo方法生成一个Rendition对象负责电子书的渲染) ==> Theme(负责电子书的样式和主题)
- Book ==> Location(负责电子书位置定位)
- Book ==> Navigation(负责电子书的目录以及定位)

以上的总结可以归为下列一张图
![](https://github.com/CruxF/IMOOC/ProImages/vueEbook_epub.jpg)


### 笔记9：消除eslint语法规则
- 方式一：在组件内部定义，将某个出现警告的规则取消
```js
<script>
/* eslint-disable space-before-function-paren */
export default {
  name: 'Ebook',
  data () {
    return {}
  },
}
</script>
```

- 方式二：在.eslintrc.js文件中将该规则关闭掉(这个需要重新npm run dev才能生效)
```js
rules: {
  // allow async-await
  'generator-star-spacing': 'off',
  // allow debugger during development
  'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  'space-before-function-paren': 'off'
}
```


### 笔记10、关于flex属性
这个属性定义在子元素中，是flex-grow、flex-shrink、flex-basis这三个属性的缩写，默认值为“0 1 auto”。
- flex-grow：它的作用是让子元素以几倍宽度拉伸，属性值的类型为number
- flex-shrink：它的作用就是让子元素在页面缩小时宽度如何变化，属性值为number，默认值是1。
当值为2时，说明页面缩小时，该子元素将相对缩小两倍；当值为0时，页面缩小时，该子元素宽度不会发生改变。
- flex-basis：设置弹性盒元素的初始长度
- 更多[flex布局知识](https://github.com/CruxF/Blog/issues/9)


### 笔记11、父组件触发子组件方法的一种方式
通过ref这个关键字绑定了子组件这个对象。官方说法就是：ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例。<br>

由于我觉得这个知识点蛮重要的，栗子也很有代表性，于是就将其比较完整的记录下来，下面看父组件代码：
```js
<template>
  <div class="ebook">
    <div class="read-wrapper">
      <div class="mask">
        <div class="center" @click="toggleTitleAndMenu"></div>
      </div>
    </div>
    <menu-bar :ifTitleAndMenuShow="ifTitleAndMenuShow" ref="menuBar">
    </menu-bar>
  </div>
</template>

<script>
  import MenuBar from '@/components/MenuBar';
  export default {
    name: 'Ebook',
    data() {
      return {
        ifTitleAndMenuShow: false
      }
    },
    mounted() {
      this.showEpub()
    },
    methods: {
      // 菜单栏和底部导航栏的切换
      toggleTitleAndMenu() {
        this.ifTitleAndMenuShow = !this.ifTitleAndMenuShow
        if(!this.ifTitleAndMenuShow) {
          this.$refs.menuBar.hideSetting()
        }
      }
    },
    components: {
      MenuBar
    }
  }
</script>
```
下面继续来看子组件代码
```js
<template>
  <div class="menubar">
    <transition name="slide-up">
      <div class="menu-wrapper" v-show="ifTitleAndMenuShow">
        <div class="icon-wrapper" @click="showSetting">
          <span class="icon-a icon">A</span>
        </div>
      </div>
    </transition>
    <transition name="slide-up">
      <div class="setting-wrapper" v-show="ifSettingShow"></div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'MenuBar',
    props: {
      ifTitleAndMenuShow: {
        type: Boolean,
        default: true
      },
      fontSizeList: Array
    },
    data() {
      return {
        ifSettingShow: false
      }
    },
    methods: {
      showSetting() {
        this.ifSettingShow = true
      },
      hideSetting() {
        this.ifSettingShow = false
      }
    }
  }
</script>
```



















