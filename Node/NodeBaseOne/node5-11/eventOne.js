var EventEmitter = require('events').EventEmitter
// 生成一个实例
var life = new EventEmitter()
life.on('touch', function(who) {
  console.log('给 ' + who + ' 倒水')
})
life.on('touch', function(who) {
  console.log('给 ' + who + ' 按摩')
})
life.on('touch', function(who) {
  console.log('给 ' + who + ' 做饭')
})
life.on('touch', function(who) {
  console.log('给 ' + who + ' 洗衣服')
})
life.on('touch', function(who) {
  console.log('给 ' + who + ' 扫地')
})
life.on('touch', function(who) {
  console.log('给 ' + who + ' 。。。6')
})
life.on('touch', function(who) {
  console.log('给 ' + who + ' .。。7')
})
life.on('touch', function(who) {
  console.log('给 ' + who + ' .。。8')
})
life.on('touch', function(who) {
  console.log('给 ' + who + ' .。。9')
})
life.on('touch', function(who) {
  console.log('给 ' + who + ' .。。10')
})
life.on('touch', function(who) {
  console.log('你想累死我啊！顶多做十件事')
})
life.emit('touch', '宝宝我')