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
    this.alive[i] = true
    this.x[i] = 0
    this.y[i] = 0
    this.born(i)
  }
  this.orange.src = './img/fruit.png'
  this.blue.src = './img/blue.png'
}
fruitObj.prototype.draw = function() {
  for(var i = 0; i < this.num; i++) {
    ctx2.drawImage(this.orange, this.x[i] - this.orange.width * 0.5, this.y[i] - this.orange.height * 0.5)
  }
}
fruitObj.prototype.born = function(i) {
  var aneID = Math.floor(Math.random() * ane.num)
  this.x[i] = ane.x[aneID]
  this.y[i] = canHeight - ane.len[aneID]
}