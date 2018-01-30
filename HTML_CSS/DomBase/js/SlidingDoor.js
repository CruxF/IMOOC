window.onload = function () {
  var box = document.getElementById("box");
  var imgs = box.getElementsByTagName("img");

  //获取单张图片的宽度
  var imgWidth = imgs[0].offsetWidth;

  //设置掩藏门体露出的宽度
  var showWidth = 160;

  //设置容器的总宽度
  var boxWidth = imgWidth + showWidth * (imgs.length - 1);
  box.style.width = boxWidth + "px";

  //设置每道门的位置
  function setImgsPos() {
    for (var i = 1, len = imgs.length; i < len; i++) {
      imgs[i].style.left = imgWidth + showWidth * (i - 1) + "px";
    }
  }
  setImgsPos();

  //计算每道门打开时应该移动的距离
  var translate = imgWidth - showWidth;

  //为每道门绑定事件
  for (var i = 0, len = imgs.length; i < len; i++) {
    //使用立即调用函数表达式，为了获得不同的i值
    (function (i) {
      imgs[i].onmouseover = function () {
        //首先将每道门复位
        setImgsPos();
        //打开门
        for (var j = 1; j <= i; j++) {
          imgs[j].style.left = parseInt(imgs[j].style.left, 10) - translate + "px";
        }
      }
    })(i);
  }
}