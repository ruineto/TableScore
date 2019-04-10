<template>
    <div class="container-fluid">

      <div class="text-center">
        <h1>Tabelas dos Riscos</h1>
       <p> TRIFIDA</p>

       <div v-if="customers.length === 0">
            <h2> Estagiarios não encontrados </h2>
        </div>
      </div>
       
      <!-- <div class="row"> -->
        <div class="">
            <table class="table table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">Mal Mandados</th>
                  <th scope="col">Porta/Garagem Aberta</th>
                  <th scope="col">Sonecas</th>
                  <th scope="col">Asneiras</th>
                  <th scope="col">Atrasos</th>
                  <th scope="col">Danificar Material</th>
                  <th scope="col">Risotas</th>
                  <th scope="col"><strong>Total</strong></th>
                  <th scope="col">Alterar</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="customer in customers" :key="customer._id">
                  <td>{{ customer.name }}</td>
                  <td>{{ customer.col1 }}</td>
                  <td>{{ customer.col2 }}</td>
                  <td>{{ customer.col3 }}</td>
                  <td>{{ customer.col4 }}</td>
                  <td>{{ customer.col5 }}</td>
                  <td>{{ customer.col6 }}</td>
                  <td>{{ customer.col7 }}</td>
                  <td id="total" ><strong>{{ Number(customer.col1) + Number(customer.col2) + Number(customer.col3) + Number(customer.col4) + Number(customer.col5) + Number(customer.col6) + Number(customer.col7)}}</strong></td>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group" style="margin-bottom: 20px;">
                                  <router-link :to="{name: 'Edit', params: {id: customer._id}}" class="btn btn-sm btn-outline-secondary">Editar </router-link>
                                  <!--<button class="btn btn-sm btn-outline-secondary" v-on:click="deleteCustomer(customer._id)">Eliminar</button>-->
                                </div>
                              </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      <!-- </div> -->
    </div>
</template>

<script>
import { server } from "../helper";
import axios from "axios";

export default {
  data() {
    return {
      customers: []
    };
  },
  created() {
    this.fetchCustomers();
  },
  methods: {
    fetchCustomers() {
      axios
        .get(`${server.baseURL}/customer/customers`)
        .then(data => (this.customers = data.data));
    },
    total() {

    },
    deleteCustomer(id) {
      axios
        .delete(`${server.baseURL}/customer/delete?customerID=${id}`)
        .then(data => {
          console.log(data);
          window.location.reload();
        });
    }
  }
};
</script>

<style>
#total {
  text-align: center;
  color: #ff0000;
}
.td {
  valign: center;
}
</style>
