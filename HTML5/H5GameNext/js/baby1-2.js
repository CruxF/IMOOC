var babyObj = function() {
  this.x
  this.y
  this.angle
  this.babyEye = new Image()
  this.babyBody = new Image()
  // 定义一个计时器
  this.babyTailTimer = 0
  this.babyTailCount = 0
}
babyObj.prototype.init = function() {
  // this.x = 350
  this.x = canWidth * 0.5 - 50
  // this.y = 350
  this.y = canHeight * 0.5 + 50
  // 大鱼初始角度为0
  this.angle = 0
  this.babyEye.src = './img/babyEye0.png'
  this.babyBody.src = './img/babyFade0.png'
}
babyObj.prototype.draw = function() {
  // 让小鱼的位置跟随大鱼位置，该lerpDistance方法内部执行逻辑是:
  // (this.x - mom.x)*0.98 + mom.x
  this.x = lerpDistance(mom.x, this.x, 0.98)
  this.y = lerpDistance(mom.y, this.y, 0.98)
  // 实现大鱼头部转弯
  var deltaY = mom.y - this.y
  var deltaX = mom.x - this.x
  // atan2()方法可返回数字的反正切值,返回的值表示坐标（x，y）与 X轴之间的角度的弧度。
  var beta = Math.atan2(deltaY, deltaX) + Math.PI
  // lerpAngle方法内部实现:
  /*function lerpAngle(a, b, t) {
    var d = b - a;
    if(d > Math.PI) d = d - 2 * Math.PI;
    if(d < -Math.PI) d = d + 2 * Math.PI;
    return a + d * t;
  }*/
  this.angle = lerpAngle(beta, this.angle, 0.6)
  // 让小鱼在动画帧阶段不断绘制其尾巴，实现摆动的效果
  this.babyTailTimer += deltaTime
  if(this.babyTailTimer > 50) {
  	// this.babyTailCount的值一直在1~7波动
    this.babyTailCount = (this.babyTailCount + 1) % 8
    this.babyTailTimer %= 50
  }
  ctx1.save()
  // 重新映射画布上的 (this.x,this.y)位置,作用是让鱼出现在画布(350,350)这个位置
  // 方法转换画布的用户坐标系统。平移，将画布的坐标原点向左右方向移动x，向上下方向移动y.canvas的默认位置是在（0,0）
  ctx1.translate(this.x, this.y)
  // 让小鱼进行旋转
  ctx1.rotate(this.angle)
  var babyTailCount = this.babyTailCount
  // 绘制鱼尾图片以及位置
  ctx1.drawImage(babyTail[babyTailCount], -babyTail[babyTailCount].width * 0.5 + 23, -babyTail[babyTailCount].height * 0.5)
  ctx1.drawImage(this.babyBody, -this.babyBody.width * 0.5, -this.babyBody.height * 0.5)
  ctx1.drawImage(this.babyEye, -this.babyEye.width * 0.5, -this.babyEye.height * 0.5)
  ctx1.restore()
}