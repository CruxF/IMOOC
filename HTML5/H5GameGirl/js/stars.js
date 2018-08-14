var starObj = function() {
  // 星星x和y轴坐标
  this.x;
  this.y;
  // 星星转移速度
  this.ySpd;
  // 背景图位置计算变量
  this.picNo;
  // 时间间隔变量
  this.timer;
  this.beta;
}
starObj.prototype.init = function() {
  // 星星随机x轴坐标和y轴坐标
  this.x = Math.random() * girlWidth + padLeft;
  this.y = Math.random() * girlHeight + padTop;
  // 星星随机在x轴和y轴的速度
  this.ySpd = Math.random() * 0.6 - 0.3; 
  this.xSpd = Math.random() * 0.2 - 0.1; 
  // 控制背景图位置的变量
  this.picNo = Math.floor(Math.random() * 7);
  this.timer = 0;
  this.beta = Math.random() * Math.PI * 0.5;
}
starObj.prototype.update = function() {
  this.xSpd = Math.random() * 0.2 - 0.1;
  // 向x轴和y轴移动的变量
  this.x += this.xSpd;
  this.y += this.ySpd;
  // 当星星消失在画布之外那么就让星星重生
  if(this.x > (padLeft + girlWidth) || this.x < (padLeft - 10)) {
    this.init();
  } else if(this.y > (padTop + girlHeight) || this.y < (padTop - 10)) {
    this.init();
  }
  // 判断时间间隔
  this.timer += deltaTime;
  if(this.timer > 30) {
    this.picNo += 1;
    this.picNo %= 7;
    this.timer = 0;
  }
}
// 绘制图片
starObj.prototype.draw = function() {
  this.beta += deltaTime * 0.005;
  ctx.save();
  // globalAlpha全局透明度
  ctx.globalAlpha = Math.sin(this.beta) * alive;
  // 绘制画布图片、图片中的位置(参考雪碧图)、图片中的大小、图片在画布中的位置、画布的宽高，具体看API
  ctx.drawImage(starPic, this.picNo * 7, 0, 7, 7, this.x, this.y, 7, 7);
  ctx.restore();
}
// 调用绘制星星函数和星星位置更新函数
function drawStars() {
  for(var i = 0; i < num; i++) {
    stars[i].update();
    stars[i].draw();
  }
}
// 通过控制透明度(alive)来控制星星的隐藏于显示
function aliveUpdate() {
  if(switchy) {
    alive += 0.03;
    if(alive > 0.7) {
      alive = 0.7;
    }
  } else {
    alive -= 0.03;
    if(alive < 0) {
      alive = 0;
    }
  }
}