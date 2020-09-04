<template>
  <b-col md="4" class="m-3">
    <div>
      <b-card header="Add Product">
        <b-card-body>
            <b-form autocomplete="off">

                <b-form-group label="Name">
                <b-form-input v-validate="{required:true, min:4 }" id="name"  name ="name" v-model="form.name" trim></b-form-input>
                <div v-if="submitted" class="error-message">{{ errors.first('name') }}</div>
                </b-form-group>

                <b-form-group label="Price">
                <b-form-input v-validate="{required:true, numeric:true}" id="price"  name="price" v-model="form.price" trim></b-form-input>
                <div v-if="submitted" class="error-message">{{ errors.first('price') }}</div>
                </b-form-group>

                <b-form-group label="Brand">
                <b-form-input v-validate="{required:true}" id="brand" name="brand" v-model="form.brand" trim></b-form-input>
                <div v-if="submitted" class="error-message">{{ errors.first('brand') }}</div>
                </b-form-group>

                <b-form-group label="Inventory?">
                <b-form-radio v-validate="{required:true}" name="inventoryStatus" value="true" v-model="form.inventoryStatus">In Stock</b-form-radio>
                <b-form-radio  name="inventoryStatus" value="false" v-model="form.inventoryStatus">Out Of Stock</b-form-radio>
                <div v-if="submitted" class="error-message">{{ errors.first('invetoryStatus') }}</div>
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
            },
          submitted:false
        }
    },
    methods:{
        async addProduct(){
          this.submitted =true;
          let result = await this.$validator.validate();
          console.log("product" , this.form);
          if (result){
            this.$emit('addProduct', {
              name:this.form.name,
              price:'$' + this.form.price,
              brand:this.form.brand,
              inventoryStatus: this.form.inventoryStatus === 'true'
            });
             this.form={
                name:'',
                price:'',
                brand:'',
                inventoryStatus:''
            };
          this.submitted=false
          }
        }
    }
};
</script>
<style>
.error-message{
  color:red;
}
</style>
