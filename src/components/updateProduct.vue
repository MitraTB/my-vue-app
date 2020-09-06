<template>
    <div>
        <b-button @click="modalShow = !modalShow" variant="primary"><i class="far fa-edit"></i></b-button>
        <b-modal v-model="modalShow" title="Edit Product"
      @show="showModal"
      @hidden="resetModal"
      @ok="handleOk">
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
      </b-modal>
    </div>
</template>
<script>
export default {
    name:"updateProduct",
    props:['product'],
    data(){
        return{
            modalShow:false,
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
        showModal(){
            this.form={
                name:this.$props.product.name,
                price: this.$props.product.price.split('$')[1],
                brand: this.$props.product.brand,
                inventoryStatus: this.$props.product.inventoryStatus.toString()
            }
        },
        resetModal(){
            console.log('modal closed')
            this.form={};
        },
        async handleOk(bvModalEvt){
            bvModalEvt.preventDefault();
            this.submitted = true;
            let result = await this.$validator.validate();
            if(result){
                this.$emit('updateProduct' , {
                    name:this.form.name,
                    price: '$' + this.form.price,
                    brand: this.form.brand,
                    inventoryStatus :this.form.inventoryStatus === 'true',
                    id: this.$props.product.id
                });
                this.modalShow = false;
                this.submitted = false;
            }
        }
    }
}
</script>
<style>

</style>