var loopPlayInit = (function () {
  var $butLeft = null;
  var $butRight = null;
  var $butPlay = null;
  var $imglist = null;
  var origin = ['125px', '700px'];

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

  return init;
})();

loopPlayInit();