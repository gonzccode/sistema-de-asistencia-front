<template>
    <div class="intranet-coordinador">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        <nav class="navbar navbar-dark bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" > 
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon" style="color:#ffff"></span>
                    </button>
                    <strong>
                        INTRANET COORDINADOR
                    </strong>
                     
                </a>
                <button class="btn btn-warning d-flex" type="button" style="cursor:default"><strong>Grupo de estudios GOLDBACH</strong> </button>
            </div>
        </nav>
        <div class="intranet-coordinador-body">
            <div class="menu__side" >
                
                
                <div class="options__menu">	

                    <a href="" class="selected">
                        <div class="option" @click="viewInicio()">
                            
                            <h6><strong> <i class="bi bi-house-door-fill" title="Inicio" style="font-size: 1.5rem"></i> Inicio</strong> </h6>
                        </div>
                    </a>

                    <a href="#registro" @click="viewRegistro()">
                        <div class="option">
                            
                            <h6> <strong><i class="bi bi-calendar-fill" title="Registro" style="font-size: 1.5rem"></i> Registro de Asistencia</strong></h6>
                        </div>
                    </a>
                    
                    <a href="#justificacion">
                        <div class="option" @click="viewJustificacion()">
                            
                            <h6><strong><i class="bi bi-envelope-fill" title="Falta" style="font-size: 1.5rem"></i>Justificación de faltas</strong> </h6>
                        </div>
                    </a>

                    <a href="#reporte-asistencia">
                        <div class="option" @click="viewReporte()">
                            <h6><strong><i class="bi bi-file-earmark-fill" title="Reporte" style="font-size: 1.5rem"></i> Reporte de Asistencia</strong></h6>
                        </div>
                    </a>
                    <a href="http://localhost:3000/login-coordinador">
                        <div class="option">
                            <h6><strong><i class="bi bi-reply-fill" title="Cerrar" style="font-size: 1.5rem"></i> Cerrar Sesión</strong> </h6>
                        </div>
                    </a>
                </div>
            </div>
            <div class="option-intranet-coordinador" >
                
                    <JustificacionCoordinador v-if="showJustificacion && !showInicio && !showReporte && !showRegistro" />
                
                    <ReporteAsistencia v-if="!showJustificacion && !showInicio && showReporte && !showRegistro"/>
                
                
            </div>
         </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue } from "nuxt-property-decorator";
    import JustificacionCoordinador from "~/components/JustificacionCoordinador.vue";
    import ReporteAsistencia from "~/components/ReporteAsistencia.vue";
  
    @Component({
        components: {
            JustificacionCoordinador,
            ReporteAsistencia    
            
        }
    })

    export default class extends Vue {

        showInicio = true
        showRegistro = false
        showJustificacion = false
        showReporte = false
        showCerrar = false

        viewInicio(){
            this.showInicio = true
            this.showRegistro  = false
            this.showJustificacion = false
            this.showReporte = false
            this.showCerrar = false
        }

        viewRegistro(){
             this.showInicio = false
            this.showRegistro  = true
            this.showJustificacion = false
            this.showReporte = false
            this.showCerrar = false
        }

        viewJustificacion(){
             this.showInicio = false
            this.showRegistro  = false
            this.showJustificacion = true
            this.showReporte = false
            this.showCerrar = false
        }
        
        viewReporte(){
             this.showInicio = false
            this.showRegistro  = false
            this.showJustificacion = false
            this.showReporte = true
            this.showCerrar = false
        }

    }
</script>
<style>
    .intranet-coordinador-body{
        display: flex;
    }

    .option-intranet-coordinador{
        width: 75%;
        position: absolute;
        right: 0;
    }

    

    .menu__side{
        width: 25%;
        height: 800px;
        background: #000000;
        position: absolute;
        left: 0;
        color: white;
        overflow: hidden;
        overflow-y: scroll;
        border-right: 20px solid #000000;
        transition: all 300ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }

    /*Ocultar scroll para chrome, safari y opera*/
    .menu__side::-webkit-scrollbar{
        display: none;
    }

    /*Ocultar scroll para IE, Edge y Firefox*/
    .menu__side{
        -ms-overflow-style: none;
        scrollbar-width: none;
    }


    .name__page{
        padding: 20px 30px;
        display: flex;
        align-items: center;
        margin-top: 10px;
    }

    .name__page i{
        width: 20px;
        margin-right: 20px;
    }

    .options__menu{
        padding: 20px 30px;
        position: absolute;
        
    }

    .options__menu a{
        
        cursor: pointer;
        display: block;
        position: relative;
        transition: color 300ms;
        color:white;
        text-decoration:none;
    }

    .options__menu a:hover{
        color: #ffca2c;
    }

    .options__menu .option{
        padding: 20px 0px;
        display: flex;
        align-items: center;
        position: relative;
    }

    .options__menu .option i{
        width: 20px;
        margin-right: 20px;
        cursor: pointer;
    }

    .options__menu .option h4{
        font-weight: 300;
        cursor: pointer;
    }

    a.selected{
        color: #fff;
    }

    .selected:before{
        content: '';
        width: 3px;
        height: 80%;
        background: white;
        position: absolute;
        top: 10%;
        left: -30px;
    }

    /*Clases para usar en JavaScript*/

    .body_move{
        margin-left: 250px;
    }

    .menu__side_move{
        width: 250px;
    }


    @media screen and (max-width: 760px){
        .body_move{
            margin-left: 0px;
        }

        .menu__side_move{
            width: 80px;
            left: -80px;
        }
    }
</style>