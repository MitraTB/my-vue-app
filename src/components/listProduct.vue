<template>
  <b-col md="4" class="m-3">
    <div>
      <b-card header="List Product">
        <b-card-group deck>
        <b-card style="min-width:50%" class="m-3" :border-variant= "product.inventoryStatus? 'success' : 'danger'" align="center" v-for="product in products" :key="product.id" >
        <b-badge :variant="product.inventoryStatus? 'success' : 'danger'" class="mb-3">{{ product.inventoryStatus? 'In Stock' : 'Out Of Stock'}}</b-badge>
        <b-card-text><strong>Name : </strong>{{product.name}}</b-card-text>
        <b-card-text><strong>Price : </strong>{{product.price}}</b-card-text>
        <b-card-text><strong>Brand : </strong>{{product.brand}}</b-card-text>
        <hr/>
        <b-row>
          <b-col><b-button variant="danger" @click="deleteProduct(product.id)"><i class="fas fa-trash-alt"></i></b-button></b-col>
          <b-col><UpdateProduct :product="product" @updateProduct="updateProduct"/></b-col>
        </b-row>
      </b-card>
    </b-card-group>
      </b-card>
    </div>
  </b-col>
</template>
<script>
import UpdateProduct from './updateProduct.vue';
export default {
    components:{
      UpdateProduct
    },
    props:['products'],
    methods:{
      deleteProduct(productId){
        this.$emit('deleteProduct' , productId);
      },
      UpdateProduct(updatedProduct){
        this.$emit('updateProduct', updatedProduct)
      }
    }
}
</script>
<style>

</style>