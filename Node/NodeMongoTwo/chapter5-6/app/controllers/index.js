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
// 资源搜索页
exports.search = function(req, res){
  var catId = req.query.cat
  var page = parseInt(req.query.p, 10)
  var count = 2
  var index = page * count
  Category
    .find({_id: catId})
    .populate({
      path: 'movies',
      select: 'title poster'
    })
    .exec(function(err, categories){
      if(err){
        console.log(err)
      }
      var category = categories[0] || {}
      var movies = category.movies || []
      var results = movies.slice(index, index+count)
      res.render('results', {
        title: '搜索结果页',
        keyword: category.name,
        currentPage: (page+1),
        query: 'cat=' + catId,
        totalPage: Math.ceil(movies.length / count),
        movies: results
      })
    })
}