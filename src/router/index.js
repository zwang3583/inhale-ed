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
      path: "/weather",
      name: "weather",
      component: () => import("../views/Weather.vue")
    },
    {
      path: "/calendar",
      name: "calendar",
      component: () => import("../views/Calendar.vue"),
    },
    {
      path: "/info",
      name: "info",
      component: () => import("../views/Info.vue"),
    },
    {
      path: "/howto",
      name: "HowTo",
      component: () => import("../views/HowTo.vue"),
    },
    {
      path: "/weather",
      name: "weather",
      component: () => import("../views/Weather.vue"),
    },
  ]
});

export default router;