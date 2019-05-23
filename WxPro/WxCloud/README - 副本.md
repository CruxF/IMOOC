# 前言

由于这会是一篇很长的课程学习总结，为了优化大家的阅读体验，强烈建议安装Chrome浏览器的插件——GayHub。[下载安装地址](https://github.com/jawil/GayHub)。<br>


# 1、FirstWxPro => [入门微信小程序](https://www.imooc.com/learn/974)

这是一门十分简单的小程序入门指南视频（应该说小程序本来就很简单），根据老师的提供的源码和素材，将其做了部分的结构和样式更改，有兴趣的可以下载该项目，运行查看结果。<br>

起步过于简单，在这不说明，请直接到[官方网站](https://developers.weixin.qq.com/miniprogram/dev/)开启自己的小程序之旅，下面整理一些自己认为重要的知识点。<br>

### 全局配置文件
app.json文件用来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置多 tab 等，具体的请[点击这里](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html)<br>

### swiper组件的使用
[这个组件](https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html?search-key=swiper)是比较常用的，说它比较重要，不仅仅是因为它的常用性，也因为它的栗子有十分好的借鉴性。<br>

结构代码<br>
```html
<swiper indicator-dots="{{indicatorDots}}" autoplay="{{autoplay}}" interval="{{interval}}" duration="{{duration}}" indicator-dots="true">
  <block wx:for="{{imgUrls}}" wx:key="">
    <swiper-item>
      <image src="{{item}}" class="slide-image" width="355" height="150"/>
    </swiper-item>
  </block>
</swiper>
```

脚本代码<br>
```js
Page({
  data: {
    imgUrls: [
      '/images/home1.jpg',
      '/images/home2.jpg',
      '/images/home3.jpg',
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList: null,
  }
})
```
说这个组件的使用具有借鉴性是因为将属性和属性值完全分离了来进行管理，在一定程度上来说，这是十分好的一种方式，结构代码和脚本代码分离便于管理和维护。<br>

### 调用数据的三种方式
在小程序中，一共有三种调用数据的方式，其中一种是调用后台数据，另外两种是调用本地数据，现在我们先来看一看最简单的本地数据调用方式：
```js
// 定义本地脚本数据
Page({
  data: {
    imgUrls: [
      '/images/home1.jpg',
      '/images/home2.jpg',
      '/images/home3.jpg',
    ]
  }
})

//调用本地数据
<block wx:for="{{imgUrls}}" wx:key="">
  <swiper-item>
    <image src="{{item}}" class="slide-image" width="355" height="150"/>
  </swiper-item>
</block>
```
第二种调用本地数据稍微复杂一些，它和Vue程序中调用json数据的方式完全不同，在小程序不能直接调用json文件中的数据，只能将数据保存在一个脚本文件中，然后将其exports出来，最后在需要调用数据的文件中导入，具体请看以下代码：
```js
// 步骤一：分离数据，将数据定义在顶层的data目录下
var joinList_data = [
  {
    "proName": "关于NBA",
    "proDesc": "NBA（National Basketball Association）是美国职业篮球联赛的简称",
    "id": "001"
  }
]
module.exports = {
  joinList: joinList_data
}

// 步骤二：在需要调用数据的脚本文件中引入
var joinListData = require("../../data/joinList.js");

// 步骤三：在周期函数中赋值
Page({
  data: {
    joinList: null
  },
  // 生命周期函数--监听页面加载
  onLoad: function () {
    this.setData({
      joinList: joinListData.joinList
    })
  }
})

// 步骤四：在结构代码中遍历数据
<view class='block' wx:for="{{joinList}}" wx:key="">
  <view class='block-title'>{{item.proName}}</view>
  <text class='block-desc'>{{item.proDesc}}</text>
</view>
```
第三种数据调用方式最重要，因为那是必须会的，这种方式是从后台请求回来数据进行使用，具体方式请看以下代码：
```js
Page({
  data: {
    proList: null,
  },
  onLoad: function () {
    this.getProList();
  }
  // API请求方法
  getProList: function(){
    var self = this;
    wx.request({
      url: 'http://guozhaoxi.top/wx/data.json',
      method: 'GET',
      success: function(res){
        self.setData({
          proList: res.data,
        })
      },
      fail: function(){
        console.log('调用数据失败');
      }
    })
  }
})

// 使用请求回来的数据
<view class='pro-item' wx:for="{{proList}}" wx:key=""></view>
```

### 组件之间的三种传值方式
一说到组件传值，相信有经验的开发人员都知道它的重要性，下面简单的来看看三种传值方式的代码。<br>

第一种：全局传值<br>
```js
// 步骤一：在全局脚本文件中定义数据
App({
  globalData: {
    userInfo: null,
    userName: '全局变量传值',
  }
})

// 步骤二：获取应用实例，不然无法调用全局变量
const app = getApp()

// 步骤三：调用全局变量
Page({
  data: {
  
  },
  onLoad: function (options) {
    console.log(app.globalData.userName);
  },
})
```

第二种：url传值
```js
// 步骤一：使用关键字bindtap绑定一个点击事件方法，data-index是传入一个值
<image class="btn-detail" src='/images/btn_detail.png' bindtap='toDetail' data-index='{{index}}'></image>

// 步骤二：在脚本文件中定义这个方法（方法并不是定义在一个methods集合中的）
Page({
  data: {},
  onLoad: function () {},
  toDetail: function(e){
    // index代表的遍历对象的下标
    var index = e.currentTarget.dataset.index;
    var proList = this.data.proList;
    var title = proList[index].proName;
    wx.navigateTo({
      url: '/pages/detail/detail?title='+title,
    })
  }
})

// 步骤三：在detail组件的脚本文件中接收title这个传入过来的值
Page({
  data: {},
  onLoad: function (options) {
    console.log(options.title);
  },
})
```

第三种：setStorageSync传值
```js
// 步骤一：使用关键字bindtap绑定一个点击事件方法，data-index是传入一个值
<image class="btn-detail" src='/images/btn_detail.png' bindtap='toDetail' data-index='{{index}}'></image>

// 步骤二：在脚本文件中定义这个方法（方法并不是定义在一个methods集合中的）
Page({
  data: {},
  onLoad: function () {},
  toDetail: function(e){
    var index = e.currentTarget.dataset.index;
    var proList = this.data.proList;
    var title = proList[index].proName;
    wx.setStorageSync('titleName', title);
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  }
})

// 步骤三：在detail组件的脚本文件中使用wx.getStorageSync接收titleName这个传入过来的值
Page({
  data: {},
  onLoad: function (options) {
    var titlen = wx.getStorageSync('titleName');
    console.log(titlen);
  },
})
```

#### 组件传值的应用场景
关于组件传值的应用，老师在视频中并没有给出，自己瞎琢磨出一个栗子，记住：**在真正开发中，千万别这么用。** 这个栗子的作用是让我们对组件的传值有一个大概的应用场景，下面请看代码实现：
```js
// 数据接收方
Page({
  data: {
    iskebi: false,
    iszhan: false,
    isqiao: false,
    isgeli: false
  },
  onLoad: function (options) {
    
  },
  onReady: function () {
    var titlee = wx.getStorageSync('titleName');
    console.log(titlee);
    if (titlee == '科比·布莱恩特') {
      this.setData({iskebi: true});
    } else if (titlee == '勒布朗·詹姆斯'){
      this.setData({ iszhan: true });
    } else if (titlee == '迈克尔·乔丹') {
      this.setData({ isqiao: true });
    } else{
      this.setData({ isgeli: true });
    }
  }
})

// 数据显示层
<view wx:if="{{iskebi}}">
  我是科比的球迷
</view>
<view wx:if="{{iszhan}}">
  我是詹姆斯的球迷
</view>
<view wx:if="{{isqiao}}">
  我是乔丹的球迷
</view>
<view wx:if="{{isgeli}}">
  我是格里芬的球迷
</view>
```


### 基础库兼容
这个东西其实也不是太重要，知道有个玩意，以及如何去判断和解决就行，下面看代码：
```js
Page({
  data: {},
  onLoad: function () {},
  // copy事件
  copy: function(){
    // 检测版本是否具备wx.setClipboardData这个API
    if (wx.setClipboardData){
      wx.setClipboardData({
        // 复制的内容，可以设置为动态的数据
        data: '232323232',
        success: function (res) {
          // 模态框
          wx.showModal({
            title: '复制成功',
            content: '内容已经复制成功！',
          })
        }
      })
    }
    else{
      wx.showModal({
        title: '提示',
        content: '您的微信版本太低，请升级',
      })
    }
  }
})
```

### 尾声
以上就是我所做的一些总结，源码都在[这里](https://github.com/CruxF/IMOOC/tree/master/HTML5/FirstWxPro?1528811143397)，有疑问的可以加我慕课账号（Zz皓）私信聊。<br><br>

 
# 2、WxCloud => [轻松入门微信小程序与云开发](https://www.imooc.com/learn/1121)
基础的环境配置以及代码知识在这就不说了，跟着课程以及我上面的学习笔记即可，下面我们直接进入小程序云开发。<br>

### 云数据库
云数据库是小程序提供的一个JSON数据库，也称为是文档型数据库，它最大的特点是十分方便存储以及快速查询数据，主要是应用在需要频繁查询数据的场景中。当涉及到复杂的连表查询数据时，还是应该使用关系型数据库为好，两种数据库的差别如下


使用云数据库我们能够很方便的操作数据，比如添加一些数据，我们只需要以下几个步骤
- 创建小程序云开发
- 开通云开发
- 在云数据库中创建一个集合
- 编写添加数据代码
```js
// 初始化数据库
const db = wx.cloud.database();
Page({
  data: {

  },
  // 插入数据
  insert:function(){
    // 选择user集合，添加数据
    db.collection('user').add({
      data: {
        name:'jerry',
        age: 25
      }
    }).then(res=>{
      console.log('插入数据成功')
    }).catch(err=>{
      console.log('插入数据失败')
    })
  }
})
```

除了插入数据，更新数据、查询数据和删除数据也都基本是这个套路，多去官方文档看一看就知道怎么使用了
```js
// 初始化数据库
const db = wx.cloud.database();
Page({
  data: {

  },
  // 插入数据
  insert:function(){
    // 选择user集合，添加数据
    db.collection('user').add({
      data: {
        name:'jack',
        age: 26
      }
    }).then(res=>{
      wx.showToast({
        title: '插入数据成功',
        icon: 'none'
      })
    }).catch(err=>{
      wx.showToast({
        title: '插入数据失败',
        icon: 'none'
      })
    })
  },
  // 更新数据
  update:function(){
    // 选择user集合，找到id值，更新age数据
    db.collection('user').doc('6cd397ca5cdfd7e300d7cdd77c9735a2').update({
      data:{
        age: 233388
      }
    }).then(res => {
      wx.showToast({
        title: '更新数据成功',
        icon: 'none'
      })
    }).catch(err => {
      wx.showToast({
        title: '更新数据失败',
        icon: 'none'
      })
    })
  },
  // 查询数据
  search:function(){
    // 选择user集合，查询name为'jack'的数据集合
    db.collection('user').where({
      name: 'jack'
    }).get().then(res => {
      wx.showToast({
        title: '查询数据成功，且有：'+res.data.length+'人',
        icon: 'none'
      })
    }).catch(err => {
      wx.showToast({
        title: '查询数据失败',
        icon: 'none'
      })
    })
  },
  // 删除数据
  delete:function(){
    // 选择user集合，查询id值，然后将其数据集合删除
    db.collection('user')
    .doc('6cd397ca5cdfd77a00d778c730512327')
    .remove()
    .then(res=>{
      wx.showToast({
        title: '删除数据成功',
        icon: 'none'
      })
    }).catch(err=>{
      wx.showToast({
        title: '删除数据失败',
        icon: 'none'
      })
    })
  }
})
```

在对数据库中集合的操作时，假如直接在集合里面添加记录，而不是通过代码添加数据，那么该记录(数据)将查询不到，因为这种添加数据的方式缺少openid。要解决这个问题，需要在权限设置中将权限改为“所有用户可读，仅创建者可读写”。不过这种方式添加的数据，缺少openid，无法使用代码将其删除，这点需要留意下。<br>


### 云函数
云函数就是我们上传到云上面的函数，默认在cloudfunctions文件夹下面创建，如果需要修改路径得在project.config.json文件中进行“cloudfunctionRoot”的配置，下面我们创建第一个云函数并且调用它
- 步骤一：在cloudfunctions中创建一个node.js云函数
```js
// 云函数入口函数
exports.main = async (event, context) => {
  return {
    sum: event.a +event.b
  }
}
```
- 步骤二：在js文件中调用它
```js
sumAdd:function(){
  wx.cloud.callFunction({
    name: 'sum',
    data: {
      a:2,
      b:3
    }
  }).then(res => {
    wx.showToast({
      title: '调用云函数成功，值为：'+res.result.sum,
      icon: 'none'
    })
  }).catch(err => {
    wx.showToast({
      title: '调用云函数失败',
      icon: 'none'
    })
  })
}
```
- 步骤三：我们除了可以在js文件中调用云函数，同时我们还能够在管理后台进行“云端测试”。

在初始项目中，cloudfunctions文件夹下有个login文件，我们能够通过把该文件上传到云端，然后调用它获取用户的openid
```js
// 获取用户的openId
getOpenId:function(){
  wx.cloud.callFunction({
    name:'login'
  }).then(res=>{
    console.log(res)
  }).catch(err=>{
    console.log(err)
  })
}
```

云函数还能够对云数据库进行操作，比如批量删除数据
```js
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
// 获取当前云数据库的信息
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await db.collection('user').where({
      name: 'jack'
    }).remove();
  } catch (err) {
    console.error(err)
  }
}


// 批量删除数据(页面js文件)
batchDeleteData:function(){
  wx.cloud.callFunction({
    name:'batchDelete'
  }).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
}
```
<br>


### 云存储
云存储的能力也是云开发的一大特点，它的存储过程如下

下面我们上传一张图片到云端的云存储和云数据库看看
```js
uploadImg:function(){
  // 选择图片
  wx.chooseImage({
    count:1,
    sizeType:['original','compressed'],
    sourceType:['album','camera'],
    success: function(res) {
      // tempFilePath可以作为img标签的src属性显示图片
      const tempFilePath = res.tempFilePaths
      // 上传到云端
      wx.cloud.uploadFile({
        cloudPath: new Date().getTime()+'.png', //上传至云端的路径
        filePath: tempFilePath[0], //小程序临时文件路径
        success: res=>{
          // 返回文件id
          console.log(res.fileID)
          db.collection('images').add({
            data: {
              fileID: res.fileID
            }
          }).then(res=>{
            console.log(res)
          }).catch(err=>{
            console.log(err)
          })
        },
        fail: err=> {
          console.log(err)
        }
      })
    }
  })
}
```

我们将文件上传到数据库中，那么自然能够获取将其展示到页面上
```js
getFile:function(){
  // 获取用户的openId
  wx.cloud.callFunction({
    name: 'login'
  }).then(res=>{
    // 查找openId的数据
    db.collection('images').where({
      _openid: res.result.openid
    }).get().then(res2=>{
      console.log(res2)
      this.setData({
        imgs: res2.data
      })
    })
  })
}
```

那么我们该如何将图片下载到本地呢，首选请看下面一张图片

然后接下来请看源码
```html
<block wx:for="{{imgs}}" wx:key="index">
  <image src='{{item.fileID}}'></image>
  <button bindtap='downloadFile' data-fileid='{{item.fileID}}'>文件下载</button>
</block>
```

```js
downloadFile: function (event){
  wx.cloud.downloadFile({
    fileID: event.target.dataset.fileid, //文件ID
    success: res=>{
      // 返回临时文件路径
      console.log(res.tempFilePath)
      // 保存图片到手机相册
      wx.saveImageToPhotosAlbum({
        filePath: res.tempFilePath,
        success(res){
          wx.showToast({
            title: '保存成功',
            icon: 'none'
          })
        }
      })
    },
    fail: err=>{
      console.log(err)
    }
  })
}
```

### UI框架[Vant Weapp](https://youzan.github.io/vant-weapp/#/intro)的使用
为了能够快速搭建一个项目，我们往往会使用到第三方的UI框架，关于vant-weapp，官网有详细的介绍，下面就演示下如何使用
- 右键miniprogram，选择在终端中打开
- 输入命令：npm init
- 输入命令：npm i vant-weapp -S --production
- 点击微信开发者工具中的工具，再点击“构建npm”
- 点击微信开发者工具中的详情，再点击“使用npm模块”
- 体验下vant的使用
```js
// 在json文件中引入组件
{
  "usingComponents": {
    "van-button": "vant-weapp/button"
  }
}

// 在wxml文件中使用组件
<van-button type='warning'>警告按钮</van-button>
```


### 小程序端和云函数发送请求的方式
我们在调用api的时候需要发送一个请求给后台调取数据，下面看看小程序端和云函数发送请求的区别


下面我们来看看使用云函数请求数据的步骤
- 在cloudfunction文件夹中创建相对应的云函数
- 打开相对应的云函数终端，分别输入命令：npm install --save request和npm install --save request-promise
- 在云函数中根据[官网](https://github.com/request/request-promise)编写请求代码(别忘了编写完成后上传并部署到云端)
```js
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
var rp = require('request-promise');
// 云函数入口函数
exports.main = async (event, context) => {
  return rp(`http://t.yushu.im/v2/movie/in_theaters?start=${event.start}&count=${event.count}`).then(function (res) {
    console.log(res);
    return res;
  }).catch(function (err) {
    console.log(err);
  });
}
```
- 在页面js文件中调用云函数
```js
Page({
  // 页面的初始数据
  data: {
    movieList: [],
    isMore: true //是否有更多数据
  },
  // 获取电影数据
  getMovieList: function () {
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'movielist',
      data: {
        start: this.data.movieList.length,
        count: 10
      }
    }).then(res => {
      console.log(JSON.parse(res.result).subjects);
      // 是否有更多数据
      if (JSON.parse(res.result).subjects.length > 0) {
        this.setData({
          movieList: this.data.movieList.concat(JSON.parse(res.result).subjects)
        });
      } else {
        this.setData({
          isMore: false
        })
      }
      wx.hideLoading();
    }).catch(err => {
      console.error(err);
      wx.hideLoading();
    });
  },
  // 点击评价电影
  gotoComment: function (event) {
    wx.navigateTo({
      url: `../comment/comment?movieid=${event.target.dataset.movieid}`,
    });
  },

  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    this.getMovieList();
  },

  // 页面上拉触底事件的处理函数
  onReachBottom: function () {
    if (this.data.isMore) {
      this.getMovieList();
    }
  }
})
```

### 逻辑比较绕的电影评价功能
这个视频中，貌似就这里比较烧脑以及稍有技术含量(异步请求)的地方，下面我们一步步来分析整个的数据流程。<br>

首先，通过上一个页面，得到了某部电影的id，根据电影的id，我们在页面加载时获取该电影的数据
```js
onLoad: function(options) {
  this.setData({
    movieId: options.movieid
  });
  wx.showLoading({
    title: '加载中',
  })
  // 获取某部电影数据
  wx.cloud.callFunction({
    name: 'getDetail',
    data: {
      movieid: options.movieid
    }
  }).then(res => {
    this.setData({
      detail: JSON.parse(res.result)
    });
    wx.hideLoading();
  }).catch(err => {
    console.error(err);
    wx.hideLoading();
  });
}
```

当然了，getDetail这个云函数是已经被创建好并且部署到云，记得在云函数终端输入命令：npm install --save request和npm install --save request-promise
```js
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
var rp = require('request-promise');
// 云函数入口函数
exports.main = async (event, context) => {
  return rp(`http://t.yushu.im/v2/movie/subject/${event.movieid}`)
    .then(function (res) {
      return res;
    })
    .catch(function (err) {
      // Crawling failed...
    });
}
```

接着我们来监听评价内容以及评价星级的变化，并且同时赋值
```js
// 评价内容发生改变的时候触发
onContentChange: function(event) {
  this.setData({
    content: event.detail
  });
},
// 评价分数发生改变的时候触发
onScoreChange: function(event) {
  this.setData({
    score: event.detail
  });
}
```

然后我们上传图片到微信服务器中，并且将其展示到页面
```js
uploadImg: function() {
  // 选择图片
  wx.chooseImage({
    count: 9,
    sizeType: ['original', 'compressed'],
    sourceType: ['album', 'camera'],
    success: res => {
      // tempFilePath可以作为img标签的src属性显示图片
      const tempFilePaths = res.tempFilePaths
      this.setData({
        images: this.data.images.concat(tempFilePaths)
      });
    }
  })
}
```

最后就是在提交评价时，我们首先需要将图片异步上传到云存储中，等上传完成，我们再将其所有数据提交到云数据库中，这里的核心就是异步处理数据
```js
submit: function() {
  wx.showLoading({
    title: '评论中',
  })
  // 上传图片到云存储
  let promiseArr = [];
  for (let i = 0; i < this.data.images.length; i++) {
    promiseArr.push(new Promise((reslove, reject) => {
      let item = this.data.images[i];
      let suffix = /\.\w+$/.exec(item)[0]; // 正则表达式，返回文件扩展名
      wx.cloud.uploadFile({
        cloudPath: new Date().getTime() + suffix, // 上传至云端的路径
        filePath: item, // 小程序临时文件路径
        success: res => {
          this.setData({
            fileIds: this.data.fileIds.concat(res.fileID)
          });
          reslove();
        },
        fail: console.error
      })
    }));
  }
  // 当把所有图片都异步上传到云存储时，再上传到云数据库comment集合中
  Promise.all(promiseArr).then(res => {
    db.collection('comment').add({
      data: {
        content: this.data.content,
        score: this.data.score,
        movieid: this.data.movieId,
        fileIds: this.data.fileIds
      }
    }).then(res=>{
      wx.hideLoading();
      wx.showToast({
        title: '评价成功',
      })
    }).catch(err=>{
      wx.hideLoading();
      wx.showToast({
        title: '评价失败',
      })
    })
  });
}
```

### 审核上线
- 点击微信开发者工具中的上传
- 点击微信公众号 | 小程中的版本管理
- 点击提交审核