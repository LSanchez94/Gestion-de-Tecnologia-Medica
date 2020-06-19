-<template>
 <!-- FALTA PANTALLA DE DISPOSITIVO -->
     <div class="container-fluid">
      <div class="row">
        <div class="d-flex w-100 mt-3">
            <!--ESTAS SE MODIFICAN PARA QUE QUEDEN CON DATOS DEL INVENTARIO-->
          <div class="color1">
            <h3>Indicador Capacitaciones</h3>
            <h2>{{ca}}</h2>
          </div>
          <div class="serie">
            <h3>{{nserie}}</h3>
          </div>
          <div class="mtto">
            <router-link to="/MttoShow" id="l">Proximo Mantenimieto</router-link>
         </div>

          <div class="color0">
            <h3>{{dispositivo[0].nombre}}</h3>
          </div>

          <div class="color2">
            <h3>Indicador Mantenimientos Correctivos:</h3>
            <h2>{{mc}}</h2>
       
          </div>

          <div class="color3">
            <h3><a href="http://www.integral-process.com/iso_album/h-046-002371-00(2.0)_imec_service_manual_en.pdf">Manual de Servicio</a></h3>
          </div>
          <div class="color4">
              <h3><a href="https://drive.google.com/file/d/1CDapDCSPRd-6PZwDCv9WlrofWDTf3q-7/view?usp=sharing">Hoja de servicio</a></h3>
           </div>
        

        </div>
      </div>
    </div>
</template>


<script>
import axios from 'axios'
export default {
  data(){
    return{

      nserie: null,
      dispositivo: [{
        nombre: ' '
      }],
      inventario:{
        mttocorr:"",
        nombre:'',
        capacitacion:'',
      },
      ca: '0',
      mc: '0',
      inventarios:[],
      numeroinventarios: '2',
      numeromantenimientos: '2',
      promd: 0,
      promc:0,

     lugar:{
       posicion:'',
     },
     lugares:[],
     numerolugares:0,
    }
  },

methods:{
    traerDispositivo() {
      axios
        .get( this.$store.state.url+"/Dispositivo/getDevices")
        .then(response => {
          this.inventarios = response.data;
          this.numeroinventarios = response.data.length;


          response.data.forEach(element => {
            this.promd = this.promd + element.mttocorr;
            this.promc = this.promc + element.capacitacion;
          });

            this.traerMantenimientos();

        })
        .catch(err => {
          alert("NO FUNCIONA EL API");
          console.log(err);
        });
    },



    dateClass(ymd, date) {
        const day = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear()
        return month && year
        },


    traerMantenimientos(){
      axios.get(this.$store.state.url + "/Mant/getMantenimiento").then( response => {
        this.numeromantenimientos = response.data.length;
        // console.log('yolo')
        // console.log(this.dispositivo[0].adq)
   

        var a = this.dispositivo[0].adq;
        var b = a.split('-')
        var c = 2020 - b[0] + 1;
    
        this.mc = (this.dispositivo[0].mttocorr / this.promd) * c;

        var ab= this.dispositivo[0].capacitacion;
        this.ca= (this.dispositivo[0].capacitacion / this.promc)*c; 
      })
    },
    
    getDispositivo(){
      axios.post( this.$store.state.url + "/Dispositivo/getDevice", {"nserie" : this.nserie}).then(response => {
        console.log(response.data)
        this.dispositivo = response.data;
          this.traerDispositivo();

      })
    }
},
created(){
  this.nserie = this.$route.params.nserie;
  this.getDispositivo();
}
}
</script>

<style scoped>
  h2 {
    font-size: 1.6em;
  }
  h3 {
    font-size: 2em;
    font-weight: bolder;
    color: #ffffff;
  }

  h4 {
    font-size: 3em;
    font-weight: bolder;
  }

.mtto{
    background-color:  #005082;
    color: #fff;
    position:absolute;
    margin-top:75px;
    font-weight: bold;
    margin-left: 100px;
    width: 925px;
    height: 100px;
    text-align: center;
    border-radius: 25px;
}
.color1{
    background-color: #FFA41B;
    color: #fff;
    position:absolute;
    margin-top:200px;
    font-weight: bold;
    left: 900px;
    width: 450px;
    padding: 60px;
    height: 200px;
    text-align: center;
    border-radius: 25px;
  }
  .color2 {
    background-color: #F09204;
    color: #fff;
    font-weight: bold;
    font-size: small;
    width: 450px;
    height: 200px;
    padding: 30px;
    text-align: center;
    border-radius: 25px;
    margin-top:200px;
    margin-left:100px;
  }
  .color3 {
    background-color: #005082;
    color: #ffff;
    position:absolute;
    margin-top:440px;
    font-weight: bold;
    left: 900px;
    width: 450px;
    padding: 60px;
    height: 200px;
    text-align: center;
    border-radius: 25px;
  }

  .color4{
    background-color: #1DA0F2;
    color: #fff;
    position: absolute;
    margin-top:440px;
    font-weight: bold;
    margin-left: 100px;
    width: 450px;
    padding: 60px;
    height: 200px;
    text-align: center;
    border-radius: 25px;
  }

  .color0{
    background-color: #7ACEE0;
    color: #fff;
    position:absolute;
    margin-top:15px;
    font-weight: bold;
    margin-left: 100px;
    width: 450px;
    height: 50px;
    text-align: center;
    border-radius: 25px;
  }

  #l{
    font-size: 3em;
    font-weight: bold;
    color:#fff;
  }

  .serie{
    background-color: #7ACEE0;
    color: #fff;
    position:absolute;
    margin-top:15px;
    font-weight: bold;
    margin-left: 575px;
    width: 450px;
    height: 50px;
    text-align: center;
    border-radius: 25px;
  }

  .Linea1{
    background-color: #F09204;
    color: #fff;
    position: absolute;
    margin-top:0px;
    font-weight: bold;
    margin-left: 100px;
    width: 26%;
    padding: 14px;
    height: 100px;
    text-align: center;
    border-radius: 25px;
  }
  .Linea2{
    background-color: #7ACEE0;
    color: #fff;
    position: absolute;
    margin-top:0px;
    font-weight: bold;
    margin-left: 500px;
    width: 25%;
    padding: 30px;
    height: 100px;
    text-align: center;
    border-radius: 25px;
  }
  ::placeholder { color: rgb(255, 255, 255); }
</style>