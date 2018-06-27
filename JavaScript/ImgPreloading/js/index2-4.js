// 图片预加载
(function($) {
  function PreLoad(imgs, options) {
    this.imgs = (typeof imgs === 'string') ? [imgs] : imgs;
    this.opts = $.extend({}, PreLoad.DEFAULTS, options);
    this._unoredered();
  }
  PreLoad.DEFAULTS = {
    // 每一张图片加载完毕后执行
    each: null,
    // 所有图片加载完毕后执行
    all: null
  };
  // 无序加载方法
  PreLoad.prototype._unoredered = function() {
    var imgs = this.imgs;
    var opts = this.opts;
    var count = 0;
    var len = imgs.length;
    // 遍历图片数组
    $.each(imgs, function(i, src) {
      if(typeof src != 'string') {
        return
      }
      var imgObj = new Image();
      // 每张图片加载的时候执行的代码
      $(imgObj).on('load error', function() {
        opts.each && opts.each(count);
        if(count >= len - 1) {
          opts.all && opts.all();
        }
        count++;
      });
      imgObj.src = src;
    });
  }
  // 两种插件的不同调用方式
  // 1、$.fn.extend ==> $('#img').preload()
  // 2、$.extend ==> $.preload()
  $.extend({
    preload: function(imgs, opts) {
      new PreLoad(imgs, opts);
    }
  });
})(jQuery)