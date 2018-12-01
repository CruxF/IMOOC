var User = require('../models/user')

// 用户注册页
exports.showSignup = function(req, res) {
  res.render('signup', {
    title: '注册页面'
  })
}
exports.signup = function(req,res){
  var _user = req.body.user  
  User.find({name: _user.name}, function(err,user){
    if(err){
      console.log(err)
    }
    if(user.length == 1){
      console.log('用户已存在')
      return res.redirect('/signin')
    }else{
      var user = new User(_user)
      user.save(function(err, user){
        if(err) {
          console.log(err)
        }   
        res.redirect('/')
      })
    }
  }) 
}
// 用户登录页
exports.signin = function(req,res){
  var _user = req.body.user
  var name = _user.name
  var password = _user.password
  User.findOne({name: name},function(err,user){
    if(err){
      console.log(err)
    }
    if(!user){
      // 用户不存在
      return res.redirect('/signup')
    }
    user.comparePassword(password,function(err,isMatch){
      if(err){
        console.log(err)
      }
      if(isMatch){
        // console.log('登录成功!')
        // 记录用户登录状态
        req.session.user = user
        return res.redirect('/')
      }else{
        console.log('密码错误！!')
        return res.redirect('/signin')        
      }
    })
  })
}
exports.showSignin = function(req, res) {
  res.render('signin', {
    title: '登录页面'
  })
}
// 用户退出页
exports.logout = function(req,res){
  delete req.session.user
  res.redirect('/')
}
// 注册用户列表页
exports.list = function(req, res) {
  User.fetch(function(err, users) {
    if(err) {
      console.log(err)
    }
    res.render('userlist', {
      title: '用户列表页',
      users: users
    })
  })
}
// 判断是否登录权限控制中间件
exports.signinRequired = function(req, res, next) {
  var user = req.session.user
  if(!user) {
    return res.redirect('/signin')
  }
  next()
}
// 登录用户权限控制中间件
exports.adminRequired = function(req, res, next) {
  var user = req.session.user
  if(user.role <= 10) {
    return res.redirect('/signin')
  }
  next()
}