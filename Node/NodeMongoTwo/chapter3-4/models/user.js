// 这是一个模型文件
var mongoose = require('mongoose');
var UserSchema = require('../schemas/user');
// 将MovieSchema编译生成Movie模型
var User = mongoose.model('User', UserSchema);

module.exports = User;