<template>
  <v-container fluid>
    <v-row justify="center" justify-sm="start">
      <v-col cols="12" sm="3">
        <v-tabs grow right show-arrows v-model="source">
          <v-tab v-for="tab in tabs" :key="tab.name">
            {{ tab.name }}
          </v-tab>

          <v-tab-item>
            <v-list v-model="predicate">
              <v-list-item-group v-model="predicate" color="primary">
                <v-list-item v-for="c in categories" :key="c">
                  <v-list-item-content>
                    <v-list-item-title>{{ c }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-tab-item>

          <v-tab-item>
            <v-list v-model="predicate">
              <v-list-item-group v-model="predicate" color="primary">
                <v-list-item v-for="c in brands" :key="c">
                  <v-list-item-content>
                    <v-list-item-title>{{ c }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-tab-item>
        </v-tabs>
      </v-col>

      <v-col cols="12" sm="9">
        <v-container fluid>
          <v-row justify="center" justify-sm="start">
            <ShopItem
              v-for="(item, index) in items"
              :key="item.name + index"
              :item="item"
              class="ml-2 mt-2"
            />
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ShopItem from "@/components/ShopItem.vue";
import { useStore, Product } from "@/store";
import { useRoute } from "vue-router/types/composables";

@Component({
  components: { ShopItem },

  setup: () => {
    const store = useStore();

    return {
      selection: store.selection,
      categories: store.categories,
      brands: store.brands,
    };
  },
})
export default class Shop extends Vue {
  categories!: Array<string>;
  brands!: Array<string>;
  selection!: (s?: string, v?: string) => Array<Product>;

  tabs = [
    { name: "Categories", key: "category", values: this.categories },
    { name: "Brands", key: "brand", values: this.brands },
  ];

  source = 0;
  predicate = -1;
  constructor() {
    super();
    const query = this.$route.query;
    if (query.category) {
      this.source = 0;
      this.predicate = this.categories.findIndex(
        (x) => x.toLowerCase() === String(query.category).toLowerCase()
      );
    } else if (query.brand) {
      this.source = 1;
      this.predicate = this.brands.findIndex(
        (x) => x.toLowerCase() === String(query.brand).toLowerCase()
      );
    }
  }

  get items() {
    return this.selection(
      this.tabs[this.source].key,
      this.tabs[this.source].values[this.predicate]
    );
  }
}
</script>

<style lang="scss" scoped></style>
