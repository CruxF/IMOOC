var klass = require('./klass')
// 第一种简单调用方式
// klass.add('Scott', ['白富美', '高富帅'])
// 第二种复杂调用方式
exports.add = function(klasses) {
  klasses.forEach((item, index)=> {
    var teacherName = item.teacherName
    var students = item.students
    klass.add(teacherName, students)
  })
}