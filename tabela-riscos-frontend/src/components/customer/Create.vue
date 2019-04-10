<template>
   <div>
        <div class="col-md-12 form-wrapper">
          <h2> Create Customer </h2>
          <form id="create-post-form" @submit.prevent="createCustomer">
               <div class="form-group col-md-12">
                <label for="title"> Nome </label>
                <input type="text" id="name" v-model="name" name="title" class="form-control" placeholder="Nome">
               </div>

               <div class="form-group col-md-12">
                <label for="title"> Mal Mandados </label>
                <input type="number" id="col1" v-model="col1" name="title" class="form-control" placeholder="0">
               </div>

             <div class="form-group col-md-12">
                <label for="title"> Porta/Garagem Aberta </label>
                <input type="number" id="col2" v-model="col2" name="title" class="form-control" placeholder="0">
            </div>

            <div class="form-group col-md-12">
                <label for="title"> Sonecas </label>
                <input type="number" id="col3" v-model="col3" name="title" class="form-control" placeholder="0">
            </div>

            <div class="form-group col-md-12">
                <label for="title"> Asneiras </label>
                <input type="number" id="col4" v-model="col4" name="title" class="form-control" placeholder="0">
            </div>

              <div class="form-group col-md-12">
                  <label for="title"> Atrasos </label>
                  <input type="number" id="col5" v-model="col5" name="title" class="form-control" placeholder="0">
              </div>
               <div class="form-group col-md-12">
                  <label for="title"> Danf. Material </label>
                  <input type="number" id="col6" v-model="col6" name="title" class="form-control" placeholder="0">
              </div>
              <div class="form-group col-md-12">
                  <label for="title"> Risotos </label>
                  <input type="number" id="col7" v-model="col7" name="title" class="form-control" placeholder="0">
              </div>
              <div class="form-group col-md-4 pull-right">
                  <button class="btn btn-success" type="submit"> Adicionar </button>
              </div>          
          </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { server } from "../../helper";
import router from "../../router";
export default {
  data() {
    return {
      name: "",
      col1: "",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
      col7: ""
    };
  },
  methods: {
    createCustomer() {
      let customerData = {
        name: this.name,
        col1: this.col1,
        col2: this.col2,
        col3: this.col3,
        col4: this.col4,
        col5: this.col5,
        col6: this.col6,
        col7: this.col7
      };
      this.__submitToServer(customerData);
    },
    __submitToServer(data) {
      axios.post(`${server.baseURL}/customer/create`, data).then(data => {
        router.push({ name: "home" });
      });
    }
  }
};
</script>

