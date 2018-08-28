<!-- 电子书解析和渲染 -->
<template>
  <div class="ebook">
    <title-bar :ifTitleAndMenuShow="ifTitleAndMenuShow"></title-bar>
    <div class="read-wrapper">
      <div id="read"></div>
      <div class="mask">
        <div class="left" @click="prevPage"></div>
        <div class="center" @click="toggleTitleAndMenu"></div>
        <div class="right" @click="nextPage"></div>
      </div>
    </div>
    <menu-bar :ifTitleAndMenuShow="ifTitleAndMenuShow" 
              :fontSizeList="fontSizeList"
              :defaultFontSize="defaultFontSize"
              @setFontSize="setFontSize"
              :themeList="themeList"
              :defaultTheme="defaultTheme"
              @setTheme="setTheme"
              :bookAvailable="bookAvailable"
              @onProgressChange="onProgressChange"
              :navigation="navigation"
              @jumpTo="jumpTo"
              ref="menuBar">
    </menu-bar>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
import MenuBar from '@/components/MenuBar'
import Epub from 'epubjs'
const DOMNLOAD_URL = '/static/firstbook.epub'
global.ePub = Epub
export default {
  name: 'Ebook',
  data () {
    return {
      ifTitleAndMenuShow: false,
      fontSizeList: [
        {fontSize: 12},
        {fontSize: 14},
        {fontSize: 16},
        {fontSize: 18},
        {fontSize: 20},
        {fontSize: 22},
        {fontSize: 24}
      ],
      defaultFontSize: 16,
      themeList: [
        {
          name: 'default',
          style: {
            body: {
              'color': '#000', 'background': '#fff'
            }
          }
        },
        {
          name: 'eye',
          style: {
            body: {
              'color': '#000', 'background': '#ceeaba'
            }
          }
        },
        {
          name: 'night',
          style: {
            body: {
              'color': '#fff', 'background': '#000'
            }
          }
        },
        {
          name: 'gold',
          style: {
            body: {
              'color': '#000', 'background': 'rgb(241, 236, 226)'
            }
          }
        }
      ],
      defaultTheme: 0,
      // 图书是否处于可用状态
      bookAvailable: false,
      navigation: null
    }
  },
  mounted() {
    this.showEpub()
  },
  methods: {
    // 根据链接跳转到指定位置
    jumpTo(href) {
      this.rendition.display(href)
      this.hideTitleAndMenu()
    },
    hideTitleAndMenu() {
      // 隐藏标题栏和菜单栏
      this.ifTitleAndMenuShow = false
      // 隐藏菜单栏弹出的设置栏
      this.$refs.menuBar.hideSetting()
      // 隐藏目录
      this.$refs.menuBar.hideContent()
    },
    // 设置进度条，值为0-100
    onProgressChange(progress) {
      const percentage = progress / 100
      const location = percentage > 0 ? this.locations.cfiFromPercentage(percentage) : 0
      this.rendition.display(location)
    },
    // 设置主题样式
    setTheme(index) {
      this.themes.select(this.themeList[index].name)
      this.defaultTheme = index
    },
    // 注册主题样式
    registerTheme() {
      this.themeList.forEach(theme => {
        // 设置主题的名称和样式
        this.themes.register(theme.name, theme.style)
      })
    },
    // 设置字体大小
    setFontSize(fontSize) {
      this.defaultFontSize = fontSize
      if(this.themes) {
        this.themes.fontSize(fontSize + 'px')
      }
    },
    // 电子书的解析和渲染
    showEpub () {
      // 生成Book对象
      this.book = new Epub(DOMNLOAD_URL)
      // 生成Rendition对象，通过Book.renderTo方法
      this.rendition = this.book.renderTo('read', {
        width: window.innerWidth,
        height: window.innerHeight
      })
      // 通过Rendtion.display渲染电子书
      this.rendition.display()
      // 获取到Theme对象，用来对字体大小进行设置
      this.themes = this.rendition.themes
      // 调用设置默认字体的方法
      this.setFontSize(this.defaultFontSize)
      // 调用主题设置的方法
      this.registerTheme()  
      // 调用主题样式的方法
      this.setTheme(this.defaultTheme)
      // 获取Locations对象，实现进度条和目录功能
      // 通过epubjs的钩子函数来实现
      this.book.ready.then(() => {
        this.navigation = this.book.navigation
        return this.book.locations.generate()
      }).then(result => {
        this.locations = this.book.locations
        this.bookAvailable = true
      })
    },
    // 实现翻上一页
    prevPage () {
      if (this.rendition) {
        this.rendition.prev()
      }
    },
    // 实现翻下一页
    nextPage () {
      if (this.rendition) {
        this.rendition.next()
      }
    },
    // 菜单栏和底部导航栏的切换
    toggleTitleAndMenu() {
      this.ifTitleAndMenuShow = !this.ifTitleAndMenuShow
      if(!this.ifTitleAndMenuShow) {
        this.$refs.menuBar.hideSetting()
      }
    }
  },
  components: {
    TitleBar,
    MenuBar
  }
}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/global.scss';
.ebook {
  position: relative;
  .read-wrapper {
    box-sizing: border-box;    
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
      display: flex;
      width: 100%;
      height: 100%;
      .left {
        flex: 0 0 px2rem(100);
      }
      .center {
        flex: 1;
      }
      .right {
        flex: 0 0 px2rem(100);
      }
    }
  }
}
</style>
