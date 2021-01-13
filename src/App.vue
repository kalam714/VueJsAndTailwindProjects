<template>
<AppHeader :isSignedIn ='isSignedIn'  @open-modal="isOpen = true" />
  <div class="m-auto">

    <router-view></router-view>
   
  </div>
  <Login v-if="isOpen" @close-modal='isOpen=false'/>
</template>

<script>
import AppHeader from './components/AppHeader'
import Login from './components/Login'
import firbase from './utilities/firebase'
// import McuHeros from './components/McuHeros'
//import Calendar from './components/Calendar'

export default {
  components:{AppHeader,
 // McuHeros,
 //Calendar
 Login
  },
    data(){
        return{
            isOpen:false,
            isSignedIn:false,
            User:{}
        }
    },
    mounted(){
      firbase.auth().onAuthStateChanged((user) =>{
        if(user){
          this.isSignedIn = true
          this.User = user
        }else{
          this.isSignedIn = false
          this.User ={}
        }
      })


    }

 
};
</script>

<style></style>
