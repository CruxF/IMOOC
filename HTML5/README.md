# 前言

由于这会是一篇很长的课程学习总结，为了优化大家的阅读体验，强烈建议安装Chrome浏览器的插件——GayHub。[下载安装地址](https://github.com/jawil/GayHub)<br>


# 1、FirstWxPro => [入门微信小程序](https://www.imooc.com/learn/974)

这是一门十分简单的小程序入门指南视频（应该说小程序本来就很简单），根据老师的提供的源码和素材，将其做了部分的结构和样式更改，有兴趣的可以下载该项目，运行查看结果。<br>

起步过于简单，在这不说明，请直接到[官方网站](https://developers.weixin.qq.com/miniprogram/dev/)开启自己的小程序之旅，下面整理一些自己认为重要的知识点。<br>

#### 1、全局配置文件
app.json文件用来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置多 tab 等，具体的请[点击这里](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html)<br>

#### 2、swiper组件的使用
[这个组件](https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html?search-key=swiper)是比较常用的，说它比较重要，不仅仅是因为它的常用性，也因为它的栗子有十分好的借鉴性。<br>
结构代码<br>
```
<swiper indicator-dots="{{indicatorDots}}" autoplay="{{autoplay}}" interval="{{interval}}" duration="{{duration}}" indicator-dots="true">
  <block wx:for="{{imgUrls}}" wx:key="">
    <swiper-item>
      <image src="{{item}}" class="slide-image" width="355" height="150"/>
    </swiper-item>
  </block>
</swiper>
```
脚本代码<br>
```
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
说这个组件的使用具有借鉴性是因为将属性和属性值完全分离了来进行管理，在一定程度上来说，这是十分好的一种方式，结构代码和脚本代码分离。<br>

#### 3、调用数据的三种方式
在小程序中，一共有三种调用数据的方式，其中一种是调用后台数据，另外两种是调用本地数据，现在我们先来看一看最简单的本地数据调用方式：
```
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
```
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
```
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









