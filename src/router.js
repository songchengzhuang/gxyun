import Vue from "vue";
import Router from "vue-router";
import HomeIndex from "./views/HomeIndex/HomeIndex.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HomeIndex",
      component: HomeIndex
    },
    {
      path: "/ShareBlog",
      name: "ShareBlog",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./views/ShareBlog/ShareBlog.vue")
    }
  ]
});
