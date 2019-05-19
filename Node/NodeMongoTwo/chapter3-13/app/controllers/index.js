// 加载模型文件
var Movie = require('../models/movie')
// 首页
exports.index = function(req, res){
  console.log('user session: ')
  console.log(req.session.user)
  // 获取数据库里面所有的数据
  Movie.fetch(function(err, movies) {
      if(err) {
      console.log(err)
      }
      res.render('index', {
      title: '视频资源网首页',
      movies: movies
      })
  })
}