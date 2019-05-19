var User = require('../models/user')

// 用户注册页
exports.signup = function(req,res){
  var _user = req.body.user  
  User.find({name: _user.name}, function(err,user){
    if(err){
      console.log(err)
    }
    if(user.length == 1){
      console.log('用户已存在')
      return res.redirect('/')
    }else{
      var user = new User(_user)
      user.save(function(err, user){
        if(err) {
          console.log(err)
        }   
        res.redirect('/admin/userlist')
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
      return res.redirect('/')
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
      }
    })
  })
}
// 用户退出页
exports.logout = function(req,res){
  delete req.session.user
  // delete app.locals.user
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

