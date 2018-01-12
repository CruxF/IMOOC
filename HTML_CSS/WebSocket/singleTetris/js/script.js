var local = new Local();
local.start();
var remote = new Remote();
remote.start(2, 2);
remote.bindEvents();

// var nextData = [   //4*4
// 	[2, 2, 0, 0],
// 	[0, 2, 2, 0],
// 	[0, 0, 0, 0],
// 	[0, 0, 0, 0]
// ];
// var gameData = [  //20*10
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],	
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],	
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 2, 1, 0, 0, 0],
// 	[0, 0, 0, 2, 2, 2, 1, 0, 0, 0],
// 	[0, 0, 1, 1, 1, 1, 1, 0, 0, 0],	
// ];
// var nextDivs = [];
// var gameDivs = [];
// //获取到游戏区域和下一块区域
// //先用createDocumentFragment创建一个文档片段，
// //每次for循环的newNode使用appendChild到fragment上去，
// //最后再把fragment用appendChild到game的div上。
// //每次for循环就做一次dom查询和插入的话性能太低了。
// var gameElement = document.getElementById('game');
// var nextElement = document.getElementById('next');
// //初始化游戏
// var initGame = function() {
// 	var len = gameData.length;
// 	for(var i=0; i<len; i++) {
// 		var gameDiv = [],
// 			len_0 = gameData[0].length;
// 		for(var j=0; j<len_0; j++) {
// 			var newNode = document.createElement('div');
// 			newNode.className = 'none';
// 			newNode.style.top = (i*20) + 'px';
// 			newNode.style.left = (j*20) + 'px';
// 			gameElement.appendChild(newNode);
// 			gameDiv.push(newNode);
// 		}
// 		gameDivs.push(gameDiv);
// 	}
// }
// //初始化下一个方块
// var initNext = function() {
// 	var len = nextData.length;
// 	for(var i=0; i<len; i++) {
// 		var nextDiv = [],
// 			len_0 = nextData[0].length;
// 		for(var j=0; j<len_0; j++) {
// 			var newNode = document.createElement('div');
// 			newNode.className = 'none';
// 			newNode.style.top = (i*20) + 'px';
// 			newNode.style.left = (j*20) + 'px';
// 			nextElement.appendChild(newNode);
// 			nextDiv.push(newNode);
// 		}
// 		nextDivs.push(nextDiv);
// 	}
// }
// //重置游戏
// var refreshGame = function() {
// 	var len = gameData.length;
// 	for(var i=0; i<len; i++) {
// 		var len_0 = gameData[0].length;
// 		for(var j=0; j<len_0; j++) {
// 			if(gameData[i][j] == 0) {
// 				gameDivs[i][j].className ='none';
// 			} else if(gameData[i][j] == 1) {
// 				gameDivs[i][j].className ='done';
// 			} else if(gameData[i][j] == 2) {
// 				gameDivs[i][j].className ='current';
// 			}
// 		}
// 	}
// }
// //重置下一个方块
// var refreshNext = function() {
// 	var len = nextData.length;
// 	for(var i=0; i<len; i++) {
// 		var len_0 = nextData[0].length;
// 		for(var j=0; j<len_0; j++) {
// 			if(nextData[i][j] == 0) {
// 				nextDivs[i][j].className ='none';
// 			} else if(nextData[i][j] == 1) {
// 				nextDivs[i][j].className ='done';
// 			} else if(nextData[i][j] == 2) {
// 				nextDivs[i][j].className ='current';
// 			}
// 		}
// 	}
// }
// //调用函数
// initGame();
// initNext();
// refreshGame();
// refreshNext();