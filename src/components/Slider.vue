<template>
  <div class="flex flex-wrap w-full relative">
      <div class="w-full absolute" v-for="(color,index) in sliders" :key="color">
          <transition name="fade">
      <div  v-if="currentSlide == index" :class="color"  style="height:400px">

      </div>
          </transition>
           <div class="w-full" style="height:340px">
      <div class="absolute bottom-0 w-full flex justify-center">
        <div
          v-for="(slider, index) in sliders"
          :key="slider"
          @click="makeActive(index)"
          :class="currentSlide == index ? 'bg-gray-700' : 'bg-gray-300'"
          class="w-4 h-4 mx-2 rounded-full cursor-pointer shadow-md"
        ></div>
      </div>
    </div>

     
      </div>
      <!-- <div class="w-full flex my-10">
          <div class="m-auto">
               <transition name="fade">
              <h1 v-if="isSlider">Slider Show</h1>
              </transition>
              <button class="px-2 rounded border" @click="isSlider =!isSlider">Toggle</button>

          </div>

      </div> -->
  </div>
</template>

<script>
export default {
    data(){
        return {
            currentSlide: 2,
            interval:'',
            sliders:['bg-yellow-800','bg-green-800','bg-red-800'],
            isSlider:true
        }
    },
    mounted(){
       this.interval= setInterval(()=>{
            console.log('changing slide', this.currentSlide)
        if(this.currentSlide ===2){
            this.currentSlide = 0
        }else{
            this.currentSlide++
        }

        },2000)
      
    },
    beforeUnmount(){
        clearInterval(this.interval)
    },
    methods: {
    makeActive(index) {
      this.currentSlide = index;
    },
  },

}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
