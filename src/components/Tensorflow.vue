<template>
 <section class="w-full flex">
     <div class="m-auto">
         <div class="mt-10">
         <h1 class="text-2xl my-4">Object Detection</h1>
         <div class="flex flex-wrap justify-center my-2">
             <div class="w-full flex justify-center ">
                    <button
                    v-if="!isStreaming"
                  @click="openCamera"
              class="w-32 rounded shadow-md bg-gradient-to-r from-red-900 to-blue-800 text-white p-2"
             >Open Camera</button>
             <div class="flex justify-between" v-else> 
                    <button
               
                  @click="stopStreaming"
              class="w-32 rounded shadow-md bg-gradient-to-r from-red-900 to-blue-800 text-white p-2"
             >Stop Streaming</button>
                  <button
               
                  @click="snapShot"
              class="w-32 rounded shadow-md bg-gradient-to-r from-red-900 to-gray-800 text-white p-2"
             >Snap</button>

             </div>

           
          
             </div>
          <video autoplay="true" width="200" ref="videoRef" />
         </div>
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
        const isStreaming=ref(false)
        const videoRef= ref('')
        const result =ref('')

   async function detect(){
       const img = imgRef.value
       isLoading.value=true
       const model = await cocoSsd.load();

  const predictions = await model.detect(img);
      result.value =predictions;
      isLoading.value=false

   }
  async function openCamera(){
       if(navigator.mediaDevices.getUserMedia){
           const devices =await navigator.mediaDevices.enumerateDevices()
           const cams =(devices.filter((devices) => devices.kind ==='videoinput' ))
            const camId =cams[0].deviceId
           navigator.mediaDevices.getUserMedia({video:{deviceId:{exact:camId}}}).then((stream)=>{
               isStreaming.value=true
               videoRef.value.srcObject = stream
           })
       }
   }
   function stopStreaming(){
       const stream = videoRef.value.srcObject
       const tracks = stream.getTracks()
       tracks.map((track)=>track.stop())
       isStreaming.value=false

   }
   function snapShot(){
       const canvas = document.createElement('canvas')
       const ctx = canvas.getContext('2d')
       ctx.drawImage(videoRef.value,0,0,200,200)
       const data = canvas.toDataURL('image/png')
       imgRef.value.setAttribute('src',data)
      

   }

        return {imgRef,result,detect,isLoading,videoRef,openCamera,isStreaming,stopStreaming,snapShot}
    }

}
</script>

<style>

</style>