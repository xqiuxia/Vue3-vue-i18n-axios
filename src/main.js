import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router/index";
import "lib-flexible/flexible.js";
import "vant/lib/index.css"; // 全局引入样式
// import "./common/css/base.css";
import i18n from "@/language/index";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(i18n);
app.mount("#app");
