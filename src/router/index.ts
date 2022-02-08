import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../components/Templates/Home.vue";
import Prevention from "../components/Templates/Prevention.vue";
import Symptoms from "../components/Templates/Symptoms.vue";
import About from "../components/Templates/About.vue";
import Contact from "../components/Templates/Contact.vue";
import MyBlog from "../components/Templates/Blog.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/prevention",
    name: "Prevention",
    component: Prevention,
  },
  {
    path: "/symptoms",
    name: "Symptoms",
    component: Symptoms,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/myblog",
    name: "MyBlog",
    component: MyBlog,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
