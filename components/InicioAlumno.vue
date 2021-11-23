<template>
    <div class="inicio-alumno">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>


        <div class="title-inicio-alumno">
            <div class="title-opcion">
                <h2> <strong> <i class="bi bi-house-door-fill" title="Inicio" ></i> Inicio </strong></h2>
            </div>
            <div class="foto-alumno">
                <img src="@/assets/images/estudiante-perfil.jpg" height="60em">
            </div>

        </div>
        <div class="datos-inicio-alumno">
            <form class="form-datos-inicio-alumno">
                <div class="mb-2">
                    <label for="exampleInputEmail1" class="form-label" style="color: rgba(208, 105, 31)"><strong>Bienvenido Alumno: Pepito Perez</strong> </label>    
                </div>   
            </form>
        </div>
        <div class="inicio-opcion" align="center">
            <div class="card-image">
                <a href="#">
                        <figure>
                            <img src="@/assets/images/registro-asistencia.png">
                            <div class="capa">
                                <h3><strong>Asistencia</strong></h3>
                                <!--<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, vero!</p>-->
                            </div>
                        </figure>
                </a>
            </div>
            <div class="card-image">
                <a href="#">
                        <figure>
                            <img src="@/assets/images/justificacion-falta.png">
                            <div class="capa">
                                <h3><strong>Justificación de Falta</strong></h3>
                                <!--<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, vero!</p>-->
                            </div>
                        </figure>
                </a>
            </div>
        </div>


    </div>

</template>

<script lang="ts">
    import {Component, Vue} from "nuxt-property-decorator"
  
    @Component({})
    

    export default class extends Vue {

    }    
</script>


<style>
    .inicio-alumno {
        margin:0 auto;
        
    }

    .title-inicio-alumno{
        margin:20px;
        display: flex;
        
    }

    .title-opcion {
        width: 93%;
        margin-top: 7px;
        
    }

    .foto-alumno{
        width: 7%;
        text-align: center;
        
    }
    .foto-alumno img{
        border: 1px solid #0000;
    }

    .datos-inicio-alumno{
        background: #ffe599;
        display: flex;
        justify-content: left;
        text-align: left;
        margin:20px;
        margin-top: 20px;    
        border-radius: 10px; 
        padding-bottom: 0px;        
    }

    .form-datos-inicio-alumno{
        width: 40%;
        margin: 17px 20px 5px 20px;
        
    }

    .inicio-opcion{
        width: 80%;
        display: flex;
        margin: 0 auto
        
    }

    .card-image{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px
        
    }
    .card-image figure{
        position:relative;
        height: 250px;
        cursor: pointer;
        width: 100%;
        overflow: hidden;
        border-radius: 10px;
        box-shadow: 0px 0px 10px 5px #ffe599;
    }
    .card-image figure img{
        width: 100%;
        height: 100%;
        transition: all 400ms ease-out;
        will-change: transform;
    }
    .card-image figure .capa{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,103,123,0.7);
        transition: all 400ms ease-out;
        opacity: 0;
        visibility: hidden;
       text-align: center;
    }
    .card-image figure:hover > .capa {
        opacity: 1;
        visibility: visible;
    }
    .card-image figure:hover > .capa h3{
        margin-top: 70px;
        margin-bottom: 15px;
    }
    .card-image figure:hover > img{
        transform: scale(1.3);
    }
    .card-image figure .capa h3{
        color: #fff;
        font-weight: 400;
        padding-top: 25px;
        transition: all 400ms ease-out;
        margin-top: 80px;
    }

</style>