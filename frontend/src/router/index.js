import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/pages/index'
import intro from '@/components/pages/intro'
import pinyin from '@/components/pages/pinyin'
import resource from '@/components/pages/resource'
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
      path: '/intro',
      name: 'intro',
      component: intro
    },
    {
      path: '/pinyin',
      name: 'pinyin',
      component: pinyin
    },
    {
      path: '/resource',
      name: 'resource',
      component: resource
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
