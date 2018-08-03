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
var baby

// 鼠标位置变量
var mx
var my

// 小鱼尾巴摆动的变量
var babyTail = []
// 小鱼眼睛眨一眨的变量
var babyEye = []
// 小鱼身体变化的变量
var babyBoby = []

// 大鱼尾巴摆动的变量
var momTail = []
// 大鱼眨一眨的变量
var momEye = []
// 大鱼身体变化的变量
var momBodyOra = []
var momBodyBlue = []

// 游戏分数变量
var data

// 大鱼吃果实出现的圈圈
var wave
// 大鱼喂小鱼果实出现的圈圈
var halo

// 定义漂浮物
var dust
var dustPic = []

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
  
  baby = new babyObj()
  baby.init()
  
  mx = canWidth * 0.5
  my = canHeight * 0.5
  
  // 监听到鼠标移动，那么就执行onMousemove方法，该事件句柄在冒泡阶段执行
  can1.addEventListener('mousemove', onMousemove, false)
  
  // 为绘制鱼尾提供图片资源
  for(var i = 0; i < 8; i++) {
    babyTail[i] = new Image()
    babyTail[i].src = './img/babyTail' + i + '.png'
  }
  
  // 为绘制鱼眼睛眨一眨提供图片资源
  for(var i = 0; i < 2; i++) {
    babyEye[i] = new Image()
    babyEye[i].src = './img/babyEye' + i + '.png'
  }
  
  // 为绘制鱼身体提供图片资源
  for(var i = 0; i < 20; i++) {
    babyBoby[i] = new Image()
    babyBoby[i].src = './img/babyFade' + i + '.png'
  }
  
  // 为绘制大鱼尾巴提供图片资源
  for(var i = 0; i < 8; i++) {
    momTail[i] = new Image()
    momTail[i].src = './img/bigTail' + i + '.png'
  }
  
  // 为绘制大鱼眼睛提供图片
  for(var i = 0; i < 2; i++) {
    momEye[i] = new Image()
    momEye[i].src = './img/bigEye' + i + '.png'
  }
  
  // 创建游戏分数对象
  data = new dataObj()
  
  // 为绘制大鱼身体提供图片
  for(var i = 0; i < 8; i++) {
  	momBodyOra[i] = new Image()
  	momBodyBlue[i] = new Image()
  	momBodyOra[i].src = './img/bigSwim' + i + '.png'
  	momBodyBlue[i].src = './img/bigSwimBlue' + i + '.png'
  }
  ctx1.font = '28px Verdana'
  ctx1.textAlign = 'center'
  
  wave = new waveObj()
  wave.init()
  
  halo = new haloObj()
  halo.init()
  
  // 设置漂浮物
  for(var i = 0; i < 7; i++) {
  	dustPic[i] = new Image()
  	dustPic[i].src = './img/dust' + i + '.png'
  }
  dust = new dustObj()
  dust.init()
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
  // 绘制小鱼
  baby.draw()
  // 大鱼吃果实
  momFruitsCollision()
  // 大鱼喂小鱼
  momBabyCollision()
  // 绘制游戏分数
  data.draw()
  // 绘制大鱼吃果实的圈圈
  wave.draw()
  // 绘制大鱼喂小鱼吃果实的圈圈
  halo.draw()
  // 绘制漂浮物
  dust.draw()
}
// 检测鼠标位置方法
function onMousemove(e) {
  if(!data.gameOver) {
  	// e.offsetX和e.layerX都是鼠标在画布中的位置
    if(e.offsetX || e.layerX) {
      mx = e.offsetX == undefined ? e.layerX : e.offsetX
      my = e.offsetY == undefined ? e.layerY : e.offsetY
    }
  }
}