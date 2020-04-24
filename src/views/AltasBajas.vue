<template>
<div>
    <div class="container-fluid">
      <div class="row">
          <!--ALTA DE DM -->
          <h1> Alta de Dispositivos Medicos: </h1>
          </div>
          <form>
          <div class="form-group NumSerie">
          <input type="text" class="form-control" id="NumSerie" placeholder="Numero de Serie">
          </div>
          </form>
    
          <form>
          <div class="form-group Marca">
          <input type="text" class="form-control" id="Marca" placeholder="Marca">
          </div>
          </form>

          <form>
          <div class="form-group Modelo">
          <input type="text" class="form-control" id="Modelo" placeholder="Modelo">
          </div>
          </form>

          <form>
          <div class="form-group Alias">
          <input type="text" class="form-control" id="Alias" placeholder="Alias">
          </div>
          </form>

          <form>
          <div class="form-group Departamento">
          <input type="text" class="form-control" id="Departamento" placeholder="Departamento">
          </div>
          </form>

          <form>
          <div class="form-group EdoFuncional">
          <input type="text" class="form-control" id="EdoFuncional" placeholder="Estado Funcional">
          </div>
          </form>

          <form>
          <div class="form-group FAdq">
          <input type="text" class="form-control" id="FAdq" placeholder="Fecha de Adquisicion">
          </div>
          </form>

          <form>
          <div class="form-group Garantia">
          <input type="text" class="form-control" id="Garantia" placeholder="Garantia">
          </div>
          </form>

          <form>
          <div class="form-group MttoRealizados">
          <input type="text" class="form-control" id="MttoRealizados" placeholder="Mantenimientos Realizados">
          </div>
          </form>

       <button class="Agregar" id="login_button" @click="validarUsuario()">Agregar</button>

          <!--BAJA DE DM -->
          <h4> Baja de Dispositivos Medicos: </h4>
          <form>
          <div class="form-group NumSerie2">
          <input type="text" class="form-control" id="NumSerie2" placeholder="Numero de Serie">
          </div>
          </form>

          <form>
          <div class="form-group Modelo2">
          <input type="text" class="form-control" id="Modelo2" placeholder="Modelo">
          </div>
          </form>

          <form>
          <div class="form-group Alias2">
          <input type="text" class="form-control" id="Alias2" placeholder="Alias">
          </div>
          </form>

    <button class="DarBaja" id="login_button" @click="validarUsuario()">Dar de Baja</button>
    <button class="Inventario" id="login_button" @click="validarUsuario()">Inventario</button>
    <button class="Regresar" onClick="history.go(-1);">Regresar</button>


      </div>
    </div>
</template> 

<!-- -------------------------------------------------------------------------------------------------------------- -->
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


<style scooped>
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

h4{
position: absolute;
height: 60px;
left: 320px;
top: 442px;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 60px;
color: #000000;
}

.color1 {
  background-color: #7acee0;
  color: #fff;
  font-weight: bold;
  margin-right: 10px;
  width: 33%;
  padding: 15px;
  text-align: center;
  border-radius: 25px;
}

#NumSerie{
position: absolute;
width: 410px;
height: 48px;
left: 320px;
top: 135px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}
 
#Marca{
position: absolute;
width: 194px;
height: 48px;
left: 737px;
top: 135px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}

#Modelo{
position: absolute;
width: 337px;
height: 48px;
left: 938px;
top: 135px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}

#Alias{
position: absolute;
width: 279px;
height: 48px;
left: 1293px;
top: 135px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}

#Departamento{
position: absolute;
width: 410px;
height: 48px;
left: 320px;
top: 209px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}

  

#EdoFuncional{
position: absolute;
width: 470px;
height: 48px;
left: 737px;
top: 209px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px; 
}

#FAdq{
position: absolute;
width: 353px;
height: 48px;
left: 1219px;
top: 209px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}

#Garantia{
position: absolute;
width: 470px;
height: 48px;
left: 320px;
top: 283px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}

#MttoRealizados{
position: absolute;
width: 764px;
height: 48px;
left: 808px;
top: 283px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}

#NumSerie2{
position: absolute;
width: 410px;
height: 48px;
left: 320px;
top: 528px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}

#Modelo2{
position: absolute;
width: 467px;
height: 48px;
left: 752px;
top: 528px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}

#Alias2{
position: absolute;
width: 337px;
height: 48px;
left: 1235px;
top: 528px;
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
left: 1162px;
top: 360px;
background: #1DA0F2;
border: 1px solid #00A8CC;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 25px;
}

.DarBaja{
position: absolute;
width: 410px;
height: 50px;
left: 1162px;
top: 608px;
background: #1DA0F2;
border: 1px solid #00A8CC;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 25px;
}

.Inventario{
position: absolute;
width: 393px;
height: 60px;
left: 320px;
top: 712px;
background: #005082;
border: 1px solid #005082;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 25px;
}

.Regresar{
position: absolute;
width: 228px;
height: 49px;
left: 1304px;
top: 728px;
background: #005082;
border: 1px solid #005082;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 25px;
}

</style>


