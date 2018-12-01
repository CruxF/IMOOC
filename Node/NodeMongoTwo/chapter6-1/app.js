// 加载express模块和path模块
var express = require('express')
// 加载路径处理模块
var path = require('path')
// 加载快速建模工具
var mongoose = require('mongoose')
// 默认端口为3000，当然也可以命令行输入指定端口号：PORT=4000 node app.js
var port = process.env.PORT || 3000
// 加载解析模块，对post请求的请求体进行解析
var bodyParser = require('body-parser');
// 加载数据状态保存模块
var cookieParser=require('cookie-parser');
var cookieSession=require('cookie-session');
// 加载错误输出模块
var morgan = require('morgan')

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
// 上传海报处理模块
app.use(require('connect-multiparty')())

// 引入时间处理模块
app.locals.moment = require('moment');
// 设置视图的根目录
app.set('views', './app/views/pages')
// 设置默认的模板引擎
app.set('view engine', 'jade')

// 加载routes这个文件，同时将app这个对象赋值进去
require('./config/routes')(app)

// 生产环境配置
if('development' === app.get('env')) {
  app.set('showStackError', true) // 显示错误信息
  app.use(morgan(':method :url :status')) // 显示请求方式、地址和状态
  app.locals.pretty = true  // 使源代码格式化显示
  mongoose.set('debug', true) // 显示数据库错误信息
}

// 监听端口
app.listen(port)
// 引入时间插件
app.locals.moment = require('moment')
// 设置静态文件绝对路径
app.use(express.static(path.join(__dirname,'public')))
// 打印日志
console.log('imooc started on port ' + port)

