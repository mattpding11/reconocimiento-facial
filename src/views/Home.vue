<template>
  <div id="home">
    <div class="bg-light jumbotron mt-5">
      <h1 class="text-secondary">Inicio</h1>
      <hr class="my-4">
    </div>
    
    <div class="d-flex flex-wrap cards">
      <router-link class="nav-link" to="/bulk-load">
      <div class="card text-center">
        <div class="card-body">
          <h1> <i class="fas fa-file-upload"></i></h1>
          <h5 class="card-title">Carga masiva</h5>
        </div>
      </div>
      </router-link>
      
      <router-link class="nav-link" to="/enrollment">
      <div class="card text-center" >
        <div class="card-body">
          <h1> <i class="fas fa-camera"></i></h1>
          <h5 class="card-title">Enrolamiento</h5>
        </div>
      </div>
      </router-link>

            <router-link class="nav-link" to="/access-control">
      <div class="card text-center" >
        <div class="card-body">
          <h1> <i class="fas fa-sign-in-alt"></i></h1>
          <h5 class="card-title">Control de acceso</h5>
        </div>
      </div>
      </router-link>

        <router-link class="nav-link" to="/output-control">
      <div class="card text-center">
        <div class="card-body">
          <h1> <i class="fas fa-sign-out-alt"></i></h1>
          <h5 class="card-title">Control de salida</h5>
        </div>
      </div>
      </router-link>
      
      <router-link class="nav-link" to="/monitoring">
      <div class="card text-center" >
        <div class="card-body">
          <h1> <i class="fas fa-chart-bar"></i></h1>
          <h5 class="card-title">Monitoreo</h5>
        </div>
      </div>
      </router-link>

            <router-link class="nav-link" to="/workers-administration">
      <div class="card text-center" >
        <div class="card-body">
          <h1> <i class="fas fa-clipboard-list"></i></h1>
          <h5 class="card-title">Administración de trabajadores</h5>
        </div>
      </div>
      </router-link>
      
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'Home',
  }
</script>
<style scoped>
  .jumbotron {
    height: 150px;
  }

  .card {
    width: 18rem;
    margin: 50px;
  }

   .card:hover{
     background-color:#eeeeee ;
     transition-duration: 0.7s;
    -webkit-box-shadow: 0px 6px 8px -3px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 6px 8px -3px rgba(0,0,0,0.75);
    box-shadow: 0px 6px 8px -3px rgba(0,0,0,0.75);
  }

  .card-title {
    color: #757575;
  }

  .fas {
    color: #2196f3;
  }
</style>