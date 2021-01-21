<template>
  <section class="w-full flex">
      <div class="m-auto">
              <h1 class="text-2xl text-center"> Real Time Chat</h1>
          <div class="broder rounded-lg ">
              <div class="h-64 p-2">
                   <div v-for="chat in state.chats" :key="chat.message" 
                   class="w-full "
                   :class="chat.userId === userId ? 'text-right' :'text-blue-400' " 
                   >
                    {{chat.message}}

                </div>

              </div>
              <div class="h-8 p-2">
                  <input v-model="state.message" placeholder="Start typing..." class="border rounded shadow p-1"
                  @keydown.enter="addMessage"
                   />

              </div>

          </div>
          
      </div>
     
  </section>
</template>

<script>
import { computed, onMounted,reactive } from 'vue'
import  {chatsRef} from '../utilities/firebase'
import {useStore} from 'vuex'
export default {
    setup(){
        const state = reactive({
            chats:[],
            message:"",
            
        })
        const store = useStore()
        const userId = computed(() => store.state.authUser.uid)




        onMounted(async()=>{
           
          
           
      
            chatsRef.on('child_added',(snapshot)=>{
                 
                 state.chats.push({key:snapshot.key,...snapshot.val()})
                //state.chats = snapshot.val()
             //  console.log(snapshot.val())
            })
          //  console.log(data.val())

        })
        function addMessage(){
            const newChat = chatsRef.push()
        
            newChat.set({userId:state.userId, message : state.message})
            state.message=""
        }

        return {state,addMessage,userId}
    }

}
</script>

<style>

</style>