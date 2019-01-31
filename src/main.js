import Vue from 'vue'
import './plugins/vuetify'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'font-awesome/css/font-awesome.min.css'
Vue.use(Vuetify, {
  iconfont: 'md'
})
Vue.config.productionTip = false

let app = ''
const config = {
  apiKey: 'AIzaSyCcM0Pwc7CmXW0JWMEsgnb_tRmowQZ9Wm0',
  authDomain: 'autum-md.firebaseapp.com',
  databaseURL: 'https://autum-md.firebaseio.com',
  projectId: 'autum-md',
  storageBucket: 'autum-md.appspot.com',
  messagingSenderId: '740978566704'
}

firebase.initializeApp(config)

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
