<template>
   <section class="w-screen h-screen fixed bg-gray-600 top-0  opacity-50 z-20 left-0 " @click="close">
  </section>
    <div class="absolute inset-0">
      <div class="h-full flex">
          <div class="m-auto bg-white p-2 rounded shadow z-30">
              <div class="border p-2">
                 <h1> 
                     <slot name='title'></slot>
                 </h1>
                 <main>
                     <slot name='text'>
                     </slot>
                 
                 </main>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
    setup(_,{emit}){
        function close(){
            emit('close')
        }
        return {close}

    }
    

}
</script>

<style>

</style>