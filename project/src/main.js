// 引入vue
import Vue from 'vue'
import App from './App.vue'
// 导入element-ui及其样式表
import eUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入基本的样式表
import './assets/styles/css/base.less'
// 导入字体图标的样式表
import './assets/styles/css/iconfont.css'
// 引入路由的配置
import router from './router'
// 使用路由
Vue.use(eUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
