import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import cust from '@/components/cust'

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
      path: '/cust',
      name: 'custom',
      component: cust
    }
  ]
})
