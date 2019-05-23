// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
var rp = require('request-promise');

// 云函数入口函数
exports.main = async (event, context) => {
  return rp(`http://t.yushu.im/v2/movie/subject/${event.movieid}`)
    .then(function (res) {
      return res;
    })
    .catch(function (err) {
      // Crawling failed...
    });
}