var aneObj = function() {
  this.x = []
  this.len = []
}
aneObj.prototype.num = 50
aneObj.prototype.init = function() {
  for(var i = 0; i < this.num; i++) {
    // 定义海葵的横坐标位置
    this.x[i] = i * 16 + Math.random() * 20
    // 定义海葵的高度
    this.len[i] = 200 + Math.random() * 50
  }
}
aneObj.prototype.draw = function() {
  // 	保存当前环境的状态。
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
    // 把路径移动到画布中的指定点，不创建线条。
    ctx2.moveTo(this.x[i], canHeight)
    // 添加一个新点，然后在画布中创建从该点到最后指定点的线条。
    ctx2.lineTo(this.x[i], canHeight - this.len[i])
    // 绘制已定义的路径。
    ctx2.stroke()
  }
  // 返回之前保存过的路径状态和属性。
  ctx2.restore()
}