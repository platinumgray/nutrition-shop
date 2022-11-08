<template>
  <v-container fluid>
    <v-row justify="center" justify-sm="start">
      <v-col cols="12" sm="3">
        <v-tabs grow right show-arrows>
          <v-tab @change="onSelectList('category')">Categories</v-tab>
          <v-tab @change="onSelectList('brand')">Brand</v-tab>

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

  source = "category";
  predicate = -1;

  get refToSource() {
    if (this.source === "category") {
      return this.categories;
    } else if (this.source === "brand") {
      return this.brands;
    }
    return [];
  }

  get items() {
    return this.selection(this.source, this.refToSource[this.predicate]);
  }

  onSelectList(x: string) {
    this.source = x;
    this.predicate = -1;
  }

  onItemSelect(x: number) {
    this.predicate = x;
  }
}
</script>

<style lang="scss" scoped></style>
