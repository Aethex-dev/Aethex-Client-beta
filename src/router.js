import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import App from "./views/App.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
      path: "/app:catchAll(.*)",
      component: App
  },
  {
      path: "/login",
      component: {
          template: "uwu"
      }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;