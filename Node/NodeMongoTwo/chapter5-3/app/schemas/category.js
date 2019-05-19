// 这是一个模式文件
// 引入建模工具模块
var mongoose = require('mongoose');
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

var CategorySchema = new Schema({
  name: String,
  movies: [{
    type: ObjectId,
    ref: 'Movie'
  }],
  // 时间记录对象
  meta: {
    // 创建时间
    createAt: {
      type: Date,
      default: Date.now()
    },
    // 更新时间
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
});
// 每次在存储数据之前，都会调用这个方法
CategorySchema.pre('save', function(next) {
  // 判断数据是否为新增
  if(this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now();
  } else {
    this.meta.updateAt = Date.now();
  }
  // 存储流程继续往前走
  next();
});
CategorySchema.statics = {
  // 获取数据库目前所有存在的数据
  fetch: function(cb) {
    // 按照时间排序
    return this.find({}).sort('meta.updateAt').exec(cb);
  },
  // 查询单条的数据
  findById: function(id, cb) {
    return this.findOne({ _id: id }).exec(cb);
  }
};
module.exports = CategorySchema;