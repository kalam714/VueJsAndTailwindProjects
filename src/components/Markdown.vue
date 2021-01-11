<template>
  <div class="flex flex-wrap w-full"> 
      <h1 class="w-full text-center text-2xl my-3 font-bold">Markdown App</h1>
      <section class="flex m-auto w-10/12 h-screen">
          <article class="w-1/2 border">
          <textarea class="w-full h-screen" :value="text" @input="update"></textarea>
          </article>
          <article class="w-1/2 border bg-gray-200" v-html="Text"></article>
      </section>
     
  </div>
</template>

<script>
import marked from 'marked'
export default {
    data(){
        return {
            text:'',
            timeOut:''
        }
    },
    computed:{
        Text(){
            return marked(this.text)
        }
    },
    methods:{
        update(e){
           
           const task = () =>(this.text =e.target.value)
           this.debounce(task)
                        

           },
                
     
        debounce(func,wait=1000){

               clearTimeout(this.timeOut)
                this.timeOut=setTimeout(func,wait)
        }
    }


}
</script>

<style>

</style>
@#160107Raz