<template>
 <section class="w-full flex">
     <div class="m-auto">
         <div class="mt-10">
         <h1 class="text-2xl my-4">Object Detection</h1>
         <div class="flex flex-wrap justify-center">
                <img 
                ref='imgRef'
                src="https://images.unsplash.com/photo-1567581935884-3349723552ca"
                crossorigin="anonymous"
                 width="200">

         </div>
         <div class="w-full text-center my-4">
             <button @click="detect" 
             class="w-32 rounded shadow-md bg-gradient-to-r from-red-900 to-pink-800 text-white p-2">
             <span v-if="isLoading">Loading....</span>
             <span v-else>Detect</span>
             
             </button>
         
         <div class="w-full" v-if="result.length >0">
             <p>{{result[0].class}}</p>
         </div>
         </div>
     </div>
     </div>

 </section>
</template>

<script>
import {ref} from 'vue'
require('@tensorflow/tfjs-backend-cpu');
require('@tensorflow/tfjs-backend-webgl');
const cocoSsd = require('@tensorflow-models/coco-ssd');
export default {
    setup(){
        const imgRef =ref('')
        const  isLoading =ref(false)
        const result =ref('')

   async function detect(){
       const img = imgRef.value
       isLoading.value=true
       const model = await cocoSsd.load();

  const predictions = await model.detect(img);
      result.value =predictions;
      isLoading.value=false

   }

        return {imgRef,result,detect,isLoading}
    }

}
</script>

<style>

</style>