// pages/join/join.js
// 使用第二种方式调用数据之前，得输入一个对象，只能用相对路径
var joinListData = require("../../data/joinList.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    joinList: null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    //第二种调用数据方式，调用本地分离出去的数据
    this.setData({
      joinList: joinListData.joinList
    })
  },
  // 定义一个拨打电话的事件
  tell: function(){
    wx.makePhoneCall({
      //仅为示例，并非真实的电话号码
      phoneNumber: 'NBA6688888'
    })
  }
})