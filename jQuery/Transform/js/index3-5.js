var loopPlayInit = (function () {
  var $butLeft = null;
  var $butRight = null;
  var $butPlay = null;
  var $imglist = null;
  var origin = ['125px', '600px'];
  var imgAll = createImg([
    ['img/a.jpg', 'img/b.jpg', 'img/c.jpg', 'img/d.jpg'],
    ['img/e.jpg', 'img/f.jpg', 'img/g.jpg', 'img/h.jpg']
  ]);
  var imgArrIndex = 0;
  var imgAng = 45;

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
      anigo(-1);
      return false;
    });
    $butRight.bind("click", function () {
      anigo(1);
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

  function anigo(d) {
    imgArrIndex += d;

    $imglist.each(function (i) {
      var $thisItme = $(this);
      var $thisimg = $thisItme.children("img");
      var $targetImg = $(imgAll[imgArrIndex][i]);
      $thisItme.append($targetImg);
      $thisimg.css({
        origin: origin
      });
      $targetImg.css({
        orgin: origin,
        rotate: (0 - d) * imgAng + "deg"
      });

      $thisimg.animate({
        rotate: imgAng * d + "deg"
      });
      $targetImg.animate({
        rotate: "0deg"
      });
    })
  }

  return init;
})();

loopPlayInit();