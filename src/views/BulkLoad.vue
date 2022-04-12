<template>
  <div id="bulk-load">
    <div class="bg-light jumbotron mt-5">
      <h1 class="text-secondary">Carga masiva</h1>
      <hr class="my-4">
      <p class="text-muted">Cargue su archivo excel.</p>
    </div>
    <div class="custom-file w-50 ml-3">
      <input accept=".xls,.xlsx,.xltx,.xlt" type="file" class="custom-file-input col-lg-3" id="customFileLang"
        lang="es">
      <label class="custom-file-label" for="customFileLang">Seleccionar Archivo</label>
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
    height: 200px;
  }

#bulk-load{
padding-bottom: 100px;
}
  
</style>