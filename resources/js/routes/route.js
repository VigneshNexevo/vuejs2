import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path:"/",
        component:()=>import("../components/Home.vue")
    },
    {
        path:"/category",
        component:()=>import("../components/Category.vue")
    },
    {
        path:"/category/create",
        component:()=>import("../components/Create.vue")
    }
];

export default createRouter({
    history: createWebHistory(),
    routes,
});