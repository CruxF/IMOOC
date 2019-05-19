var Index = require('../app/controllers/index')
var User = require('../app/controllers/user')
var Movie = require('../app/controllers/movie')
var Comment = require('../app/controllers/comment')
var Category = require('../app/controllers/category')

module.exports = function(app) {
  // 全局会话状态管理
  app.use(function(req, res, next){
    // 获得用户登录状态
    var _user = req.session.user
    app.locals.user = _user
    return next()
  })
  // 电影网首页
  app.get('/', Index.index)

  // 用户注册页
  app.post('/user/signup', User.signup)
  app.get('/signup', User.showSignup)
  // 用户登录页
  app.post('/user/signin', User.signin)
  app.get('/signin', User.showSignin)
  // 用户退出页
  app.get('/logout', User.logout)
  // 注册用户列表页
  app.get('/admin/userlist', User.signinRequired, User.adminRequired, User.list)
  
  // 电影详情页
  app.get('/movie/:id', Movie.detail)
  // 电影录入页
  app.get('/admin/movie/new', User.signinRequired, User.adminRequired,  Movie.new)
  // 电影更新页
  app.get('/admin/movie/update/:id', User.signinRequired, User.adminRequired,  Movie.update)
  // 电影数据保存
  app.post('/admin/movie', User.signinRequired, User.adminRequired, Movie.savePoster, Movie.save)
  // 电影列表页
  app.get('/admin/movie/list', User.signinRequired, User.adminRequired,  Movie.list)
  // 电影删除页
  app.delete('/admin/movie/list', User.signinRequired, User.adminRequired,  Movie.del)

  // 评论
  app.post('/user/comment', User.signinRequired, Comment.save)

  // 电影分类录入页
  app.get('/admin/category/new', User.signinRequired, User.adminRequired,  Category.new)
  // 分类电影所有数据录入
  app.post('/admin/category', User.signinRequired, User.adminRequired,  Category.save)
  // 分类电影列表页
  app.get('/admin/category/list', User.signinRequired, User.adminRequired,  Category.list)

  // 电影搜索页
  app.get('/results', Index.search)
}

