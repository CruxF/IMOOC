var fruitObj = function() {
  this.alive = []
  this.x = []
  this.y = []
  this.L = []
  this.spd = []
  this.orange = new Image()
  this.blue = new Image()
}
fruitObj.prototype.num = 30
fruitObj.prototype.init = function() {
  for(var i = 0; i < this.num; i++) {
    // 定义果实生命期为true，说白了就是显示
    this.alive[i] = true
    this.x[i] = 0
    this.y[i] = 0
    // 定义果实往上飘的速度
    this.spd[i] = Math.random() * 0.01 + 0.005
    // 遍历30次，分别得到这30次果实的位置
    this.born(i)
  }
  this.orange.src = './img/fruit.png'
  this.blue.src = './img/blue.png'
}
fruitObj.prototype.draw = function() {
  for(var i = 0; i < this.num; i++) {
    if(this.alive[i]) {
      // 判断果实的大小
      if(this.L[i] <= 15) {
        this.L[i] += this.spd[i] * deltaTime
      } else {
        // 让果实一直往上飘
        this.y[i] -= this.spd[i] * 5 * deltaTime
      }
      // 绘制果实的图片、位置和大小
      ctx2.drawImage(this.orange, this.x[i] - this.L[i] * 0.5, this.y[i] - this.L[i] * 0.5, this.L[i], this.L[i])
      // 当果实距离浏览器窗口位置小于10，那么隐藏果实，实际上就是停止绘制果实
      if(this.y[i] < 10) {
        this.alive[i] = false
      }
    }
  }
}
fruitObj.prototype.born = function(i) {
  // ane.num == 50
  var aneID = Math.floor(Math.random() * ane.num)
  // 使每个果实的横坐标对应每个海葵的横坐标
  this.x[i] = ane.x[aneID]
  // 使每个果实的纵坐标刚好在每个海葵的上面
  this.y[i] = canHeight - ane.len[aneID]
  // 定义果实的大小
  this.L[i] = 0
}