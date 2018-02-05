(function ($) {
  var privateFun = function () {

  }

  var PageSwitch = (function () {
    function PageSwitch(element, options) {
      this.settings = $.extend(true, $.fn.PageSwitch.defaults, options || {});
      this.element = element;
      this.init();
    }
    PageSwitch.prototype = {
      init: function () {

      }
    }
    return PageSwitch;
  })();

  $.fn.PageSwitch = function (options) {
    return this.each(function () {
      var me = $(this);
      var instance = me.data("PageSwitch");
      if (!instance) {
        instance = new PageSwitch(me, options);
        me.data("PageSwitch", instance);
      }
      if ($.type(options) === "string") {
        return instance[options]();
      }
    });
  }

  $.fn.PageSwitch.defaults = {
    selectors: {
      sections: ".sections",
      section: ".section",
      page: ".pages",
      active: ".active",
    },
    index: 0, //页面开始的索引
    easing: "ease", //动画效果
    duration: 500, //动画执行时间
    loop: false, //是否循环切换
    pagination: true, //是否进行分页
    keyboard: true, //是否触发键盘事件
    direction: "vertical", //滑动方向vertical,horizontal
    callback: "" //回调函数
  };
  $(function () {
    $('[data-PageSwitch]').PageSwitch();
  });
})(jQuery);