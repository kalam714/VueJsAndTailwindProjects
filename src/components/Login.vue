<template>

  <section class="w-screen h-screen fixed bg-gray-600 top-0 opacity-50 z-20" @click="closeModal">
  </section>
  <div class="absolute inset-0">
      <div class="h-full flex">
          <div class="m-auto bg-white p-2 rounded shadow z-30">
              <div class="border p-2">

              <h1 class="text-3xl text-center">Login</h1>
              <form class="p-3 m-2" @submit.prevent="loginUser">
              <div class="my-4">
                  <label>Email Or UserName</label>
                  <input class="rounded shadow p-2 w-full" v-model="email" />
              </div>
              <div class="my-4" >
                  <label>Password</label>
                  <input class="rounded shadow p-2 w-full" type="password" v-model="password" />
              </div>
                <div class="my-4" >
                  <button type="submit" class="w-full rounded shadow-md  bg-gradient-to-r  from-red-900 to-pink-900 p-2 text-white">
                     <span v-if="!isSubmiting"> Login</span>
                         <span v-else>🚀🚀</span>
                      </button>
              </div>
              </form>
              <section class="text-center my-4">
                  <button class="px-2 border rounded bg-green-600 text-white" @click="signWithGoogle">Sign With Google</button>
              </section>
               <section class="text-center my-4">
                  <button class="px-2 border rounded bg-green-600 text-white" @click="signWithFacebook">Sign With Facebook</button>
              </section>

          </div>
          </div>

      </div>
  </div>

</template>

<script>
import firebase from '../utilities/firebase'
export default {
    data(){
        return {
            
                email:'',
                password:'',
                isSubmiting:false,
        
        }
    },
    methods:{
        loginUser(){
            this.isSubmiting=true
            firebase.auth().signInWithEmailAndPassword(this.email,this.password)
            .then(()=>{
                this.email=''
                this.password=''
                this.isSubmiting=false
                this.closeModal()

            }).catch(()=>{
               this.email=''
                this.password=''
                this.isSubmiting=false
            })

        },
        closeModal(){
            this.$emit('close-modal')
        },
        signWithGoogle(){
            var provider = new firebase.auth.GoogleAuthProvider()
            firebase.auth().signInWithPopup(provider).then(()=>{
                this.closeModal()
            })
        },
        signWithFacebook(){
            var provider = new firebase.auth.FacebookAuthProvider();
               firebase.auth().signInWithPopup(provider).then(()=>{
                this.closeModal()
            })

        }
        
    }
  
}
</script>

<style>

</style>