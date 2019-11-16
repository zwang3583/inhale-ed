import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/About.vue")
    }
  ]
});

// const router = new VueRouter({
//   routes
// });

export default routes;
