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
                    <input type="text" class="form-control" id="inputCodigo" placeholder="Escriba el código" @input="inputCodigo()">
                </div>
                <button type="button" class="btn btn-primary" @click="buscarCodigo()">Buscar</button>
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

                        <tr v-for="(item,index) in lista" :key="index">
                            <!-- <div v-if="item.fecha<={date}">{{date}}</div> -->
                            <td v-if="item.estado_justificacion == '1'" >{{item.id_alumno}}</td>
                            <td v-if="item.estado_justificacion == '1'" >{{item.nombre_alumno}} {{item.apellido_alumno}}</td> 
                            <td v-if="item.estado_justificacion == '1'" >{{item.fecha}}</td>
                            <td v-if="item.estado_justificacion == '1'">
                                <div v-if="item.tipo_falta=='1'">Inasistencia</div>
                                <div v-if="item.tipo_falta=='2'">Tardanza</div>
                            </td>
                            <td v-if="item.estado_justificacion == '1'"> <button  type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="modalJustificacion(index)">Ver justificación</button> </td>
                            
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
                        <tr v-for="item in lista" v-bind:key="item.id">
                            <!-- <div v-if="item.fecha<={date}">{{date}}</div> -->
                            <td v-if="item.estado_justificacion == '2'" >{{item.id_alumno}}</td>
                            <td v-if="item.estado_justificacion == '2'" >{{item.nombre_alumno}} {{item.apellido_alumno}}</td> 
                            <td v-if="item.estado_justificacion == '2'" >{{item.fecha}}</td>
                            <td v-if="item.estado_justificacion == '2'">
                                <div v-if="item.tipo_falta=='1'">Inasistencia</div>
                                <div v-if="item.tipo_falta=='2'">Tardanza</div>
                            </td>
                            <td v-if="item.estado_justificacion == '2'"> <button class="btn btn-success btn-sm" style="background-color: #22be34;cursor:default">Aprobado</button> </td>
                            
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
                        <tr v-for="item in lista" v-bind:key="item.id">
                            <!-- <div v-if="item.fecha<={date}">{{date}}</div> -->
                            <td v-if="item.estado_justificacion == '4'" >{{item.id_alumno}}</td>
                            <td v-if="item.estado_justificacion == '4'" >{{item.nombre_alumno}} {{item.apellido_alumno}}</td> 
                            <td v-if="item.estado_justificacion == '4'" >{{item.fecha}}</td>
                            <td v-if="item.estado_justificacion == '4'">
                                <div v-if="item.tipo_falta=='1'">Inasistencia</div>
                                <div v-if="item.tipo_falta=='2'">Tardanza</div>
                            </td>
                            <td v-if="item.estado_justificacion == '4'"><button class="btn btn-danger btn-sm" style="cursor:default">Rechazado</button> </td>
                            
                        </tr>
                    
                    </tbody>
                </table>
            </div>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                <div class="modal-header bg-primaary">
                    <h5 class="modal-title" id="exampleModalLabel">Justificación</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form class="form-justificacion">
                <div class="modal-body">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label"><strong> Descripción de Justicación</strong> </label>
                            <textarea class="form-control" id="message-text" v-model="descripcionModal" disabled></textarea>
                            
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label"><strong>Archivos adjuntos</strong> </label>
                            <!--<input type="text" class="form-control" id="exampleInputPassword1" v-model="archivoModal" disabled>-->
                            <embed
                                :src="archivoModal" type="application/pdf" width="100%" height="600px"/>
                            <!--<div class="input-group mb-3">
                                <input type="file" class="form-control" id="inputGroupFile02">
                                <label class="input-group-text" for="inputGroupFile02">Upload</label>
                            </div>-->
                        </div>
                        <!--<button type="submit" class="btn btn-primary">Aceptar</button>
                        <button type="submit" class="btn btn-primary">Rechazar</button>-->
                   
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal"  @click="aprobar()">Aceptar</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="rechazar()">Rechazar</button>
                    
                </div>
                </form>
                </div>
            </div>
        </div>
        
    </div>
    
</template>

<script >
    import {Component, Vue} from "nuxt-property-decorator"
 
    export default {
         data() {
            return {
                lista: [],
                showPendiente: true,
                showAprobado: false,
                showRechazado: false,
                codigo: '',
                descripcionModal:'',
                archivoModal:'',
                //
                buscarCodigo1: false

            }
        },

        components:{
            Component,
            Vue
        },

        props:{
            listaJustificacionCoordinador:{
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

        methods:{
            getListaDeFaltas(){
                this.$http.get("http://localhost:8088/backend-asistencia/justificacion.php")
                .then(respuesta => {
                    //this.lista = respuesta.data
                    if(!this.buscarCodigo1){
                         respuesta.data.forEach(value => {
                            if(value.id_coordinador == this.listaJustificacionCoordinador.id_coordinador){
                                this.lista.push(value)
                                console.log('this.lista',this.lista)
                            }
                            
                        });
                    }else{
                        respuesta.data.forEach(value => {
                            if( value.id_alumno == this.codigo && value.id_coordinador == this.listaJustificacionCoordinador.id_coordinador){
                                this.lista.push(value)
                                console.log('this.lista',this.lista)
                            }
                        });
                    }
                    
                }).catch(error => {console.log("error justificacion alumno") })
            },//fin de la funcion getProducto


            viewPendiente(){
                this.showPendiente=true
                this.showAprobado = false
                this.showRechazado = false
            
            },

            viewAprobado(){
                this.showPendiente=false
                this.showAprobado = true
                this.showRechazado = false
                
            },

            viewRechazado(){
                this.showPendiente=false
                this.showAprobado = false
                this.showRechazado = true
                
            },

            inputCodigo(){
                this.codigo = document.getElementById('inputCodigo').value
            },

            buscarCodigo(){
                if(this.codigo){
                    this.lista = []
                    this.getListaDeFaltas()
                    this.buscarCodigo1 = true
                }else{
                    this.lista = []
                    this.getListaDeFaltas()
                    this.buscarCodigo1 = false
                }
                
            },

            modalJustificacion(value){
                console.log('esto es value',value )
                for(let i=0; i < this.lista.length; i++){
                    if(i == value){
                        this.descripcionModal = this.lista[i].descripcion_detalle
                        //this.archivoModal = this.lista[i].archivo_adjunto
                        this.idDetalle = this.lista[i].id_detalle
                        this.idJustificacion = this.lista[i].id_justificacion
                        console.log('this.idJustificacion cuackkkk',this.idJustificacion)
                        this.$http.get("http://localhost:8088/backend-asistencia/detalleJustificacion.php?id_detalle_justificacion="+this.idDetalle)  
                            .then(respuesta => {
                                respuesta.data.forEach(v => {
                                    if(v.id_detalle = this.idDetalle){
                                        this.archivoModal = v.text
                                        console.log('this.archivoModal',this.archivoModal)
                                    }
                                })
                                console.log(respuesta.data) 
                            
                        }).catch(error => {console.log("error api detalle justificacion") })

                    }
                }
            },

            aprobar:function(){
                // this.$http.get("http://localhost:8088/backend-asistencia/asistencia-alumno.php")
                var id = 'JF689495255'
                var id1 = this.idJustificacion
                console.log('gaaaa',id1)
                this.$http.get("http://localhost:8088/backend-asistencia/aprobar.php?id_detalle_justificacion="+id)  
                .then(respuesta => {
                    this.lista = []
                    this.getListaDeFaltas()
                    console.log("entro aprobar", this.id_justificacion)
                    this.buscarCodigo1 = false
                    
                }).catch(error => {console.log("a") })
            },
            rechazar:function(){
                // this.$http.get("http://localhost:8088/backend-asistencia/asistencia-alumno.php")
                var id = 'JF199776896'
                this.$http.get("http://localhost:8088/backend-asistencia/rechazar.php?id_detalle_justificacion="+id)  
                .then(respuesta => {
                    this.lista = []
                    this.getListaDeFaltas()
                    console.log("entro rechazar", this.id_justificacion)
                    this.buscarCodigo1 = false

                }).catch(error => {console.log("a") })
            },

            /*getDetalle:function(id){
                
                this.$http.get("http://localhost:8088/backend-asistencia/detalleJustificacion.php?id_detalle_justificacion="+id)  
                .then(respuesta => {
                    respuesta.data.forEach(v => {
                        if(v.id_detalle = id){
                            this.archivoModal = v.text
                            console.log('this.archivoModal',this.archivoModal)
                        }
                    })
                    console.log(respuesta.data) 
                    
                }).catch(error => {console.log("error api detalle justificacion") })
            }*/
        },

        mounted(){
                this.getListaDeFaltas()
                console.log('this.listaJustificacionCoordinador',this.listaJustificacionCoordinador)
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