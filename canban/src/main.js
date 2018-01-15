// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyAcTUpkJVXFHocsc_9iTDz49O8a0-DLJCs',
  authDomain: 'api-project-737873303348.firebaseapp.com',
  databaseURL: 'https://api-project-737873303348.firebaseio.com',
  projectId: 'api-project-737873303348',
  storageBucket: 'api-project-737873303348.appspot.com',
  messagingSenderId: '737873303348'
}

firebase.initializeApp(config)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
