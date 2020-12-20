require('./bootstrap');

import Vue from 'vue'; //import vue same as(window.Vue = require('vue'))

import VueRouter from 'vue-router';
Vue.use(VueRouter)

Vue.component('test-component', require('./components/test.vue').default);
Vue.component('footer-component', require('./components/admin/inc/footer.vue').default);
Vue.component('header-component', require('./components/admin/inc/header.vue').default);
Vue.component('left-sidebar-component', require('./components/admin/inc/left_sidebar.vue').default);
Vue.component('right-sidebar-component', require('./components/admin/inc/right_sidebar.vue').default);

//all vue routes from routes.js file
import {routes} from './routes.js';
const router = new VueRouter({
    routes,
    mode:'hash',
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
})

//vue instance
const app = new Vue({
    el: '#app',
    router,
}); 