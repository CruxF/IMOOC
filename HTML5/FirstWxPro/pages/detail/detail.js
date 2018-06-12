// pages/detail/detail.js
//获取应用实例，才能调用全局变量
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  onLoad: function (options) {
    // 第一种传值方式
    console.log(options.title);
    // 第二种传值方式
    var title = wx.getStorageSync('titleName');
    console.log(title);
    // 第三种传值方式，调用全局变量
    console.log(app.globalData.userName);
  },
})