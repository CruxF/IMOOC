// 实现定制的可读流 可写流 转换流 ，并且实现他们的内置接口
var stream = require('stream')
// 引入工具类
var util = require('util')

// 定制可读流构造函数
function ReadStream() {
  // 重新绑定this指向
  stream.Readable.call(this)
}

// 让我们声明的ReadStream继承可读流里面的原型stream.Readable
util.inherits(ReadStream, stream.Readable)

// 为可读流添加原型链上面的read方法，相当于重写该方法
ReadStream.prototype._read = function() {
  this.push('I ')
  this.push('LOVE ')
  this.push('YOU\n')
  this.push(null)
}

// 定制可写流构造函数
function WritStream() {
  stream.Writable.call(this)
  // 定义一个缓存
  this._cached = new Buffer('')
}

// 让我们声明的WritStream继承可读流里面的原型stream.Writable
util.inherits(WritStream, stream.Writable)

// 重新write方法，打印内容
WritStream.prototype._write = function(chunk, encode, cb) {
  console.log(chunk.toString())
  cb()
}

// 定制转换流构造函数
function TransformStream() {
  stream.Transform.call(this)
}

// 让我们声明的TransformStream继承转换流里面的原型stream.Transform
util.inherits(TransformStream, stream.Transform)
TransformStream.prototype._transform = function(chunk, encode, cb) {
  this.push(chunk)
  cb()
}
// 增加额外定制内容
TransformStream.prototype._flush = function(cb) {
  this.push('oh yeah!')
  cb()
}

// 生成实例
var rs = new ReadStream()
var ws = new WritStream()
var ts = new TransformStream()
// pipe事件执行流程：可读流==>转换流==>可写流
rs.pipe(ts).pipe(ws)