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
      //说明：初始化插件
      //实现：初始化dom结构，布局，分页及绑定事件
      init: function () {
        var me = this;
        me.selectors = me.settings.selectors;
        me.sections = me.element.find(me.selectors.sections);
        me.section = me.sections.find(me.selectors.section);

        me.direction = me.settings.direction == "vertical" ? true : false;
        me.pagesCount = me.pagesCount();
        me.index = (me.settings.index >= 0 && me.settings.index < me.pagesCount) ? me.settings.index : 0;

        if (!me.direction) {
          me._initLayout();
        }

        if (me.settings.pagination) {
          me._initPaging();
        }

        me._initEvent();
      },

      //说明：获取滑动页面数量
      pagesCount: function () {
        return me.section.length;
      },

      //说明：获取滑动的宽度（横屏滑动）或高度（竖屏滑动）
      switchLength: function () {
        return this.direction == 1 ? this.element.height() : this.element.width();
      },

      //说明：主要针对横屏情况进行页面布局
      _initLayout: function () {
        var me = this;
        var width = (me.pagesCount * 100) + "%";
        var cellWidth = (100 / me.pagesCount).toFixed(2) + "%";
        me.sections.width(width);
        me.section.width(cellWidth).css("float", "left");
      },

      //说明：实现分页的dom结构及CSS样式
      _initPaging: function () {
        var me = this;
        var pagesClass = me.selectors.page.substring(1);
        me.activeClass = me.selectors.active.substring(1);
        var pageHtml = "<ul class=" + pagesClass + ">";
        for (var i = 0; i < me.pagesCount; i++) {
          pageHtml += "<li></li>";
        }
        me.element.append(pageHtml);
        var pages = me.element.find(me.selectors.page);
        me.pageItem = pages.find("li");
        me.pageItem.eq(me.index).addClass(me.activeClass);

        if (me.direction) {
          pages.addClass("vertical");
        } else {
          pages.addClass("horizontal");
        }
      },

      //说明：初始化插件事件
      _initEvent: function () {}
    };
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