import Vue from 'vue';
import VueRouter from 'vue-router';
import Axios from 'axios'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import EleForm from 'vue-ele-form'
Vue.use(VueRouter);
// The routing configuration

Vue.use(router)

//注册element-ui
Vue.use(ElementUI)


// 注册 vue-ele-form
Vue.use(EleForm)
Axios.defaults.baseURL = '/api/'
Axios.interceptors.response.use(
    response => {
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
        // 否则的话抛出错误
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    }
)
Vue.prototype.$axios = Axios

import './assets/css/style.css'


new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
