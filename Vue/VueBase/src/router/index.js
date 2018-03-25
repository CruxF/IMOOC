import Vue from 'vue'
import Router from 'vue-router'
import TestApp from '@/components/TestApp'
import IndexApp from '@/components/IndexApp'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/TestApp',
      name: 'TestApp',
      component: TestApp
    },
    {
      path: '/IndexApp',
      name: 'IndexApp',
      component: IndexApp
    }
  ]
})