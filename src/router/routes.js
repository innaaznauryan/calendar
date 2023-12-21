import {createRouter, createWebHistory} from "vue-router"
import Login from "../views/Login.vue"

const routes = [
    {
        path: "/",
        name: "login",
        component: Login
    },
    {
        path: "/admin",
        name: "admin",
        component: () => import("../views/Admin.vue")
    },
    {
        path: "/owner",
        name: "owner",
        component: () => import("../views/Owner.vue")
    },
    {
        path: "/user",
        name: "user",
        component: () => import("../views/User.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router