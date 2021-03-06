import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
import {store} from './store';
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
});

router.beforeEach((to, from, next) => {

    if (to.meta.privado)
        next(store.state.auth);
    else
        next();
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
