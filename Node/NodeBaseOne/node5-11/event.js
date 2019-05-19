var EventEmitter = require('events').EventEmitter
// 生成一个实例
var life = new EventEmitter()
life.on('touch', function(who) {
  console.log('给 ' + who + ' 倒水')
})
life.emit('touch', '宝宝我')