<template>
  <div>
    <v-icon class="shrink ml-2" @click="open">mdi-basket</v-icon>
    <v-card v-show="isOpen" class="basket">
      <v-row>
        <v-col cols="12">
          <OrderItem
            v-for="(order, index) in basket"
            :order="order"
            :key="order.item.name + index"
            class="mx-3 mt-3 mb-3"
            outlined
          />
        </v-col>
      </v-row>

      <v-card-actions class="mt-2">
        <v-btn block>Confirm Order</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapState } from "pinia";
import { useStore, Product } from "@/store";
import OrderItem from "./OrderItem";

@Component({
  computed: {
    ...mapState(useStore, ["basket"]),
  },
  components: {
    OrderItem,
  },
})
export default class Basket extends Vue {
  isOpen = false;

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}
</script>

<style lang="scss" scoped>
.basket {
  position: absolute;
  right: 1vw;
  max-height: 50vw;
  overflow: auto;
}
</style>
