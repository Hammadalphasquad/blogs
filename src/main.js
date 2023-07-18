import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./blogs.vue";
import SecondPage from "./blogsDetails.vue";
import Home from "./home.vue";
import AboutUs from "./About us.vue"
import "tailwindcss/tailwind.css";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/blogsDetails/:id", component: SecondPage },
     {path: "/home", component:Home },
     {path: "/aboutUs", component:AboutUs},
  ],
})

const app = createApp(App);
app.use(router);
app.mount("#app");
