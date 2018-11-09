const https = require('https')
// cheerio是nodejs的抓取页面模块，为服务器特别定制的，快速、灵活、实施的jQuery核心实现。适合各种Web爬虫程序。
const cheerio = require('cheerio')
// 获取课程前缀地址，可以在learn后加个348看看显示结果
const baseUrl = "https://www.imooc.com/learn/"
// 获取课程学习人数
const numberBaseUrl = 'https://www.imooc.com/course/AjaxCourseMembers?ids='
// 课程id值
//const videosIds = [348, 259, 197, 134, 75, 728, 637]
const videosIds = [348]

// 爬取单个页面结构函数
function filterChapter(page) {
  console.log(3)
  // 获取 https://www.imooc.com/learn/？页面结构内容
  const $ = cheerio.load(page.html)
  // 获取每个章节结构
  const chapters = $('.chapter')
  // 获取课程名称
  let title = $('.course-infos h2').text()
  // 获取课程学习人数
  let number = page.Lnumber
  // 存储课程名称、学习人数和章节副标题与视频id
  let courseData = {
    title,
    number,
    videos: []
  }
  // 遍历章节内容区域
  chapters.each(function() {
    let chapter = $(this)
    // 章节主标题
    let chapterTitle = chapter.find('h3').text()
    // 章节副标题区域
    let videos = chapter.find('.video').children('li')
    // 存储章节主标题和副标题区域
    let chapterData = {
      chapterTitle,
      videos: []
    }
    // 遍历副标题区域
    videos.each(function() {
      let video = $(this).find('.J-media-item')
      // 章节副标题
      let videoTitle = video.text().trim().split('(')[0]
      // 章节视频id
      let id = video.attr('href').split('video/')[1]
      // 存储章节副标题和视频id
      chapterData.videos.push({
        title: videoTitle,
        id
      })
    })
    // 把章节副标题和视频id存储进courseData对象的videos数组内
    courseData.videos.push(chapterData)
  })
  // 返回存储课程名称、学习人数和章节副标题与视频id的courseData对象
  return courseData
}

// 输出爬取内容函数
function printCourseInfo(coursesData) {
  console.log(4)
  coursesData.forEach(courseData => {
    console.log('【' + courseData.number + '】' + '人学过 ' + courseData.title + '\n')
  })
  coursesData.forEach(courseData => {
    console.log('\n')
    console.log('----------------------------------------------------------------------------------\n')
    console.log('                           ' + courseData.title + '                               \n')
    console.log('----------------------------------------------------------------------------------\n')
    courseData.videos.forEach(item => {
      let chapterTitle = item.chapterTitle
      console.log(chapterTitle + '\n')
      item.videos.forEach(video => {
        console.log('【id ' + video.id + '】' + video.title)
      })
    })
  })
}

// 异步爬取课程信息
function getPageAsync(id) {
  console.log(1)
  return new Promise((resolve, reject) => {
    // 课程地址
    let url = baseUrl + id
    console.log('正在爬取' + url + '\n')
    let Lnumber = 0;
    let html = ''
    getNumber(id).then(number => {
      Lnumber = number
    })
    https.get(url, res => {
      res.on('data', data => {
        html += data
      })
      res.on('end', () => {
        // 把html和Lnumber变量传递下去
        resolve({ html, Lnumber })
      })
    }).on('error', err => {
      console.log(err + ':获取课程信息出错！')
      reject(err)
    })
  })
}

function getNumber(id) {
  console.log(2)
  return new Promise((resolve, reject) => {
    https.get(numberBaseUrl + id, res => {
      let number = ''
      res.on('data', data => {
        number += data
        number = JSON.parse(number).data[0].numbers
      })
      res.on('end', () => {
        resolve(number)
      })
    }).on('error', err => {
      reject(err)
      console.log(err)
    })
  })
}

// Promise对象数组
let fetchCourseArray = []
// 遍历课程id同时调用getPageAsync函数
videosIds.forEach(id => {
  fetchCourseArray.push(getPageAsync(id))
})

// 同时异步调用多个函数，也就是同时爬取多个页面数据
Promise.all(fetchCourseArray).then((pages) => {
  let coursesData = []
  // pages为每一个课程的结构代码
  pages.forEach(page => {
    let courses = filterChapter(page)
    coursesData.push(courses)
  })
  // 按照学习人数进行排序
  coursesData.sort((a, b) => {
    return a.number < b.number
  })
  // 输出结果
  printCourseInfo(coursesData)
})