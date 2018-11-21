// 加载express模块和path模块
var express = require('express')
var path = require('path')
// 默认端口为3000，当然也可以命令行输入指定端口号：PORT=4000 node app.js
var port = process.env.PORT || 3000
// 启动一个web服务器
var app = express()
// 设置视图的根目录
app.set('views', './views/pages')
// 设置默认的模板引擎
app.set('view engine', 'jade')
// 监听端口
app.listen(port)
// 打印日志
console.log('imooc started on port ' + port)

// express框架中的路由编写
// 首页
app.get('/', function(req, res) {
  res.render('index', {
    title: '慕课网首页',
    movies: [{
      title: "机械战警",
      _id: 1,
      poster: "http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
    }, {
      title: "X战警",
      _id: 2,
      poster: "http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
    }, {
      title: "皇家骑士",
      _id: 3,
      poster: "http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
    }]
  })
})
// 详情页
app.get('/movie/:id', function(req, res) {
  res.render('detail', {
    title: '慕课详情页',
    movie: {
      doctor: '何塞.帕迪利亚',
      country: "美国",
      title: "机械战警",
      year: 2014,
      poster: "http://r3.ykimg.com/05160000530EEB63675839160D0B79D5",
      language: "英语",
      flash: "http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf",
      summary: "《机械战警》是由何塞·帕迪里亚执导，乔尔·金纳曼、塞缪尔·杰克逊、加里·奥德曼等主演的一部科幻电影，改编自1987年保罗·范霍文执导的同名电影。影片于2014年2月12日在美国上映，2014年2月28日在中国大陆上映。影片的故事背景与原版基本相同，故事设定在2028年的底特律，男主角亚历克斯·墨菲是一名正直的警察，被坏人安装在车上的炸弹炸成重伤，为了救他，OmniCorp公司将他改造成了生化机器人“机器战警”，代表着美国司法的未来。"
    }
  })
})
// 后台登录页
app.get('/admin/movie', function(req, res) {
  res.render('admin', {
    title: '慕课后台管理页',
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
// 列表页
app.get('/admin/list', function(req, res) {
  res.render('list', {
    title: '慕课列表页',
    movies: [{
      title: "机械战警",
      _id: 1,
      doctor: '何塞.帕迪利亚',
      country: "美国",
      year: 2014,
      poster: "http://r3.ykimg.com/05160000530EEB63675839160D0B79D5",
      language: "英语",
      flash: "http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf",
      summary: "《机械战警》是由何塞·帕迪里亚执导，乔尔·金纳曼、塞缪尔·杰克逊、加里·奥德曼等主演的一部科幻电影，改编自1987年保罗·范霍文执导的同名电影。影片于2014年2月12日在美国上映，2014年2月28日在中国大陆上映。影片的故事背景与原版基本相同，故事设定在2028年的底特律，男主角亚历克斯·墨菲是一名正直的警察，被坏人安装在车上的炸弹炸成重伤，为了救他，OmniCorp公司将他改造成了生化机器人“机器战警”，代表着美国司法的未来。"
    }]
  })
})