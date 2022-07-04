import Vue from 'vue'
import App from './App'

import uniRow from './components/uni-row/uni-row.vue'
import uniCol from './components/uni-col/uni-col.vue'

Vue.use(uniRow);
Vue.use(uniCol);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
