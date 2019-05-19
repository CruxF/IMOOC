// 加载模型文件
var Category = require('../models/category')
// 首页
exports.index = function(req, res){
  // 获取分类电影
  Category
    .find({})
    .populate({path: 'movies', options: {limit: 5}})
    .exec(function(err, categories){
      if(err){
        console.log(err)
      }
      res.render('index', {
        title: '视频资源网首页',
        categories: categories
      })
    })
}