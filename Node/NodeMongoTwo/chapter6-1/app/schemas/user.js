// 用户接口模型
// 引入建模工具模块
var mongoose = require('mongoose')
// 引入加密模块bcrypt
var bcrypt = require('bcrypt')
var SALT_WORK_FACTOR = 10
var UserSchema = new mongoose.Schema({
  name: {
    unique: true,
    type: String
  },
  password: String,
  // 0:普通用户
  // 1:初级用户
  // 2:高级用户
  role: {
    type: Number,
    default: 0
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
// 每次在存储数据之前，都会调用这个方法，并进行加密处理
UserSchema.pre('save', function(next) {
  var user = this
  // 判断数据是否为新增
  if(this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now();
  } else {
    this.meta.updateAt = Date.now();
  }
  // 生成一个随机的盐
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err,salt){
    if(err) return next(err)
    bcrypt.hash(user.password, salt, function(err, hash){
      if(err) return next(err)
      user.password = hash
      next()
    })
  })
});
// 检验密码是否正确
UserSchema.methods = {
  comparePassword: function(_password,cb){
    bcrypt.compare(_password,this.password,function(err,isMatch){
      if(err) return cb(err)
      cb(null, isMatch)
    })
  }
}

UserSchema.statics = {
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
module.exports = UserSchema;