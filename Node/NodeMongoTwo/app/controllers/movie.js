// 加载模型文件
var Movie = require('../models/movie')
var Category = require('../models/category')
var Comment = require('../models/comment')
var _ = require("underscore")
var fs = require('fs')
var path = require('path')

// 电影详情页
exports.detail = function(req, res) {
  // url中的id
  var id = req.params.id
  Movie.update({_id: id}, {$inc: {pv:1}}, function(err) {
    if(err) {
      console.log(err)
    }
  })
  Movie.update({_id: id}, {$inc: {pv: 1}}, function(err) {
    if (err) {
      console.log(err)
    }
  })
  // 查询特定的数据
  Movie.findById(id, function(err, movie) {
    Comment
      .find({movie: id})
      .populate('from', 'name')
      .populate('reply.from reply.to', 'name')
      .exec(function(err, comments){
        res.render('detail', {
          title: '《' + movie.title + '》',
          movie: movie,
          comments: comments
        })
      })
  })
}
// 电影录入页
exports.new = function(req, res) {
  Category.find({}, function(err, categories){
    res.render('admin', {
      title: '请录入电影~',
      categories: categories,
      movie: {}
    })
  })
}
// 电影更新页
exports.update = function(req, res) {
  var id = req.params.id
  if(id) {
    Movie.findById(id, function(err, movie) {
      Category.find({}, function(err, categories){
        res.render('admin', {
          title: '数据已更新',
          movie: movie,
          categories: categories
        })
      })
    })
  }
}

// 电影海报存储
exports.savePoster = function(req, res, next) {
  var posterData = req.files.uploadPoster
  var filePath = posterData.path
  var originalFilename = posterData.originalFilename
  if (originalFilename) {
    fs.readFile(filePath, function(err, data) {
      var timestamp = Date.now()
      var type = posterData.type.split('/')[1]
      var poster = timestamp + '.' + type
      var newPath = path.join(__dirname, '../../', '/public/upload/' + poster)
      fs.writeFile(newPath, data, function(err) {
        req.poster = poster
        next()
      })
    })
  }
  else {
    next()
  }
}
// 电影数据保存
exports.save = function(req, res) {
  var id = req.body.movie._id
  var movieObj = req.body.movie
  var _movie
  if (req.poster) {
    movieObj.poster = req.poster
  }
  if(id) {
    Movie.findById(id, function(err, movie) {
      if(err) {
        console.log(err)
      }
      // 复制movieObj对象的所有属性到目标对象movie上，覆盖已有属性
      _movie = _.extend(movie, movieObj)
      _movie.save(function(err, movie) {
        if(err) {
          console.log(err)
        }
        res.redirect('/movie/' + movie._id)
      })
    })
  } else {
    _movie = new Movie(movieObj)
    // 分类名(单选按钮radio)
    var categoryId = movieObj.category
    // 分类名(手动新增)
    var categoryName = movieObj.categoryName
    _movie.save(function(err, movie) {
      if(err) {
        console.log(err)
      }
      if(categoryId) {
        Category.findById(categoryId, function(err, category){
          category.movies.push(movie._id)
          category.save(function(err, category){
            res.redirect('/movie/' + movie._id)
          })
        })
      } else if(categoryName){
        var category = new Category({
          name: categoryName,
          movies: [movie._id]
        })
        category.save(function(err, category){
          movie.category = category._id
          movie.save(function(err, movie){
            res.redirect('/movie/' + movie._id)
          })
        })
      }
    })
  }
}
// 电影列表页
exports.list =  function(req, res) {
  Movie.fetch(function(err, movies) {
    if(err) {
      console.log(err)
    }
    res.render('list', {
      title: '所有电影',
      movies: movies
    })
  })
}
// 电影删除页
exports.del = function(req, res) {
  var id = req.query.id
  if(id) {
    Movie.remove({ _id: id }, function(err, movie) {
      if(err) {
        console.log(err)
      } else {
        res.send({ success: 1 })
      }
    })
  }
}