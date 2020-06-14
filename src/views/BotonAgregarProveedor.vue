<template>
  <div class="container-fluid">
      <div class="row">
      <h2>Proveedores: </h2>
      <router-link to="/inventario" class="btn" id="linkproveedor">Proveedores:</router-link>

          <div id="AgregarProveedor" class="col-8">
<!-- Tabla agregar proveedor-->
      <div class="table-container w-100 mt-1" id="Tabla">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Nombre de la empresa</th>
              <th scope="col">Nombre del contacto</th>
              <th scope="col">Correo electrónico</th>
              <th scope="col">Numero de teléfono</th>
              <th scope="col">Dirección</th>
            </tr>
          </thead>
           <tbody>
            <tr v-for="(a, index) in proveedores" :key="index">
              <th scope="row">{{index+1}}</th>
              <td>{{a.nombre}}</td>
              <td>{{a.contacto}}</td>
              <td>{{a.email}}</td>
              <td>{{a.tel}}</td>
              <td>{{a.address}}</td>
         
            </tr>
          </tbody>
        </table>
      </div>
