// 同步函数示范栗子
var c = 0
function print() {
  console.log(c)
}
function plus() {
  setTimeout(function() {
    c += 1
  }, 1000)
}
plus()
print()

// 异步函数示范栗子
var c = 0
function print() {
  console.log(c)
}
function plus(callback) {
  setTimeout(function() {
    c += 1
    callback()
  }, 1000)
}
plus(print)