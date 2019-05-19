// 加载模型文件
var Movie = require('../models/movie')
var Comment = require('../models/comment')
var _ = require("underscore")

// 电影详情页
exports.detail = function(req, res) {
  // url中的id
  var id = req.params.id
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
  res.render('admin', {
    title: '请录入电影~',
    movie: {
      title: "",
      doctor: "",
      country: "",
      year: "",
      poster: "",
      flash: "",
      summary: "",
      language: ""
    }
  })
}
// 电影更新页
exports.update = function(req, res) {
  var id = req.params.id
  if(id) {
    Movie.findById(id, function(err, movie) {
      res.render('admin', {
        title: '数据已更新',
        movie: movie
      })
    })
  }
}
// 电影数据保存
exports.save = function(req, res) {
  var id = req.body.movie._id
  var movieObj = req.body.movie
  var _movie
  if(id !== 'undefined') {
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
    _movie = new Movie({
      doctor: movieObj.doctor,
      title: movieObj.title,
      country: movieObj.country,
      language: movieObj.language,
      year: movieObj.year,
      poster: movieObj.poster,
      summary: movieObj.summary,
      flash: movieObj.flash
    })
    _movie.save(function(err, movie) {
      if(err) {
        console.log(err)
      }
      res.redirect('/movie/' + movie._id)
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