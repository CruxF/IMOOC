/*!
 * jQuery Animate v1.8.9 - By CSS3 transition
 * (c) 2014-2017 BaiJunjie
 * MIT Licensed.
 *
 * https://github.com/baijunjie/jquery.animate
 */

(function (root, factory) {
  'use strict';

  if (typeof module === 'object' && typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else {
    factory(root.jQuery);
  }

}(this, function ($) {
  'use strict';

  // jQuery 3.0.0 以及之后的版本已经兼容 requestAnimationFrame API
  if (compareVersion('3.0.0', $.fn.jquery) > 0) {
    // Integration jQuery requestAnimationFrame - v0.1.3pre
    // - https://github.com/gnarf37/jquery-requestAnimationFrame
    (function (jQuery) {

      var animating,
        lastTime = 0,
        vendors = ['webkit', 'moz'],
        requestAnimationFrame = window.requestAnimationFrame,
        cancelAnimationFrame = window.cancelAnimationFrame;

      for (; lastTime < vendors.length && !requestAnimationFrame; lastTime++) {
        requestAnimationFrame = window[vendors[lastTime] + "RequestAnimationFrame"];
        cancelAnimationFrame = cancelAnimationFrame ||
          window[vendors[lastTime] + "CancelAnimationFrame"] ||
          window[vendors[lastTime] + "CancelRequestAnimationFrame"];
      }

      function raf() {
        if (animating) {
          requestAnimationFrame(raf);
          jQuery.fx.tick();
        }
      }

      if (requestAnimationFrame) {
        // use rAF
        window.requestAnimationFrame = requestAnimationFrame;
        window.cancelAnimationFrame = cancelAnimationFrame;
        jQuery.fx.timer = function (timer) {
          if (timer() && jQuery.timers.push(timer) && !animating) {
            animating = true;
            raf();
          }
        };

        jQuery.fx.stop = function () {
          animating = false;
        };
      }

    }($));
  }

  // Integration jQuery Easing v1.3
  // - http://gsgd.co.uk/sandbox/jquery/easing/
  $.easing['jswing'] = $.easing['swing'];
  $.extend($.easing, {
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
      return $.easing[$.easing.def](x, t, b, c, d);
    },
    easeInQuad: function (x, t, b, c, d) {
      return c * (t /= d) * t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
      return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t + b;
      return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
      return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
      return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
      return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
      return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
      return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
      return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
      return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
      return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
      return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
      return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
      return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
      return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
      return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
      return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
      if (t == 0) return b;
      if (t == d) return b + c;
      if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
      return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
      return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
      if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
      return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
      var s = 1.70158;
      var p = 0;
      var a = c;
      if (t == 0) return b;
      if ((t /= d) == 1) return b + c;
      if (!p) p = d * .3;
      if (a < Math.abs(c)) {
        a = c;
        var s = p / 4;
      } else var s = p / (2 * Math.PI) * Math.asin(c / a);
      return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
      var s = 1.70158;
      var p = 0;
      var a = c;
      if (t == 0) return b;
      if ((t /= d) == 1) return b + c;
      if (!p) p = d * .3;
      if (a < Math.abs(c)) {
        a = c;
        var s = p / 4;
      } else var s = p / (2 * Math.PI) * Math.asin(c / a);
      return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
      var s = 1.70158;
      var p = 0;
      var a = c;
      if (t == 0) return b;
      if ((t /= d / 2) == 2) return b + c;
      if (!p) p = d * (.3 * 1.5);
      if (a < Math.abs(c)) {
        a = c;
        var s = p / 4;
      } else var s = p / (2 * Math.PI) * Math.asin(c / a);
      if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
      if (s == undefined) s = 1.70158;
      return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
      if (s == undefined) s = 1.70158;
      return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
      if (s == undefined) s = 1.70158;
      if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
      return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
      return c - $.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
      if ((t /= d) < (1 / 2.75)) {
        return c * (7.5625 * t * t) + b;
      } else if (t < (2 / 2.75)) {
        return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
      } else if (t < (2.5 / 2.75)) {
        return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
      } else {
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
      }
    },
    easeInOutBounce: function (x, t, b, c, d) {
      if (t < d / 2) return $.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
      return $.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
  });

  // 当浏览器不支持 transition 时，如果设置了以下的 Easing，可以使 animate 不至于报错，达到向下兼容的目的
  $.extend($.easing, {
    ease: function (x, t, b, c, d) {
      return $.easing.easeInOutCubic(x, t, b, c, d);
    },
    easeIn: function (x, t, b, c, d) {
      return $.easing.easeInSine(x, t, b, c, d);
    },
    easeOut: function (x, t, b, c, d) {
      return $.easing.easeOutSine(x, t, b, c, d);
    },
    easeInOut: function (x, t, b, c, d) {
      return $.easing.easeInOutSine(x, t, b, c, d);
    }
  });

  var testElem = document.createElement('div'),
    $testElem = $(testElem);
  // 返回支持的属性名
  function getSupportPropertyName(prop) {
    if (prop in testElem.style) return prop;

    var testProp = prop.charAt(0).toUpperCase() + prop.substr(1),
      prefixs = ['Webkit', 'Moz', 'ms', 'O'];

    for (var i = 0, l = prefixs.length; i < l; i++) {
      var prefixProp = prefixs[i] + testProp;
      if (prefixProp in testElem.style) {
        return prefixProp;
      }
    }
  }

  // 检查是否支持3D
  function checkTransform3dSupport() {
    testElem.style[support.transform] = '';
    testElem.style[support.transform] = 'rotateY(90deg)';
    return testElem.style[support.transform] !== '';
  }

  // 检查浏览器的 transition 支持
  var support = {};
  support.transform = getSupportPropertyName('transform');

  if (!support.transform) return $;

  support.transformOrigin = getSupportPropertyName('transformOrigin');
  support.transformStyle = getSupportPropertyName('transformStyle');
  support.perspective = getSupportPropertyName('perspective');
  support.perspectiveOrigin = getSupportPropertyName('perspectiveOrigin');
  support.backfaceVisibility = getSupportPropertyName('backfaceVisibility');
  support.filter = getSupportPropertyName('filter');
  support.transition = getSupportPropertyName('transition');
  support.transform3d = checkTransform3dSupport();

  // 将检测到的支持结果写入 $.support
  for (var key in support) {
    if (typeof $.support[key] === 'undefined') {
      $.support[key] = support[key];
    }
  }

  // 缓动列表
  $.cssEase = {
    '_default': 'swing',
    'swing': 'easeOutQuad', // 和 jQuery Easing 相同，查看详情 https://github.com/gdsmith/jquery.easing
    'linear': 'cubic-bezier(0,0,1,1)',
    'ease': 'cubic-bezier(.25,.1,.25,1)',
    'easeIn': 'cubic-bezier(.42,0,1,1)',
    'easeOut': 'cubic-bezier(0,0,.58,1)',
    'easeInOut': 'cubic-bezier(.42,0,.58,1)',

    'easeInCubic': 'cubic-bezier(.550,.055,.675,.190)',
    'easeOutCubic': 'cubic-bezier(.215,.61,.355,1)',
    'easeInOutCubic': 'cubic-bezier(.645,.045,.355,1)',
    'easeInCirc': 'cubic-bezier(.6,.04,.98,.335)',
    'easeOutCirc': 'cubic-bezier(.075,.82,.165,1)',
    'easeInOutCirc': 'cubic-bezier(.785,.135,.15,.86)',
    'easeInExpo': 'cubic-bezier(.95,.05,.795,.035)',
    'easeOutExpo': 'cubic-bezier(.19,1,.22,1)',
    'easeInOutExpo': 'cubic-bezier(1,0,0,1)',
    'easeInQuad': 'cubic-bezier(.55,.085,.68,.53)',
    'easeOutQuad': 'cubic-bezier(.25,.46,.45,.94)',
    'easeInOutQuad': 'cubic-bezier(.455,.03,.515,.955)',
    'easeInQuart': 'cubic-bezier(.895,.03,.685,.22)',
    'easeOutQuart': 'cubic-bezier(.165,.84,.44,1)',
    'easeInOutQuart': 'cubic-bezier(.77,0,.175,1)',
    'easeInQuint': 'cubic-bezier(.755,.05,.855,.06)',
    'easeOutQuint': 'cubic-bezier(.23,1,.32,1)',
    'easeInOutQuint': 'cubic-bezier(.86,0,.07,1)',
    'easeInSine': 'cubic-bezier(.47,0,.745,.715)',
    'easeOutSine': 'cubic-bezier(.39,.575,.565,1)',
    'easeInOutSine': 'cubic-bezier(.445,.05,.55,.95)',
    'easeInBack': 'cubic-bezier(.6,-.28,.735,.045)',
    'easeOutBack': 'cubic-bezier(.175, .885,.32,1.275)',
    'easeInOutBack': 'cubic-bezier(.68,-.55,.265,1.55)'
  };

  // 转换easing为贝塞尔函数
  //
  //    'swing' => 'cubic-bezier(.25,.46,.45,.94)'
  //
  function convertEase(easing) {
    if (typeof easing !== 'string') return;
    if (easing.indexOf('cubic-bezier') !== 0) {
      easing = $.cssEase[easing];
      return convertEase(easing);
    }
    return easing;
  }

  // ## 'transform' CSS hook
  //
  //    $('div').css({ transform: 'rotate(90deg)' });
  //    $('div').css('transform'); => { rotate: '90deg' }
  //
  $.cssHooks.transform = {
    get: function (elem) {
      return $.data(elem, 'bjj-transform') || new Transform();
    },
    set: function (elem, v) {
      var value = v;

      if (!(value instanceof Transform)) {
        value = new Transform(value);
      }

      elem.style[support.transform] = value.toString();

      $.data(elem, 'bjj-transform', value);
    }
  };

  // jQuery 1.8- 不支持这些属性的前缀转换
  if (compareVersion('1.8', $.fn.jquery) > 0) {

    // ## 'transformOrigin' CSS hook
    //
    //    $('div').css({ transformOrigin: '0 0' });
    //
    $.cssHooks.transformOrigin = {
      get: function (elem) {
        return elem.style[support.transformOrigin];
      },
      set: function (elem, value) {
        elem.style[support.transformOrigin] = value;
      }
    };

    // ## 'transformStyle' CSS hook
    //
    //    $('div').css({ transformStyle: 'preserve-3d' });
    //
    $.cssHooks.transformStyle = {
      get: function (elem) {
        return elem.style[support.transformStyle];
      },
      set: function (elem, value) {
        elem.style[support.transformStyle] = value;
      }
    };

    // ## 'perspective' CSS hook
    //
    //    $('div').css({ perspective: '1000px' });
    //
    $.cssHooks.perspective = {
      get: function (elem) {
        return elem.style[support.perspective];
      },
      set: function (elem, value) {
        elem.style[support.perspective] = value;
      }
    };

    // ## 'perspectiveOrigin' CSS hook
    //
    //    $('div').css({ perspectiveOrigin: '100px 100px' });
    //
    $.cssHooks.perspectiveOrigin = {
      get: function (elem) {
        return elem.style[support.perspectiveOrigin];
      },
      set: function (elem, value) {
        elem.style[support.perspectiveOrigin] = value;
      }
    };

    // ## 'backfaceVisibility' CSS hook
    //
    //    $('div').css({ backfaceVisibility: 'hidden' });
    //
    $.cssHooks.backfaceVisibility = {
      get: function (elem) {
        return elem.style[support.backfaceVisibility];
      },
      set: function (elem, value) {
        elem.style[support.backfaceVisibility] = value;
      }
    };

    // ## 'transition' CSS hook
    //
    //    $('div').css({ transition: 'all 0 ease 0' });
    //
    $.cssHooks.transition = {
      get: function (elem) {
        return elem.style[support.transition];
      },
      set: function (elem, value) {
        elem.style[support.transition] = value;
      }
    };

    // ## 'filter' CSS hook
    //
    //    $('div').css({ filter: 'blur(10px)' });
    //
    $.cssHooks.filter = {
      get: function (elem) {
        return elem.style[support.filter];
      },
      set: function (elem, value) {
        elem.style[support.filter] = value;
      }
    };
  }

  // ## compare version
  //
  //    a = '1.11.1',  b = '1.8.2'
  //    a > b return 1
  //    a < b return -1
  //    a = b return 0
  //
  function compareVersion(a, b) {
    var aa = a.split('.'),
      bb = b.split('.'),
      al = aa.length,
      bl = bb.length,
      len = Math.max(al, bl),
      aInt, bInt;
    for (; len > 0; len--) {
      aInt = parseInt(aa.shift()) || 0;
      bInt = parseInt(bb.shift()) || 0;
      if (aInt > bInt) return 1;
      else if (aInt < bInt) return -1;
    }
    return 0;
  }

  // 定义所有变换属性的 transition-property
  var propertyMap = {};

  // Register other CSS hooks
  registerCssHook('x');
  registerCssHook('y');
  registerCssHook('z');
  registerCssHook('translateX');
  registerCssHook('translateY');
  registerCssHook('translateZ');
  registerCssHook('translate');
  registerCssHook('translate3d');
  registerCssHook('scale');
  registerCssHook('scaleX');
  registerCssHook('scaleY');
  registerCssHook('scaleZ');
  registerCssHook('scale3d');
  registerCssHook('rotate');
  registerCssHook('rotateX');
  registerCssHook('rotateY');
  registerCssHook('rotateZ');
  registerCssHook('rotate3d');
  registerCssHook('skew');
  registerCssHook('skewX');
  registerCssHook('skewY');
  registerCssHook('pers');

  function registerCssHook(prop, isPixels) {
    // 所有属性都不应该被强制添加px单位，即使是 translate，因为它也可能是百分比
    if (!isPixels) {
      $.cssNumber[prop] = true;
    }

    propertyMap[prop] = support.transform;

    $.cssHooks[prop] = {
      get: function (elem) {
        var t = $.css(elem, 'transform');
        return t.get(prop);
      },

      set: function (elem, value) {
        var t = $.css(elem, 'transform');
        t.setFromString(prop, value);
        $.style(elem, 'transform', t);
      }
    };
  }

  // ## Transform class
  //
  //    var t = new Transform('rotate(90) scale(4)');
  //
  // Set properties
  //
  //    t.set('rotate', 40)
  //
  // Get properties
  //
  //    t.rotate             => '40deg'
  //    t.scale              => '4'
  //
  // The output string
  //
  //    t.toString()         => 'rotate(40deg) scale(4)'
  //
  function Transform(str) {
    if (typeof str === 'string') {
      this.parse(str);
    }
  }

  Transform.prototype = {
    // ### setFromString()
    //
    //    t.setFromString('scale', '2,4');  => ['scale', '2', '4']
    //    t.setFromString('scale', [,4]);   => ['scale', null, '4']
    //
    setFromString: function (prop, val) {
      var args;

      if ($.isArray(val)) {
        for (var i = 0; i < 3; i++) {
          if (val[i] === undefined) val[i] = null;
        }
        args = val;
      } else {
        args = (typeof val === 'string') ? val.split(',') : [val];
      }

      args.unshift(prop);

      Transform.prototype.set.apply(this, args);
    },

    set: function (prop) {
      var args = Array.prototype.slice.call(arguments, 1);
      if (this.setter[prop]) {
        this.setter[prop].apply(this, args);
      } else {
        this[prop] = args.join(',');
      }
    },

    get: function (prop) {
      if (this.getter[prop]) {
        return this.getter[prop].call(this);
      } else {
        return this[prop];
      }
    },

    setter: {
      // ### x / y / z
      //
      //    .css({ x: 4 })       => 'translate(4px, 0)'
      //    .css({ y: 10 })      => 'translate(4px, 10px)'
      //    .css({ z: 5 })       => 'translate(4px, 10px) translateZ(5px)'
      //
      x: function (x) {
        this.set('translate', x, null);
      },

      y: function (y) {
        this.set('translate', null, y);
      },

      z: function (z) {
        this.setProp('translateZ', z, 'px');
      },

      translateX: function (x) {
        this.set('x', x);
      },
      translateY: function (y) {
        this.set('y', y);
      },
      translateZ: function (z) {
        this.set('z', z);
      },

      // ### translate
      //
      //    .css({ translate: '2, 5' })    => 'translate(2px, 5px)'
      //    .css({ translate: '' })        => remove 'translate(2px, 5px)'
      //
      translate: function (x, y) {
        if (y === undefined) {
          y = x;
        }
        this.setDoubleProp('translate', x, y, 'px');
      },
      // ### translate3d
      //
      //    .css('translate3d', [100,200,300]);    => 'translate(100px, 200px) translateZ(300px)'
      //
      translate3d: function (x, y, z) {
        if (y === undefined && z === undefined) {
          z = y = x;
        }
        this.set('translate', x, y);
        this.set('z', z);
      },

      // ### scale
      //
      //    .css({ scale: 3 })        => 'scale(3)'
      //    .css({ scale: '3,2' })    => 'scale(3,2)'
      //
      scale: function (x, y) {
        if (y === undefined) {
          y = x;
        }
        this.setDoubleProp('scale', x, y, '');
      },
      // ### scale3d
      //
      //    .css('scale3d', [1,2,3]);    => 'scale(1, 2) scaleZ(3)'
      //
      scale3d: function (x, y, z) {
        if (y === undefined && z === undefined) {
          z = y = x;
        }
        this.set('scale', x, y);
        this.set('scaleZ', z);
      },

      scaleX: function (x) {
        this.set('scale', x, null);
      },

      scaleY: function (y) {
        this.set('scale', null, y);
      },

      scaleZ: function (z) {
        this.setProp('scaleZ', z, '');
      },

      // ### rotate
      //
      //    .css({ rotate: 30 })
      //    .css({ rotate: '30' })
      //    .css({ rotate: '30deg' })
      //
      rotate: function (angle) {
        this.setProp('rotate', angle, 'deg');
      },

      rotateX: function (angle) {
        this.setProp('rotateX', angle, 'deg');
      },

      rotateY: function (angle) {
        this.setProp('rotateY', angle, 'deg');
      },

      rotateZ: function (angle) {
        this.set('rotate', angle);
      },

      rotate3d: function (x, y, z) {
        if (y === undefined && z === undefined) {
          z = y = x;
        }
        this.set('rotateX', x);
        this.set('rotateY', y);
        this.set('rotate', z);
      },

      skew: function (x, y) {
        if (y === undefined) {
          y = x;
        }
        this.set('skewX', x);
        this.set('skewY', y);
      },

      skewX: function (x) {
        this.setProp('skewX', x, 'deg');
      },

      skewY: function (y) {
        this.setProp('skewY', y, 'deg');
      },

      // {pers: 100}  =>  transform: perspective(100px);
      pers: function (pers) {
        this.setProp('perspective', pers, 'px');
      }
    },

    getter: {
      x: function () {
        return this._translateX || '0';
      },

      y: function () {
        return this._translateY || '0';
      },

      z: function () {
        return this.translateZ || '0';
      },

      translateX: function () {
        return this.get('x');
      },
      translateY: function () {
        return this.get('y');
      },
      translateZ: function () {
        return this.get('z');
      },

      translate: function () {
        return [this.get('x'), this.get('y')];
      },

      translate3d: function () {
        return [this.get('x'), this.get('y'), this.get('z')];
      },

      scale: function () {
        var x = this.get('scaleX'),
          y = this.get('scaleY'),
          s = [x, y];

        // '2,2' => '2'
        // '2,1' => ['2','1']
        return (s[0] === s[1]) ? s[0] : s;
      },

      scale3d: function () {
        var x = this.get('scaleX'),
          y = this.get('scaleY'),
          z = this.get('scaleZ'),
          s = [x, y, z];

        // '2,1,2' => ['2','1','2']
        return s;
      },

      scaleX: function () {
        return this._scaleX || '1';
      },

      scaleY: function () {
        return this._scaleY || '1';
      },

      scaleZ: function () {
        return this.scaleZ || '1';
      },

      rotate: function (theta) {
        return this.rotate || '0';
      },

      rotateX: function (theta) {
        return this.rotateX || '0';
      },

      rotateY: function (theta) {
        return this.rotateY || '0';
      },

      rotateZ: function (theta) {
        return this.get('rotate');
      },

      rotate3d: function () {
        return [this.get('rotateX'), this.get('rotateY'), this.get('rotate')];
      },

      skew: function () {
        return [this.get('skewX'), this.get('skewY')];
      },

      skewX: function () {
        return this.skewX || 0;
      },

      skewY: function () {
        return this.skewY || 0;
      },

      // .css('pers', 100).css('pers')  =>  100px
      pers: function () {
        return this.perspective || 0;
      }
    },

    // ### setProp()
    // If the property value is an empty string, the attributes are removed
    // If the attribute values are not legal, ignore Settings
    //
    //    .css({'rotate': 30}).css({'rotate': ''})      => remove 'rotate(30deg)'
    //    .css({'rotate': 30}).css({'rotate': null})    => 'rotate(30deg)'
    //
    setProp: function (prop, value, u) {
      if (value !== undefined && value !== '') {
        if (isNaN(parseFloat(value))) {
          value = undefined;
        }
      }
      if (value === '') {
        delete this[prop];
      } else if (value !== undefined) {
        this[prop] = unit(value, u);
      }
    },

    // ### setDoubleProp()
    // If both the attribute value is empty string, the attributes are removed
    // If one of the attribute value is empty string, is set to the default value
    // If the attribute values are not legal, ignore Settings
    //
    //    .css({'scaleX': 3}).css({'scale': ''})          => remove 'scale(3, 1)'
    //    .css({'scaleX': 3}).css({'scale': ['',4]})      => 'scale(1, 4)'
    //    .css({'scaleX': 3}).css({'scale': [null,4]})    => 'scale(3, 4)'
    //
    // Note
    //    .css({'translate3d': '2,,'})  === .css({'translate3d': [2, '', '']})
    //    .css({'translate3d': [2,,,]}) === .css({'translate3d': '2, null, null'})
    //
    setDoubleProp: function (prop, value1, value2, u) {
      if (this['_' + prop + 'X'] === undefined) {
        this['_' + prop + 'X'] = this.get(prop + 'X');
      }
      if (this['_' + prop + 'Y'] === undefined) {
        this['_' + prop + 'Y'] = this.get(prop + 'Y');
      }

      if (value1 !== undefined && value1 !== '') {
        if (isNaN(parseFloat(value1))) {
          value1 = undefined;
        }
      }
      if (value2 !== undefined && value2 !== '') {
        if (isNaN(parseFloat(value2))) {
          value2 = undefined;
        }
      }

      if (value1 === '' && value2 === '') {
        delete this['_' + prop + 'X'];
        delete this['_' + prop + 'Y'];
        delete this[prop];
      } else {
        if (value1 === '') {
          delete this['_' + prop + 'X'];
          value1 = this.get(prop + 'X');
        } else if (value2 === '') {
          delete this['_' + prop + 'Y'];
          value2 = this.get(prop + 'Y');
        }

        if (value1 !== undefined) {
          this['_' + prop + 'X'] = unit(value1, u);
        }
        if (value2 !== undefined) {
          this['_' + prop + 'Y'] = unit(value2, u);
        }

        if (prop === 'scale') {
          this[prop] = this['_' + prop + 'X'] === this['_' + prop + 'Y'] ?
            this['_' + prop + 'X'] :
            this['_' + prop + 'X'] + ',' + this['_' + prop + 'Y'];
        } else {
          this[prop] = this['_' + prop + 'X'] + ',' + this['_' + prop + 'Y'];
        }
      }
    },

    // ### parse()
    //
    //    'rotate(90) scale(4)'  =>  self.setFromString('rotate', 90); self.setFromString('scale', 4);
    //
    parse: function (str) {
      var self = this;
      str.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function (x, prop, val) {
        self.setFromString(prop, val);
      });
    },

    toString: function () {
      var re = [];

      for (var i in this) {
        if (this.hasOwnProperty(i)) {
          if ((!support.transform3d) && (
              (i === 'rotateX') ||
              (i === 'rotateY') ||
              (i === 'translateZ') ||
              (i === 'scaleZ') ||
              (i === 'perspective'))) {
            continue;
          }

          if (i[0] !== '_') {
            re.push(i + '(' + this[i] + ')');
          }
        }
      }

      return re.join(' ');
    }
  };

  // ### getTransition()
  // Returns the transition string to be used for the `transition` CSS property.
  //
  //    getTransition({ opacity: 1, rotate: 30 }, 500, 'ease');
  //    => 'opacity 500ms ease, -webkit-transform 500ms ease'
  //
  function getTransition(properties, duration, easing, specialEasing) {

    // 获取属性对应的 transition-property 和 transition-timing-function
    // {marginTop: 100, paddingLeft: 200} => {'margin-top': 'swing', 'padding-left': 'swing'}
    var props = {};
    for (var p in properties) {
      var key = $.camelCase(p); // Convert 'text-align' => 'textAlign'
      key = propertyMap[key] || $.cssProps[key] || key;

      // Get vendor specify propertie
      // For example 'transform-origin' 'perspective'
      if (support[key]) {
        key = support[key];
      }

      if (!(key in props)) {
        props[key] = specialEasing[p];
      }
    }

    var MS = toMS(duration);

    // For more properties, add them this way:
    // 'margin 200ms ease, padding 200ms ease, ...'
    var transitions = [];
    for (var p in props) {
      transitions.push(uncamel(p) + ' ' + MS + ' ' + (props[p]));
    }

    return transitions.join(',');
  }

  // ### disposeSpecialValue()
  //
  //    .css({left: auto}).animate({left: '100'})   =>  .css({left: 0}).animate({left: 100});
  //    .animate({opacity: 'show'})                 =>  .css({opacity: 0}).show().animate({opacity: 1});
  //    .animate({opacity: 'hide'})                 =>  .css({opacity: 1}).animate({opacity: 0}, function() { $(this).hide() });
  //
  function disposeSpecialValue($self, endProps, startProps, callback) {
    var clearStyles = {},
      hidden = $self.css('display') === 'none',
      toggle = $self.data('bjj-toggle'),
      show;

    // Height/width overflow pass
    if ('height' in endProps || 'width' in endProps) {
      if ($self.css('display') === 'inline' && $self.css('float') === 'none') {
        $self.css('display', 'inline-block');
      }
    }

    for (var p in endProps) {
      var startValue = $self.css(p),
        endValue = endProps[p],
        isToggle = endValue === 'toggle';

      if (endValue === 'show' || isToggle && (show === true || show === undefined && (hidden || toggle === false))) {
        clearStyles[p] = '';
        if (isToggle) $self.data('bjj-toggle', true);

        // jQuery 在获取 display: none 元素的宽高等属性时，会先让元素显示出来，但是又会为元素添加 position: absolute。
        // 因此，当元素的宽高为百分比时，其基于的父元素会改变为最近的定位父元素，这就导致获取的宽高不正确
        // 这里只好手动让元素显示出来后，再获取它的宽高。
        if (hidden) $self.show();

        var inlineStyleValue = $self[0].style[p],
          originalValue = $self.css(p, '').css(p);
        $self.css(p, inlineStyleValue);

        if (hidden) $self.hide();

        if (hidden || toggle === false || startValue != originalValue) {
          if (show === undefined) show = true;
          endValue = originalValue;
          if (hidden) startValue = 0;
        } else {
          endValue = undefined;
        }

      } else if (endValue === 'hide' || isToggle && (show === false || show === undefined && (!hidden || toggle === true))) {
        clearStyles[p] = '';
        if (isToggle) $self.data('bjj-toggle', false);

        if (!hidden || toggle === true) {
          if (show === undefined) show = false;
          endValue = 0;
        } else {
          endValue = undefined;
        }
      }

      var startUnit = getUnit(startValue),
        endUnit = getUnit(endValue),
        startColor,
        endColor;

      if (isComplex(startValue)) { // 检查复合值是否为阴影
        startValue = checkShadow(p, startValue);
      } else if (startColor = isColor(startValue)) { // 是否是颜色
      } else if (isKeyword(startValue)) { // 处理关键字
        // 如果是阴影属性，则返回一个复合属性
        startValue = checkShadow(p, startValue, (endValue + '').indexOf('inset') >= 0);
        if (!isComplex(startValue)) {
          startValue = 0; // 主要针对定位属性，如：left默认为auto
        }
      } else if (!startUnit && endUnit) {
        startValue += endUnit;
      }

      if (isComplex(endValue)) {
        endValue = checkShadow(p, endValue);
      } else if (endColor = isColor(endValue)) {} else if (isKeyword(endValue)) {
        endValue = checkShadow(p, endValue, startValue.indexOf('inset') >= 0); // 如果是阴影属性，则返回一个复合属性
        if (!isComplex(endValue) && endValue.match(/^[+-]=/)) { // 主要针对递增或递减值，例如：left: '+=30%'
          endValue = calculateValue($self, p, startValue, endValue, 1);
        }
      } else if (endValue !== undefined && !endUnit && startUnit) {
        endValue += startUnit;
      }

      if ((endValue === undefined)
        //|| (startValue == endValue)
        ||
        (!!endColor ^ !!startColor)) {
        delete endProps[p];
        continue;
      }

      endProps[p] = endValue;
      startProps[p] = startValue;
    }

    var fn = callback;

    if (show === true) {
      if ('width' in clearStyles || 'height' in clearStyles) {
        if ($self.data('bjj-overflow') === undefined) {
          $self.data('bjj-overflow', $self[0].style.overflow);
        }
        clearStyles['overflow'] = $self.data('bjj-overflow');
        $self.css('overflow', 'hidden');
      }
      $self.show();
    } else if (show === false) {
      if ('width' in clearStyles || 'height' in clearStyles) {
        if ($self.data('bjj-overflow') === undefined) {
          $self.data('bjj-overflow', $self[0].style.overflow);
        }
        clearStyles['overflow'] = '';
        $self.css('overflow', 'hidden');
      }
      clearStyles['display'] = 'none';
    }

    if (show !== undefined) {
      fn = function () {
        if (show) $self.removeData('bjj-overflow');
        $self.css(clearStyles);
        if (typeof callback === 'function') callback.call(this);
      };
    }

    return fn;
  }

  // 调用队列
  function callOrQueue(self, queue, callback) {
    if (queue === true) {
      self.queue(callback);
    } else if (queue) {
      self.queue(queue, callback);
    } else {
      self.each(function () {
        callback.call(this);
      });
    }
  }

  function finishCall(self, callback, next) {
    if (typeof callback === 'function') {
      callback.call(self);
    }
    if (typeof next === 'function') {
      next();
    }
  }

  function delayRun(next) {
    var self = this,
      $self = $(self),
      transitionDelayRunParams = $self.data('bjj-transitionDelayRunParams');

    if (!transitionDelayRunParams) return;

    var transitionValueList = transitionDelayRunParams.transitionValueList,
      params = transitionDelayRunParams.queueParams.shift(),
      startProps = {},
      endProps = params.endProps,
      duration = params.duration,
      easing = params.easing,
      queue = params.queue,
      specialEasing = params.specialEasing,
      callback = params.callback = disposeSpecialValue($self, endProps, startProps, params.callback),
      empty = $.isEmptyObject(endProps);

    // If there's nothing to do...
    if (duration === 0 || empty) {
      if (!empty) $self.css(endProps);
      finishCall(self, callback, next);
      return;
    }

    $self.css(startProps);
    self.offsetWidth; // 强制刷新

    // Prepare the callback.
    var cb = function (e) {

      var i = $.inArray(timer, $.timers);
      if (i >= 0) $.timers.splice(i, 1);

      i = $.inArray(transitionValue, transitionValueList);
      if (i >= 0) transitionValueList.splice(i, 1);
      self.style[support.transition] = transitionValueList.join(',');

      finishCall(self, callback, next);
    };

    var stop = function (gotoEnd) {
      window.clearTimeout(timerID);

      var i = $.inArray(transitionValue, transitionValueList);
      if (i >= 0) transitionValueList.splice(i, 1);
      self.style[support.transition] = transitionValueList.join(',');

      if (gotoEnd) {
        finishCall(self, callback, next);
      } else {
        var curProp = {};
        for (var p in endProps) {
          var startValue = startProps[p],
            endValue = endProps[p],
            endColor = isColor(endValue),
            dv;

          setCubicBezier(specialEasing[p]);
          var bezierY = cubicBezier.getY(($.now() - startTime) / duration);

          if (endColor) { // 如果是颜色
            dv = calculateColor(startValue, endColor, bezierY);
          } else {
            dv = calculateValue($self, p, startValue, endValue, bezierY);
          }

          curProp[p] = dv;
        }

        $self.css(curProp);
      }
    };

    // 模拟 .stop() 所需要的对象
    var timer = function () {
      // 在 animate 动画完成后，且下一个队列函数已经执行，timer 被加入到 $.timers 队列中后，此时 jQuery 又会执行一次 jQuery.fx.tick
      // 在 jQuery.fx.tick 中 $.timers 会将返回值为 false 的 timer 全部清空，这样会导致当前的动画无法执行 stop()
      // 注释：animate 的动画中 timer() 的返回值为当前动画的剩余时间
      return true;
    };
    timer.elem = self;
    timer.queue = queue;
    timer.anim = {
      stop: stop
    };
    $.timers.push(timer);

    // Build the `transition` property.
    var transitionValue = getTransition(endProps, duration, easing, specialEasing);
    transitionValueList.push(transitionValue);

    var startTime = $.now();
    self.style[support.transition] = transitionValueList.join(',');
    $self.css(endProps);

    // transitionend 事件还是存在多个 bug
    // 例如，多个 transition-property 并行时，先结束的动画会将触发其它属性动画的 transitionend 事件
    // 再例如，元素动画途中 display: none 后，将不会再触发 transitionend 事件
    // 因此只好弃用它，使用 setTimeout 代替它
    var timerID = window.setTimeout(cb, duration);
  }

  // 模拟 .finish() 所需要的方法
  // 当执行 finish() 时
  // 如果动画队列中只有一个动画，那么这里的 finish 不会执行，只会执行 stop()
  // 如果动画队列中有多个动画，那么除第一个动画以外，剩余多少动画，这里的 finish 就会被执行多少次。
  delayRun.finish = function () {
    var $self = $(this),
      transitionDelayRunParams = $self.data('bjj-transitionDelayRunParams');

    if (!transitionDelayRunParams) return;

    var params = transitionDelayRunParams.queueParams.shift();

    // 能够执行 finish 的动画，将不会执行 delayRun
    params.callback = disposeSpecialValue($self, params.endProps, {}, params.callback);

    $self.css(params.endProps);
    finishCall(this, params.callback);
  };

  // ## transition()
  function transition(properties, duration, easing, callback, queue, specialEasing) {

    duration = parseInt(toMS(duration), 10);

    this.each(function () {
      var $self = $(this),
        transitionDelayRunParams = $self.data('bjj-transitionDelayRunParams');

      if (!transitionDelayRunParams) {
        transitionDelayRunParams = {
          transitionValueList: [], // 用于分别保存每一个对象的 transition 属性值列表
          queueParams: [] // 用于保存动画队列中各个动画的参数
        }
      }

      transitionDelayRunParams.queueParams.push({
        endProps: $.extend(true, {}, properties),
        duration: duration,
        easing: easing,
        callback: callback,
        queue: queue,
        specialEasing: specialEasing
      });

      $self.data('bjj-transitionDelayRunParams', transitionDelayRunParams);
    });

    // Use jQuery's fx queue.
    callOrQueue(this, queue, delayRun);

    return this;
  }

  // ### propFilter()
  // jQuery 源码使用该方法来过滤出属性和缓动
  //
  //    props         = {left: [200, 'easeInBack'], width: [100, 'linear'], height: 200}
  //    specialEasing = {height: 'swing'};
  //
  //    propFilter(props, specialEasing);
  //
  //    => props         == {left: 200, width: 100, height: 200}
  //       specialEasing == {left: 'easeInBack', width: 'linear', height: 'swing'}
  //
  function propFilter(props, specialEasing) {
    var index, name, easing, value, hooks;

    // camelCase, specialEasing and expand cssHook pass
    for (index in props) {
      name = $.camelCase(index);
      easing = specialEasing[name];
      value = props[index];
      if ($.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }

      if (index !== name) {
        props[name] = value;
        delete props[index];
      }

      hooks = $.cssHooks[name];
      if (hooks && 'expand' in hooks) {
        value = hooks.expand(value);
        delete props[name];

        // not quite $.extend, this wont overwrite keys already present.
        // also - reusing 'index' from above because we have the correct 'name'
        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }

  // ### Compatible with the following written
  // Example:
  //    .animate.({'translate3d': [100, 200, 300]});
  //    .animate.({'scale': [1, 2]});
  //    .animate.({'scale': '1,2'});
  var _animate = $.fn._animate = $.fn.animate;
  $.fn.animate = function (properties, duration, easing, callback) {
    var queue = true,
      specialEasing = {},
      originalProperties = $.extend({}, properties),
      originalDuration = duration,
      originalEasing = easing,
      originalCallback = callback;

    if (typeof duration === 'function') { // Account for `.transition(properties, callback)`.
      callback = duration;
      duration = undefined;
    } else if ($.isPlainObject(duration)) { // Account for `.transition(properties, options)`.
      originalDuration = $.extend({}, duration);
      easing = duration.easing;
      queue = typeof duration.queue === 'undefined' ? true : duration.queue;
      specialEasing = duration.specialEasing || specialEasing;
      callback = duration.complete;
      duration = duration.duration;
    } else if (typeof easing === 'function') { // Account for `.transition(properties, duration, callback)`.
      callback = easing;
      easing = undefined;
    }
    // Set defaults. (`400` duration, `ease` easing)
    if (!duration && duration !== 0) {
      duration = $.fx.speeds._default;
    }
    if (!easing) {
      easing = $.cssEase._default;
    }

    // 拆分属性
    resolveProp(properties);

    var useTransition = support.transition;
    if (useTransition && ('scrollLeft' in properties || 'scrollTop' in properties)) {
      useTransition = false;
    }
    if (useTransition) {
      // 将属性名与对应的缓动过滤出来
      propFilter(properties, specialEasing);
      var transformEasing;
      for (var p in specialEasing) {
        // 将缓动转换为贝塞尔函数
        var e = specialEasing[p] = convertEase(specialEasing[p] || easing);
        if (typeof e === 'undefined') {
          useTransition = false;
          break;
        } else if (propertyMap[p] === support.transform) {
          // 判断transform是否设置了不同的easing
          if (transformEasing && transformEasing !== e) {
            useTransition = false;
            break;
          } else {
            transformEasing = e;
          }
        }
      }
    }

    // 如果不支持 transition 动画，或者不支持该缓动类型，再或者动画属性中包含不支持的属性，则使用 animate 实现
    if (!useTransition) {

      // 修复一个 <img> 动画的 bug，该 bug 仅在 animate() 动画中才会出现
      //
      // jQuery 源码 6987 行
      // if ( tween.elem[ tween.prop ] != null &&
      // 	(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
      // 	return tween.elem[ tween.prop ];
      // }
      //
      // 这段代码检查元素是否定义了该属性，如果定义了，并且元素的style属性中未定义该属性，则直接返回该属性值
      // 由于 <img> 自身拥有 x,y 这两个属性，因此最终导致了 <img> 元素的 x,y 动画起始位置不正确
      this.each(function () {
        try {
          // 在window平台下的safari浏览器下，删除属性会导致程序报错
          // 不过在该环境下即使不删除这两个属性，动画也不会出现问题
          if (this.x != null) delete this.x;
          if (this.y != null) delete this.y;
        } catch (e) {}
      });

      return _animate.call(this, originalProperties, originalDuration, originalEasing, originalCallback);
    }

    // normalize opt.queue - true/undefined/null -> 'fx'
    if (queue == null || queue === true) {
      queue = 'fx';
    }

    return transition.call(this, properties, duration, easing, callback, queue, specialEasing);
  }

  // ### resolveProp(props)
  //
  //    {scale: '3,2'} => {scaleX: 3, scaleY: 2}
  //
  var xyz = ['X', 'Y', 'Z'],
    checkProp = [
      'translate',
      'translate3d',
      'scale',
      'scale3d',
      'rotate3d',
      'skew'
    ];

  function resolveProp(props) {
    for (var i = 0, l = checkProp.length; i < l; i++) {
      var p = checkProp[i];
      if (p in props) {
        var val = props[p];
        delete props[p];

        // 区分 [[1,2], 'easeOutBack'] 和 [1,2]
        var easeing;
        if ($.isArray(val)) {
          var val0 = val[0],
            val1 = val[1];

          if ($.isArray(val0) ||
            (typeof val0 === 'string' && val0.split(',').length > 1) ||
            (val1 && isNaN(parseFloat(val1)))) {
            val = val0;
            easeing = val1;
          }
        }

        var is3d = p.indexOf('3d') !== -1,
          arr;

        if ($.isArray(val)) {
          arr = val;
        } else {
          arr = (typeof val === 'string') ? val.split(',') : [val];
          // {scale: [3]} => {scale: [3, 3]}
          if (arr.length < 2) {
            if (is3d) {
              arr[2] = arr[1] = arr[0];
            } else {
              arr[1] = arr[0];
            }
          }
        }

        if (is3d) p = p.slice(0, -2);
        var def = p === 'scale' ? 1 : 0;
        // {scale: [2, 3]} => {scaleX: 2, scaleY: 3}
        for (var j = 0; j < 3; j++) {
          val = arr[j];
          if (val || val === 0) {
            props[p + xyz[j]] = easeing ? [val, easeing] : val;
          } else if (val === '') {
            props[p + xyz[j]] = easeing ? [def, easeing] : def;
          }
        }
      }
    }
  }

  // ### uncamel(str)
  // Converts a camelcase string to a dasherized string.
  //
  //    'marginLeft'              => 'margin-left'
  //    'webkitTransformOrigin'   => '-webkit-transform-origin'
  //
  function uncamel(str) {
    if (!str.indexOf('webkit')) str = 'W' + str.substr(1);
    if (!str.indexOf('moz') || !str.indexOf('ms')) str = 'M' + str.substr(1);
    return str.replace(/([A-Z])/g, '-$1').toLowerCase();
  }

  // ### unit(number, unit)
  //
  //    unit(30, 'px')      => '30px'
  //    unit('30%', 'px')   => '30%'
  //
  function unit(i, units) {
    if ((typeof i === 'string') && (!i.match(/^[\-0-9\.]+$/))) {
      return i;
    } else {
      return '' + i + units;
    }
  }

  // ### getUnit(str)
  //
  //    getUnit('30px')      => 'px'
  //    getUnit('30%')       => '%'
  //    getUnit('30')        => ''
  //
  function getUnit(value) {
    if (typeof value !== 'string') return '';
    var s = value.match(/^(?:\-=|\+=)?[\-0-9\.]+/);
    if (!s) return '';
    return value.substr(s[0].length) || '';
  }

  // ### getBaseValue($self, prop, index)
  // 根据属性获取百分比时基于的值
  // @param index 参数表示需要获取的子属性在该符合属性值组中的索引位置，例如 ('margin', 0) == 'margin-top'
  //
  //    getBaseValue($self, 'width')                   =>  $self.parent().width()
  //    getBaseValue($self, 'x')                       =>  $self.outerWidth()
  //
  //    getBaseValue($self, 'margin', 2)               =>  $self.parent().height()
  //    getBaseValue($self, 'background-position', 0)  =>  $self.outerWidth()
  //
  function getBaseValue($self, prop, index) {
    var baseSelfKeyword = [
        'x',
        'y',
        'position',
        'origin',
        'radius'
      ],
      horDirKeyword = [
        'x',
        'width',
        'padding',
        'margin',
        'left',
        'right'
      ],
      baseSelf = false,
      dir = 0, // 表示方向，1表示水平，-1表示垂直
      baseValue = 0,
      p = prop.toLowerCase(),
      i = 0,
      l = baseSelfKeyword.length;

    for (; i < l; i++) {
      var k = baseSelfKeyword[i];
      if (p.indexOf(k) >= 0) {
        baseSelf = true;
      }
    }

    i = 0;
    l = horDirKeyword.length;
    for (; i < l; i++) {
      if (p.indexOf(horDirKeyword[i]) >= 0) {
        dir = 1;
      }
    }

    if (!dir) {
      if (p.indexOf('position') >= 0 ||
        p.indexOf('size') >= 0 ||
        p.indexOf('origin') >= 0) {
        if (index === 1) {
          dir = -1;
        } else {
          dir = 1;
        }
      } else {
        if (index === 1 || index === 3) {
          dir = 1;
        } else {
          dir = -1;
        }
      }
    }

    if (dir === 1) {
      baseValue = baseSelf ? $self.outerWidth() : $self.parent().width();
    } else if (dir === -1) {
      baseValue = baseSelf ? $self.outerHeight() : $self.parent().height();
    }

    return baseValue;
  }

  // ### convertUnit()
  // 将属性值转换为指定单位的新值
  // @param index 参数表示需要获取的子属性在该符合属性值组中的索引位置，例如 ('margin', 0) == 'margin-top'
  //
  //    convertUnit($self, 'margin', 1, 100px, %)  =>  (100 / $self.parent().width()) * 100 + '%'
  //
  function convertUnit($self, prop, index, value, newUnit) {
    var px = 'px',
      em = 'em',
      pe = '%',
      oldUnit = getUnit(value),
      newValue = value;

    if (oldUnit != newUnit) {
      var oldValue = parseFloat(value);
      if (newUnit === px) {
        if (oldUnit === pe) {
          newValue = oldValue / 100 * getBaseValue($self, prop, index) + px;
        } else if (oldUnit === em) {
          newValue = oldValue * parseFloat($self.css('font-size')) + px;
        }
      } else if (newUnit === pe) {
        var baseValue = getBaseValue($self, prop, index);
        if (!baseValue) {
          newValue = 0;
        } else if (oldUnit === px) {
          newValue = (oldValue / baseValue) * 100 + pe;
        } else if (oldUnit === em) {
          newValue = (oldValue * parseFloat($self.css('font-size')) / baseValue) * 100 + pe;
        }
      } else if (newUnit === em) {
        if (oldUnit === px) {
          newValue = oldValue / parseFloat($self.css('font-size')) + em;
        } else if (oldUnit === pe) {
          newValue = oldValue / 100 * getBaseValue($self, prop, index) / parseFloat($self.css('font-size')) + em;
        }
      }
    }

    return newValue;
  }

  // ### calculateValue($self, begin, end, pos)
  // 根据 0-1 之间的位置比，计算两个属性值在该位置上的中间值
  //
  //    calculateValue($self, 'left', 0, 10, .5);              =>  5
  //    calculateValue($self, 'left', '50px', '100%', .5);     =>  (100 - 50 / $self.parent().width() * 100) * .5 + 50 / $self.parent().width() * 100 + '%'
  //    calculateValue($self, 'left', '50px', '+=100%', .5);   =>  $self.parent().width() * 100% * .5 + 50 + 'px'
  //
  var rfxnum = new RegExp('^(?:([+-])=|)([+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|))([a-z%]*)$', 'i');

  function calculateValue($self, prop, begin, end, pos) {
    begin = (begin + '').split(' ');
    end = (end + '').split(' ');

    var value = [],
      i = 0,
      l = end.length;

    for (; i < l; i++) {
      var startValue = begin[i] || 0,
        endValue = end[i],
        startUnit = getUnit(startValue),
        endUnit = getUnit(endValue) || startUnit,
        endColor = isColor(endValue);

      if (endColor) {
        value[i] = calculateColor(startValue, endColor, pos);

      } else if (isNaN(parseFloat(endValue))) { // 可能是一些关键字或者特殊值
        var ret = rfxnum.exec(end[i]);
        if (ret) { // 如果结束值为 '+=' 或者 '-='
          var v = (ret[1] + 1) * ret[2] + ret[3];
          endUnit = startUnit || endUnit; // 单位改用起始值的单位
          v = convertUnit($self, prop, i, v, endUnit);
          startValue = parseFloat(startValue);
          endValue = startValue + parseFloat(v);

          value[i] = (endValue - startValue) * pos + startValue + endUnit;
        } else { // 如果是关键字，就保留原值
          value[i] = endValue;
        }
      } else {
        endValue = parseFloat(endValue);
        startValue = convertUnit($self, prop, i, startValue, endUnit);
        startValue = parseFloat(startValue);

        value[i] = (endValue - startValue) * pos + startValue + endUnit;
      }
    }

    l = begin.length;
    for (; i < l; i++) {
      value.push(begin[i]);
    }

    value = value.join(' ');

    var numberValue = parseFloat(value);

    return value == numberValue ? numberValue : value;
  }

  // ### toMS(duration)
  // Converts given `duration` to a millisecond string.
  //
  //    toMS('fast') => $.fx.speeds[i] => '200ms'
  //    toMS('normal') => $.fx.speeds._default => '400ms'
  //    toMS(10) => '10ms'
  //    toMS('100ms') => '100ms'
  //
  function toMS(duration) {
    var i = duration;

    // Allow string durations like 'fast' and 'slow', without overriding numeric values.
    if (typeof i === 'string' && (!i.match(/^[\-0-9\.]+/))) {
      i = $.fx.speeds[i] || $.fx.speeds._default;
    }

    return unit(i, 'ms');
  }

  // ### isKeyword(value)
  // 判断一个值是否为关键字
  //
  //    isKeyword('auto');                =>  true
  //    isKeyword('50px 50px 1px #000');  =>  false
  //
  function isKeyword(value) {
    return typeof value === 'string' && isNaN(parseFloat(value)) && value.split(' ').length === 1;
  }

  // ### isComplex(value)
  // 判断一个值是否为复合值
  //
  //    isComplex('50px');                =>  false
  //    isComplex('rgb(0, 0, 0)');        =>  false
  //    isComplex('50px 50px 1px #000');  =>  true
  //
  function isComplex(value) {
    var str = value + '';
    return str.split(',').length === 1 && str.split(' ').length > 1;
  }

  // ### isColor(value)
  // 判断一个值是否为颜色，如果是颜色则返回该颜色的 rgb 形式
  //
  //    isColor('white');  =>  'rgb(255,255,255)'
  //    isColor('auto');   =>  false
  //
  function isColor(value) {
    if (typeof value === 'string') {
      if (!value.indexOf('rgb') && value.split(' ').length === 1) return value;
      return getCorrectValue('color', value);
    }
    return false;
  }

  // ### checkShadow(prop, value, inset)
  // 检查一个属性是否为阴影
  // 如果不是阴影，则返回原值
  // 如果阴影值不合法，则返回默认阴影。
  // 如果是阴影则返回该阴影的正确形式，同时去掉参数中的多余空格。
  // 第三个参数表示 boxShadow 的默认阴影是否为内阴影
  //
  //    checkShadow('boxShadow', '50px 50px 1px #000');  =>  rgb(0,0,0) 50px 50px 1px 0px
  //    checkShadow('boxShadow', 'none');                =>  rgba(0,0,0,0) 0px 0px 0px 0px
  //    checkShadow('left', '50px');                     =>  '50px'
  //
  function checkShadow(prop, value, inset) {
    if (prop.indexOf('hadow') < 0) return value;
    value = getCorrectValue(prop, value);
    if (!value) {
      var def = inset && !prop.indexOf('box') ? 'inset 0 0 0 transparent' : '0 0 0 transparent';
      value = getCorrectValue(prop, def);
    }
    value = value.replace(/,\s/g, ',');
    return value;
  }

  // ### getCorrectValue(prop, value)
  // 返回该值的正确形式
  //
  //    getCorrectValue('color', 'white');                   =>  'rgb(255,255,255)'
  //    getCorrectValue('boxShadow', '50px 50px 1px #000');  =>  rgb(0, 0, 0) 50px 50px 1px 0px
  //
  function getCorrectValue(prop, value) {
    testElem.style[prop] = '';
    testElem.style[prop] = value;
    $testElem.appendTo('body');
    value = testElem.style[prop] !== '' && testElem.style[prop] !== 'none' && $testElem.css(prop);
    $testElem.detach();
    return value;
  }

  // ### calculateColor(begin, end, pos)
  // 根据 0-1 之间的位置比，计算两个颜色在该位置上的过渡色
  //
  //    calculateColor([255,255,255,1], [0,0,0,1], .5);  =>  'rgba(127,127,127,1)'
  //    calculateColor([255,255,255],   [0,0,0],   .5);  =>  'rgb(127,127,127)'
  //
  function calculateColor(begin, end, pos) {
    // 如果传入的是颜色值，将其先解析为数组
    if (!$.isArray(begin)) begin = parseColor(begin);
    if (!$.isArray(end)) end = parseColor(end);

    var len = Math.min(begin.length, end.length),
      color = 'rgb',
      dr = pos * (end[0] - begin[0]),
      dg = pos * (end[1] - begin[1]),
      db = pos * (end[2] - begin[2]),
      r = begin[0] + dr,
      g = begin[1] + dg,
      b = begin[2] + db,
      a = 1;
    if (len > 3) {
      color += 'a';
      a = parseFloat(begin[3] + pos * (end[3] - begin[3]), 10);
      r = begin[0] + dr / a * end[3];
      g = begin[1] + dg / a * end[3];
      b = begin[2] + db / a * end[3];
    }
    r = parseInt(r, 10);
    g = parseInt(g, 10);
    b = parseInt(b, 10);
    color += '(' + r + ',' + g + ',' + b;
    if (len > 3) {
      color += ',' + a;
    }
    color += ')';
    return color;
  }

  // ### parseColor(color)
  // 将一个颜色值转化为数组形式
  //
  //    'rgba(127,127,127,1)'  =>  [127, 127, 127, 1]
  //    'rgb(127,127,127)'     =>  [127, 127, 127, 1]
  //    '#000000'              =>  [  0,   0,   0, 1]
  //    '#fff'                 =>  [255, 255, 255, 1]
  //
  function parseColor(color) {
    var match, triplet;

    // Match #aabbcc
    if (match = /#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(color)) {
      triplet = [parseInt(match[1], 16), parseInt(match[2], 16), parseInt(match[3], 16), 1];

      // Match #abc
    } else if (match = /#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(color)) {
      triplet = [parseInt(match[1], 16) * 17, parseInt(match[2], 16) * 17, parseInt(match[3], 16) * 17, 1];

      // Match rgb(n, n, n)
    } else if (match = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color)) {
      triplet = [parseInt(match[1]), parseInt(match[2]), parseInt(match[3]), 1];

    } else if (match = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9\.]*)\s*\)/.exec(color)) {
      triplet = [parseInt(match[1], 10), parseInt(match[2], 10), parseInt(match[3], 10), parseFloat(match[4])];

      // No browser returns rgb(n%, n%, n%), so little reason to support this format.
    }
    return triplet;
  }

  // ### getArg(str)
  // 获取字符串表达式中括号内的参数数组
  //
  //    'cubic-bezier(0,0,1,1)' => [0,0,1,1]
  //
  function getArg(str) {
    var s = str.match(/\(.*\)$/);
    if (s) {
      var args = s[0].slice(1, -1).split(',');
      for (var i = 0, l = args.length; i < l; i++) {
        var arg = parseFloat(args[i]);
        args[i] = isNaN(arg) ? undefined : arg;
      }
      return args;
    }
    return null;
  }

  /**
   * 创建一个三次贝塞尔对象
   * @exception 每一个参数为一个表示点的数组[x,y]
   * @param {array} c1 表示起始点的控制点
   * @param {array} c2 表示结束点的控制点
   * @param {array} begin 表示起始点，默认为[0,0]
   * @param {array} end 表示结束点，默认为[1,1]
   */
  function CubicBezier() {
    this.set.apply(this, arguments);
  }

  CubicBezier.prototype = {
    _bezierFunc: function (p, t, targ) {
      return this.begin[p] * Math.pow(1 - t, 3) +
        this.c1[p] * 3 * t * Math.pow(1 - t, 2) +
        this.c2[p] * 3 * (1 - t) * Math.pow(t, 2) +
        this.end[p] * Math.pow(t, 3) -
        targ;
    },

    _deltaBezierFunc: function (p, t, targ) {
      var dt = 1e-8;
      return (this._bezierFunc(p, t, targ) - this._bezierFunc(p, t - dt, targ)) / dt;
    },

    set: function (c1, c2, begin, end) {
      this.c1 = c1 ? new Point(c1[0], c1[1]) : new Point(0, 0);
      this.c2 = c2 ? new Point(c2[0], c2[1]) : new Point(1, 1);
      this.begin = begin ? new Point(begin[0], begin[1]) : new Point(0, 0);
      this.end = end ? new Point(end[0], end[1]) : new Point(1, 1);
    },

    /**
     * 已知x，求y
     * @param {number} x 参数表示一个在贝塞尔曲线上X轴方向的向量，取值在 0.0 - 1.0 之间
     * @return 返回x在贝塞尔曲线上对应的y
     */
    getY: function (x) {
      var t = .5; //设置t的初值
      for (var i = 0; i < 1000; i++) {
        t = t - this._bezierFunc('x', t, x) / this._deltaBezierFunc('x', t, x);
        if (this._bezierFunc('x', t, x) === 0) break;
      }
      return this._bezierFunc('y', t, 0);
    }

  }

  // ## Point class
  function Point(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }

  // 根据缓动函数，创建三次贝塞尔对象
  var cubicBezier = new CubicBezier();

  function setCubicBezier(easing) {
    var args = getArg(easing);
    cubicBezier.set([args[0], args[1]], [args[2], args[3]]);
  }

  return $;
}));