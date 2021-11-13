<template>
    
    <div class="login-coordinador">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        <nav class="navbar navbar-dark bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" > 
                    <!--<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon" style="color:#ffff"></span>
                    </button>-->
                    <strong>
                        INTRANET COORDINADOR
                    </strong>
                     
                </a>
                <button class="btn btn-warning d-flex" type="button" style="cursor:default"><strong>Grupo de estudios GOLDBACH</strong> </button>
            </div>
        </nav>
        <div class="container-login-coordinador">
            <div class="datos-login-coordinador">
                
                 <form class="form-login-coordinador">
                    <h2> <strong>Inicio de Sesión</strong> </h2>
                    <div class="mb-4">
                        <label for="exampleInputEmail1" class="form-label"><strong>Código de coordinador</strong> </label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Escriba el código">
                        
                    </div>
                    <div class="mb-4">
                        <label for="exampleInputPassword1" class="form-label"><strong>Contraseña</strong> </label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Escriba su contraseña">
                    </div>
                    <div align="center">
                        <button type="submit" class="btn btn-primary btn-lg" @click="viewIntranet()">
                            <a href="http://localhost:3000/intranet-coordinador" style="color:white;text-decoration:none;">
                                Ingresar
                            </a>
                            
                        </button>
                        <p><strong>¿Olvidaste tu contraseña?</strong></p>
                    </div>
                    
                </form>
            </div>
            <div class="image-login-coordinador">
                <img src="@/assets/images/chicos-estudiando.jpg">
            </div>  
        </div>
 
    </div>
</template>
<script lang="ts">

import {Component, Vue } from "nuxt-property-decorator";

@Component({
    components: {
        
            
    }
})

export default class extends Vue {
    viewIntranet(){
        window.open('', '_self');
        
    }

}
</script>
<style>
    
    .container-login-coordinador{
        display: flex;
        
        height: 700px;
    }

    .datos-login-coordinador{
        width: 50%;
        background: #ffe599;
        display: flex;
        justify-content: center;

        
    }

    .form-login-coordinador{
        width: 60%;
        padding-top: 100px;
    }

    .form-login-coordinador h2{
        text-align: center;
        margin-bottom: 40px;
    }

    .form-login-coordinador button{
        margin: 10px;
    }

    .form-login-coordinador p{
        cursor: pointer;
    }

    .image-login-coordinador{
        width: 50%;
    }
    .image-login-coordinador img{
        width: 100%;
        height: 700px;
    }

</style>