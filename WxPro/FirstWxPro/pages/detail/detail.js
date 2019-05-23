// pages/detail/detail.js
//获取应用实例，才能调用全局变量
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
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