<template>
    <div id="menuleft">
        <ul>                   
            <li><router-link to="/DashboardDr">Dashboard</router-link> </li>      
            <li><router-link to="/Reportes">Reportes</router-link> </li>        

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