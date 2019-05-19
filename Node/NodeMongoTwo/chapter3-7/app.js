// 加载express模块和path模块
var express = require('express')
// 加载路径处理模块
var path = require('path')
// 加载快速建模工具
var mongoose = require('mongoose')
// 加载模型文件
var Movie = require('./models/movie')
var User = require('./models/user')
// 新字段替换老字段模块
var _ = require("underscore")
// 默认端口为3000，当然也可以命令行输入指定端口号：PORT=4000 node app.js
var port = process.env.PORT || 3000
// 加载解析模块，对post请求的请求体进行解析
var bodyParser = require('body-parser');
// 加载数据状态保存模块
var cookieParser=require('cookie-parser');
var cookieSession=require('cookie-session');

// 启动一个web服务器
var app = express()
// 连接本地的数据库
mongoose.connect('mongodb://localhost:27017/imooc', { useNewUrlParser: true })

// 对请求内容进行解析
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '1mb' }));
// 使用以下模块保存用户登录状态
app.use(cookieParser())
app.use(cookieSession({
  secret: 'imooc'
}))
// 设置静态文件绝对路径
app.use(express.static(path.join(__dirname,'public')))

// 引入时间处理模块
app.locals.moment = require('moment');
// 设置视图的根目录
app.set('views', './views/pages')
// 设置默认的模板引擎
app.set('view engine', 'jade')
// 引入时间插件
app.locals.moment = require('moment')

// 监听端口
app.listen(port)
// 打印日志
console.log('imooc started on port ' + port)
// express框架中的路由编写
// 首页
app.get('/', function(req, res) {
  console.log('user session: ')
  console.log(req.session.user)
  // 获得用户登录状态
  var _user = req.session.user
  if(_user) {
    app.locals.user = _user
  }
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
})
// 注册页
app.post('/user/signup',function(req,res){
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
})
// 注册用户列表页
app.get('/admin/userlist', function(req, res) {
  User.fetch(function(err, users) {
    if(err) {
      console.log(err)
    }
    res.render('userlist', {
      title: '用户列表页',
      users: users
    })
  })
})
// 用户登录页
app.post('/user/signin',function(req,res){
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
})
// 用户退出页
app.get('/logout',function(req,res){
  delete req.session.user
  delete app.locals.user
  res.redirect('/')
})
// 详情页
app.get('/movie/:id', function(req, res) {
  // url中的id
  var id = req.params.id
  // 查询特定的数据
  Movie.findById(id, function(err, movie) {
    res.render('detail', {
      title: '《' + movie.title + '》',
      movie: movie
    })
  })
})
// 更新数据页
app.get('/admin/update/:id', function(req, res) {
  var id = req.params.id
  if(id) {
    Movie.findById(id, function(err, movie) {
      res.render('admin', {
        title: '数据已更新',
        movie: movie
      })
    })
  }
})
// 数据更新或者新增
app.post('/admin/movie/new', function(req, res) {
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
})
// 后台管理页
app.get('/admin/movie', function(req, res) {
  res.render('admin', {
    title: '请录入视频~',
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
})
// 电影列表页
app.get('/admin/list', function(req, res) {
  Movie.fetch(function(err, movies) {
    if(err) {
      console.log(err)
    }
    res.render('list', {
      title: '所有电影',
      movies: movies
    })
  })
})
// 删除页
app.delete('/admin/list', function(req, res) {
  var id = req.query.id
  if(id) {
    Movie.remove({ _id: id }, function(err, movie) {
      if(err) {
        console.log(err)
      } else {
        // res.json({ success: 1 })
        res.send({ success: 1 })
      }
    })
  }
})