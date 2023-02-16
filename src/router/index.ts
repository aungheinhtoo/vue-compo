import { createRouter, createWebHistory } from "vue-router";
import ButtonsView from "../views/ButtonsView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: ButtonsView,
        },
        {
            path: "/alerts",
            name: "alerts",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/AlertsView.vue"),
        },
    ],
});

export default router;
