<template>
  <v-card :outlined="outlined" color="grey darken-3 " class="d-flex flex-column justify-space-between " width="200">
    <v-img contain :src="require(`@/assets/${item?.img}`)" width="150px" height="150px" class="mx-auto mt-1"></v-img>
    <v-card-title class="text-subtitle-1" tag="span">{{
        item?.name
    }}</v-card-title>
    <v-card-subtitle class="subtitle" tag="span">
      {{ item?.description }}
    </v-card-subtitle>
    <v-card-actions class="mt-2" v-show="showBtn">
      <v-btn block @click="item && add(item)" light>
        <v-icon class="shrink mr-2">mdi-basket-plus</v-icon>
        {{ item?.price }} UAH
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Product, useStore } from "@/store";
import { mapActions } from "pinia";

export default {
  props: {
    item: { type: Product, require: true },
    showBtn: { type: Boolean, default: true },
    outlined: { type: Boolean, default: false },
    color: { type: String, default: "" },
  },
  methods: { ...mapActions(useStore, ["add"]) },
};
</script>

<style lang="scss" scoped>
.subtitle {
  max-height: 100px;
}
</style>
