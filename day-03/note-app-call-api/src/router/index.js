import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        // dynamic segments start with a colon
        {
            path: '/',
            name: "home",
            component: () => import('@/views/Notes.vue')
        },
        {
            path: '/login',
            name: "login",
            component: () =>  import('@/views/Login.vue')
        }
    ]
})

export default router;