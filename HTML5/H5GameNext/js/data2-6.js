var dataObj = function() {
  this.fruitNum = 0
  this.double = 1
  this.score = 0
}
// 绘制游戏分数
dataObj.prototype.draw = function() {
  var w = can1.width
  var h = can1.height
  ctx1.fillStyle = 'white'  
  ctx1.fillText('Score ' + this.score, w * 0.5, h - 20)
}
// 游戏分数增加方法
dataObj.prototype.addScore = function() {
	this.score += this.fruitNum * 100 * this.double
	this.fruitNum = 0
	this.double = 1
}
