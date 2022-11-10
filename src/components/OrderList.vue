<template>
  <v-container>
    <v-row justify="start" direction="column" class="px-1 py-1">
      <OrderItem
        v-for="(order, index) in basket"
        :order="order"
        :key="order.item.name + index"
        class="mx-3 mt-3 mb-3"
        outlined
      />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
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

  @Watch("basket.length")
  watchLength() {
    if (this.basket.length === 0) {
      this.$router.push("/shop");
    }
  }
}
</script>

<style scoped></style>
