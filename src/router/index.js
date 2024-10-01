import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/HomePage.vue"),
  },
  {
    path: "/ourteam",
    name: "our_team",
    component: () => import("../pages/OurTeamPage.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../pages/AboutPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
