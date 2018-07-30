var aneObj = function() {
  this.x = []
  this.len = []
}
aneObj.prototype.num = 50
aneObj.prototype.init = function() {
  for(var i = 0; i < this.num; i++) {
    // 海葵之间的间距
    this.x[i] = i * 16 + Math.random() * 20
    // 海葵的高度
    this.len[i] = 200 + Math.random() * 50
  }
}
aneObj.prototype.draw = function() {
  ctx2.save()
  ctx2.globalAlpha = 0.6
  // 每个海葵的宽度
  ctx2.lineWidth = 20
  ctx2.lineCap = 'round'
  ctx2.strokeStyle = '#3b154e'
  for(var i = 0; i < this.num; i++) {
    ctx2.beginPath()
    ctx2.moveTo(this.x[i], canHeight)
    ctx2.lineTo(this.x[i], canHeight - this.len[i])
    ctx2.stroke()
  }
  ctx2.restore()
}