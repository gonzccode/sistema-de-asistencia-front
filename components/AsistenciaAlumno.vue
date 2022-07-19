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
                        <select class="form-select" id="selectDate"  aria-label="Default select example" @change="showSelect()">
                            <option value="1" selected>Últimos 7 días</option>
                            <option value="2">Últimos mes</option>
                            <option value="3">Últimos 6 meses</option>
                           
                        
                        </select>
                    </div>

                    <button type="button" :class="showDias?'btn btn-primary active':'btn btn-primary'" @click="viewDias()" >Buscar</button>
            </form>
        </div>
        <div class="lista-asistencia">
            <div class="table-asistencia" align="center" style="overflow-y:scroll; height:300px;"> 
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
                            <td v-if=" item.tipo_asistencia=== '0' ">
                                <div  >Sin Registro </div>
                            </td>
                            <td v-if=" item.tipo_asistencia=== '1' ">
                                <div  >Escáner</div>
                            </td>
                            <td v-if=" item.tipo_asistencia=== '2' ">
                                <div >Manual</div>
                            </td> 
                            <td v-if="item.fecha" >{{item.fecha}}</td>
                            <td v-if="item.fecha" >{{item.hora}}</td>
                            <td v-if="item.fecha" >{{item.nombre_coordinador}} {{item.apellido_coordinador}}</td> 
                            <td v-if=" item.estado_asistencia=== '1' ">
                                <div style="background: #22be34;border-radius:7px;color:#ffff;padding:4px 0px">Asistió</div>
                            </td>
                            <td v-if=" item.estado_asistencia=== '2'">
                                <div style="background: #f7b733;border-radius:7px;padding:4px 0px">
                                    Tardanza
                                </div>
                            </td>
                            <td v-if=" item.estado_asistencia=== '3'">
                                <div style="background: #eb1b23;border-radius:7px;color:#ffff;padding:4px 0px">
                                    No asistió
                                </div>
                            </td>
                        </tr>
                    </tbody>

                    <tbody v-if="!showDias && showMes && !showMeses">
                        <tr v-for="item in lista" v-bind:key="item.fecha">
                            <td v-if=" item.tipo_asistencia=== '0' ">
                                <div  >Sin Registro </div>
                            </td>
                            <td v-if=" item.tipo_asistencia=== '1' ">
                                <div  >Escáner</div>
                            </td>
                            <td v-if=" item.tipo_asistencia=== '2' ">
                                <div >Manual</div>
                            </td> 
                            <td v-if="item.fecha" >{{item.fecha}}</td>
                            <td v-if="item.Fecha" >{{item.hora}}</td>
                            <td v-if="item.fecha">{{item.id_coordinador}}</td> 
                            <td v-if=" item.estado_asistencia=== '1' ">
                                <div style="background: #22be34;border-radius:7px;color:#ffff;padding:4px 0px">Asistió</div>
                            </td>
                            <td v-if=" item.estado_asistencia=== '2'">
                                <div style="background: #f7b733;border-radius:7px;padding:4px 0px">
                                    Tardanza
                                </div>
                            </td>
                            <td v-if=" item.estado_asistencia=== '3'">
                                <div style="background: #eb1b23;border-radius:7px;color:#ffff;padding:4px 0px">
                                    No asistió
                                </div>
                            </td>
                        </tr>
                    </tbody>




                    <tbody v-if="!showDias && !showMes && showMeses">
                        <tr v-for="item in lista" v-bind:key="item.fecha">

                            <td v-if=" item.tipo_asistencia=== '1' ">
                                <div  >Escáner</div>
                            </td>
                            <td v-if=" item.tipo_asistencia=== '2' ">
                                <div >Manual</div>
                            </td>                            

                            <td v-if="item.fecha" >{{item.fecha}}</td>
                            <td v-if="item.fecha" >{{item.hora}}</td>
                            <!--<td v-if="item.fecha <{date}">{{item.id_coordinador}}</td>-->
                            <td v-if="item.fecha">{{item.nombre_coordinador}}</td>
                            <td v-if=" item.estado_asistencia=== '1' ">
                                <div style="background: #22be34;border-radius:7px;color:#ffff;padding:4px 0px">Asistió</div>
                            </td>
                            <td v-if=" item.estado_asistencia=== '2'">
                                <div style="background: #f7b733;border-radius:7px;padding:4px 0px">
                                    Tardanza
                                </div>
                            </td>
                            <td v-if=" item.estado_asistencia=== '3'">
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
    import {Component, Vue, Prop, Emit} from "nuxt-property-decorator"
  
// FECHA

// FECHA
    export default {
        data() {
            return {
                lista: [],
                listaCoordinador: [],
                showDias: true,
                showMes: false,
                showMeses : false,
                valueSelect : '',
                showValue : 5
            }
            
        },

        props:{
            listaAsistenciaAlumno:{
                id_alumno:'',
                nombre:'',
                apellido: '',
                dni:'',
                correo:'',
                password:''
            }
        },

        components:{
            Component,
            Vue
        },

        methods :{
            viewDias(){
                if(this.valueSelect == '1'){
                    this.showValue = 5
                    this.lista=[]
                    this.getAsistencia()

                }else if(this.valueSelect == '2'){
                    this.showValue = 30
                    this.lista=[]
                    this.getAsistencia()
                }else if(this.valueSelect == '3') {
                    this.showValue = 180
                    this.lista=[]
                    this.getAsistencia()

                }
            },
            
            getAsistencia(){
                this.$http.get("http://localhost:8088/backend-asistencia/asistencia-alumno.php")
                    .then(respuesta => {

                        respuesta.data.forEach(value => {
                            if(value.id_alumno == this.listaAsistenciaAlumno.id_alumno && this.lista.length < this.showValue ){
                                this.lista.push(value)
                            }  
                        });
                    }).catch(error => {console.log("error de get Asistencia de alumno") })

               
                console.log('termino funcion get asistencia',this.lista)
            },//fin de la funcion getProducto

            showSelect(){
                this.valueSelect = document.getElementById("selectDate").value
                console.log('show select', this.valueSelect)
            },

            /*getNombreCoordinador(){
                 this.$http.get("http://localhost:8088/backend-asistencia/coordinador.php")
                    .then(res => {
                        res.data.forEach(v =>{
                            for(let i=0; i<this.lista.length;i++){
                                if(this.lista[i].id_coordinador == v.id_coordinador){
                                    this.lista[i].nombreCoordinador = v.nombre
                                    this.lista[i].apellidoCoordinador = v.apellido
                                }
                            }
                        })
                        this.listaCoordinador = this.lista
                }).catch(error => {'error en get coordinador'})
            }*/

        },
        created() {
            console.log('hola inicio')

        },
        
        mounted(){
            this.getAsistencia();
            this.viewDias()
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