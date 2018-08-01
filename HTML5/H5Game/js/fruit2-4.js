var fruitObj = function() {
  this.alive = []
  this.x = []
  this.y = []
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
    // 遍历30次，分别得到这30次果实的位置
    this.born(i)
  }
  this.orange.src = './img/fruit.png'
  this.blue.src = './img/blue.png'
}
fruitObj.prototype.draw = function() {
  for(var i = 0; i < this.num; i++) {
    // 绘制果实的图片以及位置
    ctx2.drawImage(this.orange, this.x[i] - this.orange.width * 0.5, this.y[i] - this.orange.height * 0.5)
  }
}
fruitObj.prototype.born = function(i) {
  // ane.num == 50
  var aneID = Math.floor(Math.random() * ane.num)
  // 使每个果实的横坐标对应每个海葵的横坐标
  this.x[i] = ane.x[aneID]
  // 使每个果实的纵坐标刚好在每个海葵的上面
  this.y[i] = canHeight - ane.len[aneID]
}