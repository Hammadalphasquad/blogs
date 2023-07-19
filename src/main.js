import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import Blogs from "./Blogs.vue";
import SecondPage from "./blogsDetails.vue";
import Home from "./Homepage.vue";
import AboutUs from "./About us.vue"
import "tailwindcss/tailwind.css";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/Blogs", component: Blogs },
    { path: "/blogsDetails/:id", component: SecondPage },
     {path: "/", component:Home },
     {path: "/aboutUs", component:AboutUs},
  ],
})

const app = createApp(App);
app.use(router);
app.mount("#app");
