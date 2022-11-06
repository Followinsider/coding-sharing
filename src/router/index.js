import VueRouter from "vue-router";
import Vue from "vue";

const origin_push = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return origin_push.call(this,location).catch(err => err);
}

Vue.use(VueRouter)


import routes from './routes';
import nprogress from "nprogress";
import "nprogress/nprogress.css"

let router = new VueRouter({
    routes,
    scrollBehavior() {
        return { y: 0 };
    }
})

router.beforeEach((to, from, next) => {
    
    if (to.path !== from.path) {
        nprogress.start()
        next()
    }
    // if (to.path === '/edit') {

    // }
    // next()
})

router.afterEach(()=> {
    nprogress.done()
})

export default router