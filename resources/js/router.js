import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routesDefault = [
    {
        path: '/',
        component: () => import('./List.vue'),        
    },
    {
        path: '/register/:id?',
        name:'register',
        component: () => import('./Register.vue')
    }
]

const router = new Router({
    mode: 'history',
    routes: routesDefault,
});


export default router;