//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 第三种调用数据
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
  },
  onLoad: function () {
    this.getProList();
  },
  // 定义点击事件
  toDetail: function(e){
    // index代表的遍历对象的下标
    var index = e.currentTarget.dataset.index;
    var proList = this.data.proList;
    var title = proList[index].proName;
    wx.setStorageSync('titleName', title);
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
  // API请求方法
  getProList: function(){
    var self = this;
    // request发起一个请求方法
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
  },
  
  // copy事件，一个基础库兼容的栗子
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
