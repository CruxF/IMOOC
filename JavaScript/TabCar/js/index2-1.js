function $(id) {
  return typeof id === 'string' ? document.getElementById(id) : id;
}

window.onload = function () {
  //标签的索引
  var index = 0;
  var timer = null;

  //获取鼠标滑过或点击的标签和要切换内容的元素
  var lis = $('notice-tit').getElementsByTagName('li');
  var divs = $('notice-con').getElementsByTagName('div');
  if (lis.length != divs.length) return;

  //遍历所有的页签
  for (var i = 0; i < lis.length; i++) {
    lis[i].id = i;
    lis[i].onmouseover = function () {
    	//用that这个变量来引用当前滑过的li
    	var that = this;
      //如果存在准备执行的定时器，立刻清除
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      //延迟半秒执行
      timer = setTimeout(function () {
        //清除所有的样式
        for (var j = 0; j < lis.length; j++) {
          lis[j].className = '';
          divs[j].style.display = 'none';
        }
        //设置当前为高亮显示
        lis[that.id].className = 'select';
        divs[that.id].style.display = 'block';
      }, 500);
    }
  }
}
//知识点一：
//因为setTimeout是window下的一个方法，
//因此在定时器中的this指的是window对象，并非是当前对象

//知识点二：
//如果是setTimeout这种定时器，不清理就会在线程空闲后立即执行一次。
//如果是setInterval这种，不清理，就一直按照间隔不断的执行下去。