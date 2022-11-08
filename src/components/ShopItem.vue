<template>
  <v-card
    :outlined="outlined"
    :color="color"
    class="d-flex flex-column justify-space-between"
    width="200"
  >
    <v-img
      contain
      :src="require(`@/assets/${item?.img}`)"
      width="150px"
      height="150px"
      class="mx-auto mt-1"
    ></v-img>
    <v-card-title class="text-subtitle-1" tag="span">{{
      item?.name
    }}</v-card-title>
    <v-card-actions class="mt-2" v-show="showBtn">
      <v-btn block @click="item && add(item)">{{ item?.price }}</v-btn>
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

<style lang="scss" scoped></style>
