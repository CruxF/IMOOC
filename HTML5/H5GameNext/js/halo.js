var haloObj = function() {
  // 定义圈圈的中心点
  this.x = []
  this.y = []
  // 判断圈圈的生命周期
  this.alive = []
  // 定义圈圈的半径
  this.r = []
}
haloObj.prototype.num = 5
haloObj.prototype.init = function() {
  for(var i = 0; i < this.num; i++) {
    this.x[i] = 0
    this.y[i] = 0
    this.alive[i] = false
    this.r[i] = 0
  }
}
haloObj.prototype.draw = function() {
  ctx1.save()
  ctx1.lineWidth = 2
  ctx1.shadowBlur = 10
  ctx1.shadowColor = 'rgba(203, 91, 0, 1)'
  for(var i = 0; i < this.num; i++) {
    if(this.alive[i]) {
      // 半径扩散
      this.r[i] += deltaTime * 0.05
      if(this.r[i] > 80) {
        this.alive[i] = false
        break
      }
      var alpha = 1 - this.r[i] / 80
      // 开始绘制圆
      ctx1.beginPath()
      ctx1.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2)
      ctx1.closePath()
      ctx1.strokeStyle = 'rgba(203, 91, 0,' + alpha + ')'
      ctx1.stroke()
    }
  }
  ctx1.restore()
}
haloObj.prototype.born = function(x, y) {
  for(var i = 0; i < this.num; i++) {
    if(!this.alive[i]) {
      this.x[i] = x
      this.y[i] = y
      this.r[i] = 10
      this.alive[i] = true
    }
  }
}