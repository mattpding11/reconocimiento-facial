<template>
  <div id="enrollment">
    <div class="bg-light jumbotron mt-5">
      <h1 class="text-secondary">Enrolamiento</h1>
      <hr class="my-4">
    </div>


    <form class="ml-3">
      <p class="h2 text-muted">Identificación</p>

      <div class="form-group mt-5">
        <label for="exampleFormControlSelect1">Tipo de identificación</label>
        <select v-model="documentType" class="form-control w-50 " id="exampleFormControlSelect1">
         <option value="" hidden>Selecciona una opción</option>
          <option>CC</option>
          <option>TI</option>
          <option>CE</option>
          <option>RC</option>
          <option >PA</option>
        </select>
      </div>
      <div class="form-group mt-5">
        <label for="exampleFormControlInput1">Número de identificación</label>
        <input v-model="documentNumber" type="number" class="form-control w-50 " id="exampleFormControlInput1" placeholder="Documento">
      </div>
      <p class="h2 text-muted mt-5">Reconocimiento facial</p>

      <div class="d-flex flex-wrap mt-5">

        <img src="https://docs.aws.amazon.com/es_es/rekognition/latest/dg/images/landmarkface.png"
          style="height:200px;width:200px">
        <img src="https://docs.aws.amazon.com/es_es/rekognition/latest/dg/images/landmarkface.png"
          style="height:200px;width:200px;margin-left: 100px;">

      </div>
      <hr>
      <button type="submit" class="btn btn-primary btn-lg mb-2 mt-2" style="background-color:#00b0ff;">Enrolar</button>

    </form>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({

    data: () => ({
      documentType: '',
      documentNumber: ''
    }),

  });
</script>

<style scoped>
  .jumbotron {
    height: 160px;

  }
</style>