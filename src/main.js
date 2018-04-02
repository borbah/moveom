import Vue from 'vue';
import vueSmoothScroll from 'vue-smooth-scroll';
import App from './App.vue';
import './registerServiceWorker';

Vue.config.productionTip = true;
Vue.use(vueSmoothScroll);

new Vue({
  render: h => h(App),
}).$mount('#app');
