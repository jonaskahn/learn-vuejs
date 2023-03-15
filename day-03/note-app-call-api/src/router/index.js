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
        },
        {
            path: '/form',
            name: "form",
            component: () =>  import('@/views/Forms.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')
    if(!token) {
        if(to.path === "/login") {
            next()
        } else  next("/login")
    }
    else {
        if (to.path === "/login") {
            next("/");
        } else next()
    }
});

export default router;