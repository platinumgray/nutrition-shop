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
    selection: (state) => (source: keyof Product, value: string) => {
      console.log("🚀 ~ file: index.ts ~ line 65 ~ value", value);
      console.log("🚀 ~ file: index.ts ~ line 65 ~ source", source);
      return state.items.filter((x) => {
        if (value) {
          return x[source] === value;
        }
        return true;
      });
    },
  },
  actions: {
    add(product: Product) {
      const orderIndex = this.basket.findIndex((x) => x.item.id === product.id);
      if (orderIndex !== -1) {
        if (this.basket[orderIndex].amount < 100) {
          this.basket[orderIndex].amount += 1;
        }
        return;
      }

      this.basket.push({ item: product, amount: 1 });
    },
    remove(order: Order) {
      this.basket = this.basket.filter((x) => x.item.id !== order.item.id);
    },
    amountChange(order: Order, amount: number) {
      const orderIndex = this.basket.findIndex(
        (x) => x.item.id === order.item.id
      );
      if (orderIndex !== -1) {
        this.basket[orderIndex].amount = amount;
      }
    },
  },
  persist: {
    enabled: true,
  },
});

export { State, Product, Order };
