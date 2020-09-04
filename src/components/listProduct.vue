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
      </b-card>
    </b-card-group>
      </b-card>
    </div>
  </b-col>
</template>
<script>
export default {
    props:['products']
}
</script>
<style>

</style>