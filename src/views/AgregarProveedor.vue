<template>
  <div class="container-fluid">
      <div class="row">
          <div id="AgregarProveedor" class="col-8">
             <h2>Datos: </h2>
<!-- Formulario para agregar datos de proveedor -->
  <form class="col-10">
    <div class="form-group Linea1">
        <input type="text" class="form-control" id="Linea1" placeholder="Nombre de la empresa"/>
    </div>
      

          <div class="form-group Linea2">
          <input type="text" class="form-control" id="Linea2" placeholder="Nombre del contacto" >
          </div>
      
    
          <div class="form-group Linea3">
           <input type="email" class="form-control" id="Linea3"  placeholder="Correo electrónico" >
          </div>


          <div class="form-group Linea4">
          <input type="text" class="form-control" id="Linea4" placeholder="Numero de teléfono" >
          </div>

          <div class="form-group Linea5">
         <input type="text" class="form-control" id="Linea5" placeholder="Dirección" >
          </div>
        </form>

          </div>
          </div>

        
      

  | <button class="btn" id="RectanguloGuardar">Guardar</button>
    <button class="btn" id="RectanguloRegresar" onClick="history.go(-1);">REGRESAR</button>

          
        </div>
  
     
                  
</template>

<style scoped>
#AgregarProveedor{
    font-size:1.6em;
    margin-top: 30px;
    margin-left: 30px;
}

#formulario{
    font-size: 1.6em;
    position: absolute;
    font-weight: bold;
    margin-left: 65px;
    margin-top: 25px;
    color:black;
  }
  
  #Linea1{
    margin-top:35px;
    background-color:#7ACEE0;
    width:750px;
  }

  #Linea2{
    margin-top:15px;
    width:750px;
    margin-left:0px;
    background-color:#7ACEE0;
  }

  #Linea3{
    margin-top:15px;
    width:750px;
    background-color:#7ACEE0;
  }

  #Linea4{
    margin-top:15px;
    width:750px;
    background-color:#7ACEE0;
  }

  #Linea5{
    margin-top:15px;
    width:750px;
    background-color:#7ACEE0;
  }


#RectanguloGuardar{
    width: 200px;
    margin-left: 600px;
    top: 35px;
    background: #005082;
    box-sizing: border-box; 
    border-radius: 25px;
    color:#fff;
}

#TextoGuardar{
    color: #FFFFFF;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    margin-left: 5px;
    color: #FFFFFF;

}

#RectanguloRegresar{
  
    margin-left: 600px;
    margin-top: 100px;
    background: #1DA0F2;
    box-sizing: border-box; 
    border-radius: 25px;
    color:#fff;
    width: 228px;
    font-size:1.2em;
}


::placeholder { color: rgb(255, 255, 255); }
</style>