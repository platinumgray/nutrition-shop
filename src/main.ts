import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia, PiniaVuePlugin } from "pinia";
import vuetify from "./plugins/vuetify";
import piniaPersist from "pinia-plugin-persist";
import VueCompositionAPI from "@vue/composition-api";

Vue.use(VueCompositionAPI);

Vue.use(PiniaVuePlugin);
const pinia = createPinia();
pinia.use(piniaPersist);


Vue.config.productionTip = false;
new Vue({
  router,
  vuetify,
  pinia,
  render: (h) => h(App),
}).$mount("#app");
