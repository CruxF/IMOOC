var momObj = function() {
  this.x
  this.y
  this.bigEye = new Image()
  this.bigBody = new Image()
  this.bigTail = new Image()
}
momObj.prototype.init = function() {
  this.x = canWidth * 0.5
  this.y = canHeight * 0.5
  this.bigEye.src = './img/bigEye0.png'
  this.bigBody.src = './img/bigSwim0.png'
  this.bigTail.src = './img/bigTail0.png'
}
momObj.prototype.draw = function() {
  ctx1.save()
  ctx1.translate(this.x, this.y)
  ctx1.drawImage(this.bigEye, -this.bigEye.width * 0.5, -this.bigEye.height * 0.5)
  ctx1.drawImage(this.bigBody, -this.bigBody.width * 0.5, -this.bigBody.height * 0.5)
  ctx1.drawImage(this.bigTail, -this.bigTail.width * 0.5 + 30, -this.bigTail.height * 0.5)
  ctx1.restore()
}