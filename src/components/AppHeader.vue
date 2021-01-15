<template>
<nav class="w-full bg-gradient-to-r from-green-800 to-green-600 text-white px-2 py-1">
    <router-link v-for="link in links" :key="link.to" :to="link.to" class="mx-2">{{link.title}}</router-link>
    <button v-if="!isSignedIn" @click="$emit('open-modal')">Login</button>
     <button v-else class="p-2" @click="logout">Logout</button>
   
</nav>

  
</template>

<script>
   import firebase from '../utilities/firebase'
export default {
    props:['isSignedIn'],
 
    data(){
        return{
            links:[
                {title:'Mcu Heros', to:'/Marvel-Heros'},
                {title:'Calendar', to:'/vue-calendar'},
                {title:'Markdown', to:'/markdown'},
                {title:'Slider', to:'/slider'},
                {title:'Calculator', to:'/calculator'},
                {title:'Modal', to:'/modal'},
                {title:'Chat',to:'/chat'},


            ]
        }
    },
    methods:{
        logout(){
            firebase.auth().signOut()
        }
    }

}
</script>

<style>

</style>