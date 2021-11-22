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
                        <!--<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">-->
                        <select class="form-select" id="exampleInputEmail1"  aria-label="Default select example">
                            <option selected>Últimos 7 días</option>
                            <!-- <option value="1">Últimos 7 días</option> -->
                            <option value="2">Últimos mes</option>
                            <option value="3">Últimos 6 meses</option>
                        
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary">Buscar</button>
            </form>
            <!--<button type="button" class="btn btn-primary">Primary</button>-->
        </div>
        <div class="lista-asistencia">
            
            <div class="table-asistencia" align="center">
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
                        <tr v-for="item in lista" v-bind:key="item.id">
               <td>{{item.id}}</td>
               <td>{{item.fecha}}</td>
               <td>{{item.hora}}</td>
               <td>{{item.nombreCoordinador}}</td>
               <td>{{item.nombreEstado}}</td>
            </tr>



                     
                    </tbody>
                </table>
                
            </div>
        </div>
    </div>
    
</template>

<script >
import {Component, Vue} from "nuxt-property-decorator"

export default {

  data() {
    return {
      lista: []
      }
    },

    components:{
            Component,
            Vue
    },

    methods:{

        getProducto1:function(){
            this.$http.get("http://localhost/APIVUE/")
              .then(respuesta => {
                 this.lista = respuesta.data
                 console.log(respuesta.data) })
              .catch(error => {console.log("HOLA") })
    }//fin de la funcion getProducto

    },
     created() {
        this.getProducto1();
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