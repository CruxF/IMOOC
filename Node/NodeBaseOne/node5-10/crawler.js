const https = require('https')
// Cheerio 是一个Node.js的库， 它可以从html的片断中构建DOM结构，然后提供像jquery一样的css选择器查询
// 需要npm install cheerio
const cheerio = require('cheerio')
const url = 'https://www.imooc.com/learn/348'

function filterChapters(html) {
  // 沿用JQuery风格，定义$
  const $ = cheerio.load(html)
  // 获取类名为chapter的所有章节数组数据
  const chapters = $('.chapter')
  const courseData = []
  chapters.each(function() {
    // 获取单个章节数据
    const chapter = $(this)
    // 获取章节的标题
    const chapterTitle = chapter.find('h3').text()
    // 获取章节下面的子章节元素
    const videos = chapter.find('.video').children('li')
    const chapterData = {
      chapterTitle: chapterTitle,
      videos: []
    }
    videos.each(function() {
      const video = $(this).find('.J-media-item')
      const videoTitle = video.text()
      const id = video.attr('href').split('video/')[1]
      chapterData.videos.push({
        title: videoTitle,
        id: id
      })
    })
    courseData.push(chapterData)
  })
  return courseData
}

function printCourseInfo(courseData) {
  courseData.forEach(item => {
    const chapterTitle = item.chapterTitle
    console.log(chapterTitle + '\n')
    item.videos.forEach(video => {
      console.log('【' + video.id + '】' + video.title)
    })
  })
}
https.get(url, res => {
  let html = ''
  res.on('data', data => {
    html += data
  })
  res.on('end', () => {
    const courseData = filterChapters(html)
    printCourseInfo(courseData)
  })
}).on('error', err => {
  console.log(err)
})