//间隔执行
var a = 0;
var b = setInterval(function () {
  console.log(a++);
  if (a == 6) {
    clearInterval(b);
  }
}, 1000)

//延迟执行
setTimeout(function () {
  alert("hello world");
}, 8000)