var Index = require('../app/controllers/index')
var User = require('../app/controllers/user')
var Movie = require('../app/controllers/movie')


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
  // 用户登录页
  app.post('/user/signin', User.signin)
  // 用户退出页
  app.get('/logout', User.logout)
  // 注册用户列表页
  app.get('/admin/userlist', User.list)
  
  // 电影详情页
  app.get('/movie/:id', Movie.detail)
  // 电影录入页
  app.get('/admin/new', Movie.new)
  // 电影更新页
  app.get('/admin/update/:id', Movie.update)
  // 电影数据保存
  app.post('/admin/movie', Movie.save)
  // 电影列表页
  app.get('/admin/list', Movie.list)
  // 电影删除页
  app.delete('/admin/list', Movie.del)
}

