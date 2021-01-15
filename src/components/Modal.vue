<template>
<section class="w-full flex">
    <div class="m-auto">
  <h1 class="text-2xl my-8">Re-usable Modal</h1>
  <ReUseable v-if="isBlueOpen" @close="isBlueOpen =false" >
    <template v-slot:title > 
       Green

    </template>
    <template v-slot:text>Hi there</template>
  </ReUseable>
  <button class="border rounded shadow bg-indigo-600 text-white my-2 mx-2" @click="isBlueOpen =true">Green Modal</button>
   <ReUseable v-if="isRedOpen" @close="isRedOpen =false" >
      <template v-slot:title > 
      Red

    </template>
    <template v-slot:text>Hi there</template>
  </ReUseable>
  <button class="border rounded shadow bg-indigo-600 text-white my-2 mx-2"  @click="isRedOpen =true">Red Modal</button>
        </div> 


</section>

</template>
<script>
import ReUseable from './ReUseable/ReUseable'
import {ref} from 'vue'
export default {
components:{ReUseable},
setup(){
    const isRedOpen = ref(false)
     const isBlueOpen = ref(false)

    return{isRedOpen,isBlueOpen}
}
}
</script>

<style>

</style>