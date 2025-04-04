import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes/routes";

const app = createApp(App);
const pinia = createPinia();
const router = createRouter({ history: createWebHistory(), routes: routes });

app.use(pinia);
app.use(router);
app.mount("#app");
