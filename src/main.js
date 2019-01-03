import Vue from 'vue';
import App from './App.vue';
import router from './router';

new Vue({
  el: '#root-element',
  router,
  render: h => h(App)
});