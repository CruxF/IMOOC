// 初始化数据库
const db = wx.cloud.database();
Page({
  data: {
    imgs: []
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
  },
  // 调用云函数
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
  },
  // 获取用户的openId
  getOpenId:function(){
    wx.cloud.callFunction({
      name:'login'
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },
  // 批量删除数据
  batchDeleteData:function(){
    wx.cloud.callFunction({
      name:'batchDelete'
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  // 上传图片
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
  },
  // 图片展示
  getFile:function(){
    wx.cloud.callFunction({
      name: 'login'
    }).then(res=>{
      db.collection('images').where({
        _openid: res.result.openid
      }).get().then(res2=>{
        console.log(res2)
        this.setData({
          imgs: res2.data
        })
      })
    })
  },
  // 图片下载
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
})