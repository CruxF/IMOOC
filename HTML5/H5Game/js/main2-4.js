var can1
var can2
var canWidth
var canHeight
var ctx1
var ctx2
var lastTime // 上一帧的时间
var deltaTime // 两帧间隔的时间
var bgPic = new Image()
var ane
var fruit
// 页面加载后执行game方法
document.body.onload = game

function game() {
  init()
  lastTime = Date.now()
  deltaTime = 0
  gameloop()
}

function init() {
  // 获得canvas的context
  can1 = document.getElementById('canvas1')
  ctx1 = can1.getContext('2d')
  can2 = document.getElementById('canvas2')
  ctx2 = can2.getContext('2d')
  bgPic.src = './img/background.jpg'
  canWidth = can1.width
  canHeight = can1.height
  ane = new aneObj()
  ane.init()
  fruit = new fruitObj()
  fruit.init()
}
// 游戏循环函数
function gameloop() {
  window.requestAnimFrame(gameloop)
  var now = Date.now()
  // 帧与帧的时间间隔是不稳定的
  deltaTime = now - lastTime
  lastTime = now
  drawBackground()
  // 绘制海葵
  ane.draw()
  // 绘制果实
  fruit.draw()
}