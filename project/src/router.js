import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 登陆
      path: '/',
      name: 'login',
      component: () => import('./views/Login/Login.vue')
    },
    {
      // 首页
      path: '/index',
      component: () => import('./views/Index/Index.vue'),
      // 首页的子组件
      children: [
        {
          // 默认子组件是系统信息组件
          path: '',
          component: () => import('./views/Systeminfo/Systeminfo.vue')
        },
        {
          // 系统信息子组件
          path: '/index/systeminfo',
          component: () => import('./views/Systeminfo/Systeminfo.vue')
        },
        {
          // 会员添加子组件 
          path: '/index/useradd',
          component: () => import('./views/Useradd/Useradd.vue')
        },
        {
          // 会员管理子组件
          path: '/index/usermanage',
          component: () => import('./views/Usermanage/Usermanage.vue')
        },
        {
          // 账户添加子组件 
          path: '/index/accountadd',
          component: () => import('./views/Accountadd/Accountadd.vue')
        },
        {
          // 账户管理子组件
          path: '/index/accountmanage',
          component: () => import('./views/Accountmanage/Accountmanage.vue')
        },
        {
          // 密码修改子组件
          path: '/index/passwordupdate',
          component: () => import('./views/Passwordupdate/Passwordupdate.vue')
        },
        {
          // 商品添加子组件
          path: '/index/goodsadd',
          component: () => import('./views/Goodsadd/Goodsadd.vue')
        },
        {
          // 商品管理子组件
          path: '/index/goodsmanage',
          component: () => import('./views/Goodsmanage/Goodsmanage.vue')
        },
        {
          // 库存添加子组件
          path: '/index/stockadd',
          component: () => import('./views/Stockadd/Stockadd.vue')
        },
        {
          // 库存管理子组件
          path: '/index/stockmanage',
          component: () => import('./views/Stockmanage/Stockmanage.vue')
        },
        {
          // 销售统计子组件
          path: '/index/salestatistics',
          component: () => import('./views/Salestatistics/Salestatistics.vue')
        },
        {
          // 进货统计子组件
          path: '/index/stockstatistics',
          component: () => import('./views/Stockstatistics/Stockstatistics.vue')
        },
        {
          // 销售列表子组件
          path: '/index/shipmentlist',
          component: () => import('./views/Shipmentlist/Shipmentlist.vue')
        },
        {
          // 商品出库子组件
          path: '/index/goodsOutStock',
          component: () => import('./views/GoodsOutStock/GoodsOutStock.vue')
        },
        {
          // 退货子组件
          path: '/index/orderreturn',
          component: () => import('./views/Orderreturn/Orderreturn.vue')
        }

      ]
    }
  ]
})
