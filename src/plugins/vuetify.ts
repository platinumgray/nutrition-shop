import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#4caf50",
        secondary: "#e91e63",
        accent: "#8bc34a",
        error: "f44336",
        warning: "#ffc107",
        info: "#03a9f4",
        success: "#607d8b",
        bg: "#2F3061",
        bg_item: "#172815",
      },
    },
  },
});
