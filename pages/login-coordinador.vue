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
            <div class="datos-login-coordinador"  v-if="loginSesion">
                
                 <form class="form-login-coordinador">
                    <h2> <strong>Inicio de Sesión</strong> </h2>
                    <div class="mb-4">
                        <label for="exampleInputCode" class="form-label"><strong>Código de coordinador</strong> </label>
                        <input type="text" class="form-control" id="exampleInputCode" placeholder="Escriba su código" @input="validandoUsuario()" required>
                        
                    </div>
                    <div class="mb-4">
                        <label for="exampleInputPassword1" class="form-label"><strong>Contraseña</strong> </label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Escriba su contraseña" @input="validandoUsuario()" required>
                        <p @click="mostrarPass()">Mostrar contraseña</p>
                    </div>
                    <div class="message-sesion" v-if="errorSesion">
                        <div class="alert alert-danger d-flex align-items-center" role="alert" style="padding-top:5px;padding-bottom:0px">
                            <p>
                                <i class="bi bi-exclamation-circle-fill" style="font-size: 1.5rem"></i>
                                Usuario o Contraseña incorrecta
                            </p>
                        </div>
                    </div>
                    <div align="center">
                        <button type="submit" class="btn btn-primary btn-lg" @click="ingresarUsuario()" >
                            <a :href="viewInicio?'http://localhost:3000/intranet-coordinador':'#'" style="color:white;text-decoration:none;">
                                Ingresar
                            </a> 
                        </button>
                        <p @click="loginSesion=false"><strong>¿Olvidaste tu contraseña?</strong></p>
                    </div>
                </form>
            </div>
            <div class="image-login-coordinador">
                <img src="@/assets/images/chicos-estudiando.jpg">
            </div>  
        </div>
 
    </div>
</template>
<script >
import {Component, Vue} from "nuxt-property-decorator"
import Cookies from 'universal-cookie'; //npm i universal-cookie

export default {

  data() {
    return {
      lista: [],
      codigoAlumno: '',
      pwAlumno: '',
      viewInicio:false,
      listaCoordinador:{
            id_coordinador:'',
            nombre:'',
            apellido: '',
            dni:'',
            correo:'',
            password:'',
            fecha_contrato:'',
            id_persona:''
        },
        errorSesion: false,
        loginSesion:true,
      }
    },

    components:{
            Component,
            Vue
    },

    methods:{
        getCoordinador:function(){
            this.$http.get("http://localhost:8088/backend-asistencia/coordinador.php")
              .then(respuesta => {
                 this.lista = respuesta.data
                 console.log(this.lista) })
              .catch(error => {console.log("error en el api") })
        },

        validandoUsuario(){
            this.codigoAlumno = document.getElementById("exampleInputCode").value;
            this.pwAlumno = document.getElementById("exampleInputPassword1").value;
        },

        ingresarUsuario(){
            this.viewInicio = false
            
            this.lista.forEach(value => {
                    if( this.codigoAlumno == value.id_coordinador && this.pwAlumno == value.password ){
                        this.viewInicio = true
                        this.listaCoordinador.id_coordinador = value.id_coordinador
                        this.listaCoordinador.nombre = value.nombre
                        this.listaCoordinador.apellido = value.apellido
                        this.listaCoordinador.correo = value.correo
                        this.listaCoordinador.dni = value.dni
                        this.listaCoordinador.password = value.password
                        this.listaCoordinador.fecha_contrato = value.fecha_contrato
                        this.listaCoordinador.id_persona = value.id_persona
                        
                        const cookies = new Cookies();
                        cookies.set('datas-usuario',this.listaCoordinador)
                        
                    }
            });
            if (this.codigoAlumno && this.pwAlumno && !this.viewInicio){
                this.errorSesion=true
            }
        },

        mostrarPass(){  

            if(this.loginSesion){
                var tipo = document.getElementById("exampleInputPassword1");
                if(tipo.type == "password"){
                    tipo.type = "text";
                }else{
                    tipo.type = "password";
                }
            }/*else{
                var tipo2 = document.getElementById("inputNewPass");
                if(tipo2.type == "password"){
                    tipo2.type = "text";
                }else{
                    tipo2.type = "password";
                }
            }*/
        }

    },
     created() {
        this.getCoordinador();
        
    },

    /*mounted(){
        var valor = document.getElementById("exampleInputCode").value;
        console.log('esto es valor ' + valor)
    }*/
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