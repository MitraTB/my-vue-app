<template>
  <div id="app">
    <AppHeader />
    <b-container>
      <b-row class="justify-content-center">
        <AddProduct />
        <ListProduct />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AppHeader from "./components/vueAppHeader.vue";
import AddProduct from "./components/addProduct.vue";
import ListProduct from "./components/listProduct.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    AddProduct,
    ListProduct,
  },
};
</script>

<style></style>
