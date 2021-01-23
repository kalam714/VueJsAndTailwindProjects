<template>
<section class="w-full flex">
    <div class="m-auto">
        <div class="mt-8">

           <table>
               <thead>
                   <tr>
                    <th class="border px-4 py-2">ID</th>
                     <th class="border px-4 py-2">Photo</th>
                    <th class="border px-4 py-2"> First Name</th>
                    <th class="border px-4 py-2">Last Name</th>
                    <th class="border px-4 py-2">Email </th>
                   
                   </tr>
               </thead>
               <tbody>
                   <tr v-for="user in state.users.data" :key="user.id">
                        <td class="border px-4 py-2">{{user.id}}</td>
                         <td class="border px-4 py-2">
                            <img :src="user.avatar" :alt="user.first_name" width="50" class="rounded-full">
                        </td>
                        <td class="border px-4 py-2">{{user.first_name}}</td>
                        <td class="border px-4 py-2">{{user.last_name}}</td>
                        <td class="border px-4 py-2">{{user.email}}</td>
                       

                   </tr>
               </tbody>
           </table>
                  <div class="flex justify-between">
                      <button class="border rounded px-3 py-2 " :disabled="state.users.page===1" 
                      :class="state.users.page===1 ? 'bg-gray-200':'hover:shadow' " 
                      @click="prev">Prev</button>
                      <button class="border rounded px-3 py-2"
                      :disabled="state.users.page===2" 
                      :class="state.users.page===2? 'bg-gray-200':'hover:shadow' " 
                       @click="next">Next</button>

                  </div>

            
          
        </div>
    </div>

</section>
</template>

<script>
import {onMounted,reactive} from 'vue'
import axios from 'axios'
export default {
    setup(){
        const state = reactive({
            users:[]
        })
        onMounted(async()=>{
           const {data} =await axios.get('https://reqres.in/api/users')
           state.users=data
        })
        async function next(){
            const {data} =await axios.get('https://reqres.in/api/users?page=2')
           state.users=data
        }
          async function prev(){
            const {data} =await axios.get('https://reqres.in/api/users?page=1')
           state.users=data
        }


        return{state,next,prev}
    }
}
</script>

<style>

</style>