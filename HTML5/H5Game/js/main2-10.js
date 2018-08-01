var can1
var can2

var canWidth
var canHeight

var ctx1
var ctx2

// 上一帧的时间
var lastTime
// 两帧间隔的时间
var deltaTime
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
  // 监听到鼠标移动，那么就执行onMousemove方法，该事件句柄在冒泡阶段执行
  can1.addEventListener('mousemove', onMousemove, false)
}
// 游戏循环函数
function gameloop() {
  window.requestAnimFrame(gameloop)
  var now = Date.now()
  // 帧与帧的时间间隔是不稳定的
  deltaTime = now - lastTime
  lastTime = now
  // 优化代码，避免切换网页的时候出现诡异的事情
  if(deltaTime > 40) deltaTime = 40
  drawBackground()
  // 绘制海葵
  ane.draw()
  // 绘制果实
  fruit.draw()
  // 重复绘制果实
  fruitMonitor()
  // 在给定的矩形内清除指定的像素，作用就是清除之前绘制出来的大鱼
  ctx1.clearRect(0, 0, canWidth, canHeight)
  // 绘制大鱼
  mom.draw()
  // 调用大鱼吃掉果实的方法
  momFruitsCollision()
}
// 检测鼠标位置方法
function onMousemove(e) {
  // e.offsetX和e.layerX都是鼠标在画布中的位置
  if(e.offsetX || e.layerX) {
    mx = e.offsetX == undefined ? e.layerX : e.offsetX
    my = e.offsetY == undefined ? e.layerY : e.offsetY
  }
}