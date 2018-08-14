// 定义canvas对象变量和上下文变量
var can;
var ctx;
// 定义绘制画布的宽与高变量
var w;
var h;
// 定义女孩位置和宽高变量
var padLeft = 100;
var padTop = 100;
var girlWidth = 600;
var girlHeight = 300;
// 定义时间差变量
var deltaTime;
var lastTime;
// 定义女孩和星星图片变量
var girlPic = new Image();
var starPic = new Image();
// 定义星星数组和数量
var stars = [];
var num = 50;
// 星星透明度变量
var alive = 0;
// 鼠标判断变量
var switchy = false;

function init() {
  can = document.getElementById("canvas");
  ctx = can.getContext("2d");
  w = can.width;
  h = can.height;
  // 添加鼠标滑过事件
  document.addEventListener('mousemove', mousemove, false);
  girlPic.src = "src/girl.jpg";
  starPic.src = "src/star.png";
  // 循环遍历生成星星
  for(var i = 0; i < num; i++) {
    stars[i] = new starObj();
    stars[i].init();
  }
  lastTime = Date.now();
  gameLoop();
}
// 循环函数
function gameLoop() {
	// 每隔一段时间不断调用自身
  window.requestAnimFrame(gameLoop);
  var now = Date.now();
  deltaTime = now - lastTime;
  lastTime = now;
  // 绘制背景
  fillCanvas();
  // 绘制女孩
  drawGirl();
  // 绘制星星
  drawStars();
  // 鼠标移入触发事件
  aliveUpdate();
}
// 绘制整个画布背景
function fillCanvas() {
  ctx.fillStyle = "#393550";
  ctx.fillRect(0, 0, w, h);
}
// 绘制女孩
function drawGirl() {
	// 绘制女孩的图片、位置和宽高
  ctx.drawImage(girlPic, padLeft, padTop, girlWidth, girlHeight);
}

function mousemove(e) {
	// 如果鼠标位置有变动
  if(e.offsetX || e.layerX) {
    var px = e.offsetX == undefined ? e.layerX : e.offsetX;
    var py = e.offsetY == undefined ? e.layerY : e.offsetY;
    // 判断鼠标是否在图片之内
    if(px > padLeft && px < (padLeft + girlWidth) && py > padTop && py < (padTop + girlHeight)) {
      switchy = true;
    } else {
      switchy = false;
    }
  }
}