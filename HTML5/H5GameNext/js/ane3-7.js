var aneObj = function() {
  // 贝赛尔曲线的相关变量：起始位置变量、控制点变量、终点变量
  this.rootx = []
  this.headx = []
  this.heady = []
  // 定义海葵的振幅
  this.amp = []
  // 定义海葵摇摆的角度
  this.alpha = 0
}
aneObj.prototype.num = 50
aneObj.prototype.init = function() {
  for(var i = 0; i < this.num; i++) {
    // 设置每个海葵的x轴位置
    this.rootx[i] = i * 16 + Math.random() * 20
    this.headx[i] = this.rootx[i]
    // 每个海葵顶部距离画布顶部的距离，越小表示海葵的高度越高
    this.heady[i] = canHeight - 250 + Math.random() * 50
    // 设置振幅
    this.amp[i] = Math.random() * 50 + 50
  }
}
aneObj.prototype.draw = function() {
  this.alpha += deltaTime * 0.0008
  // 范围是-1~1
  var L = Math.sin(this.alpha)
  // 保存当前环境的状态。
  ctx2.save()
  // 设置海葵背景色的透明度
  ctx2.globalAlpha = 0.6
  // 设置每个海葵的宽度
  ctx2.lineWidth = 20
  // 设置或返回线条的结束端点样式。
  ctx2.lineCap = 'round'
  // 设置或返回用于笔触的颜色、渐变或模式。
  ctx2.strokeStyle = '#3b154e'
  for(var i = 0; i < this.num; i++) {
    // 起始一条路径，或重置当前路径。
    ctx2.beginPath()
    // 绘制开始点
    ctx2.moveTo(this.rootx[i], canHeight)
    // 结束点的x坐标
    this.headx[i] = this.rootx[i] + L * this.amp[i]
    // 绘制贝赛尔曲线：控制点的x坐标、控制点的y坐标、结束点的x坐标、结束点y坐标
    ctx2.quadraticCurveTo(this.rootx[i], canHeight - 100, this.headx[i], this.heady[i])
    // 绘制已定义的路径。
    ctx2.stroke()
  }
  // 返回之前保存过的路径状态和属性。
  ctx2.restore()
}