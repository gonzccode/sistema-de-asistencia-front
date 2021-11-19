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
        <div class="card-deck" style="margin: 0% 20% 0% 20%">
            <div class="card border-dark mb-3">
                <svg xmlns="http://www.w3.org/2000/svg"  width="90%" height="100%" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 00 16 16" >
                    <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                </svg>
                <div class="card-body">
                <button type="button" class="btn btn-info">Registro de Asistencia</button>            </div>
            </div>
            <div class="card border-dark mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="90%" height="100%" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 00 16 16">
                    <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                    <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                </svg>
                <div class="card-body"> 
                <button type="button" class="btn btn-info">Justificacion de Faltas</button>
                </div>
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

</style>