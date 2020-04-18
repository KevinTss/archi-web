import Vue from "vue";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";
import LoginPage from "./pages/LoginPage.vue";
import ShoesPage from "./pages/ShoesPage.vue";
import AddShoePage from "./pages/AddShoePage.vue";
import EditShoePage from "./pages/EditShoePage.vue";

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const router = new VueRouter({
  routes: [
    { path: "/", component: LoginPage },
    { path: "/shoes", component: ShoesPage },
    { path: "/shoes/add", component: AddShoePage },
    { path: "/shoes/:id", component: EditShoePage },
  ],
});

new Vue({
  router: router,
  el: "#app",
  router,
  render: (h) => h(App),
}).$mount("#app");
