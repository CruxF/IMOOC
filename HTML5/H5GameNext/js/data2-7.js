var dataObj = function() {
  this.fruitNum = 0
  this.double = 1
  this.score = 0
  // 游戏状态变量
  this.gameOver = false
  // 游戏结束提示文字的透明度
  this.alpha = 0
}
// 绘制游戏分数
dataObj.prototype.draw = function() {
  var w = can1.width
  var h = can1.height
  
  ctx1.save()
  ctx1.shadowBlur = 10
  ctx1.shadowColor = 'white'
  ctx1.fillStyle = 'white'  
  ctx1.fillText('分数 ' + this.score, w * 0.5, h - 20)
  // 游戏结束提示
  if(this.gameOver) {
  	this.alpha += deltaTime * 0.0001
  	if(this.alpha > 1) {
  		this.alpha = 1
  	}
  	ctx1.fillStyle = 'rgba(255, 255, 255,' + this.alpha + ')'
  	ctx1.fillText('游戏结束！', w * 0.5, h * 0.5)
  }
  ctx1.restore()
}
// 游戏分数增加方法
dataObj.prototype.addScore = function() {
	this.score += this.fruitNum * 100 * this.double
	this.fruitNum = 0
	this.double = 1
}
