import Vue from 'vue'
import './config/vuetify'
import './config/firebase'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'font-awesome/css/font-awesome.min.css'
Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#FE4F3F',
    secondary: '#5A4FEF'
  }
})
Vue.config.productionTip = false

let app = ''

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
