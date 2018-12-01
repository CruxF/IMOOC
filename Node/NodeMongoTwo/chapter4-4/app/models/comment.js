// 这是一个模型文件
var mongoose = require('mongoose');
var CommentSchema = require('../schemas/comment');
// 将MovieSchema编译生成Movie模型
var Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;