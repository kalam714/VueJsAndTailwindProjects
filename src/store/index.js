
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
        isSignedIn:false,
        authUser:{},
    }

  },
  mutations: {
    
     setIsSignedIn(state,payload){
         state.isSignedIn = payload
     },
     setAuthUser(state,payload){
         state.authUser = payload
     }
    
  }
})

export default store