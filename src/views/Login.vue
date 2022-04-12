<template>
  <div id="login">
    <form method="post">
      <img class="rounded mx-auto d-block logo" src="../assets/logo.png" />
      <p>Iniciar sesión</p>
      <div class="form-group">
      <input type="text" placeholder="Usuario">
      </div>

      <div class="form-group mt-3">
            <input type="password" placeholder="Contraseña">
      </div>
      <div class="col-md-12 text-center">
             <input type="submit" value="Ingresar">
      </div>

    </form>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'Login',
  }
</script>
<style scoped>
body{

    margin: 0;
    padding: 0;
    font-family: 'Gelasio', serif;
    text-align: center;
    background-color:#eee;
   /* background-image: url("images/c.jpg");*/
 
}

#login{
margin-top: 100px;
}

input[type="text"],input[type="password"]{
    outline: none;
    padding: 17px;
    display: block;
    width: 350px;
    border-radius: 3px;
    border: 1px solid #40c4ff;
    margin: 20px auto;
    color: #616161;
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color:#880505;
  box-shadow: 0 0 0px 1000px  #E0E0E0 inset;
  transition: background-color 5000s ease-in-out 0s;
}

body a{
    text-decoration: none;
}

p{
  color: #00b0ff;
  font-weight: bold;
  font-size: 35px;
  text-align: center;
}

input[type="submit"]{
    padding: 10px;
    color:#fff;
    background: #00b0ff;
    width: 320px;
    margin-top: 0;
    border: 0px;
    border-radius: 5px;
    cursor: pointer;
    outline:none;
}


input[type="submit"]:hover{
    background:#00aeffc7;

}

input[type="submit"]:active{
    background:#02a6f1;

}


#logo_lobby{
    float: center;
    width: 130px; 
    height: 130px;
    margin-left: 285px;
    
}


button{
    padding: 10px;
    color:#fff;
    background: #5e5e5e;
    width: 200px;
    margin: 10px ;
    margin-top: 10px;
    border: 0;
    border-radius: 3px;
    cursor: pointer;
    outline: none;
}

button:hover{
    background: #505050;
}

.logo{
  width: 150px;
}

</style>