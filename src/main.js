import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./blogs.vue";
import SecondPage from "./blogsDetails.vue";
import "tailwindcss/tailwind.css";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/blogsDetails/:id", component: SecondPage },
  ],
})

const app = createApp(App);
app.use(router);
app.mount("#app");
