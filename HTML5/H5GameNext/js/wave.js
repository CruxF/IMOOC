var waveObj = function() {
  this.x = []
  this.y = []
  this.alive = []
  this.r = []
}
waveObj.prototype.num = 10
waveObj.prototype.init = function() {
  for(var i = 0; i < this.num; i++) {
    this.alive[i] = false
    // 圈圈初始半径
    this.r[i] = 0
  }
}
waveObj.prototype.draw = function() {
  // 避免绘图样式相冲突
  ctx1.save()
  ctx1.lineWidth = 2
  ctx1.shadowBlur = 10
  ctx1.shadowColor = 'white'
  for(var i = 0; i < this.num; i++) {
    if(this.alive[i]) {
      // 圈圈半径慢慢扩大
      this.r[i] += deltaTime * 0.04
      // 半径超过50后消失
      if(this.r[i] > 50) {
        this.alive[i] = false
        break
      }
      var alpha = 1 - this.r[i] / 50
      // 开始绘画
      ctx1.beginPath()
      ctx1.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2)
      ctx1.closePath()
      ctx1.strokeStyle = 'rgba(255, 255, 255,' + alpha + ')'
      ctx1.stroke()
    }
  }
  ctx1.restore()
}
waveObj.prototype.born = function(x, y) {
  for(var i = 0; i < this.num; i++) {
    if(!this.alive[i]) {
      this.alive[i] = true
      this.r[i] = 10
      // 定义圈圈的中心点
      this.x[i] = x
      this.y[i] = y
      return
    }
  }
}