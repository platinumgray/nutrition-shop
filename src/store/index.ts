import { defineStore } from "pinia";
import { items } from "../data.json";

class Product {
  name: string;
  price: string;
  description: string;
  img: string;
  featured: boolean;
  best: boolean;
  category: string;
  brand: string;
  id: string;

  constructor() {
    this.name = "";
    this.price = "";
    this.description = "";
    this.img = "";
    this.featured = false;
    this.best = false;
    this.category = "";
    this.brand = "";
    this.id = "";
  }
}

class Order {
  item: Product;
  amount: number;

  constructor() {
    this.item = new Product();
    this.amount = 0;
  }
}

interface State {
  items: Array<Product>;
  basket: Array<Order>;
  categories: Array<string>;
  brands: Array<string>;
}

function reduceFields(arr: Array<Product>, field: keyof Product) {
  return arr.reduce((acc: Array<string>, item: Product): Array<string> => {
    const value = item[field];
    if (typeof value !== "string") return acc;
    if (acc.includes(value)) {
      return acc;
    }

    return [...acc, value];
  }, []);
}
export const useStore = defineStore("store", {
  state: (): State => ({
    items: items,
    basket: [],
    categories: reduceFields(items, "category"),
    brands: reduceFields(items, "brand"),
  }),
  getters: {
    selection: (state) => (source: keyof Product, value: string) =>
      state.items.filter((x) => {
        if (value) {
          return x[source] === value;
        }
        return true;
      }),
  },
  actions: {
    add(product: Product) {
      this.basket.push({ item: product, amount: 1 });
    },
  },
  persist: {
    enabled: true,
  },
});

export { State, Product, Order };
