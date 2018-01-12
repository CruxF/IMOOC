/************方块1**************/
var Square1 = function () {
  Square.call(this);
  // 方块数据
  // this.data = [
  // 	[0, 0, 0, 0],
  // 	[0, 0, 0, 0],
  // 	[0, 0, 0, 0],
  // 	[0, 0, 0, 0]
  // ];
  // // 原点
  // this.origin = {
  // 	x:0,
  // 	y:0
  // };
  // // 方向
  // this.dir = 0;
  // 旋转数组
  this.rotates = [
    [
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 2, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [2, 2, 2, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 2, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [2, 2, 2, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
  ];
}
Square1.prototype = Square.prototype;

// 判断是否可以旋转
// Square1.prototype.canRotate = function(isValid) {
// 	var d = this.dir + 1;
// 	if(d == 4) {
// 		d = 0;
// 	}
// 	var test = [
// 		[0, 0, 0, 0],
// 		[0, 0, 0, 0],
// 		[0, 0, 0, 0],
// 		[0, 0, 0, 0]
// 	];
// 	for(var i=0; i<this.data.length; i++) {
// 		for(var j=0; j<this.data[0].length; j++) {
// 			test[i][j] = this.rotates[d][i][j];
// 		}
// 	}	
// 	return isValid(this.origin, test);
// }
// // 旋转操作
// Square1.prototype.rotate = function() {
// 	this.dir += 1;
// 	if(this.dir == 4) {
// 		this.dir = 0;
// 	}	
// 	for(var i=0; i<this.data.length; i++) {
// 		for(var j=0; j<this.data[0].length; j++) {
// 			this.data[i][j] = this.rotates[this.dir][i][j];
// 		}
// 	}
// }

// // 判断是否可以下降
// Square1.prototype.canDown = function(isValid) {
// 	var test = {};
// 	test.x = this.origin.x + 1;
// 	test.y = this.origin.y;
// 	return isValid(test, this.data);
// }
// // 下移操作
// Square1.prototype.down = function() {
// 	this.origin.x += 1;
// }

// // 判断是否可以左降
// Square1.prototype.canLeft = function(isValid) {
// 	var test = {};
// 	test.x = this.origin.x;
// 	test.y = this.origin.y - 1;
// 	return isValid(test, this.data);
// }
// // 左移操作
// Square1.prototype.left = function() {
// 	this.origin.y -= 1;
// }

// // 判断是否可以右降
// Square1.prototype.canRight = function(isValid) {
// 	var test = {};
// 	test.x = this.origin.x;
// 	test.y = this.origin.y + 1;
// 	return isValid(test, this.data);
// }
// // 右移操作
// Square1.prototype.right = function() {
// 	this.origin.y += 1;
// }

/************方块2**************/
var Square2 = function () {
  Square.call(this);
  // 旋转数组
  this.rotates = [
    [
      [0, 2, 0, 0],
      [2, 2, 2, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [2, 0, 0, 0],
      [2, 2, 0, 0],
      [2, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [2, 2, 2, 0],
      [0, 2, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 2, 0, 0],
      [2, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 0, 0, 0]
    ]
  ];
}
Square2.prototype = Square.prototype;

/************方块3**************/
var Square3 = function () {
  Square.call(this);
  // 旋转数组
  this.rotates = [
    [
      [2, 2, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [2, 2, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [2, 0, 0, 0],
      [2, 2, 2, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [2, 2, 0, 0],
      [2, 0, 0, 0],
      [2, 0, 0, 0],
      [0, 0, 0, 0]
    ]
  ];
}
Square3.prototype = Square.prototype;

/************方块4**************/
var Square4 = function () {
  Square.call(this);
  // 旋转数组
  this.rotates = [
    [
      [2, 2, 2, 0],
      [2, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [2, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 2, 0],
      [2, 2, 2, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [2, 0, 0, 0],
      [2, 0, 0, 0],
      [2, 2, 0, 0],
      [0, 0, 0, 0]
    ]
  ];
}
Square4.prototype = Square.prototype;

/************方块5：田字**************/
var Square5 = function () {
  Square.call(this);
  // 旋转数组
  this.rotates = [
    [
      [2, 2, 0, 0],
      [2, 2, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [2, 2, 0, 0],
      [2, 2, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [2, 2, 0, 0],
      [2, 2, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [2, 2, 0, 0],
      [2, 2, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
  ];
}
Square5.prototype = Square.prototype;

/************方块6：2字**************/
var Square6 = function () {
  Square.call(this);
  // 旋转数组
  this.rotates = [
    [
      [0, 2, 2, 0],
      [2, 2, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [2, 0, 0, 0],
      [2, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 2, 2, 0],
      [2, 2, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [2, 0, 0, 0],
      [2, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 0, 0, 0]
    ]
  ];
}
Square6.prototype = Square.prototype;

/************方块2：2字**************/
var Square7 = function () {
  Square.call(this);
  // 旋转数组
  this.rotates = [
    [
      [2, 2, 0, 0],
      [0, 2, 2, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 2, 0, 0],
      [2, 2, 0, 0],
      [2, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [2, 2, 0, 0],
      [0, 2, 2, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 2, 0, 0],
      [2, 2, 0, 0],
      [2, 0, 0, 0],
      [0, 0, 0, 0]
    ]
  ];
}
Square7.prototype = Square.prototype;

/**************工厂函数**************/
var SquareFactory = function () {}
SquareFactory.prototype.make = function (index, dir) {
  var s;
  index += 1;
  switch (index) {
    case 1:
      s = new Square1();
      break;
    case 2:
      s = new Square2();
      break;
    case 3:
      s = new Square3();
      break;
    case 4:
      s = new Square4();
      break;
    case 5:
      s = new Square5();
      break;
    case 6:
      s = new Square6();
      break;
    case 7:
      s = new Square7();
      break;
    default:
      break;
  }
  s.origin.x = 0;
  s.origin.y = 3;
  s.rotate(dir);
  return s;
}