import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App'
import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(VueRouter);
// The routing configuration
Vue.use(router)

import './assets/css/style.css'

Vue.use(ViewUI);
new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
