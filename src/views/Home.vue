<template>
  <v-container>
    <v-container class="hero">
      <v-row>
        <v-col class="d-flex flex-column justify-center" col="10">
          <h2 class="text-h2 font-weight-medium">
            REACH YOUR MAXIMUM CAPACITY
          </h2>
        </v-col>
        <v-col col="2" class="d-flex justify-center">
          <v-img src="@/assets/prot.png" max-width="300px"> </v-img>
        </v-col>
      </v-row>
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
          :max-height="featuredSize"
        >
          <v-img
            :src="require(`@/assets/${item.img}`)"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            :height="featuredSize / 2"
            :width="featuredSize / 2"
          >
            <v-card-title v-show="item.best">Best seller</v-card-title>
          </v-img>
        </v-card>
      </v-row>
    </v-container>

    <v-container>
      <PromoSection
        name="Proteins"
        description="Lorem ipsum"
        goTo="/shop?category=protein"
      >
        <ShopItem
          v-for="item in proteins"
          v-bind:key="item.name"
          :item="item"
          class="ml-2 mt-2"
        />
      </PromoSection>
      <PromoSection
        name="BCAA"
        description="Lorem ipsum"
        goTo="/shop?brand=whey"
      >
        <ShopItem
          v-for="item in proteins"
          v-bind:key="item.name"
          :item="item"
          class="ml-2 mt-2"
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

  get featured() {
    const _fItems = items.filter((x) => x.featured && !x.best).slice(0, 3);

    const [_f1, _f2] = _fItems;
    const _fBest = items.filter((x) => x.featured && x.best)[0];
    if (_fBest) {
      return [_f1, _fBest, _f2];
    }

    return _fItems;
  }

  proteins = items.slice(0, 4);
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

@media screen and (min-width: 768) {
  .v-card {
    max-width: 344px;
  }
}
</style>
