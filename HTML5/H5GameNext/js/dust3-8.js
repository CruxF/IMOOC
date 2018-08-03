var dustObj = function() {
  // x和y的坐标轴
  this.x = []
  this.y = []
  // 振幅
  this.amp = []
  // 序号
  this.NO = []
  // 摇摆角度
  this.alpha
}
dustObj.prototype.num = 30
dustObj.prototype.init = function() {
  for(var i = 0; i < this.num; i++) {
    this.x[i] = Math.random() * canWidth
    this.y[i] = Math.random() * canHeight
    this.amp[i] = 20 + Math.random() * 25
    // 取整0~6
    this.NO[i] = Math.floor(Math.random() * 7)
  }
  this.alpha = 0
}
dustObj.prototype.draw = function() {
  this.alpha += deltaTime * 0.0008
  var L = Math.sin(this.alpha)
  for(var i = 0; i < this.num; i++) {
    var no = this.NO[i]
    ctx1.drawImage(dustPic[no], this.x[i] + this.amp[i] * L, this.y[i])
  }
}