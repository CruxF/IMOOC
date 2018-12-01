// 这是一个模型文件
var mongoose = require('mongoose');
var MovieSchema = require('../schemas/movie');
// 将MovieSchema编译生成Movie模型
var Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;