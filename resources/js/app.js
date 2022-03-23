import Vue from 'vue'
import Vuetify from 'vuetify';

'use strict';

Vue.use(Vuetify);

import router from './src/router/router'
import store from './src/store/store'
import App from './src/App'

export default new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  store,
  router,
  render: (h) => h(App)
});