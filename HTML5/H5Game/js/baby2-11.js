var babyObj = function() {
  this.x
  this.y
  this.angle
  this.babyEye = new Image()
  this.babyBody = new Image()
  this.babyTail = new Image()
}
babyObj.prototype.init = function() {
  this.x = canWidth * 0.5 - 50
  this.y = canHeight * 0.5 + 50
  this.angle = 0
  this.babyEye.src = './img/babyEye0.png'
  this.babyBody.src = './img/babyFade0.png'
  this.babyTail.src = './img/babyTail0.png'
}
babyObj.prototype.draw = function() {
  this.x = lerpDistance(mom.x, this.x, 0.98)
  this.y = lerpDistance(mom.y, this.y, 0.98)
  // 实现小鱼跟着大鱼
  var deltaY = mom.y - this.y
  var deltaX = mom.x - this.x
  var beta = Math.atan2(deltaY, deltaX) + Math.PI
  this.angle = lerpAngle(beta, this.angle, 0.6)
  ctx1.save()
  // 转移坐标
  ctx1.translate(this.x, this.y)
  ctx1.rotate(this.angle)
  ctx1.drawImage(this.babyTail, -this.babyTail.width * 0.5 + 23, -this.babyTail.height * 0.5)
  ctx1.drawImage(this.babyBody, -this.babyBody.width * 0.5, -this.babyBody.height * 0.5)
  ctx1.drawImage(this.babyEye, -this.babyEye.width * 0.5, -this.babyEye.height * 0.5)
  ctx1.restore()
}