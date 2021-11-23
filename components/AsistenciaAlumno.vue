<template>
    <div class="reporte-asistencia" > <!-- id="app" -->
    
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        <div class="title-asistencia">
            <div class="title-opcion">
                <h2> <strong> <i class="bi bi-calendar3"></i> Asistencia</strong></h2>
            </div>
            <div class="foto-coordinador">
                <img src="@/assets/images/estudiante-perfil.jpg" height="60em">
            </div>
        </div>

        <div class="datos-alumno-asistencia">
            <form class="form-alumno-asistencia" >
                <div class="mb-2">
                        <label for="exampleInputEmail1" class="form-label"><strong>Fecha</strong> </label>
                        <select class="form-select" id="exampleInputEmail1"  aria-label="Default select example">
                            <option selected>Últimos 7 días</option>
                            <option value="2">Últimos mes</option>
                            <option value="3">Últimos 6 meses</option>
                           
                        
                        </select>
                    </div>

                    <button type="button" :class="showDias?'btn btn-primary active':'btn btn-primary'" @click="viewDias()" >Buscar</button>
            </form>
        </div>
        <div class="lista-asistencia">
            <div class="table-asistencia" align="center">
                <table class="table table-bordered" id="pruebaH">
                    <thead>
                    <tr>
                        <th>Tipo Asistencia</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Coordinador</th>
                        <th>Estado</th>
                    </tr>
                    </thead>
                    <tbody v-if="showDias && !showMes && !showMeses">
                        <tr v-for="item in lista" v-bind:key="item.id">
                            <!-- <div v-if="item.fecha<={date}">{{date}}</div> -->
                            <td v-if=" item.tipoAsistencia=== '1' ">
                                <div  >Escáner</div>
                            </td>
                            <td v-if=" item.tipoAsistencia=== '2' ">
                                <div >Manual</div>
                            </td> 
                            <td v-if="item.fecha<={date}" >{{item.fecha}}</td>
                            <td v-if="item.fecha<={date}" >{{item.hora}}</td>
                            <td v-if="item.fecha<={date}" >{{item.nombreCoordinador}}</td> 
                            <td v-if=" item.nombreEstado=== '1' ">
                                <div style="background: #22be34;border-radius:7px;color:#ffff;padding:4px 0px">Asistió</div>
                            </td>
                            <td v-if=" item.nombreEstado=== '2'">
                                <div style="background: #f7b733;border-radius:7px;padding:4px 0px">
                                    Tardanza
                                </div>
                            </td>
                            <td v-if=" item.nombreEstado=== '3'">
                                <div style="background: #eb1b23;border-radius:7px;color:#ffff;padding:4px 0px">
                                    No asistió
                                </div>
                            </td>
                        </tr>
                    </tbody>

                    <tbody v-if="!showDias && showMes && !showMeses">
                        <tr v-for="item in lista" v-bind:key="item.fecha">
                            <td v-if=" item.tipoAsistencia=== '1' ">
                                <div  >Escáner</div>
                            </td>
                            <td v-if=" item.tipoAsistencia=== '2' ">
                                <div >Manual</div>
                            </td> 
                            <td v-if="item.fecha <={date}" >{{item.fecha}}</td>
                            <td v-if="item.fecha <={date}" >{{item.hora}}</td>
                            <td v-if="item.fecha <={date}">{{item.nombreCoordinador}}</td> 
                            <td v-if=" item.nombreEstado=== '1' ">
                                <div style="background: #22be34;border-radius:7px;color:#ffff;padding:4px 0px">Asistió</div>
                            </td>
                            <td v-if=" item.nombreEstado=== '2'">
                                <div style="background: #f7b733;border-radius:7px;padding:4px 0px">
                                    Tardanza
                                </div>
                            </td>
                            <td v-if=" item.nombreEstado=== '3'">
                                <div style="background: #eb1b23;border-radius:7px;color:#ffff;padding:4px 0px">
                                    No asistió
                                </div>
                            </td>
                        </tr>
                    </tbody>




                    <tbody v-if="!showDias && !showMes && showMeses">
                        <tr v-for="item in lista" v-bind:key="item.fecha">

                            <td v-if=" item.tipoAsistencia=== '1' ">
                                <div  >Escáner</div>
                            </td>
                            <td v-if=" item.tipoAsistencia=== '2' ">
                                <div >Manual</div>
                            </td>                            

                            <td v-if="item.fecha <{date}" >{{item.fecha}}</td>
                            <td v-if="item.fecha <{date}" >{{item.hora}}</td>
                            <td v-if="item.fecha <{date}">{{item.nombreCoordinador}}</td>
                            <td v-if=" item.nombreEstado=== '1' ">
                                <div style="background: #22be34;border-radius:7px;color:#ffff;padding:4px 0px">Asistió</div>
                            </td>
                            <td v-if=" item.nombreEstado=== '2'">
                                <div style="background: #f7b733;border-radius:7px;padding:4px 0px">
                                    Tardanza
                                </div>
                            </td>
                            <td v-if=" item.nombreEstado=== '3'">
                                <div style="background: #eb1b23;border-radius:7px;color:#ffff;padding:4px 0px">
                                    No asistió
                                </div>
                            </td>
                        </tr>
                    </tbody> 

                </table>       
            </div>
        </div>
    </div>
    
</template>
    

<script >
    import {Component, Vue} from "nuxt-property-decorator"
// FECHA

// FECHA
    export default {
        data() {
            return {
                lista: [],
                showDias: true,
                showMes: false,
                showMeses : false
            }
            
        },
        components:{
            Component,
            Vue
        },

        methods :{
            viewDias(){
                if (exampleInputEmail1.value =='Últimos 7 días') {
                // var date;
                // date = new Date();
                // date = (date.getUTCFullYear() )+ '-' +
                // ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
                // ('00' + (date.getUTCDate()-7)).slice(-2) + ' ' ;

                    this.showDias=true
                    this.showMes = false
                    this.showMeses = false 
                    // alert(date)
                    
                }

                if (exampleInputEmail1.value =='2') {
                // var date;
                // date = new Date();
                // date = date.getUTCFullYear() + '-' +
                // ('00' + (date.getUTCMonth())).slice(-2) + '-' +
                // ('00' + date.getUTCDate()).slice(-2) + ' ' ;

                    this.showDias=false
                    this.showMes = true
                    this.showMeses = false
                }
                if (exampleInputEmail1.value =='3') {
                // var date;
                // date = new Date();
                // date = date.getUTCFullYear() + '-' +
                // ('00' + (date.getUTCMonth()-5)).slice(-2) + '-' +
                // ('00' + date.getUTCDate()).slice(-2) + ' ' ;

                    this.showDias=false
                    this.showMes = false
                    this.showMeses = true
                }
            },
            
            getAsistencia:function(){
                this.$http.get("http://localhost/backend-asistencia/AsistenciaAlumno/")
                .then(respuesta => {
                    this.lista = respuesta.data
                    console.log(respuesta.data) 
                }).catch(error => {console.log("HOLA") })
            }//fin de la funcion getProducto
        },
        created() {
            this.getAsistencia();
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