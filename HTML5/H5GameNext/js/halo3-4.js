var haloObj = function() {
  // 定义圈圈的中心点
  this.x = []
  this.y = []
  // 判断圈圈的生命周期
  this.alive = []
  // 定义圈圈的半径
  this.r = []
}
haloObj.prototype.num = 5
haloObj.prototype.init = function() {
  for(var i = 0; i < this.num; i++) {
    this.x[i] = 0
    this.y[i] = 0
    this.alive[i] = false
    this.r[i] = 0
  }
}
haloObj.prototype.draw = function() {
  for(var i = 0; i < this.num; i++) {
    if(this.alive[i]) {}
  }
}
haloObj.prototype.born = function() {}