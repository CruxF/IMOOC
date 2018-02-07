var loopPlayInit = (function () {
  var $butLeft = null;
  var $butRight = null;
  var $butPlay = null;
  var $imglist = null;
  var origin = ['125px', '700px'];
  var imgAll = createImg([
    ['img/a.jpg', 'img/b.jpg', 'img/c.jpg', 'img/d.jpg'],
    ['img/e.jpg', 'img/f.jpg', 'img/g.jpg', 'img/h.jpg']
  ]);

  function init() {
    $butLeft = $(".butLeft");
    $butRight = $(".butRight");
    $butPlay = $(".butPlay");
    $imglist = $(".mianbox ul li");

    configer();
    setEvent();
  }

  function configer() {
    var ang = 15;
    var aint = -15;
    $imglist.css({
      origin: origin
    });
    $imglist.each(function (i) {
      var $this = $(this);
      $this.css({
        rotate: aint + (i * ang) + "deg"
      });
    })
  }

  function setEvent() {
    $butLeft.bind("click", function () {
      //anigo(-1);
      alert(imgAll[0][0]);
      return false;
    });
    $butRight.bind("click", function () {
      //anigo(1);
      return false;
    });
    $butPlay.bind("click", function () {
      return false;
    });
  }

  function createImg(arr) {
    var imgArr = [];
    for (var i in arr) {
      imgArr[i] = [];
      for (var x in arr[i]) {
        imgArr[i][x] = new Image();
        imgArr[i][x].src = arr[i][x];
      }
    }

    return imgArr;
  }

  return init;
})();

loopPlayInit();