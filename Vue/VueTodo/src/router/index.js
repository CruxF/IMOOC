import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import item from '@/components/item/item'
/*导入全局样式*/
import '@/common/global.css'

Vue.use(Router)

export default new Router({
routes: [
    {
      path: '/',
      name: 'item',
      component: item
    }
]
})
