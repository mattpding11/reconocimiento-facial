<template>
  <div>
    <div v-show="false" id="login">
      <Login/>
    </div> 
    <div v-show="true">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/"><img src="./assets/logo.png" width="80px" height="80px" alt="Logo" title="404 Not Found">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/bulk-load">Carga masiva</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/enrollment">Enrolamiento</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/access-control">Control de acceso</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/output-control">Control de salida</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/monitoring">Monitoreo</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/workers-administration">Administración de trabajdores</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
      <router-view />
    <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import Footer from '@/components/Footer.vue';
import Login from './views/Login.vue';

  export default {
    components: {
      Footer,
      Login,
    }
  }
</script>

<style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  .navbar-nav li {
    margin-left: 20px;
  }

  .navbar-light .navbar-nav .nav-link {
    color: #00b0ff;
  }

  .navbar-light .navbar-nav .nav-link:hover {
    color: #00aeffb6;
  }

  #nav a.router-link-exact-active {
    font-weight: bold;
    color: #00b0ff;
  }
</style>