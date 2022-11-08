<template>
  <v-container class="mt-10" fluid>
    <v-row justify="center" justify-md="start">
      <v-col cols="12" md="2" class="d-flex flex-column justify-end">
        <p>{{ name }}</p>
        <p>{{ description }}</p>
        <v-btn max-width="220"> Go To Section </v-btn>
      </v-col>
      <v-col cols="12" md="10">
        <v-row wrap="no-wrap" justify="center" justify-sm="start">
          <slot></slot>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
    goTo: String,
  },
};
</script>

<style lang="scss" scoped></style>
