<template>
  <div id="output-control">
    <div class="bg-light jumbotron mt-5">
      <h1 class="text-secondary">Control de salida</h1>
      <hr class="my-4">
    </div>

    <div class="d-flex flex-wrap mt-5 ml-3">

      <img src="https://docs.aws.amazon.com/es_es/rekognition/latest/dg/images/landmarkface.png"
        style="height:200px;width:200px">
      <img src="https://docs.aws.amazon.com/es_es/rekognition/latest/dg/images/landmarkface.png"
        style="height:200px;width:200px;margin-left: 100px;">
    </div>


    <div class="mt-5 ml-3">

    <button type="button" class="btn btn-success mb-2 d-block" 
    ><i class="fas fa-redo-alt"/></button>

    <button type="button" class="btn btn-primary mb-2" style="background-color:#00b0ff;">Validar</button>

    <button type="button" class="btn btn-danger mb-2 ml-5" >Cancelar</button>

    </div>
   
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({

    data: () => ({
    }),

  });
</script>

<style scoped>
  .jumbotron {
    height: 160px;
  }
</style>