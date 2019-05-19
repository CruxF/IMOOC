// 回调函数示范栗子
function learn(something) {
  console.log(something)
}

function we(callback, something) {
  something += ' is cool'
  callback(something)
}
// 第一种调用方式(具名)
we(learn, 'Nodejs')
// 第二种调用方式(匿名)
we(function(something) {
  console.log(something)
}, 'Jade')
