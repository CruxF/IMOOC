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