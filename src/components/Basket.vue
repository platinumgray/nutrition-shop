<template>
  <div>
    <v-icon class="shrink ml-2" @click="onClick">mdi-basket</v-icon>

    <v-card v-click-outside="{
      handler: clickOutside,
      closeConditional,
    }" v-show="isOpen" class="basket">
      <OrderList />

      <v-card-actions class="mt-2" v-show="!isBasketEmpty">
        <v-btn block to="/order" color="primary">Confirm Order</v-btn>
      </v-card-actions>

      <v-card-text v-show="isBasketEmpty">
        Your basket is empty,pick something,don't be shy!
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapState } from "pinia";
import { useStore, Product } from "@/store";
import OrderList from "./OrderList";

@Component({
  computed: {
    ...mapState(useStore, ["basket"]),
  },
  components: {
    OrderList,
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
  overflow: auto;
  max-height: 80vh;
  max-width: 80vw;
}



@media screen and (min-width: 768) {
  .basket {
    max-width: 344px;
  }
}
</style>
