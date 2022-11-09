<template>
  <v-container>
    <v-stepper alt-labels v-model="step">
      <v-stepper-header>
        <v-stepper-step step="1"> Contacts Information </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="2"> Delivery </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3"> Payment </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="4"> Confirmation </v-stepper-step>
      </v-stepper-header>

      <v-form>
        <v-stepper-content step="1" class="mt-1">
          <v-container>
            <v-row>
              <v-col cols="5">
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="10"
                  label="First name"
                  required
                  solo
                >
                </v-text-field>

                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :counter="10"
                  label="Last name"
                  required
                  solo
                >
                </v-text-field>

                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  solo
                ></v-text-field>
                <v-text-field
                  v-model="phone"
                  :rules="phoneRules"
                  label="Phone"
                  required
                  solo
                ></v-text-field>
              </v-col>
              <v-col cols="7">
                <OrderList />
              </v-col>
            </v-row>
          </v-container>

          <v-btn color="primary" @click="step = 2"> Continue </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

          <v-btn color="primary" @click="step = 3"> Continue </v-btn>

          <v-btn text @click="step = 1"> Cancel </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

          <v-btn color="primary"> Continue </v-btn>

          <v-btn text> Cancel </v-btn>
        </v-stepper-content>
      </v-form>
    </v-stepper>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import OrderList from "@/components/OrderList.vue";

@Component({
  components: {
    OrderList,
  },
})
export default class extends Vue {
  step = 1;
  nextStep() {
    this.step += 1;
  }

  email = "";
  firstname = "";
  lastname = "";
  phone = "";

  valid = false;

  nameRules = [(v: string) => !!v || "Name is required"];

  emailRules = [
    (v: string) => !!v || "E-mail is required",
    (v: string) => /.+@.+/.test(v) || "E-mail must be valid",
  ];

  phoneRules = [
    (v: string) =>
      /^[+]?[(]?[0-9]{3}[)]?[-\s/.]?[0-9]{3}[-\s/.]?[0-9]{4,6}$/im.test(v) ||
      "Incorrect phone number",
  ];
}
</script>

<style lang="scss" scoped></style>
