import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Events from "../views/TooltipTest.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/tool",
  //   name: "TootTip",
  //   component: TootTip,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
