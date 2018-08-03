var momObj = function() {
  this.x
  this.y
  this.angle
  
  this.momTailTimer = 0
  this.momTailCount = 0
  
  this.momEyeTimer = 0
  this.momEyeCount = 0
  this.momEyeInterval = 1000
  
  this.momBodyCount = 0
}
momObj.prototype.init = function() {
  // this.x = 400
  this.x = canWidth * 0.5
  // this.y = 300
  this.y = canHeight * 0.5
  // 大鱼初始角度为0
  this.angle = 0
}
momObj.prototype.draw = function() {
  // 让大鱼的位置跟随鼠标位置，该lerpDistance方法内部执行逻辑是:
  // (this.x - mx)*0.98 + mx
  this.x = lerpDistance(mx, this.x, 0.98)
  this.y = lerpDistance(my, this.y, 0.98)
  // 实现大鱼头部转弯
  var deltaY = my - this.y
  var deltaX = mx - this.x
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
  
  // 让大鱼尾巴发生变化
  this.momTailTimer += deltaTime
  if(this.momTailTimer > 50) {
  	this.momTailCount = (this.momTailCount + 1) % 8
  	this.momTailTimer %= 50
  }
  
  // 让大鱼眼睛发生变化
  this.momEyeTimer += deltaTime
  if(this.momEyeTimer > this.momEyeInterval) {
  	this.momEyeCount = (this.momEyeCount + 1) % 2
  	this.momEyeTimer %= this.momEyeInterval
  	if(this.momEyeCount == 0){
  		this.momEyeInterval = Math.random() * 1500 + 2000
  	} else {
  		this.momEyeInterval = 200
  	}
  }
  
  ctx1.save()
  // 重新映射画布上的 (this.x,this.y)位置,作用是让鱼出现在画布中间
  // 方法转换画布的用户坐标系统。平移，将画布的坐标原点向左右方向移动x，向上下方向移动y.canvas的默认位置是在（0,0）
  ctx1.translate(this.x, this.y)
  // 让大鱼进行旋转
  ctx1.rotate(this.angle)
  
  // 绘制大鱼尾图片以及位置
  var momTailCount = this.momTailCount
  ctx1.drawImage(momTail[momTailCount], -momTail[momTailCount].width * 0.5 + 30, -momTail[momTailCount].height * 0.5)
  
  // 绘制大鱼身体以及位置
  var momBodyCount = this.momBodyCount
  if(data.double == 1) {
  	ctx1.drawImage(momBodyOra[momBodyCount], -momBodyOra[momBodyCount].width * 0.5, -momBodyOra[momBodyCount].height * 0.5)
  } else {
  	ctx1.drawImage(momBodyBlue[momBodyCount], -momBodyBlue[momBodyCount].width * 0.5, -momBodyBlue[momBodyCount].height * 0.5)
  }
  
  // 绘制大鱼眼睛以及位置
  var momEyeCount = this.momEyeCount
  ctx1.drawImage(momEye[momEyeCount], -momEye[momEyeCount].width * 0.5, -momEye[momEyeCount].height * 0.5)
  ctx1.restore()
}
// 备注：save()和restore()的作用是先保存当前画笔的状态save(),再恢复restore()状态,
// 在这之间的，有要旋转画笔，移动画布圆点的操作都不会影响到画布中其他的图形的绘制