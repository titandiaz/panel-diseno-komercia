import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

setTimeout(() => {
  console.log(vm);
  document
    .getElementById("iframe")
    .contentWindow.document.write(vm.$el.outerHTML);
}, 2000);
