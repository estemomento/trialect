import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/pages/index'
import pinyin from '@/components/pages/pinyin'
import download from '@/components/pages/download'
import about from '@/components/pages/about'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/pinyin',
      name: 'pinyin',
      component: pinyin
    },
    {
      path: '/download',
      name: 'download',
      component: download
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
