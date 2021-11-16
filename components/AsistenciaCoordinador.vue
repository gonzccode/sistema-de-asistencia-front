<template>
    <div>
        <div class="asistencia-alumno" v-if="!viewTablaAsistencia">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
            
            <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>


            <div class="title-asistencia-alumno">
                <div class="title-opcion">
                    <h2> <strong> <i class="bi bi-calendar3"></i> Registro de asistencia </strong></h2>
                </div>
                <div class="foto-coordinador">
                    <img src="@/assets/images/coordinador-academia.png" height="60em">
                </div>

            </div>
            <div class="datos-asistencia-alumno">
                <form class="form-asistencia-alumno">
                    <div class="mb-2">
                        <label for="exampleInputEmail1" class="form-label"><strong>Código de alumno</strong> </label>
                        <input style="margin: 10px" type="text" class="form-control" id="exampleInputEmail1" placeholder="Escriba el código">
                        
                        
                        <button type="button" :class="showBusqueda?'btn btn-primary':'btn btn-primary'" @click="viewBusqueda()">Buscar</button>
                        <button type="button" class="btn btn-primary">Limpiar</button>
                    </div>
                    

                    <!-- <div class="btn-group" role="group" aria-label="Basic outlined example"> -->
                        <button type="button" :class="showEscaner?'btn btn-outline-primary active':'btn btn-outline-primary'" style="padding:10px 10px" @click="viewEscaner()">Escáner</button>
                        <button type="button" :class="showManual?'btn btn-outline-primary active':'btn btn-outline-primary'" style="padding:10px 10px" @click="viewManual()">Manual</button>
                    <!-- </div> -->
                    <div>
                    <hr>    
                    </div>   
                <form v-if="showBusqueda">
                    <script>toastr.success('Alumno encontrado')</script> 
                    <fieldset disabled>
                        <div class="form-group">
                            <label for="disabledTextInput">Nombre</label>
                            <input type="text" id="disabledTextInput" class="form-control" placeholder="Pepito">
                        </div>
                        <div class="form-group">
                            <label for="disabledSelect">Apellido</label>
                            <select id="disabledSelect" class="form-control">
                                <option>Perez</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="disabledSelect">DNI</label>
                            <select id="disabledSelect" class="form-control">
                                <option>70905070</option>
                            </select>
                        </div>                   
                    </fieldset>
                    <button type="submit" class="btn btn-primary" @click="viewTabla()">Registrar Asistencia</button>
                </form>
                </form>
            </div>
            
        </div>
        <div v-if="viewTablaAsistencia">
            <TablaAsistencia />
        </div>
    </div>

</template>

<script lang="ts">
    import {Component, Vue} from "nuxt-property-decorator"
    import TablaAsistencia from "~/components/TablaAsistencia.vue";
  
    @Component({
        TablaAsistencia
    })
    

    export default class extends Vue {
        showEscaner = true
        showManual = false
        showBusqueda = false
        viewTablaAsistencia = false

        viewEscaner(){
            this.showEscaner=true
            this.showManual = false
            this.showBusqueda = true          
        }

        viewManual(){
            this.showEscaner=false
            this.showManual = true
        }

        viewBusqueda(){
            this.showEscaner=true
            this.showManual = false
            this.showBusqueda = true  
        }

        viewTabla(){
            this.viewTablaAsistencia = true
        }


    }    
</script>


<style>
    .asistencia-alumno {
        margin:0 auto;
        
    }

    .title-asistencia-alumno{
        margin:20px;
        display: flex;
    }

    .title-opcion {
        width: 93%;
        margin-top: 7px;
        
    }

    .foto-coordinador{
        width: 7%;
        text-align: center;
        
    }
    .foto-coordinador img{
        border: 1px solid #0000;
    }

    .datos-asistencia-alumno{
        background: #ffe599;
        display: flex;
        justify-content: center;
        /* width: 60%; */
        text-align: center;
        margin:300px;
        margin-top: 20px;
        border: black 5px solid;
        
    }

    .form-asistencia-alumno{
        width: 40%;
        margin: 25px;
        
    }
    
    hr {
            height: 100%;
            background-color: black;
            border: black 5px solid;
    }

</style>