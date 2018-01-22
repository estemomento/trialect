import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/index'
import Intro from '@/components/pages/intro'
import Pinyin from '@/components/pages/pinyin'
import Resource from '@/components/pages/resource'
import About from '@/components/pages/about'
import Char from '@/components/pages/char'
import NotFound from '@/components/pages/not-found'

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
