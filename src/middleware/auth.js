export default function(next,store){
    if(!store.state.isSignedIn){
        next('/')
    }else{
        next()
    }

}