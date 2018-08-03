var waveObj = function() {
  this.x = []
  this.y = []
  this.alive = []
  this.r = []
}
waveObj.prototype.num = 10
waveObj.prototype.init = function() {
  for(var i = 0; i < this.num; i++) {
    this.alive[i] = false
  }
}
waveObj.prototype.draw = function() {
  for(var i = 0; i < this.num; i++) {
    if(!this.alive[i]) {}
  }
}
waveObj.prototype.born = function() {
  for(var i = 0; i < this.num; i++) {
    if(!this.alive[i]) {
      console.log('圈圈出生了~')
      return
    }
  }
}