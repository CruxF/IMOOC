var vm = new Vue({
  el: "#app",
  data: {
    totalMoney: 0,
    productList: [],
    checkAllFlag: false,
    delFlag: false,
    curProduct: ''
  },
  filters: {
    formatMoney: function (value) {
      return "¥" + value.toFixed(2);
    }
  },
  //编译好的HTML挂载到页面完成后执行的事件钩子
  //此钩子函数中一般会做些ajax请求获取数据
  //进行数据初始化
  mounted: function () {
    //使用新的mounted钩子函数应该注意：并不能保证
    //该实例已经插入文档，所以还应该在钩子函数中包含
    //Vue.nextTick/this.$nextTick
    this.$nextTick(function () {
      this.cartView();
    })
  },
  methods: {
    cartView: function () {
      var _this = this;
//    this.$http.get("data/cartData.json", {"id": 123}).then(function (res) {
//      _this.productList = res.body.result.list;
//    });
			axios.get("data/cartData.json", {"id":123}).then(function (res) {
				_this.productList = res.data.result.list;
			});
    },

    //改变产品数量
    changeMoney: function (product, way) {
      if (way > 0) {
        product.productQuantity++;
      } else {
        product.productQuantity--;
        if (product.productQuantity < 1) {
          product.productQuantity = 1;
        }
      }
      this.calcTotalPrice();
    },

    //单选产品函数
    selectedProduct: function (item) {
      if (typeof item.checked == 'undefined') {
        //全局注册checked属性
        // Vue.set(item, "checked", true);
        //局部注册checked属性
        this.$set(item, "checked", true);
      } else {
        item.checked = !item.checked;
      }
      this.calcTotalPrice();
    },

    //全选产品函数
    checkAll: function (flag) {
      this.checkAllFlag = flag;
      var _this = this;
      this.productList.forEach(function (item, index) {
        if (typeof item.checked == 'undefined') {
          _this.$set(item, "checked", flag);
        } else {
          item.checked = flag;
        }
      });
      this.calcTotalPrice();
    },

    //金额总计函数
    calcTotalPrice: function () {
      var _this = this;
      this.totalMoney = 0;
      this.productList.forEach(function (item, index) {
        if (item.checked) {
          _this.totalMoney += item.productPrice * item.productQuantity;
        }
      });
    },

    //删除商品
    delConfirm: function (item) {
      //显示遮罩层
      this.delFlag = true;
      //保存要被删除的对象
      this.curProduct = item;
    },
    delProduct: function () {
      //获取到对象的索引
      var index = this.productList.indexOf(this.curProduct);
      this.productList.splice(index, 1);
      this.delFlag = false;
    }
  }
});

// 全局过滤器
Vue.filter('money', function (value, type) {
  return "¥" + value.toFixed(2) + type;
})