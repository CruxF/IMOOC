var loopPlayInit = (function () {
  var $butLeft = null;
  var $butRight = null;
  var $butPlay = null;
  var $imglist = null;
  var origin = ['125px', '600px'];
  var imgorigin = ['125px', '800px'];
  var imgAll = createImg([
    ['img/a.jpg', 'img/b.jpg', 'img/c.jpg', 'img/d.jpg'],
    ['img/e.jpg', 'img/f.jpg', 'img/g.jpg', 'img/h.jpg'],
    ['img/i.jpg', 'img/y.jpg', 'img/z.jpg', 'img/q.jpg'],
    ['img/w.jpg', 'img/r.jpg', 'img/t.jpg', 'img/u.jpg']
  ]);
  var imgArrIndex = 0;
  var imgAng = 45;
  var imgTime = 200;
  var rotating = false;
  var autoTimer = null;
  var autointerval = 3000;

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
      var play = "play";
      var pause = "pause";
      var $but = $(this);
      if ($but.text() == "play") {
        $but.text(pause);
        autoGo();
      } else {
        $but.text(play);
        autoStop();
      }
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
    if (rotating) return false;
    rotating = true;
    imgArrIndex += d;
    if (imgArrIndex > imgAll.length - 1) {
      imgArrIndex = 0;
    } else if (imgArrIndex < 0) {
      imgArrIndex = imgAll.length - 1;
    }

    $imglist.each(function (i) {
      var $thisItme = $(this);
      var $thisimg = $thisItme.children("img");
      var $targetImg = $(imgAll[imgArrIndex][i]);
      var thisTime = (d === 1) ? imgTime * i : imgTime * ($imglist.length - 1 - i);

      $thisItme.append($targetImg);
      $thisimg.css({
        origin: imgorigin
      });
      $targetImg.css({
        orgin: origin,
        rotate: (0 - d) * imgAng + "deg"
      });
      setTimeout(function () {
        $thisimg.animate({
          rotate: imgAng * d + "deg"
        });
        $targetImg.animate({
          rotate: "0deg"
        }, 500, function () {
          $thisimg.remove();
          if (thisTime == (($imglist.length - 1) * imgTime)) {
            rotating = false;
          }
        });
      }, thisTime);

    })
  }

  function autoGo() {
    clearInterval(autoTimer);
    anigo(1);
    autoTimer = setInterval(function () {
      anigo(1);
    }, autointerval);
  }

  function autoStop() {
    clearInterval(autoTimer);
  }

  return init;
})();

loopPlayInit();