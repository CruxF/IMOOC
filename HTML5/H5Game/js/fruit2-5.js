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
    this.alive[i] = true
    this.x[i] = 0
    this.y[i] = 0
    // 果实往上飘的速度
    this.spd[i] = Math.random() * 0.01 + 0.005
    this.born(i)
  }
  this.orange.src = './img/fruit.png'
  this.blue.src = './img/blue.png'
}
fruitObj.prototype.draw = function() {
  for(var i = 0; i < this.num; i++) {
    if(this.alive[i]) {
      if(this.L[i] <= 15) {
        this.L[i] += this.spd[i] * deltaTime
      } else {
        // 减小果实的高度
        this.y[i] -= this.spd[i] * 5 * deltaTime
      }
      ctx2.drawImage(this.orange, this.x[i] - this.L[i] * 0.5, this.y[i] - this.L[i] * 0.5, this.L[i], this.L[i])
      if(this.y[i] < 10) {
        this.alive[i] = false
      }
    }
  }
}
fruitObj.prototype.born = function(i) {
  var aneID = Math.floor(Math.random() * ane.num)
  this.x[i] = ane.x[aneID]
  this.y[i] = canHeight - ane.len[aneID]
  this.L[i] = 0
}