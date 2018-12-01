var mongoose = require('mongoose')
var Category = mongoose.model('category')

// 分类电影录入页
exports.new = function(req, res) {
  res.render('category_admin', {
    title: '电影分类录入~',
    category: {}
  })
}
// 分类电影数据保存
exports.save = function(req, res) {
  var _category = req.body.category
  var category = new Category(_category)

  category.save(function(err, category){
    if(err) {
      console.log(err)
    }
    res.redirect('/admin/category/list')
  })
}
// 分类电影列表页
exports.list = function(req, res) {
  Category.fetch(function(err, categories) {
    if(err) {
      console.log(err)
    }
    res.render('categorylist', {
      title: '分类电影列表页',
      categories: categories
    })
  })
}
