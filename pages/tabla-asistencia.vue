<template>
    <div class="tabla-asistencia">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>

        <div class="title-tabla-asistencia">
            <div class="title-opcion">
                <h2> <strong> <i class="bi bi-calendar3"></i> Registro de asistencia</strong></h2>
            </div>
            <div class="foto-coordinador">
                <img src="@/assets/images/coordinador-academia.png" height="60em">
            </div>

        </div>

        <div class="datos-tabla-asistencia">
            <form class="form-tabla-asistencia" >
                     <fieldset disabled>
                    <div class="mb-2">  
                        <label><strong>Programación de Asistencia</strong> </label>        
                    </div>
                    <div class="mb-2">
                        <label for="exampleInputEmail1" class="form-label"><strong>Código</strong> </label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="2018xxxx">
                        
                    </div>
                    <div class="mb-2">
                        <label for="exampleInputPassword1" class="form-label"><strong>Nombre(s)</strong> </label>
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Pepito">
                    </div>
                    <div class="mb-2">
                        <label for="exampleInputPassword1" class="form-label"><strong>Apellidos</strong> </label>
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Perez">
                    </div>
                    </fieldset>
                    <!-- <button type="submit" class="btn btn-primary">Buscar</button> -->
            </form>
        </div>
        <div class="lista-tabla-asistencia">
            
            <div class="table-tabla-asistencia" align="center">
                <table class="table table-bordered" >
                    <thead>
                    <tr>
                        <th>Tipo Asistencia</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Coordinador</th>
                        <th>Estado</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Escaner</td>
                        <td>20/09/2021</td>
                        <td>08:15 am</td>
                        <td>Ricardo Quispe</td>
                        <td style="padding:5px 20px">
                            <div style="background: #22be34;border-radius:7px;color:#ffff;padding:4px 0px">
                                Asistió
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td> -- </td>
                        <td>18/09/2021</td>
                        <td> -- </td>
                        <td>Juan Quispe</td>
                        <td style="padding:5px 20px">
                            <div style="background: #eb1b23;border-radius:7px;color:#ffff;padding:4px 0px">
                                No asistió
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <tr>
                        <td>Escaner</td>
                        <td>17/09/2021</td>
                        <td>08:10 am</td>
                        <td>Ricardo Quispe</td>
                        <td style="padding:5px 20px">
                            <div style="background: #22be34;border-radius:7px;color:#ffff;padding:4px 0px">
                                Asistió
                            </div>
                        </td>
                    
                    </tr>
                    <tr>
                        <td>Escaner</td>
                        <td>24/09/2021</td>
                        <td>08:30 am</td>
                        <td>Juan Quispe</td>
                        <td style="padding:5px 20px">
                            <div style="background: #f7b733;border-radius:7px;padding:4px 0px">
                                :)
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <button type="button" class="btn btn-success btn-lg" >Volver</button>
                <button type="button" :class="showGuardar?'btn btn-primary active':'btn btn-primary'" @click="viewGuardar()"  style="padding:10px 30px">Guardar</button>
                <div v-if="showGuardar">                
                    <script>toastr.success('Registro exitoso')</script> 
                </div>


            </div>
        </div>
    </div>
    
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "nuxt-property-decorator"
  
    @Component({})


    export default class extends Vue {
        @Prop() listaRegistroAlumno!:object

        showGuardar=false

        mounted(){
            console.log('stamos en tabla', this.listaRegistroAlumno)
        }

        viewGuardar(){
            this.showGuardar=true 
        }

    }
</script>

<style>
    .tabla-asistencia {
        margin:0 auto;
        
    }

    .title-tabla-asistencia{
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


    .datos-tabla-asistencia{
        background: #ffe599;
        display: flex;
        justify-content: center;
        
    }

    .form-tabla-asistencia{
        width: 40%;
        margin: 25px;
        
    }

    .lista-tabla-asistencia{
        text-align: center;
        margin:20px
    }

    .table-tabla-asistencia{
        width: 80%;
        margin: 0 auto;
        margin-top: 20px;
        text-align: center;
    }
        

</style>