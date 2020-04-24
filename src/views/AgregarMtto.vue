<template>
<div>
    <div class="container-fluid">
      <div class="row">
          <h1> DATOS DEL DISPOSITIVO MEDICO: </h1>

      <div class = "NumSerie" >
          <form>
          <div class="form-group">
          <input type="text" class="form-control" id="NumSerie" placeholder="Numero de Serie">
          </div>
          </form>
      </div>

      <div class = "Departamento" >
          <form>
          <div class="form-group">
          <input type="text" class="form-control" id="Departamento" placeholder="Departamento">
          </div>
          </form>
      </div>

        <div class = "TipoMtto" >
          <form>
          <div class="form-group">
          <input type="text" class="form-control" id="TipoMtto" placeholder="Tipo de Mantenimiento">
          </div>
          </form>
      </div>

         <div class = "FechaMtto">
          <form>
          <div class="form-group">
          <input type="text" class="form-control" id="FechaMtto" placeholder="Fecha a dar Mantenimiento">
          </div>
          </form>
       </div>

      <div class = "Encargado">
          <form>
          <div class="form-group">
          <input type="text" class="form-control" id="Encargado" placeholder="Encargado">
          </div>
          </form>
      </div>

       <button class="Agregar" id="login_button" @click="validarUsuario()">Agregar</button>
       <button class="Regresar" onClick="history.go(-1);">Regresar</button>
      </div>
    </div>
</div>

 </template> 

<script>
export default {
    data(){
        return{
        }
    },
    methods:{
        validarUsuario(){
            this.$router.push('/Dashboard')
        }
    }
};
</script>

<style scoped>
h1{
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 60px;
color: #000000;
}

h2{
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 35px;
line-height: 52px;
color: #FFFFFF;
}

h3{
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 35px;
line-height: 52px;
color: #FFFFFF;
}

#NumSerie{
position: absolute;
width: 410px;
height: 48px;
left: 320px;
top: 140px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}

#Departamento{
position: absolute;
width: 632px;
height: 48px;
left: 758px;
top: 140px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}

#TipoMtto{
position: absolute;
width: 1071px;
height: 48px;
left: 320px;
top: 225px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}

#FechaMtto{
position: absolute;
width: 616px;
height: 48px;
left: 320px;
top: 310px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}

#Encargado{
position: absolute;
width: 410px;
height: 48px;
left: 980px;
top: 310px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}

.Agregar{
position: absolute;
width: 410px;
height: 50px;
left: 980px;
top: 399px;
background: #1DA0F2;
border: 1px solid #00A8CC;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 25px;
}

.Regresar{
position: absolute;
width: 228px;
height: 49px;
left: 1160px;
top: 468px;
background: #005082;
border: 1px solid #005082;
box-sizing: border-box;
border-radius: 25px;
}
</style>