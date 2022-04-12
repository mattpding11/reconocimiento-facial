<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/"><img src="../assets/logo.png" width="80px" height="80px" alt="Logo" title="404 Not Found">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                    <router-link class="nav-link" to="#">Enrolamiento</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="#">Control de acceso</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="#">Control de salida</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="#">Monitoreo</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="#">Administración de trabajdores</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
    .navbar-nav li {
        margin-left: 20px;
    }

    .navbar-light .navbar-nav .nav-link {
        color: #00b0ff;
    }

    .navbar-light .navbar-nav .nav-link:hover {
        color: #00aeffb6;
    }

    nav .router-link-exact-active {
        font-weight: bold;
        color: #00b0ff;
    }
</style>