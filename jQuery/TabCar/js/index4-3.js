;
(function ($) {

  var Tab = function (tab) {
    var _this_ = this;
    //保存单个tab组件
    this.tab = tab;
    //默认配置参数
    this.config = {
      //用来定义鼠标的触发类型
      "triggerType": "click",
      //用来定义内容切换效果，是直接切换还是淡入淡出效果
      "effect": "fade",
      //默认显示第几个tab
      "invoke": 1,
      //用来定义tab是否自动切换，当指定了时间间隔就表示自动切换
      "auto": false
    };
    //如果配置参数存在，就扩展掉默认的配置参数
    if (this.getConfig()) {
      $.extend(this.config, this.getConfig());
    };

    //保存tab标签列表、对应的内容列表
    this.tabItems = this.tab.find("ul.tab-nav li");
    this.contentItems = this.tab.find("div.content-wrap div.content-item");

    //保存配置参数
    var config = this.config;

    if (config.triggerType === "click") {
      this.tabItems.bind(config.triggerType, function () {
        _this_.invoke($(this));
      });
    } else if (config.triggerType === "mouseover" || config.triggerType != "click") {
      this.tabItems.mouseover(function () {
        _this_.invoke($(this));
      });
    };
  };

  Tab.prototype = {
    //事件驱动函数
    invoke: function (currentTab) {
      var _this_ = this;
      var index = currentTab.index();
      //要执行Tab的选中状态，当前选中的加上active
      currentTab.addClass("active").siblings().removeClass("active");

      //切换当前对应的内容，要根据配置参数effect是default还是fade
      var effect = this.config.effect;
      var conItems = this.contentItems
      if (effect === "default" || effect != "fade") {
        conItems.eq(index).addClass("current").siblings().removeClass("current");
      } else if (effect === "fade") {
        conItems.eq(index).fadeIn().siblings().fadeOut();
      };

    },
    //获取配置参数
    getConfig: function () {
      //拿一下tab elem节点上的data-config
      var config = this.tab.attr("data-config");

      //确保有配置参数
      if (config && config != "") {
        return $.parseJSON(config);
      } else {
        return null;
      };
    }
  };

  window.Tab = Tab;
})(jQuery);