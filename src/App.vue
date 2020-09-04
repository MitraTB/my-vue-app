<template>
  <div id="app">
    <AppHeader />
    <b-container>
      <b-row class="justify-content-center">
        <AddProduct @addProduct="addProduct" />
        <ListProduct :products="productList" />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AppHeader from "./components/vueAppHeader.vue";
import AddProduct from "./components/addProduct.vue";
import ListProduct from "./components/listProduct.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    AppHeader,
    AddProduct,
    ListProduct,
  },
  data() {
    return {
      productList: [],
    };
  },
  methods: {
    async getProductList() {
      try {
        let result = await axios.get("http://localhost:3000/products");
        console.log("Result", result.data);
        this.productList = result.data;
      } catch (error) {
        console.log("Error", error);
      }
    },
    async addProduct(newProduct) {
      console.log("newproduct", newProduct);
      try {
        await axios.post("http://localhost:3000/products", newProduct);
        this.getProductList();
      } catch (error) {
        console.log("Error", error);
      }
    },
  },
  mounted() {
    this.getProductList();
  },
};
</script>

<style></style>
