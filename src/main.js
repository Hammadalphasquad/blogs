import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import Blogs from "./blogs.vue";
import SecondPage from "./blogsDetails.vue";
import Home from "./Homepage.vue";
import AboutUs from "./About us.vue"
import Features from "./Features.vue"
import Faq from "./FAQ.vue"
import ContactUs from "./Contact Us.vue"
import "tailwindcss/tailwind.css";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: "/", component:Home },
    { path: "/blogs", component: Blogs },
    { path: "/blogsDetails/:id", component: SecondPage },
     {path: "/aboutUs", component:AboutUs},
     {path: "/features", component: Features},
     {path: "/Faq", component: Faq },
     {path: "/ContactUs", component:ContactUs}
  ],
})

const app = createApp(App);
app.use(router);
app.mount("#app");
