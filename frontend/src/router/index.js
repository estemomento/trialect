import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/pages/index'
import pinyin from '@/components/pages/pinyin'
import download from '@/components/pages/download'
import about from '@/components/pages/about'
import char from '@/components/pages/char'
import notfound from '@/components/pages/notfound'

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
    },
    {
      path: '/char/:ch', // 匹配单个汉字
      name: 'char',
      component: char
    },
    {
      path: '*',
      component: notfound
    }
  ]
})
