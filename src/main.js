import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import iView from "iview";

import "iview/dist/styles/iview.css";
Vue.use(iView);
Vue.prototype.$ajax = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
