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
    this.alive[i] = true
    this.x[i] = 0
    this.y[i] = 0
    // 果实往上飘的速度
    this.spd[i] = Math.random() * 0.015 + 0.001
    // this.born(i)
    this.fruitType[i] = ''
  }
  this.orange.src = './img/fruit.png'
  this.blue.src = './img/blue.png'
}
fruitObj.prototype.draw = function() {
  for(var i = 0; i < this.num; i++) {
    if(this.alive[i]) {
      if(this.fruitType[i] == 'blue') {
        var pic = this.blue
      } else {
        var pic = this.orange
      }
      if(this.L[i] <= 15) {
        this.L[i] += this.spd[i] * deltaTime
      } else {
        // 减小果实的高度
        this.y[i] -= this.spd[i] * 5 * deltaTime
      }
      ctx2.drawImage(pic, this.x[i] - this.L[i] * 0.5, this.y[i] - this.L[i] * 0.5, this.L[i], this.L[i])
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
  this.alive[i] = true
  var ran = Math.random()
  if(ran < 0.3) {
    this.fruitType[i] = 'blue'
  } else {
    this.fruitType[i] = 'orange'
  }
}
// 判断大鱼是否吃掉果实
fruitObj.prototype.dead = function(i) {
  this.alive[i] = false
}

function fruitMonitor() {
  var num = 0
  for(var i = 0; i < fruit.num; i++) {
    if(fruit.alive[i]) num++
  }
  if(num < 15) {
    sendFruit()
    return
  }
}

function sendFruit() {
  for(var i = 0; i < fruit.num; i++) {
    if(!fruit.alive[i]) {
      fruit.born(i)
      return
    }
  }
}