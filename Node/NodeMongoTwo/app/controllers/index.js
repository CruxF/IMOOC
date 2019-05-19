// 加载依赖文件
var mongoose = require('mongoose')
var Category = require('../models/category')
var Movie = require('../models/movie')

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
  var q = req.query.q
  var page = parseInt(req.query.p, 10) || 0
  var count = 2
  var index = page * count
  if(catId){
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
      var results = movies.slice(index, index + count)
      res.render('results', {
        title: '电影分类结果页',
        keyword: category.name,
        currentPage: (page+1),
        query: 'cat=' + catId,
        totalPage: Math.ceil(movies.length / count),
        movies: results
      })
    })
  } else {
    Movie
      .find({title: new RegExp(q + '.*', 'i')})
      .exec(function(err, movies) {
        if (err) {
          console.log(err)
        }
        var results = movies.slice(index, index + count)
        res.render('results', {
          title: '电影搜索结果页',
          keyword: q,
          currentPage: (page + 1),
          query: 'q=' + q,
          totalPage: Math.ceil(movies.length / count),
          movies: results
        })
      })
  }
}