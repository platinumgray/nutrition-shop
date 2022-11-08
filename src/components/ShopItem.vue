<template>
  <v-card
    outlined
    class="ml-2 d-flex flex-column justify-space-between"
    width="200"
  >
    <v-img
      contain
      :src="require(`@/assets/${img}`)"
      width="150px"
      height="150px"
      class="mx-auto mt-1"
    ></v-img>
    <v-card-title class="text-subtitle-1" tag="span">{{ name }}</v-card-title>
    <v-card-actions class="mt-2">
      <v-btn block>{{ price }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    price: { type: Number, required: true },
    img: { type: String, required: true },
    name: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped></style>
