var babyObj = function() {
  this.x
  this.y
  this.angle
  this.babyBody = new Image()
  
  // 定义一个计数器
  this.babyTailTimer = 0
  this.babyTailCount = 0
  
  this.babyEyeTimer = 0
  this.babyEyeCount = 0
  // 表示眼睛某个状态的持续时间
  this.babyEyeInterval = 1000
  
  this.babyBodyTimer = 0
  this.babyBodyCount = 0
}
babyObj.prototype.init = function() {
  // this.x = 350
  this.x = canWidth * 0.5 - 50
  // this.y = 350
  this.y = canHeight * 0.5 + 50
  // 大鱼初始角度为0
  this.angle = 0
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
  
  // 让小鱼的眼睛充满灵性
  this.babyEyeTimer += deltaTime
  if(this.babyEyeTimer > this.babyEyeInterval) {
    this.babyEyeCount = (this.babyEyeCount + 1) % 2
    this.babyEyeTimer %= this.babyEyeInterval
    if(this.babyEyeCount == 0) {
      this.babyEyeInterval = Math.random() * 1500 + 2000
    } else {
      this.babyEyeInterval = 200
    }
  }
  
  // 让小鱼的身体发生变化
  this.babyBodyTimer += deltaTime
  if(this.babyBodyTimer > 300) {
  	this.babyBodyCount = this.babyBodyCount + 1
  	this.babyBodyTimer %= 300
  	if(this.babyBodyCount > 19) {
  		this.babyBodyCount = 19
  		// 游戏结束
  		data.gameOver = true
  	}
  }
  
  ctx1.save()
  // 重新映射画布上的 (this.x,this.y)位置,作用是让鱼出现在画布(350,350)这个位置
  // 方法转换画布的用户坐标系统。平移，将画布的坐标原点向左右方向移动x，向上下方向移动y.canvas的默认位置是在（0,0）
  ctx1.translate(this.x, this.y)
  // 让小鱼进行旋转
  ctx1.rotate(this.angle)
  
  // 绘制鱼尾图片以及位置
  var babyTailCount = this.babyTailCount
  ctx1.drawImage(babyTail[babyTailCount], -babyTail[babyTailCount].width * 0.5 + 23, -babyTail[babyTailCount].height * 0.5)
  
  // 绘制鱼身图片以及位置
  var babyBodyCount = this.babyBodyCount
  ctx1.drawImage(babyBoby[babyBodyCount], -babyBoby[babyBodyCount].width * 0.5, -babyBoby[babyBodyCount].height * 0.5)
  
  // 绘制鱼眼图片以及位置
  var babyEyeCount = this.babyEyeCount
  ctx1.drawImage(babyEye[babyEyeCount], -babyEye[babyEyeCount].width * 0.5, -babyEye[babyEyeCount].height * 0.5)
  ctx1.restore()
}