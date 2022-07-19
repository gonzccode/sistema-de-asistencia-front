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
                        <h4 for="exampleInputEmail1" class="form-label"><strong>Código de alumno</strong> </h4>
                        <div class="mt-3" style="display:flex" >
                            <div class="width: 70%">
                                <input style="margin: 10px;margin-rigth:20px" type="text" class="form-control" id="inputCodigoAlumno" placeholder="Escriba el código" @input="codigoAlumno()" required>
                            </div>
                            <div class="width: 12%">
                                <button type="button" style="margin: 10px;margin-left: 15px" :class="showBusqueda?'btn btn-primary':'btn btn-primary'" @click="buscarAlumno()">Buscar</button>
                            </div>
                            <div class="width: 12%">
                                <button type="button" style="margin-top: 10px" class="btn btn-secondary">Limpiar</button>
                                
                            </div>
                        </div>
                        
                        
                        
                    </div>
                    
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="opcionEscaner" style="padding:10px 10px" @click="codigoAlumno()">
                        <label class="form-check-label" for="inlineRadio1">Escáner</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="opcionManual" checked style="padding:10px 10px" @click="codigoAlumno()">
                        <label class="form-check-label" for="inlineRadio2">Manual</label>
                    </div>
                    <!-- <div class="btn-group" role="group" aria-label="Basic outlined example"> 
                        <button type="button" :class="showEscaner?'btn btn-outline-primary active sm':'btn btn-outline-primary'" style="padding:10px 10px" @click="viewEscaner()">Escáner</button>
                        <button type="button" :class="showManual?'btn btn-outline-primary active sm':'btn btn-outline-primary'" style="padding:10px 10px" @click="viewManual()">Manual</button>
                    </div> -->
                    <div>
                    <hr>    
                    </div>   
                <form >
                    <div v-if="exitoBusca">
                        <script>toastr.success('Alumno encontrado')</script> 
                    </div>
                   
                    <fieldset disabled>
                        <div class="form-group">
                            <label for="disabledTextInput">Nombre</label>
                            <input type="text" id="disabledTextInput" class="form-control" placeholder="Nombre de Estudiante" v-model="listaRegistroAlumno.nombre" disabled>
                        </div>
                        <div class="form-group">
                            <label for="disabledSelect">Apellido</label>
                            <input type="text" id="disabledTextInput" class="form-control" placeholder="Apellido de Estudiante" v-model="listaRegistroAlumno.apellido" disabled>
                            <!--<select id="disabledSelect" class="form-control" disabled>
                                <option >Apellido de Estudiante</option>
                            </select>-->
                        </div>
                        <div class="form-group">
                            <label for="disabledSelect">DNI</label>
                            <input type="text" id="disabledTextInput" class="form-control" placeholder="DNI de Estudiante" v-model="listaRegistroAlumno.dni" disabled>
                        </div>                   
                    </fieldset>
                    <button type="submit" class="btn btn-primary" @click="viewTabla()">Registrar Asistencia</button>
                </form>
                </form>
            </div>
            
        </div>
        <div v-if="viewTablaAsistencia">
            <TablaAsistencia :listaRegistroAlumno='listaRegistroAlumno' @escucharHijo="VariableHijo"/>
        </div>
    </div>

</template>

<script >
    import {Component, Vue} from "nuxt-property-decorator"
    import TablaAsistencia from "../components/TablaAsistencia.vue";

    export default {
        data() {
            return {
                lista: [],
                showEscaner: true,
                showManual: false,
                showBusqueda : false,
                viewTablaAsistencia : false,
                codigo:'',
                escaner:'',
                manual:'',
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
                },
                exitoBusca: false,
                codigosRegistrados:[],
                variableRecibida:''
            }
            
        },
        components:{
            Component,
            Vue,
            TablaAsistencia
        },

        props:{
            listaAsistenciaCoordinador: {
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
            getAlumno(){
            this.$http.get("http://localhost:8088/backend-asistencia/alumno.php")
                .then(respuesta => {
                    this.lista = respuesta.data
                    })
                .catch(error => {console.log("error en el api") })
            },

            VariableHijo(value){
                this.viewTablaAsistencia= value
                this.listaRegistroAlumno.nombre = ""
                this.listaRegistroAlumno.apellido = ""
                this.listaRegistroAlumno.dni = ""
                this.lista = []
                this.getAlumno()

            },

            viewEscaner(){
            this.showEscaner=true
            this.showManual = false
            this.showBusqueda = true          
            },

            viewManual(){
                this.showEscaner=false
                this.showManual = true
            },

            viewBusqueda(){
                this.showEscaner=true
                this.showManual = false
                this.showBusqueda = true  
            },

            viewTabla(){
                this.viewTablaAsistencia = true
                var hoy = new Date()
                if(hoy.getDate()<10){
                    var fecha = hoy.getFullYear() + '-' + ( hoy.getMonth() + 1 ) + '-0' + hoy.getDate()
                }else{
                    var fecha = hoy.getFullYear() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getDate()
                }

                if(hoy.getHours()<10){
                    var horas = '0'+hoy.getHours()
                }else{
                    var horas = hoy.getHours()
                }
                if(hoy.getMinutes()<10){
                    var minutos = '0'+hoy.getMinutes()
                }else{
                    var minutos = hoy.getMinutes()
                }
                if(hoy.getSeconds()<10){
                    var segundos = '0'+hoy.getSeconds()
                }else{
                    var segundos = hoy.getSeconds()
                }
                var hora = horas + ':' + minutos + ':' + segundos
                this.listaRegistroAlumno.fecha = fecha
                this.listaRegistroAlumno.hora = hora
                if(hora<'07:50:00' && hora !='00:00:00'){
                    var estado = 'asistio'
                    this.listaRegistroAlumno.estado_asistencia = estado
                }else{
                    var estado = 'tardanza'
                    this.listaRegistroAlumno.estado_asistencia = estado
                }
                this.exitoBusca=false
                this.codigosRegistrados.push(this.listaRegistroAlumno.id_alumno)
                console.log('this.codigosRegistrados',this.codigosRegistrados)
            },

            codigoAlumno(){
                this.codigo = document.getElementById('inputCodigoAlumno').value
                this.escaner = document.getElementById('opcionEscaner').checked
                this.manual = document.getElementById('opcionManual').checked
            },

            buscarAlumno(){
                this.lista.forEach( value => {
                    if(this.codigo == value.id_alumno){
                        this.listaRegistroAlumno.id_alumno = value.id_alumno
                        this.listaRegistroAlumno.nombre = value.nombre
                        this.listaRegistroAlumno.apellido = value.apellido
                        this.listaRegistroAlumno.correo = value.correo
                        this.listaRegistroAlumno.dni = value.dni
                        this.listaRegistroAlumno.password = value.password
                        if(this.escaner){
                            this.listaRegistroAlumno.tipo_asistencia = 'Escaner'
                        }else if(this.manual){
                            this.listaRegistroAlumno.tipo_asistencia = 'Manual'
                        }
                        this.listaRegistroAlumno.id_coordinador = this.listaAsistenciaCoordinador.id_coordinador
                        this.listaRegistroAlumno.nombre_coordinador = this.listaAsistenciaCoordinador.nombre
                        this.listaRegistroAlumno.apellido_coordinador = this.listaAsistenciaCoordinador.apellido
                        this.exitoBusca = true
                    }
                })
            }
        },

        mounted(){
            this.getAlumno()
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
        width: 70%;
        text-align: center;
        /*margin:300px;*/
        margin: 0 auto;
        margin-top: 20px;
        border: black 5px solid;
        
    }

    .form-asistencia-alumno{
        width: 60%;
        margin: 25px;
        
    }
    
    hr {
        height: 100%;
        background-color: black;
        border: black 5px solid;
    }

</style>