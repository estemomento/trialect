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
    { path: '/', component: index },
    { path: '/intro', component: intro },
    { path: '/pinyin', component: pinyin },
    { path: '/resource', component: resource },
    { path: '/about', component: about },
    { path: '/char/:ch', component: char }, // 匹配单个汉字
    { path: '*', component: notfound }
  ]
})
