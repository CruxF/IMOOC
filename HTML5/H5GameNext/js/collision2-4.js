// 判断大鱼和果实的距离
function momFruitsCollision() {
  for(var i = 0; i < fruit.num; i++) {
    if(fruit.alive[i]) {
      // calLength2内部实现代码为
      /*function calLength2(x1, y1, x2, y2) {
        return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
      }*/
      // x1-x2代表底数；2代表幂数
      var L = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y)
      if(L < 900) {
        fruit.dead(i)
        data.fruitNum++
          if(fruit.fruitType[i] == 'blue') {
            data.double = 2
          }
      }
    }
  }
}
// 判断大鱼和小鱼之间的距离
function momBabyCollision() {
  var L = calLength2(mom.x, mom.y, baby.x, baby.y)
  if(L < 900) {
    // 使小鱼身体复原
    baby.babyBodyCount = 0
    data.reset()
  }
}