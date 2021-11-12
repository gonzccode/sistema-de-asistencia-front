<template>
    <div class="reporte-asistencia">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        <div class="title-asistencia">
            <div class="title-opcion">
                <h2> <strong> <i class="bi bi-file-earmark-fill"></i> Reporte de Asistencia</strong></h2>
            </div>
            <div class="foto-coordinador">
                <img src="@/assets/images/coordinador-academia.png" height="60em">
            </div>

        </div>
        <div class="opcion-reporte" >
            <div class="btn-group" >
                <button type="button" :class="showAlumno?'btn btn-outline-primary active':'btn btn-outline-primary'" style="padding:10px 30px" @click="viewAlumno()">Alumno</button>
                <button type="button" :class="showAula?'btn btn-outline-primary active':'btn btn-outline-primary'" style="padding:10px 30px" @click="viewAula()">Aula</button>
                <button type="button" :class="showTurno?'btn btn-outline-primary active':'btn btn-outline-primary'" style="padding:10px 30px" @click="viewTurno()">Turno</button>
            </div>
        </div>
        <div class="datos-alumno-asistencia">
            <form class="form-alumno-asistencia" >
                <div v-if="showAlumno && !showAula && !showTurno">

                
                    <div class="mb-2">
                        <label for="exampleInputEmail1" class="form-label"><strong>Código de alumno</strong> </label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Escriba el código">
                        
                    </div>
                    <div class="mb-2">
                        <label for="exampleInputPassword1" class="form-label"><strong>Nombre(s)</strong> </label>
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Escriba el nombre">
                    </div>
                    <div class="mb-2">
                        <label for="exampleInputPassword1" class="form-label"><strong>Apellidos</strong> </label>
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Escriba el apellido">
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Buscar</button>
                </div>
            
                <div v-if="!showAlumno && showAula && !showTurno">

                
                    <div class="mb-2">
                        <label for="exampleInputEmail1" class="form-label"><strong>Código de aula</strong> </label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Escriba el código">
                    </div>
                    <button type="submit" class="btn btn-primary">Buscar</button>
                </div>
            
            
                <div v-if="!showAlumno && !showAula && showTurno">
                    <div class="mb-2">
                        <label for="exampleInputEmail1" class="form-label"><strong>Turno</strong> </label>
                        <!--<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">-->
                        <select class="form-select" id="exampleInputEmail1"  aria-label="Default select example">
                            <option selected>Selecciona el turno</option>
                            <option value="1">Mañana</option>
                            <option value="2">Tarde</option>
                        
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary">Buscar</button>
                </div>
            </form>
            <!--<button type="button" class="btn btn-primary">Primary</button>-->
        </div>
        <div class="lista-asistencia">
            
            <div class="table-asistencia" align="center">
                <table class="table table-bordered" v-if="showAlumno && !showAula && !showTurno">
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
                        <td>Manual</td>
                        <td>19/09/2021</td>
                        <td>08:20 am</td>
                        <td>Juan Quispe</td>
                        <td style="padding:5px 20px">
                            <div style="background: #f7b733;border-radius:7px;padding:4px 0px">
                                Tardanza
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
                    </tbody>
                </table>
                <table class="table table-bordered" v-if="!showAlumno && showAula && !showTurno">
                    <thead>
                    <tr>
                        <th>Alumno</th>
                        <th>Tipo Asistencia</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Coordinador</th>
                        <th>Estado</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Pepito Perez</td>
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
                        <td>Mario Sifuentes </td>
                        <td>Manual</td>
                        <td>19/09/2021</td>
                        <td>08:20 am</td>
                        <td>Juan Quispe</td>
                        <td style="padding:5px 20px">
                            <div style="background: #f7b733;border-radius:7px;padding:4px 0px">
                                Tardanza
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Pepito Perez</td>
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
                        <td>Mario Sifuentes </td>    
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
                    </tbody>
                </table>
                <table class="table table-bordered" v-if="!showAlumno && !showAula && showTurno">
                    <thead>
                    <tr>
                        <th>Aula</th>
                        <th>Alumno</th>
                        <th>Tipo Asistencia</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Coordinador</th>
                        <th>Estado</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>CI503</td>
                        <td>Pepito Perez</td>
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
                        <td>CI503</td>
                        <td>Mario Sifuentes </td>
                        <td>Manual</td>
                        <td>19/09/2021</td>
                        <td>08:20 am</td>
                        <td>Juan Quispe</td>
                        <td style="padding:5px 20px">
                            <div style="background: #f7b733;border-radius:7px;padding:4px 0px">
                                Tardanza
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>CI503</td>
                        <td>Pepito Perez</td>
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
                        <td>CI503</td>
                        <td>Mario Sifuentes </td>    
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
                    </tbody>
                </table>
                <button type="button" class="btn btn-success btn-lg" style="background-color: #22be34">Generar Reporte</button>
            </div>
        </div>
    </div>
    
</template>

<script lang="ts">
    import {Component, Vue} from "nuxt-property-decorator"
  
    @Component({})
    

    export default class extends Vue {
        showAlumno = true
        showAula = false
        showTurno = false

        viewAlumno(){
            this.showAlumno=true
            this.showAula = false
            this.showTurno = false
            
        }

        viewAula(){
            this.showAlumno=false
            this.showAula = true
            this.showTurno = false
            
        }

        viewTurno(){
            this.showAlumno=false
            this.showAula = false
            this.showTurno = true
            
        }


    }
</script>

<style>
    .reporte-asistencia {
        margin:0 auto;
        
    }

    .title-asistencia{
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

    .opcion-reporte{
        text-align: center;
        margin: 15px;
    }

    .datos-alumno-asistencia{
        background: #ffe599;
        display: flex;
        justify-content: center;
        
    }

    .form-alumno-asistencia{
        width: 40%;
        margin: 25px;
        
    }

    .lista-asistencia{
        text-align: center;
        margin:20px
    }

    .table-asistencia{
        width: 80%;
        margin: 0 auto;
        margin-top: 20px;
        text-align: center;
    }
        

</style>