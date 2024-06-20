import './bootstrap';
import { createApp } from 'vue';
import '../sass/app.scss';
import App from "./App.vue";
import routesPath from "./routes/route";
import Header from "./components/Header.vue";
import VueAxios from 'vue-axios';
import axios from 'axios';

const app = createApp(App).use(routesPath);
app.component("Header",Header);
app.use(VueAxios, axios);
app.mount("#app");
