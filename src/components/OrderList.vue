<template>
  <v-row justify="start" direction="column" class="px-1 py-1">
    <OrderItem
      v-for="(order, index) in basket"
      :order="order"
      :key="order.item.name + index"
      class="mx-3 mt-3 mb-3"
      outlined
    />
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Order, useStore } from "@/store";
import OrderItem from "./OrderItem.vue";
import { mapState } from "pinia";

@Component({
  computed: {
    ...mapState(useStore, ["basket"]),
  },
  components: {
    OrderItem,
  },
})
export default class extends Vue {
  basket!: Array<Order>;
}
</script>

<style scoped></style>
