<template>
  <b-col md="4" class="m-3">
    <div>
      <b-card title="Add Product">
        <b-card-body>
            <b-form autocomplete="off">

                <b-form-group label="Name">
                <b-form-input v-validate="{required:true, min:4 }" id="name"  name ="name" v-model="form.name" trim></b-form-input>
                {{ errors.first('name') }}
                </b-form-group>

                <b-form-group label="Price">
                <b-form-input id="price"  name="price" v-model="form.price" trim></b-form-input>
               
                </b-form-group>

                <b-form-group label="Brand">
                <b-form-input id="brand" name="brand" v-model="form.brand" trim></b-form-input>
                </b-form-group>

                <b-form-group label="Inventory?">
                <b-form-radio  name="invetoryStatus" value="true" v-model="form.inventoryStatus">In Stock</b-form-radio>
                <b-form-radio  name="inventoryStatus" value="false" v-model="form.inventoryStatus">Out Of Stock</b-form-radio>
                </b-form-group>

    
            </b-form>
        </b-card-body>
        <b-button href="#" variant="primary" v-on:click="addProduct">Add Product</b-button>
      </b-card>
    </div>
  </b-col>
</template>
<script>
export default {
    data(){
        return{
            form:{
                name:'',
                price:'',
                brand:'',
                inventoryStatus:''
            }
        }
    },
    methods:{
        addProduct(){
            console.log("product" , this.form);
        }
    }
};
</script>
<style></style>
