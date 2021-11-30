<template>
    
    <div class="justificacion-alumno">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        <div class="title-justificacion-alumno">
            <div class="title-opcion-alumno">
                <h2> <strong> <i class="bi bi-envelope-fill"></i> Justicación de Faltas</strong></h2>
            </div>
            <div class="foto-alumno">
                <img src="@/assets/images/estudiante-perfil.jpg" height="60em">
            </div>

        </div>
        <div class="lista-justificacion-alumno">
            <h3><strong>Lista de Faltas</strong> </h3>
            <div class="table-justificacion-alumno" align="center" id="table-justificacion-alumno"  >
                <table class="table table-bordered" >
                    <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Tipo de Falta</th>
                        <th>Estado</th>
                    </tr>
                    </thead>
                    <tbody  >
                        <tr v-for="item in lista" v-bind:key="item.id_justificacion">
                            <td>{{item.fecha}}</td>

                            <td v-if=" item.tipo_falta=== '1' ">
                                <div >
                                <!--<div style="background: #f7b733;border-radius:7px;padding:1px 10px 1px 10px">-->
                                    Tardanza
                                </div>
                            </td>
                            <td v-if=" item.tipo_falta=== '2'">
                                <div >
                                    <!--<div style="background: #eb1b23;border-radius:7px;color:#ffff;padding:1px 10px 1px 10px ">-->
                                    No asistió
                                </div>
                            </td>
                            <td v-if=" item.estado_justificacion=== '2' ">
                                <div style="background: #22be34;border-radius:7px;color:#ffff;padding:4px 0px">Justificacion Aprobado</div>
                            </td>
                            <td v-if=" item.estado_justificacion=== '1'">
                                <div style="background: #f7b733;border-radius:7px;padding:4px 0px">
                                    Justificacion en Espera
                                </div>
                            </td>
                            <td v-if=" item.estado_justificacion=== '3'">
                                <button  style="background: #eb1b23;border-radius:7px;color:#ffff;padding:10px 10px 10px 10px " type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="enviarIdJustificacion(item.id_justificacion)">No justificado </button> 
                            </td>
                        </tr>
                    </tbody> 
                </table>
            </div>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header bg-primaary">
                    <h5 class="modal-title" id="exampleModalLabel">Justificación de Falta</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form class="form-justificacion">
                    <div class="modal-body">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label"><strong>Descripción</strong> </label>
                                <textarea class="form-control" id="mensaje-justificacion" placeholder="Escriba justificación" @input="mensajeJustificacion()"></textarea>
                                
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label"><strong>Adjuntar documento</strong> </label>
                                <!--<input type="text" class="form-control" id="exampleInputPassword1" placeholder="Cargue su documento">-->
                                <div class="input-group mb-3">
                                    <input type="file" class="form-control" id="inputGroupFile02" placeholder="Cargue su documento">
                                    <!--<label class="input-group-text" for="inputGroupFile02">Upload</label>-->
                                </div>
                            </div>
                            <!--<button type="submit" class="btn btn-primary">Aceptar</button>
                            <button type="submit" class="btn btn-primary">Rechazar</button>-->
                    
                    </div>
                    <div class="modal-footer" id="modal">
                        <button type="button" class="btn btn-primary " data-bs-dismiss="modal" aria-label="Close" @click="enviarJustificacion()">Enviar</button>
                        
                    </div>
                </form>
                </div>
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
                messageJustificacion: '',
                modal: false,
                idJustificacion: ''
            }
            
        },
        components:{
            Component,
            Vue
        },

        props:{
            listaJustificacionAlumno:{
                id_alumno:'',
                nombre:'',
                apellido: '',
                dni:'',
                correo:'',
                password:''
                /*
                id_justificacion:'',
                hora:'',
                fecha:'',
                estado_justificacion: '',
                tipo_falta:'',
                id_alumno:'',
                id_coordinador:'',
                id_detalle:''
                */
                
            }
        },

        methods :{            
            getListaDeFaltas(){
                this.$http.get("http://localhost:8088/backend-asistencia/justificacion.php")
                .then(respuesta => {
                    //this.lista = respuesta.data
                    respuesta.data.forEach(value => {
                            if( value.id_alumno == this.listaJustificacionAlumno.id_alumno && this.lista.length<5){
                                this.lista.push(value)
                                console.log('this.lista',this.lista)
                            }
                            
                    });
                }).catch(error => {console.log("error justificacion alumno") })
            },//fin de la funcion getProducto

            mensajeJustificacion(){
                this.messageJustificacion = document.getElementById('mensaje-justificacion').value
                console.log(this.messageJustificacion)
            },

            enviarJustificacion(){
                let idJustificacion = this.idJustificacion
                //let idDetalle = this.listaJustificacionAlumno.idDetalle
                let idAlumno = this.listaJustificacionAlumno.id_alumno
                let descripcionjustificacion = this.messageJustificacion
                const obj ={idJustificacion, idAlumno, descripcionjustificacion}
                console.log('esto es obj', obj)
                this.$http.post('http://localhost:8088/backend-asistencia/justificacion-alumno.php',obj)
                    .then(res => {
                        console.log('entro respuesta',res.data)
                        window.onload = this.getListaDeFaltas()
                    })
                    .catch(error => {
                        console.log('error del post en frontend', error)
                    })
                
                
            },

            enviarIdJustificacion(value){
                this.idJustificacion = value
                
            }
        },
        created() {
            console.log('hola justificacion')
        },
        mounted(){
            this.listaJustificacionAlumno
            this.getListaDeFaltas();
        }
}
</script>

<style>
    .justificacion-alumno {
        margin:0 auto;
        
    }

    .title-justificacion-alumno{
        margin:20px;
        display: flex;
    }

    .title-opcion-alumno {
        width: 93%;
        margin-top: 7px;
        
    }

    .foto-alumno{
        width: 7%;
        text-align: center;
        
    }
    .foto-alumno img{
        border: 1px solid #0000;
    }

    .lista-justificacion-alumno{
        text-align: center;
        margin:20px
    }

    .table-justificacion-alumno{
        width: 80%;
        margin: 0 auto;
        margin-top: 20px;
        text-align: center;
    }
        

</style>