 <template>
 <div>
    <div class="container-fluid" style="position:relative">
      <div class="row">
        <div class="d-flex flex-wrap justify-content-between">
<!--ALTA DE DM -->
          <h1 class="w-100">  Alta de Dispositivos Medicos: </h1>
          
          <form>
          <div class="form-group">
          <input type="text" class="form-control"  placeholder="Numero de Serie">
          </div>
          </form>
    
          <form>
          <div class="form-group">
          <input type="text" class="form-control" placeholder="Marca">
          </div>
          </form>

          <form>
          <div class="form-group ">
          <input type="text" class="form-control"  placeholder="Modelo">
          </div>
          </form>

          <form>
          <div class="form-group">
          <input type="text" class="form-control"  placeholder="Alias">
          </div>
          </form>

          <form>
          <div class="form-group">
          <input type="text" class="form-control"  placeholder="Departamento">
          </div>
          </form>

          <form>
          <div class="form-group">
          <input type="text" class="form-control" placeholder="Estado Funcional">
          </div>
          </form>

          <form>
          <div class="form-group">
          <input type="text" class="form-control" placeholder="Fecha de Adquisicion">
          </div>
          </form>

          <form>
          <div class="form-group ">
          <input type="text" class="form-control" placeholder="Garantia">
          </div>
          </form>

          <form>
          <div class="form-group">
          <input type="text" class="form-control"  placeholder="Mantenimientos Realizados">
          </div>
          </form>
        <div class="w-100">
       <button class="Agregar" id="login_button" @click="validarUsuario()">Agregar</button>
        </div>

</div>
        </div>
          
          <div class="mt-5 d-flex flex-wrap justify-content-between">


<!--BAJA DE DM -->
<div class="w-100">
          <h1>Baja de Dispositivos Medicos: </h1>

</div>
          <form>
          <div class="form-group">
          <input type="text" class="form-control"  placeholder="Numero de Serie">
          </div>
          </form>

          <form>
          <div class="form-group">
          <input type="text" class="form-control"  placeholder="Modelo">
          </div>
          </form>

          <form>
          <div class="form-group">
          <input type="text" class="form-control"  placeholder="Alias">
          </div>
          </form>

    <button class="DarBaja" id="login_button" @click="validarUsuario()">Dar de Baja</button>
    <button class="Inventario" id="login_button" @click="validarUsuario()">Inventario</button>
    <button class="Regresar" onClick="history.go(-1);">REGRESAR</button>


          </div>
          
      </div>
    </div>
</template> 

<style scoped>
.form-group input{
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
border-radius: 10px;
}

h4{
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

#NumSerie{
width: 410px;
height: 48px;
left: 320px;
top: 135px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
border-radius: 10px;
}

#Marca{
width: 194px;
height: 48px;
left: 737px;
top: 135px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
border-radius: 10px;
}

#Modelo{
width: 337px;
height: 48px;
left: 938px;
top: 135px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
border-radius: 10px;
}

#Alias{
width: 279px;
height: 48px;
left: 1293px;
top: 135px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
border-radius: 10px;
}

#Departamento{
width: 410px;
height: 48px;
left: 320px;
top: 209px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
border-radius: 10px;
}

#EdoFuncional{
width: 470px;
height: 48px;
left: 737px;
top: 209px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
border-radius: 10px; 
}

#FAdq{
width: 353px;
height: 48px;
left: 1219px;
top: 209px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
border-radius: 10px;
}

#Garantia{
width: 470px;
height: 48px;
left: 320px;
top: 283px;
background: #7ACEE0;
border: 1px solid #7ACEE0;
box-sizing: border-box;
border-radius: 10px;
}

#MttoRealizados{
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
border-radius: 10px;
}

.Agregar{
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
    margin-left: 620px;
    margin-top: 20px;
    background: #1DA0F2;
    box-sizing: border-box; 
    border-radius: 25px;
    color:#fff;
    width: 228px;
    font-size:1.2em;
}


</style>


