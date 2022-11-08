<template>
  <div>
    <v-icon class="shrink ml-2" @click="onClick">mdi-basket</v-icon>
    <v-card
      v-click-outside="{
        handler: clickOutside,
        closeConditional,
      }"
      v-show="isOpen"
      class="basket"
    >
      <v-row v-show="!isBasketEmpty">
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

      <v-card-actions class="mt-2" v-show="!isBasketEmpty">
        <v-btn block>Confirm Order</v-btn>
      </v-card-actions>

      <v-card-title v-show="isBasketEmpty">
        Your basket is empty,pick something,don't be shy!
      </v-card-title>
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

  onClick() {
    this.isOpen = !this.isOpen;
  }

  clickOutside() {
    this.isOpen = false;
  }

  closeConditional(e) {
    return this.isOpen !== false;
  }

  get isBasketEmpty() {
    return !this.basket.length;
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
