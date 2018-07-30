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
var mom
// 鼠标位置变量
var mx
var my
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
  mom = new momObj()
  mom.init()
  mx = canWidth * 0.5
  my = canHeight * 0.5
  can1.addEventListener('mousemove', onMousemove, false)
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
  fruitMonitor()
  // 绘制大鱼
  ctx1.clearRect(0, 0, canWidth, canHeight)
  mom.draw()
  // 大鱼吃果实
  momFruitsCollision()
}
// 检测鼠标位置
function onMousemove(e) {
  if(e.offsetX || e.layerX) {
    mx = e.offsetX == undefined ? e.layerX : e.offsetX
    my = e.offsetY == undefined ? e.layerY : e.offsetY
  }
}