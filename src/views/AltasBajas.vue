<template>
<div>
    <div class="container-fluid">
      <div class="row">
          <h1> Alta de Dispositivos Medicos: </h1>
          </div>
          
          <form>
          <div class="form-group NumSerie">
          <label for="exampleInputEmail1">Numero de Serie:</label>
          <input type="text" class="form-control" id="exampleInputNSerie1" aria-describedby="nserieHelp" placeholder="Numero de Serie">
          </div>
          </form>
    
          <form>
          <div class="form-group Marca">
          <label for="exampleInputMarca1">Marca:</label>
          <input type="text" class="form-control" id="exampleInputMarca1" aria-describedby="marcaHelp" placeholder="Marca">
          </div>
          </form>

          <form>
          <div class="form-group Modelo">
          <label for="exampleInputModelo1">Modelo:</label>
          <input type="text" class="form-control" id="exampleInputModelo1" aria-describedby="modeloHelp" placeholder="Modelo">
          </div>
          </form>

          <form>
          <div class="form-group Alias">
          <label for="exampleInputAlias1">Alias:</label>
          <input type="text" class="form-control" id="exampleInputAlias1" aria-describedby="aliasHelp" placeholder="Alias">
          </div>
          </form>

          <form>
          <div class="form-group Departamento">
          <label for="exampleInputDepartamento1">Departamento:</label>
          <input type="text" class="form-control" id="exampleInputDepartamento1" aria-describedby="departamentoHelp" placeholder="Departamento">
          </div>
          </form>

          <form>
          <div class="form-group EdoFuncional">
          <label for="exampleInputEdoFuncional1">Estado Funcional:</label>
          <input type="text" class="form-control" id="exampleInputEdoFuncional1" aria-describedby="edofuncionalHelp" placeholder="Estado Funcional">
          </div>
          </form>

          <form>
          <div class="form-group FAdq">
          <label for="exampleInputFecha1">Fecha de Adquisicion:</label>
          <input type="text" class="form-control" id="exampleInputFecha1" aria-describedby="fechaHelp" placeholder="Fecha de Adquisicion">
          </div>
          </form>

          <form>
          <div class="form-group Garantia">
          <label for="exampleInputGarantia1">Garantia:</label>
          <input type="text" class="form-control" id="exampleInputGarantia1" aria-describedby="garantiaHelp" placeholder="Garantia">
          </div>
          </form>

          <form>
          <div class="form-group MttoRealizados">
          <label for="exampleInputMRealizados1">Mantenimientos Realizados:</label>
          <input type="text" class="form-control" id="exampleInputMRealizados1" aria-describedby="mrealizadosHelp" placeholder="Mantenimientos Realizados">
          </div>
          </form>

       <button class="Agregar" id="login_button" @click="validarUsuario()">Agregar</button>
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
top: 462px;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 60px;
color: #000000;
left: 20px
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

.NumSerie{
position: absolute;
width: 410px;
height: 48px;
left: 620px;
top: 355px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}
 
.Marca{
position: absolute;
width: 194px;
height: 48px;
left: 1037px;
top: 355px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}

.Modelo{
position: absolute;
width: 337px;
height: 48px;
left: 1238px;
top: 355px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}

.Alias{
position: absolute;
width: 279px;
height: 48px;
left: 1593px;
top: 355px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}

.Departamento{
position: absolute;
width: 410px;
height: 48px;
left: 620px;
top: 429px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}

.EdoFuncional{
position: absolute;
width: 470px;
height: 48px;
left: 1037px;
top: 429px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px; 
}

.FAdq{
position: absolute;
width: 353px;
height: 48px;
left: 1519px;
top: 429px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}

.Garantia{
position: absolute;
width: 470px;
height: 48px;
left: 620px;
top: 503px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}

.MttoRealizados{
position: absolute;
width: 764px;
height: 48px;
left: 1108px;
top: 503px;
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
left: 1462px;
top: 580px;
background: #1DA0F2;
border: 1px solid #00A8CC;
box-sizing: border-box;
box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
border-radius: 25px;
}

</style>


