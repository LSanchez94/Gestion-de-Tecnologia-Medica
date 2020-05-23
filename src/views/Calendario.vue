
<template>
  <div class="container-fluid">
    <div class="row">
      <b-calendar 
      v-model="value" :date-info-fn="dateClass" 
      block locale="es"
      :date-format-options="{ year: 'numeric', month: 'short', day: '2-digit', weekday: 'short' }"
      :date-disabled-fn="dateDisabled"
      today-variant="info"
      selected-variant="warning" 
      class="block"
      ></b-calendar>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    value='';
  },
  methods: {
    dateDisabled(ymd, date) {
        // Disable weekends (Sunday = `0`, Saturday = `6`) 
        const weekday = date.getDay()
        const day = date.getDate()
        // Return `true` if the date should be disabled
        return weekday === 0 || weekday === 6
     },
     SelectedDate(date){
        const capday=capacitacion.fecha;
        //const mttoprevoday= mantenimiento.fecha;
        //const mttocorrday= mantenimientoc.fecha;
        return capday === 0;
     },
   
  }
};
    
</script>

<style scoped>
.block{
  color:#005082;
  margin-left: 600px;
  margin-top:80px;
}

</style>
