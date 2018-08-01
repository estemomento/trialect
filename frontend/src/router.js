import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Intro from '@/pages/intro'
import Pinyin from '@/pages/pinyin'
import Resource from '@/pages/resource'
import About from '@/pages/about'
import Char from '@/pages/char'
import NotFound from '@/pages/not-found'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Index },
    { path: '/intro', component: Intro },
    { path: '/pinyin', component: Pinyin },
    { path: '/resource', component: Resource },
    { path: '/about', component: About },
    { path: '/char/:ch', component: Char }, // 匹配单个汉字
    { path: '*', component: NotFound }
  ]
})
