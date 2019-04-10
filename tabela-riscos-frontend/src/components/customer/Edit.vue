<template>
   <div>
        <h4 class="text-center mt-20">
         <small>
         <button class="btn btn-success" v-on:click="navigate()"> View All Customers </button>
         </small>
        </h4>

        <div class="col-md-12 form-wrapper">
          <h2> Editar Estagiario </h2>
          <form id="create-post-form" @submit.prevent="editCustomer">
               <div class="form-group col-md-12">
                <label for="title"> Nome </label>
                <input type="title" id="name" v-model="customer.name" name="title" class="form-control" placeholder="Nome">
               </div>

               <div class="form-group col-md-12">
                <label for="title"> Mal Mandados</label>
                <input type="number" id="col1" v-model="customer.col1" :min="customer.col1" name="title" class="form-control" placeholder="0">
               </div>

            <div class="form-group col-md-12">
                <label for="title"> Porta/Garagem Aberta </label>
                <input type="number" id="col2" v-model="customer.col2" :min="customer.col2" name="title" class="form-control" placeholder="0">
            </div>

            <div class="form-group col-md-12">
                <label for="title"> Sonecas </label>
                <input type="number" id="col3" v-model="customer.col3" :min="customer.col3" name="title" class="form-control" placeholder="0">
            </div>

            <div class="form-group col-md-12">
                <label for="title"> Asneiras </label>
                <input type="number" id="col4" v-model="customer.col4" :min="customer.col4" name="title" class="form-control" placeholder="0">
            </div>

              <div class="form-group col-md-12">
                  <label for="title"> Atrasos </label>
                  <input type="number" id="col5" v-model="customer.col5"  :min="customer.col5" name="title" class="form-control" placeholder="0">
              </div>
              <div class="form-group col-md-12">
                  <label for="title"> Danf. Material </label>
                  <input type="number" id="col6" v-model="customer.col6" :min="customer.col5" name="title" class="form-control" placeholder="0">
              </div>
              <div class="form-group col-md-12">
                  <label for="title"> Risotos </label>
                  <input type="number" id="col7" v-model="customer.col7" :min="customer.col7" name="title" class="form-control" placeholder="0">
              </div>

              <div class="form-group col-md-4 pull-right">
                  <button class="btn btn-success" type="submit"> Editar </button>
              </div>          
          </form>
        </div>
    </div>
</template>

<script>
import { server } from "../../helper";
import axios from "axios";
import router from "../../router";
export default {
  data() {
    return {
      id: 0,
      customer: {}
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getCustomer();
  },
  methods: {
    editCustomer() {
      let customerData = {
        name: this.customer.name,
        col1: this.customer.col1,
        col2: this.customer.col2,
        col3: this.customer.col3,
        col4: this.customer.col4,
        col5: this.customer.col5,
        col6: this.customer.col6,
        col7: this.customer.col7
      };

      axios
        .put(
          `${server.baseURL}/customer/update?customerID=${this.id}`,
          customerData
        )
        .then(data => {
          router.push({ name: "home" });
        });
    },
    getCustomer() {
      axios
        .get(`${server.baseURL}/customer/customer/${this.id}`)
        .then(data => (this.customer = data.data));
    },
    navigate() {
      router.go(-1);
    }
  }
};
</script>

