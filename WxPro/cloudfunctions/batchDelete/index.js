// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

// 获取当前云数据库的信息
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await db.collection('user').where({
      name: 'jack'
    }).remove();
  } catch (err) {
    console.error(err)
  }
}