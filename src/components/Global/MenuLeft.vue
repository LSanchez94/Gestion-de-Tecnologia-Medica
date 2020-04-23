<template>
    <div id="menuleft">
        <ul>
            <li><router-link to="/Dashboard">Dashboard</router-link> </li>
            <li><router-link to="/Configuracion">Configuración</router-link> </li>
            <li><router-link to="/AgregarProveedor">Agregar Proveedor</router-link> </li>
            <li><router-link to="/AltasBajas">Altas y Bajas</router-link> </li>
            <li><router-link to="/Calendario">Calendario</router-link> </li>
            <li><router-link to="/Departamentos">Departamentos</router-link> </li>
            <li><router-link to="/Mantenimiento">Agregar Mantenimiento</router-link> </li>
             <li><router-link to="/Capacitacion">Agregar<br /> Capacitación</router-link> </li>            

        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    #menuleft{
        background-color: #FFA41B;
        width: 300px;
        height: calc(100vh - 56px);
        font-weight: bold;
        font-size: 1.4em;
        position: fixed;
        left: 0;
        top: 56px;
    }

    a{
        color: #FFF;
    }

    li{
        padding: 10px 0;
    }
</style>