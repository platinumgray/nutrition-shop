<template>
  <v-card :outlined="outlined" class="d-flex flex-column justify-space-between" width="200">
    <ShopItem :item="order?.item" :show-btn="false" outlined color="transparent" />

    <v-text-field class="mx-3" :value="order?.amount" type="number" min="0" max="100" solo @input="_amountChange"
      @change="_amountChange" />
    <v-btn @click="order && remove(order)"> Remove </v-btn>
  </v-card>
</template>

<script lang="ts">
import { Order, useStore } from "@/store";
import { mapActions } from "pinia";
import ShopItem from "./ShopItem.vue";

export default {
  props: {
    order: { type: Order, require: true },
    outlined: { type: Boolean, default: false },
  },
  components: {
    ShopItem,
  },
  methods: {
    ...mapActions(useStore, ["remove", "amountChange"]),
    _amountChange(amount: number) {
      const _a = Number(amount);
      if (_a <= 0) {
        amount = 1;
      }

      if (_a > 100) {
        amount = 100;
      }
      if (this.$props.order) {
        this.amountChange(this.$props.order, _a);
      }
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
