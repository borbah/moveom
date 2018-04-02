import Vue from 'vue';
import vueSmoothScroll from 'vue-smooth-scroll';
import App from './App.vue';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(vueSmoothScroll);

new Vue({
  render: h => h(App),
}).$mount('#app');
