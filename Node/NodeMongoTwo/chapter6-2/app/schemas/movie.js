var mongoose = require('mongoose');
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

var MovieSchema = new Schema({
  doctor: String,
  title: String,
  language: String,
  country: String,
  summary: String,
  flash: String,
  poster: String,
  year: Number,
  pv: {
    type: Number,
    default: 0
  },
  category: {
    type: ObjectId,
    ref: 'Category'
  },
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
MovieSchema.pre('save', function(next) {
  // 判断数据是否为新增
  if(this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now();
  } else {
    this.meta.updateAt = Date.now();
  }
  // 存储流程继续往前走
  next();
});
MovieSchema.statics = {
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
module.exports = MovieSchema;