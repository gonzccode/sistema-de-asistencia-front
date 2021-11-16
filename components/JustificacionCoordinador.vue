<template>
    <div class="justificacion-coordinador">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        
        
        <div class="title-justificacion">
            <div class="title-opcion">
                <h2> <strong> <i class="bi bi-envelope-fill"></i> Justicación de Faltas</strong></h2>
            </div>
            <div class="foto-coordinador">
                <img src="@/assets/images/coordinador-academia.png" height="60em">
            </div>

        </div>
        <div class="datos-alumno-justificacion">
            <form class="form-datos-alumno">
                <div class="mb-2">
                    <label for="exampleInputEmail1" class="form-label"><strong>Código de alumno</strong> </label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Escriba el código">s
                </div>
                <button type="submit" class="btn btn-primary">Buscar</button>
            </form>
        </div>
        <div class="lista-justificacion">
            <div class="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" :class="showPendiente?'btn btn-outline-primary active':'btn btn-outline-primary'" style="padding:10px 30px" @click="viewPendiente()">Pendientes</button>
                <button type="button" :class="showAprobado?'btn btn-outline-primary active':'btn btn-outline-primary'" style="padding:10px 30px" @click="viewAprobado()">Aprobados</button>
                <button type="button" :class="showRechazado?'btn btn-outline-primary active':'btn btn-outline-primary'" style="padding:10px 30px" @click="viewRechazado()">Rechazados</button>
            </div>
            <div class="table-justificacion" align="center">
                <table class="table table-bordered" v-if="showPendiente">
                    <thead>
                    <tr>
                        <th>Código</th>
                        <th>Alumno</th>
                        <th>Fecha</th>
                        <th>Tipo de Falta</th>
                        <th>Justificación</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>740002G</td>
                        <td>Pepito Perez</td>
                        <td>20/09/2021</td>
                        <td>Inasistencia</td>
                        <td> <button  type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver justificación</button> </td>
                    </tr>
                    <tr>
                        <td>740002G</td>
                        <td>Pepito Perez</td>
                        <td>10/09/2021</td>
                        <td>Tardanza</td>
                        <td> <button  type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver justificación</button> </td>
                    </tr>
                    <tr>
                        <td>740002G</td>
                        <td>Pepito Perez</td>
                        <td>05/09/2021</td>
                        <td>Tardanza</td>
                        <td> <button  type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver justificación</button> </td>
                    </tr>
                    <tr>
                        <td>740002G</td>
                        <td>Pepito Perez</td>
                        <td>01/09/2021</td>
                        <td>Inasistencia</td>
                        <td> <button  type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver justificación</button> </td>
                    </tr>
                    </tbody>
                </table>
                <table class="table table-bordered" v-if="showAprobado">
                    <thead>
                    <tr>
                        <th>Código</th>
                        <th>Alumno</th>
                        <th>Fecha</th>
                        <th>Tipo de Falta</th>
                        <th>Justificación</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>740002G</td>
                        <td>Pepito Perez</td>
                        <td>20/09/2021</td>
                        <td>Inasistencia</td>
                        <td> <button class="btn btn-success btn-sm" style="background-color: #22be34;cursor:default">Aprobado</button> </td>
                    </tr>
                    <tr>
                        <td>740002G</td>
                        <td>Pepito Perez</td>
                        <td>10/09/2021</td>
                        <td>Tardanza</td>
                        <td> <button class="btn btn-success btn-sm" style="background-color: #22be34;cursor:default">Aprobado</button> </td>
                    </tr>
                    <tr>
                        <td>740002G</td>
                        <td>Pepito Perez</td>
                        <td>05/09/2021</td>
                        <td>Tardanza</td>
                        <td> <button class="btn btn-success btn-sm" style="background-color: #22be34;cursor:default">Aprobado</button> </td>
                    </tr>
                    <tr>
                        <td>740002G</td>
                        <td>Pepito Perez</td>
                        <td>01/09/2021</td>
                        <td>Inasistencia</td>
                       <td> <button class="btn btn-success btn-sm" style="background-color: #22be34;cursor:default">Aprobado</button> </td>
                    </tr>
                    </tbody>
                </table>
                <table class="table table-bordered" v-if="showRechazado">
                    <thead>
                    <tr>
                        <th>Código</th>
                        <th>Alumno</th>
                        <th>Fecha</th>
                        <th>Tipo de Falta</th>
                        <th>Justificación</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>740002G</td>
                        <td>Pepito Perez</td>
                        <td>20/09/2021</td>
                        <td>Inasistencia</td>
                        <td> <button class="btn btn-danger btn-sm" style="cursor:default">Rechazado</button> </td>
                    </tr>
                    <tr>
                        <td>740002G</td>
                        <td>Pepito Perez</td>
                        <td>10/09/2021</td>
                        <td>Tardanza</td>
                        <td> <button class="btn btn-danger btn-sm" style="cursor:default">Rechazado</button> </td>
                    </tr>
                    <tr>
                        <td>740002G</td>
                        <td>Pepito Perez</td>
                        <td>05/09/2021</td>
                        <td>Tardanza</td>
                        <td> <button class="btn btn-danger btn-sm" style="cursor:default">Rechazado</button> </td>
                    </tr>
                    <tr>
                        <td>740002G</td>
                        <td>Pepito Perez</td>
                        <td>01/09/2021</td>
                        <td>Inasistencia</td>
                        <td> <button class="btn btn-danger btn-sm" style="cursor:default">Rechazado</button> </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header bg-primaary">
                    <h5 class="modal-title" id="exampleModalLabel">Justificación</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form class="form-justificacion">
                <div class="modal-body">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label"><strong>Descripción</strong> </label>
                            <textarea class="form-control" id="message-text" placeholder="Justificación de estudiante"></textarea>
                            
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label"><strong>Archivos adjuntos</strong> </label>
                            <input type="text" class="form-control" id="exampleInputPassword1">
                            <!--<div class="input-group mb-3">
                                <input type="file" class="form-control" id="inputGroupFile02">
                                <label class="input-group-text" for="inputGroupFile02">Upload</label>
                            </div>-->
                        </div>
                        <!--<button type="submit" class="btn btn-primary">Aceptar</button>
                        <button type="submit" class="btn btn-primary">Rechazar</button>-->
                   
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Aceptar</button>
                    <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal">Rechazar</button>
                    
                </div>
                </form>
                </div>
            </div>
        </div>
        
    </div>
    
</template>

<script lang="ts">
    import {Component, Vue} from "nuxt-property-decorator"
    //import MenuLateral from "~/components/MenuLateral";
  
    @Component({
        components: {
            //MenuLateral
            
        }
    })
    

    export default class extends Vue {
        showPendiente = true
        showAprobado = false
        showRechazado = false

        viewPendiente(){
            this.showPendiente=true
            this.showAprobado = false
            this.showRechazado = false
            
        }

        viewAprobado(){
            this.showPendiente=false
            this.showAprobado = true
            this.showRechazado = false
            
        }

        viewRechazado(){
            this.showPendiente=false
            this.showAprobado = false
            this.showRechazado = true
            
        }

    }
</script>

<style>
    .justificacion-coordinador {
        margin:0 auto;
        
    }

    .title-justificacion{
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

    .datos-alumno-justificacion{
        background: #ffe599;
        display: flex;
        justify-content: center;
        
    }

    .form-datos-alumno{
        width: 40%;
        margin: 25px;
        
    }

    .lista-justificacion{
        text-align: center;
        margin:20px
    }

    .table-justificacion{
        width: 80%;
        margin: 0 auto;
        margin-top: 20px;
        text-align: center;
    }
        

</style>