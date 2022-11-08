<template>
  <v-container>
    <v-container class="hero">
      <h2 class="text-h2 font-weight-medium">REACH YOUR MAXIMUM CAPACITY</h2>
      <v-img src="@/assets/prot.png" max-width="300px" class="hover_img">
      </v-img>
    </v-container>
    <v-container fluid>
      <v-row justify="center">
        <p>FEATURED PRODUCTS</p>
      </v-row>
      <v-row dense justify="center" justify-md="space-between">
        <v-card
          class="mt-1 ml-1"
          v-for="item in featured"
          :key="item.name"
          :max-width="featuredSize"
          :max-heigth="featuredSize"
        >
          <v-img
            :src="require(`@/assets/${item.img}`)"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            :height="featuredSize / 2"
            :width="featuredSize / 2"
          >
            <v-card-title v-show="item.bestSeller">Best seller</v-card-title>
          </v-img>
        </v-card>
      </v-row>
    </v-container>

    <v-container class="hero">
      <h2 class="text-h2 font-weight-medium">REACH YOUR MAXIMUM CAPACITY</h2>
      <v-img src="@/assets/prot.png" max-width="300px" class="hover_img">
      </v-img>
    </v-container>

    <v-container>
      <PromoSection name="Proteins" description="Lorem ipsum">
        <ShopItem
          v-for="item in proteins"
          v-bind:key="item.name"
          :name="item.name"
          :img="item.img"
          :price="item.price"
        />
      </PromoSection>
      <PromoSection name="BCAA" description="Lorem ipsum">
        <ShopItem
          v-for="item in proteins"
          v-bind:key="item.name"
          :name="item.name"
          :img="item.img"
          :price="item.price"
        />
      </PromoSection>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PromoSection from "@/components/PromoSection.vue";
import ShopItem from "@/components/ShopItem.vue";
import { items } from "../data.json";

@Component({
  components: {
    PromoSection,
    ShopItem,
  },
})
export default class Home extends Vue {
  get featuredSize(): number {
    return 500;
  }

  proteins = items.slice(0, 4);

  featured = items.filter((x) => x.featured).slice(0, 3);
}
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: row;
  align-items: center;

  h2 {
    color: green;
    letter-spacing: -1px;
    line-height: 1;
    text-align: left;
  }
}

.hover_img {
  background-position: right 35% bottom 45%;
}

@media screen and (min-width: 768) {
  .v-card {
    max-width: 344px;
  }
}
</style>
