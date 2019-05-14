import Vue from "vue";
import { ColorPicker, Tooltip } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import lang from "element-ui/lib/locale/lang/es";
import locale from "element-ui/lib/locale";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./static/index.css";
import "./assets/css/main.css";

locale.use(lang);
Vue.use(ColorPicker);
Vue.use(Tooltip);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
