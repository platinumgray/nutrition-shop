<template>
  <v-app>
    <v-card class="overflow-hidden">
      <v-app-bar app color="primary">
        <div class="d-flex align-center">
          <router-link to="/">
            <v-img class="shrink mr-2" contain src="@/assets/logo.png" transition="scale-transition" width="40" />
          </router-link>
        </div>

        <v-spacer></v-spacer>

        <v-text-field v-model="q" solo hideDetails dense @keyup="search($event)" />
        <v-btn :to="'/shop?q=' + q">Search</v-btn>

        <v-spacer></v-spacer>
        <div class="d-flex align-center">
          <Basket />
        </div>
      </v-app-bar>

      <v-main min-heigth="100vh">
        <router-view />
      </v-main>

      <v-footer dark padless>
        <v-card flat tile class="indigo lighten-1 white--text text-center">
          <v-card-text>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text pt-0">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
            Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
            accumsan id ultrices nunc. Sed at orci sed massa consectetur
            dignissim a sit amet dui. Duis commodo vitae velit et faucibus.
            Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum
            ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel
            diam elementum tempor vel ut orci. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-card>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Basket from "@/components/Basket.vue";
import { useStore, Product } from "@/store";

export default Vue.extend({
  name: "App",

  data: () => ({
    icons: [],
    q: "",
    //
  }),
  components: { Basket },
  setup: () => {
    const store = useStore();

    return {
      products: store.items,
    };
  },
  methods: {
    search(e: KeyboardEvent) {
      if (e.key === "Enter") {
        this.$router.push(`/shop?q${this.q}`);
      }
    },
  },
});
</script>

<style lang="scss">
.v-main {
  min-height: 100vh;
}
</style>
