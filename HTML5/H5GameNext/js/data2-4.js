var dataObj = function() {
  this.fruitNum = 0
  this.double = 1
}
// 让分数计算方式回归默认
dataObj.prototype.reset = function() {
  this.fruitNum = 0
  this.double = 1
}
// 绘制游戏分数
dataObj.prototype.draw = function() {
  var w = can1.width
  var h = can1.height
  ctx1.fillStyle = 'white'
  ctx1.fillText('num:' + this.fruitNum, w * 0.5, h - 50)
  ctx1.fillText('double' + this.double, w * 0.5, h - 80)
}