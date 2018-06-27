// 图片预加载
(function ($) {
  function PreLoad(imgs, options) {
    this.imgs = (typeof imgs === 'string') ? [imgs] : imgs;
    this.opts = $.extend({}, PreLoad.DEFAULTS, options);
    if (this.opts.order === 'ordered') {
      this._ordered();
    } else {
      this._unoredered();
    }
  }
  PreLoad.DEFAULTS = {
    // 无序预加载
    order: 'unordered',
    // 每一张图片加载完毕后执行
    each: null,
    // 所有图片加载完毕后执行
    all: null
  };
  // 有序加载
  PreLoad.prototype._ordered = function () {
      var opts = this.opts;
      var imgs = this.imgs;
      var len = imgs.length;
      var count = 0;

      function load() {
        var imgObj = new Image();
        $(imgObj).on('load error', function () {
          opts.each && opts.each(count);
          if (count >= len) {
            // 所有图片加载完毕
            opts.all && opts.all();
          } else {
            load();
          }
          count++;
        });
        imgObj.src = imgs[count];
      }
      // 调用函数
      load();
    },
    // 无序加载
    PreLoad.prototype._unoredered = function () {
      var imgs = this.imgs;
      var opts = this.opts;
      var count = 0;
      var len = imgs.length;
      $.each(imgs, function (i, src) {
        if (typeof src != 'string') {
          return
        }
        var imgObj = new Image();
        $(imgObj).on('load error', function () {
          opts.each && opts.each(count);
          if (count >= len - 1) {
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
    preload: function (imgs, opts) {
      new PreLoad(imgs, opts);
    }
  });
})(jQuery)