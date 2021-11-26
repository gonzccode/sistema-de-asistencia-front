<template>
    
    <div class="login-alumno">
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
                        INTRANET ALUMNO
                    </strong>
                     
                </a>
                <button class="btn btn-warning d-flex" type="button" style="cursor:default"><strong>Grupo de estudios GOLDBACH</strong> </button>
            </div>
        </nav>
        <div class="container-login-alumno">
            <div class="datos-login-alumno" v-if="loginSesion">
                
                 <form class="form-login-alumno">
                    <h2> <strong>Inicio de Sesión</strong> </h2>
                    <div class="mb-4">
                        <label for="exampleInputCode" class="form-label"><strong>Código de alumno</strong> </label>
                        <input type="text" class="form-control" id="exampleInputCode" placeholder="Escriba su código" @input="validandoUsuario()" required>
                        
                    </div>
                    <div class="mb-4">
                        <label for="exampleInputPassword1" class="form-label"><strong>Contraseña</strong> </label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Escriba su contraseña" @input="validandoUsuario()" required>
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
                            <a :href="viewInicio?'http://localhost:3000/intranet-alumno':'#error'" style="color:white;text-decoration:none;">
                                Ingresar
                            </a>
                            
                        </button>
                        <p @click="loginSesion=false"><strong>¿Olvidaste tu contraseña?</strong></p>
                    </div>
                    
                </form>
            </div>
            <div class="fogot-password datos-login-alumno" v-if="!loginSesion">
                
                <form class="form-new-pass form-login-alumno" id="formulario" @submit="saveForm" >
                    <div class="volverPage" align="left" style="margin-bottom:20px">
                        
                        <a href="http://localhost:3000/login-alumno" style="color:black;text-decoration:none;cursor:pointer">
                            <strong> <i class="bi bi-chevron-double-left" style="font-size: 1.5rem"></i> Volver</strong>
                        </a>
                    </div>
                    <h2> <strong>Cambiar contraseña</strong> </h2>
                    <div class="mb-4">
                        <label class="form-label"><strong>DNI de alumno</strong> </label>
                        <!--<input type="text" class="form-control" id="inputDni" name="dniAlumno" placeholder="Escriba su dni" @input="inputUsuario()" :disabled="newPass"  required>-->
                        <input type="text" class="form-control" id="inputDni" name="dniAlumno" placeholder="Escriba su dni" :disabled="newPass" required>
                    </div>
                    <div class="mb-4">
                        <label class="form-label"><strong>Nueva Contraseña</strong> </label>
                        <!--<input type="password" class="form-control" id="inputNewPass" name="contraseña" placeholder="Escriba su nueva contraseña" @input="inputUsuario()" required>-->
                        <input type="password" class="form-control" id="inputNewPass" name="contraseña" placeholder="Escriba su nueva contraseña" :disabled="newPass" required>
                    </div>
                    <div class="message-sesion" v-if="errorDni && !savePass">
                        <div class="alert alert-danger d-flex align-items-center" role="alert" style="padding-top:5px;padding-bottom:0px">
                            <p>
                                <i class="bi bi-exclamation-circle-fill" style="font-size: 1.5rem"></i>
                                No se encontró un usuario
                            </p>
                        </div>
                    </div>
                    <div class="message-sesion" v-if="!errorDni && savePass">
                        <div class="alert alert-success d-flex align-items-center" role="alert" style="padding-top:5px;padding-bottom:0px">
                            <p>
                                <i class="bi bi-check-circle-fill" style="font-size: 1.5rem"></i>
                                Cambio exitoso
                            </p>
                        </div>
                    </div>
                    <div align="center">
                        <!--<button class="btn btn-primary btn-lg" @click="validarDni()"  v-if="!newPass">
                            <a :href="viewInicio?'http://localhost:3000/intranet-alumno':'#'" style="color:white;text-decoration:none;">
                                Validar
                            </a>
                        </button>-->
                        <button type="submit" class="btn btn-primary btn-lg">
                            Guardar
                        </button>
                    </div>
                    
                </form>
                
            </div>
            <div class="image-login-alumno">
                <img src="@/assets/images/chicos-estudiando.jpg">
            </div>  
        </div>
        
 
    </div>
</template>
<script >
import {Component, Vue} from "nuxt-property-decorator"
//import func from 'vue-editor-bridge'

export default {

  data() {
    return {
        lista: [],
        codigoAlumno: '',
        pwAlumno: '',
        viewInicio:false,
        errorSesion: false,
        loginSesion:true,
        newPass: false,
        dniAlumno:'',
        newPassword:'',
        errorDni:false,
        savePass: false,
        idAlumno: ''
            
      }
    },

    components:{
            Component,
            Vue
    },

    

    methods:{
        getAlumno:function(){
            this.$http.get("http://localhost:8088/backend-asistencia/alumno.php")
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
                    if( this.codigoAlumno == value.id_alumno && this.pwAlumno == value.password ){
                        this.viewInicio = true
                        console.log('se valido usuario')
                    }
            });
            if (this.codigoAlumno && this.pwAlumno && !this.viewInicio){
                this.errorSesion=true
            }
            
        },

        /*inputUsuario(){
            this.dniAlumno = document.getElementById("inputDni").value
            if(this.newPass){
                this.newPassword = document.getElementById("inputNewPass").value
                console.log('this.newpass' + this.newPassword)
            }

        },*/

        validarDni(){
            this.newPass = false
            this.lista.forEach(value => {
                    if( this.dniAlumno == value.dni){
                        this.newPass = true
                        this.errorDni=false
                        this.idAlumno=value.id_alumno
                        console.log('se valido dni', this.idAlumno)
                    }
            });
            //this.ingresarUsuario()
            if(this.dniAlumno && !this.newPass){
                this.errorDni=true
                this.savePass=false
                this.newPass=true
            }
        },

        /*saveNewPass(){
            fetch('http://localhost:8088/backend-asistencia/alumno-post.php',{
                method: 'POST', 
                body:{dniAlumno:this.dniAlumno,password:this.newPassword}
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                }) 
        },*/

        saveForm:function(e){
            e.preventDefault();
            var formulario = document.getElementById('formulario')
            var datos = new FormData(formulario)
            this.savePass=true
            //validar dni
            this.dniAlumno = datos.get('dniAlumno')
            this.validarDni()
            console.log('despues de validar', this.idAlumno)
            console.log('esto es contraseña', datos.get('contraseña'))
            let dniAlumno = datos.get('dniAlumno')
            let newPassword = datos.get('contraseña')
            let idAlumno = this.idAlumno
            const obj = {idAlumno,dniAlumno,newPassword}
            if(!this.errorDni && this.savePass){
                this.$http.post('http://localhost:8088/backend-asistencia/alumno-post.php',obj)
                    .then(respuesta => {
                        console.log('entro respuesta',respuesta.data)
                        
                    })
                    .catch(error => {
                        console.log('error del post en frontend', error)
                    })
                /*fetch('http://localhost:8088/backend-asistencia/alumno-post.php',{
                    method: 'POST', 
                    headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body:datos

                })
                    .then(res => res.text())
                    .then(data => {

                        console.log(data)
                    }) */
            }
            
        }
    },
     created() {
        this.getAlumno();
        
    },
}    


</script>

<style>
    
    .container-login-alumno{
        display: flex;
        
        height: 700px;
    }

    .datos-login-alumno{
        width: 50%;
        background: #ffe599;
        display: flex;
        justify-content: center;

        
    }

    .form-login-alumno{
        width: 60%;
        padding-top: 100px;
    }

    .form-login-alumno h2{
        text-align: center;
        margin-bottom: 40px;
    }

    .form-login-alumno button{
        margin: 10px;
    }

    .form-login-alumno p{
        cursor: pointer;
    }

    .image-login-alumno{
        width: 50%;
    }
    .image-login-alumno img{
        width: 100%;
        height: 700px;
    }

</style>