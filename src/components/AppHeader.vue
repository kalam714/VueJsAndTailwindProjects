<template>
<nav class="w-full bg-gradient-to-r from-green-800 to-green-600 text-white px-2 py-1">
    <router-link v-for="link in links" :key="link.to" :to="link.to" class="mx-2">{{link.title}}</router-link>
   
</nav>
  
</template>

<script>
export default {
    data(){
        return{
            links:[
                {title:'Mcu Heros', to:'/Marvel-Heros'},
                {title:'Calendar', to:'/vue-calendar'},
                {title:'Markdown', to:'/markdown'},
                {title:'Slider', to:'/slider'},

            ]
        }
    }

}
</script>

<style>

</style>