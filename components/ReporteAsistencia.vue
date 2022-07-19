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
                <button type="button" :class="showAula?'btn btn-outline-primary active':'btn btn-outline-primary'" style="padding:10px 30px" @click="viewAula1()">Aula</button>
                <button type="button" :class="showTurno?'btn btn-outline-primary active':'btn btn-outline-primary'" style="padding:10px 30px" @click="viewTurno1()">Turno</button>
            </div>
        </div>
        <div class="datos-alumno-asistencia">
            <form class="form-alumno-asistencia" >
                <div v-if="showAlumno && !showAula && !showTurno">
                    <div class="mb-2">
                            <label class="form-label"><strong>Código de alumno</strong> </label>
                            <input type="text" class="form-control" id="inputCodigo" placeholder="Escriba el código"  @input="inputReporteAlumno()">
                        </div>
                        <!--<button type="button" class="btn btn-primary" @click="getAsistencia()">Buscar</button>-->
                    </div>
            
                <div v-if="!showAlumno && showAula && !showTurno">

                
                    <div class="mb-2">
                        <label class="form-label"><strong>Código de aula</strong> </label>
                        <!--<input type="text" class="form-control" id="inputAula" placeholder="Escriba el código"  @input="inputReporteAula()">-->
                        <select class="form-select" id="selectAula"  aria-label="Default select example" @change="showSelectAula()">
                            <option selected>Escriba el código</option>
                            <option value="aula01">Aula 01</option>
                            <option value="aula02">Aula 02</option>
                            <option value="aula03">Aula 03</option>
                            <option value="aula04">Aula 04</option>
                            <option value="aula05">Aula 05</option>
                            <option value="aula06">Aula 06</option>
                            <option value="aula07">Aula 07</option>
                            <option value="aula08">Aula 08</option>
                            <option value="aula09">Aula 09</option>
                            <option value="aula10">Aula 10</option>
                        
                        </select>
                    </div>
                    <!--<button type="button" class="btn btn-primary" @click="buscarAula()" >Buscar</button>-->
                </div>
            
            
                <div v-if="!showAlumno && !showAula && showTurno">
                    <div class="mb-2">
                        <label for="exampleInputEmail1" class="form-label"><strong>Turno</strong> </label>
                        <!--<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">-->
                        <select class="form-select" id="selectTurno"  aria-label="Default select example" @change="showSelectTurno()">
                            <option selected>Selecciona el turno</option>
                            <option value="1">Mañana</option>
                            <option value="2">Tarde</option>
                        
                        </select>
                    </div>
                    <!--<button type="button" class="btn btn-primary" @click="buscarTurno()">Buscar</button>-->
                </div>
            </form>
            <!--<button type="button" class="btn btn-primary">Primary</button>-->
        </div>
        <div class="lista-asistencia">
            
            <div class="table-asistencia" align="center" style="overflow-y:scroll; height:300px;border: 1px solid #000000">
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
                    <tbody >
                        <tr v-for="item in lista" v-bind:key="item.id">
                            <td v-if="item.id_alumno == codigo && item.tipo_asistencia=== '0' ">
                                <div  >Sin Registro </div>
                            </td>
                            <td v-if="item.id_alumno == codigo && item.tipo_asistencia=== '1' ">
                                <div  >Escáner</div>
                            </td>
                            <td v-if="item.id_alumno == codigo && item.tipo_asistencia=== '2' ">
                                <div >Manual</div>
                            </td> 
                            <td v-if="item.id_alumno == codigo && item.fecha" >{{item.fecha}}</td>
                            <td v-if="item.id_alumno == codigo && item.fecha" >{{item.hora}}</td>
                            <td v-if="item.id_alumno == codigo && item.fecha" >{{item.nombre_coordinador}} {{item.apellido_coordinador}}</td> 
                            <td v-if="item.id_alumno == codigo && item.estado_asistencia=== '1' ">
                                <div style="background: #22be34;border-radius:7px;color:#ffff;padding:4px 0px">
                                    Asistió
                                </div>
                            </td>
                            <td v-if="item.id_alumno == codigo && item.estado_asistencia=== '2'">
                                <div style="background: #f7b733;border-radius:7px;padding:4px 0px">
                                    Tardanza
                                </div>
                            </td>
                            <td v-if="item.id_alumno == codigo && item.estado_asistencia=== '3'">
                                <div style="background: #eb1b23;border-radius:7px;color:#ffff;padding:4px 0px">
                                    No asistió
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
                        <tr v-for="item in lista" v-bind:key="item.id">
                            <td v-if="viewAula && item.aula == valueSelectAula && item.fecha" >{{item.nombre_alumno}} {{item.apellido_alumno}}</td> 
                            <td v-if="viewAula && item.aula == valueSelectAula && item.tipo_asistencia=== '0' ">
                                <div  >Sin Registro </div>
                            </td>
                            <td v-if="viewAula &&  item.aula == valueSelectAula && item.tipo_asistencia=== '1' ">
                                <div  >Escáner</div>
                            </td>
                            <td v-if="viewAula &&  item.aula == valueSelectAula && item.tipo_asistencia=== '2' ">
                                <div >Manual</div>
                            </td> 
                            <td v-if="viewAula &&  item.aula == valueSelectAula && item.fecha" >{{item.fecha}}</td>
                            <td v-if="viewAula &&  item.aula == valueSelectAula && item.fecha" >{{item.hora}}</td>
                            <td v-if="viewAula &&  item.aula == valueSelectAula && item.fecha" >{{item.nombre_coordinador}} {{item.apellido_coordinador}}</td> 
                            <td v-if="viewAula &&  item.aula == valueSelectAula && item.estado_asistencia=== '1' ">
                                <div style="background: #22be34;border-radius:7px;color:#ffff;padding:4px 0px">
                                    Asistió
                                </div>
                            </td>
                            <td v-if="viewAula &&  item.aula == valueSelectAula && item.estado_asistencia=== '2'">
                                <div style="background: #f7b733;border-radius:7px;padding:4px 0px">
                                    Tardanza
                                </div>
                            </td>
                            <td v-if="viewAula &&  item.aula == valueSelectAula && item.estado_asistencia=== '3'">
                                <div style="background: #eb1b23;border-radius:7px;color:#ffff;padding:4px 0px">
                                    No asistió
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
                        <tr v-for="item in lista" v-bind:key="item.id">
                            <td v-if="viewTurno &&  item.turno == valueSelectTurno && item.aula=== 'aula01' ">
                                <div  >Aula 01 </div>
                            </td>
                            <td v-if="viewTurno && item.turno == valueSelectTurno && item.aula=== 'aula02' ">
                                <div  >Aula 02 </div>
                            </td>
                            <td v-if="viewTurno && item.turno == valueSelectTurno && item.aula=== 'aula03' ">
                                <div  >Aula 03 </div>
                            </td>
                            <td v-if="viewTurno && item.turno == valueSelectTurno && item.aula=== 'aula04' ">
                                <div  >Aula 04 </div>
                            </td>
                            <td v-if="viewTurno &&  item.turno == valueSelectTurno && item.aula=== 'aula05' ">
                                <div  >Aula 05 </div>
                            </td>
                            <td v-if="viewTurno && item.turno == valueSelectTurno && item.aula=== 'aula06' ">
                                <div  >Aula 06 </div>
                            </td>
                            <td v-if="viewTurno && item.turno == valueSelectTurno && item.aula=== 'aula07' ">
                                <div  >Aula 07 </div>
                            </td>
                            <td v-if="viewTurno && item.turno == valueSelectTurno && item.aula=== 'aula08' ">
                                <div  >Aula 08 </div>
                            </td>
                            <td v-if="viewTurno && item.turno == valueSelectTurno && item.aula=== 'aula09' ">
                                <div  >Aula 09 </div>
                            </td>
                            <td v-if="viewTurno && item.turno == valueSelectTurno && item.aula=== 'aula10' ">
                                <div  >Aula 10 </div>
                            </td>


                            <td v-if="viewTurno && item.turno == valueSelectTurno && item.fecha" >{{item.nombre_alumno}} {{item.apellido_alumno}}</td> 
                            <td v-if="viewTurno && item.turno == valueSelectTurno && item.tipo_asistencia=== '0' ">
                                <div  >Sin Registro </div>
                            </td>
                            <td v-if="viewTurno && item.turno == valueSelectTurno && item.tipo_asistencia=== '1' ">
                                <div  >Escáner</div>
                            </td>
                            <td v-if="viewTurno && item.turno == valueSelectTurno && item.tipo_asistencia=== '2' ">
                                <div >Manual</div>
                            </td> 
                            <td v-if="viewTurno && item.turno == valueSelectTurno && item.fecha" >{{item.fecha}}</td>
                            <td v-if="viewTurno && item.turno == valueSelectTurno && item.fecha" >{{item.hora}}</td>
                            <td v-if="viewTurno && item.turno == valueSelectTurno && item.fecha" >{{item.nombre_coordinador}} {{item.apellido_coordinador}}</td> 
                            <td v-if="viewTurno && item.turno == valueSelectTurno && item.estado_asistencia=== '1' ">
                                <div style="background: #22be34;border-radius:7px;color:#ffff;padding:4px 0px">
                                    Asistió
                                </div>
                            </td>
                            <td v-if="viewTurno && item.turno == valueSelectTurno && item.estado_asistencia=== '2'">
                                <div style="background: #f7b733;border-radius:7px;padding:4px 0px">
                                    Tardanza
                                </div>
                            </td>
                            <td v-if="viewTurno && item.turno == valueSelectTurno && item.estado_asistencia=== '3'">
                                <div style="background: #eb1b23;border-radius:7px;color:#ffff;padding:4px 0px">
                                    No asistió
                                </div>
                            </td>
                        </tr>
                    
                    </tbody>
                </table>
                
            </div>
            <button type="button" class="btn btn-success btn-lg" style="background-color: #22be34;margin-top: 20px" @click="generarReporte()">Generar Reporte</button>
        </div>
    </div>
    
</template>

<script >
    import {Component, Vue} from "nuxt-property-decorator"
    
    export default {
        data() {
            return {
                lista: [],
                showAlumno: true,
                showAula: false,
                showTurno : false,
                codigo:'',
                aula:'',
                valueSelectAula:'',
                valueSelectTurno:'',
                viewAula: false,
                viewTurno: false,
                reporteAlumno:true,
                reporteAula: false,
                reporteTurno:false
            }
            
        },
        components:{
            Component,
            Vue
        },

        props:{
            listaReporteCoordinador: {
                id_coordinador:'',
                nombre:'',
                apellido: '',
                dni:'',
                correo:'',
                password:'',
                fecha_contrato:'',
                id_persona:''
            }
        },

        methods :{

            getAsistencia(){
                this.$http.get("http://localhost:8088/backend-asistencia/asistencia-alumno.php")
                    .then(respuesta => {
                            this.lista = respuesta.data
                            console.log('this.lista',this.lista)
                        /*respuesta.data.forEach(value => {
                            if(value.id_alumno == this.listaAsistenciaAlumno.id_alumno && this.lista.length < this.showValue ){
                                this.lista.push(value)
                            }  
                        });*/
                    }).catch(error => {console.log("error de get Asistencia de alumno") })

               
                console.log('termino funcion get asistencia',this.lista)
            },
            ///corregir reporte gaaaaa
            generarReporte(){
                var link = document.createElement('a');
                if(this.reporteAlumno && !this.reporteAula && !this.reporteTurno){
                    link.href = "./assets/documents/Registro por alumno.pdf";
                    link.download = 'Registro por alumno.pdf';
                }else if(!this.reporteAlumno && this.reporteAula && !this.reporteTurno){
                    link.href = "./assets/documents/Registro por aula.pdf";
                    link.download = 'Registro por aula.pdf';
                }else if(!this.reporteAlumno && !this.reporteAula && this.reporteTurno){
                    link.href = "./assets/documents/Registro por turno.pdf";
                    link.download = 'Registro por turno.pdf';
                }   
                link.dispatchEvent(new MouseEvent('click'));
            },

            viewAlumno(){
                this.showAlumno=true
                this.showAula = false
                this.showTurno = false
                this.reporteAlumno = true
                this.reporteAula = false
                this.reporteTurno = false
                
            
            },

            viewAula1(){
                this.showAlumno=false
                this.showAula = true
                this.showTurno = false
                this.reporteAlumno = false
                this.reporteAula = true
                this.reporteTurno = false
               
            },

            viewTurno1(){
                this.showAlumno=false
                this.showAula = false
                this.showTurno = true
                this.reporteAlumno = false
                this.reporteAula = false
                this.reporteTurno = true

            },

            inputReporteAlumno(){
                this.codigo = document.getElementById('inputCodigo').value
                if(this.codigo){
                    this.viewAula = true
                    this.lista=[]
                    this.getAsistencia()
                }
               
            },
            showSelectAula(){
                this.valueSelectAula = document.getElementById("selectAula").value
                if(this.valueSelectAula){
                    this.viewAula = true
                    this.lista=[]
                    this.getAsistencia()
                }
                
            },
            showSelectTurno(){
                this.valueSelectTurno = document.getElementById("selectTurno").value
                if(this.valueSelectTurno){
                    this.viewTurno = true
                    this.lista=[]
                    this.getAsistencia()
                }
                
            },

            buscarAula(){
                if(this.valueSelectAula){
                    this.viewAula = true
                    this.lista=[]
                    this.getAsistencia()
                }
            },

            buscarTurno(){
                if(this.valueSelectTurno){
                    this.viewTurno = true
                    this.lista=[]
                    this.getAsistencia()
                }
            }
        },

        mounted(){
            //this.getAsistencia()
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