var fruitObj = function() {
  this.alive = []
  this.x = []
  this.y = []
  this.L = []
  this.spd = []
  this.fruitType = []
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
    this.spd[i] = Math.random() * 0.015 + 0.001
    // 定义果实的类型，是orange还是blue？
    this.fruitType[i] = ''
  }
  this.orange.src = './img/fruit.png'
  this.blue.src = './img/blue.png'
}
fruitObj.prototype.draw = function() {
  for(var i = 0; i < this.num; i++) {
    if(this.alive[i]) {
      // 设置果实类型
      if(this.fruitType[i] == 'blue') {
        var pic = this.blue
      } else {
        var pic = this.orange
      }
      // 判断果实的大小
      if(this.L[i] <= 15) {
        this.L[i] += this.spd[i] * deltaTime
      } else {
        // 让果实一直往上飘
        this.y[i] -= this.spd[i] * 5 * deltaTime
      }
      // 绘制果实的图片、位置和大小
      ctx2.drawImage(pic, this.x[i] - this.L[i] * 0.5, this.y[i] - this.L[i] * 0.5, this.L[i], this.L[i])
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
  this.alive[i] = true
  // 随机设置果实的类型
  var ran = Math.random()
  if(ran < 0.3) {
    this.fruitType[i] = 'blue'
  } else {
    this.fruitType[i] = 'orange'
  }
}
// 果实重绘方法
function fruitMonitor() {
  var num = 0
  // 计算屏幕存在多少个果实
  for(var i = 0; i < fruit.num; i++) {
    if(fruit.alive[i]) num++
  }
  // 当屏幕果实小于20个的时候执行sendFruit()方法生成果实
  if(num < 20) {
    sendFruit()
    return
  }
}
// 当某一个果实消失的时候，那么就会重新生成一个果实
function sendFruit() {
  for(var i = 0; i < fruit.num; i++) {
    if(!fruit.alive[i]) {
      fruit.born(i)
      return
    }
  }
}