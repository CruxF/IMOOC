var vm = new Vue({
  el: ".container",
  data: {
    addressList: [],
    limitNum: 3,
    currentIndex: 0,
    shippingMethod: 1
  },
  
  mounted: function () {
    this.$nextTick(function () {
      this.getAddressList();
    });
  },
  
  //过滤显示的数据的数目
  computed: {
    filterAddress: function() {
      return this.addressList.slice(0, this.limitNum);
    }
  },
  
  methods: {
    getAddressList: function () {
      var _this = this;
//    this.$http.get("data/address.json").then(function (response) {
//      var res = response.data;
//      if (res.status == "0") {
//        _this.addressList = res.result;
//      }
//    });
      axios.get("data/address.json").then(function (response) {
				var res = response.data;
        if (res.status == "0") {
          _this.addressList = res.result;
        }
			});
    },
    setDefault: function(addressId) {
    	//address代表的是对象组里的一个对象
      this.addressList.forEach(function (address, index) {
        if (address.addressId == addressId) {
          address.isDefault = true;
        }
        else {
          address.isDefault = false;
        }
      });
    }
  }
})