import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/doctor",
      name: "doctor",
      component: () => import("../views/DoctorUI.vue"),
    },
    {
      path: "/info",
      name: "info",
      component: () => import("../views/Info.vue"),
    },
  ]
});

export default router;