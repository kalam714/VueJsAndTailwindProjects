<template>
<AppHeader/>
  <div class="m-auto">

    <router-view></router-view>
   
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
// import McuHeros from './components/McuHeros'
//import Calendar from './components/Calendar'

export default {
  components:{AppHeader,
 // McuHeros,
 //Calendar
  },
 
};
</script>

<style></style>
