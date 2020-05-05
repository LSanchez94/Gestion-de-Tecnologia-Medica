<template>
    <div id="menuleft">
        <ul>
                          
            <li v-if="userProfile == 'Administrador'"><router-link to="/Dashboard">Dashboard</router-link> </li>
            <li v-if="userProfile == 'Administrador'"><router-link to="/Configuracion">Configuración</router-link> </li>
            <li v-if="userProfile == 'Administrador'"><router-link to="/AgregarProveedor">Agregar <br /> Proveedor</router-link> </li>
            <!--<li v-if="userProfile == 'Administrador'"><router-link to="/Reportes">Reportes</router-link> </li> -->    
           <!-- <li v-if="userProfile == 'Administrador'"><router-link to="/Mantenimiento">Mantenimiento</router-link> </li>  -->
            <li v-if="userProfile == 'Administrador'"><router-link to="/Inventarios">Inventario</router-link> </li>           
            <li v-if="userProfile == 'Administrador'"><router-link to="/Calendario">Calendario</router-link> </li>
            <li v-if="userProfile == 'Administrador'"><router-link to="/AltasBajas">Altas y Bajas</router-link> </li>
            <li v-if="userProfile == 'Administrador'"><router-link to="/Departamentos">Departamentos</router-link> </li>
            <!--<li v-if="userProfile == 'Administrador'"><router-link to="/Capacitacion">Agregar <br /> Capacitación</router-link> </li>-->
            <li v-if="userProfile == 'Médico'"><router-link to="/DashboardDr">Dashboard </router-link> </li>
            <li v-if="userProfile == 'Médico'"><router-link to="/ConfiguracionDR">Configuración</router-link> </li>         
        </ul>
    </div>
</template>

<script>
    export default {
        computed:{
            userProfile: function() {

                if(this.$store.state.user == null){
                    this.$store.state.user.name = localStorage.getItem('name');
                    this.$store.state.user.perfil = localStorage.getItem('perfil');
                    this.$store.state.user.correo = localStorage.getItem('correo');
                }
                // console.log(this.$store.state.user)
                var perfil = this.$store.state.user.perfil; 
                return perfil;
            },

        },
        created(){
                    this.$store.state.user.name = localStorage.getItem('name');
                    this.$store.state.user.perfil = localStorage.getItem('perfil');
                    this.$store.state.user.correo = localStorage.getItem('correo');
        }
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