<template >
  <div class="pb-5" id="workers-administration">
    <div class="bg-light jumbotron mt-5">
      <h1 class="text-secondary">Administración de trabajadores</h1>
      <hr class="my-4">
    </div>
    <table class="table table-hover ml-3">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tipo de documento</th>
          <th scope="col">#Documento</th>
          <th scope="col">Fecha de expedición</th>
          <th scope="col">Nombre </th>
          <th scope="col">Apellidos </th>
          <th scope="col">Email </th>
          <th scope="col">Celular </th>
          <th scope="col">Acciones </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(worker, index) in workers" :key="worker.id">
          <th scope="row">{{index+1}}</th>
          <td>{{worker.documentType}}</td>
          <td>{{worker.documentNumber}}</td>
          <td>{{worker.expeditionName}}</td>
          <td>{{worker.firstName}}</td>
          <td>{{worker.lastName}}</td>
          <td>{{worker.email}}</td>
          <td>{{worker.cellphoneNumber}}</td>
          <td>{{worker.actions}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({

    data: () => ({
      workers: [{
          id: 1,
          documentType: "CC",
          documentNumber: "1024282023",
          expeditionName: "10/09/2020",
          firstName: "Mateo",
          lastName: "Peñaranda Díaz",
          email: "mateo_1999_7@outlook.es",
          cellphoneNumber: "313412322",
          actions: "others"
        },
        {
          id: 2,
          documentType: "CC",
          documentNumber: "8765432",
          expeditionName: "22/11/2020",
          firstName: "Juan camilo",
          lastName: "Ochoa Ramirez",
          email: "juan_oc@outlook.es",
          cellphoneNumber: "31245794",
          actions: "others"
        }
      ]
    }),

  });
</script>

<style scoped>
  .jumbotron {
    height: 160px;
  }

  table th,
  table td {
    color: #757575;
  }
</style>