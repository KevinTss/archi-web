import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import LoginPage from "./pages/LoginPage.vue";
import ShoesPage from "./pages/ShoesPage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: LoginPage },
    { path: "/shoes", component: ShoesPage }
  ]
});

new Vue({
  router: router,
  el: "#app",
  router,
  render: h => h(App)
}).$mount("#app");
