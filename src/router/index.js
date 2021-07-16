import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Tooltip from "../views/Tooltip.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/tool",
    name: "Tooltip",
    component: Tooltip,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
