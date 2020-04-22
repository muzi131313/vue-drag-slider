import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import init from './init'
// import VueDragSlider from '../../index'

Vue.config.productionTip = false

init(Vue)
// Vue.use(VueDragSlider)

new Vue({
  router,
  store,
  render: h => h(App),
  data: {
    eventHub: new Vue()
  }
}).$mount('#app')
