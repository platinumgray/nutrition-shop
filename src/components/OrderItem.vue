<template>
  <v-card :outlined="outlined" class="d-flex flex-column justify-space-between" width="200">

    <ShopItem :item="order?.item" :show-btn="false" outlined color="transparent" />

    <v-text-field class="mx-3" type="number" min="0" max="100" solo>{{ order?.amount }}
    </v-text-field>
    <v-btn> Remove </v-btn>
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
};
</script>

<style lang="scss" scoped>

</style>
