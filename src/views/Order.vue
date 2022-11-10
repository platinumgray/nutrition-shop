<template>
  <v-container>
    <v-sheet color="grey darken-1" class="py-3 px-3">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="5">
              <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="First name" required solo>
              </v-text-field>

              <v-text-field v-model="lastname" :rules="nameRules" :counter="10" label="Last name" required solo>
              </v-text-field>

              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required solo></v-text-field>
              <v-text-field v-model="phone" :rules="phoneRules" label="Phone" required solo></v-text-field>


              <v-autocomplete v-model="warehouse" :items="items" :loading="isLoading" :search-input.sync="search"
                item-text="fullAddress" label="Nova Poshta Warehouse" solo>
              </v-autocomplete>
            </v-col>
            <v-col cols="7">
              <OrderList />
            </v-col>
          </v-row>
        </v-container>

        <v-btn color="primary" @click="submit"> Continue </v-btn>
      </v-form>
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import OrderList from "@/components/OrderList.vue";
import axios from "axios";

interface Warehouse {
  CityDescription: string;
  Description: string;

  fullAddress: string;
}

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
  warehouse = null;

  search = null;
  entries = [];

  isLoading = false;
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

  get items() {
    return this.entries.map((x: Warehouse) => {
      x.fullAddress = `${x.Description}, ${x.CityDescription}`;
      return x;
    });
  }

  @Watch("search")
  watchSearch() {
    // Items have already been requested
    if (this.isLoading) return;

    this.isLoading = true;

    // Lazily load input items
    axios
      .post("https://api.novaposhta.ua/v2.0/json/", {
        apiKey: process.env.VUE_APP_NP,
        modelName: "Address",
        calledMethod: "getWarehouses",
        methodProperties: {
          Page: "1",
          Limit: "50",
          Language: "UA",
          FindByString: this.search,
        },
      })
      .then(({ data: { data } }) => {
        this.entries = data;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => (this.isLoading = false));
  }

  submit() {
    console.log(
      this
    )
  }
}
</script>

<style lang="scss" scoped>

</style>
