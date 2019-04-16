import Vue from 'vue'
import Router from 'vue-router'

import ExpensesRecord from '@/views/ExpensesRecord'
import Redemption from '@/views/Redemption'
import Record from '@/views/Record'
import DiamondExchange from '@/views/DiamondExchange'
import MyWallet from '@/views/MyWallet'
import Home from '@/views/Home'
import Tousu from '@/views/Tousu'
import xiangqing from '@/views/xiangqing'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ExpensesRecord',
      name: 'ExpensesRecord',
      component: ExpensesRecord
    },
    {
      path: '/Redemption',
      name: 'Redemption',
      component: Redemption
    },
    {
      path: '/Record',
      name: 'Record',
      component: Record
    },
    {
      path: '/DiamondExchange',
      name: 'DiamondExchange',
      component: DiamondExchange
    },
    {
      path: '/MyWallet',
      name: 'MyWallet',
      component: MyWallet
    },
    {
      path: '/Tousu',
      name: 'Tousu',
      component: Tousu
    },
    {
      path: '/xiangqing',
      name: 'xiangqing',
      component: xiangqing
    }
    
  ]

})


