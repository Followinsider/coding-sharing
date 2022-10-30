import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter)

import routes from './routes';
let router = new VueRouter({
    routes,
    scrollBehavior() {
        return { y: 0 };
    }
})
export default router