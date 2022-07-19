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
                        <h5><strong>Programación de Asistencia</strong> </h5>        
                    </div>
                    <div class="mb-2">
                        <label for="exampleInputEmail1" class="form-label"><strong>Código de Alumno</strong> </label>
                        <input type="text" class="form-control" id="exampleInputEmail1" v-model="listaRegistroAlumno.id_alumno">
                        
                    </div>
                    <div class="mb-2">
                        <label for="exampleInputPassword1" class="form-label"><strong>Nombre de Alumno</strong> </label>
                        <input type="text" class="form-control" id="exampleInputPassword1" v-model="listaRegistroAlumno.nombre" >
                    </div>
                    <div class="mb-2">
                        <label for="exampleInputPassword1" class="form-label"><strong>Apellidos</strong> </label>
                        <input type="text" class="form-control" id="exampleInputPassword1" v-model="listaRegistroAlumno.apellido">
                    </div>
                    </fieldset>
            </form>
        </div>
        <div class="lista-tabla-asistencia">
            
            <div class="table-tabla-asistencia" align="center" >
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
                    <tbody >
                        <tr v-if="!viewHoy">
                            <td>{{listaRegistroAlumno.tipo_asistencia}}</td>
                            <td>{{listaRegistroAlumno.fecha}}</td>
                            <td>{{listaRegistroAlumno.hora}}</td>
                            <td>{{listaRegistroAlumno.nombre_coordinador}} {{listaRegistroAlumno.apellido_coordinador}}</td>
                            <td style="padding:5px 20px">
                                <input type="checkbox" id="checkAsistencia" @click="marcarAsistencia()">
                                <label >Marcar Asistencia</label>
                            </td>
                        </tr>
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
                </table>
                <button type="button" class="btn btn-success btn-lg" @click="EnviarPadre()">Volver</button>
                <!--<a href="http://localhost:3000/intranet-coordinador#registro" style="color:white;text-decoration:none;cursor:pointer">
                            Volver
                    </a>-->
                <button type="button" :class="showGuardar?'btn btn-primary active':'btn btn-primary'" @click="viewGuardar()"  style="padding:10px 30px">Guardar</button>
                <div v-if="showGuardar && clickGuardar">                
                    <script>toastr.success('Registro exitoso')</script> 
                </div>
                <!--<div v-if="!showGuardar && clickGuardar">                
                    <script>toastr.error('Marcar Asistencia')</script> 
                </div>-->


            </div>
        </div>
    </div>
    
</template>

<script>
    import {Component, Vue, Prop, Emit} from "nuxt-property-decorator"
  
// FECHA

// FECHA
    export default {
        data() {
            return {
                lista: [],
                showGuardar: false,
                listaRegistroDiario:{
                    id_alumno:'',
                    dni:'',
                    tipo_asistencia:'',
                    estado_asistencia:'',
                    fecha:'',
                    hora:'',
                    id_coordinador:''
                },
                marcar: false,
                clickGuardar: false,
                viewHoy: false,
                valorHijo: null

            }
        },

        components:{
            Component,
            Vue
        },

        props:{
            listaRegistroAlumno:{
                    id_alumno:'',
                    nombre:'',
                    apellido: '',
                    dni:'',
                    correo:'',
                    password:'',
                    tipo_asistencia:'',
                    estado_asistencia:'',
                    fecha:'',
                    hora:'',
                    id_coordinador:'',
                    nombre_coordinador:'',
                    apellido_coordinador:''
            }
        },

        methods:{
            getAsistencia(){
                this.$http.get("http://localhost:8088/backend-asistencia/asistencia-alumno.php")
                    .then(respuesta => {

                        respuesta.data.forEach(value => {
                            if(value.id_alumno == this.listaRegistroAlumno.id_alumno && this.lista.length < 4 ){
                                this.lista.push(value)
                            }  
                        });
                        this.lista.forEach(v=>{
                            console.log('v.fecha',v.fecha)
                            if(this.listaRegistroAlumno.fecha == v.fecha){
                                this.viewHoy =  true

                                console.log('entro a vie hoy')
                            }
                        })
                    }).catch(error => {console.log("error de get Asistencia de alumno") })
                
            },//fin de la funcion getProductos

            EnviarPadre(){
                this.valorHijo = false
                this.$emit('escucharHijo',this.valorHijo)
            },

            viewGuardar(){
                this.clickGuardar = true
                if(this.marcar && this.clickGuardar){
                    this.showGuardar=true 
                    console.log('entro a registrar asistencia', this.showGuardar, this.clickGuardar)
                    if(this.listaRegistroAlumno.tipo_asistencia=='Escaner'){
                        this.listaRegistroDiario.tipo_asistencia = '1'
                    }else if(this.listaRegistroAlumno.tipo_asistencia=='Manual'){
                        this.listaRegistroDiario.tipo_asistencia = '2'
                    }

                    if(this.listaRegistroAlumno.estado_asistencia=='asistio'){
                        this.listaRegistroDiario.estado_asistencia = '1'
                    }else if(this.listaRegistroAlumno.estado_asistencia=='tardanza'){
                        this.listaRegistroDiario.estado_asistencia = '2'
                    }
                    var id_registro_asistencia = 'RA'+this.getRandomInt(9999999,9999999999)
                    var id_alumno = this.listaRegistroAlumno.id_alumno
                    var dni_alumno = this.listaRegistroAlumno.dni
                    var tipo_asistencia = this.listaRegistroDiario.tipo_asistencia
                    var estado_asistencia = this.listaRegistroDiario.estado_asistencia
                    var fecha = this.listaRegistroAlumno.fecha
                    var hora = this.listaRegistroAlumno.hora
                    var id_coordinador = this.listaRegistroAlumno.id_coordinador
                    const obj = {id_registro_asistencia,id_alumno,dni_alumno,tipo_asistencia,estado_asistencia,fecha,hora,id_coordinador}
                    
                    
                    this.$http.post('http://localhost:8088/backend-asistencia/asistencia-alumno.php',obj)
                        .then(respuesta => {
                                console.log('entro respuesta',respuesta.data)
                                this.lista=[]
                                this.getAsistencia()
                                
                        })
                        .catch(error => {
                            console.log('error del post en frontend', error)
                        })
                }else if (!this.marcar && this.clickGuardar){
                    this.showGuardar=false 
                    
                }

                


            },

            marcarAsistencia(){
                this.marcar = document.getElementById('checkAsistencia').checked
                console.log('marcar:', this.marcar)
            },
            getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }

        },

        
        mounted(){
            this.getAsistencia()
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