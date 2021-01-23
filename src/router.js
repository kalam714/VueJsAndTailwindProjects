import {createRouter,createWebHistory} from 'vue-router'
import Index from './components/Index'
import McuHeros from './components/McuHeros'
import Calendar from './components/Calendar'
import Markdown from './components/Markdown'
import Slider from './components/Slider'
import Calculator from './components/Calculator'
import Modal from './components/Modal'
import Chat from './components/Chat'
import store from './store/index'
import Tensorflow from './components/Tensorflow'

import UserCrud from './components/UserCrud'



const routes = [
    {path:'/',component:Index},
    {path:'/Marvel-Heros',component:McuHeros},
    {path:'/vue-calendar',component:Calendar},
    {path: '/markdown',component:Markdown}, 
    {path:'/slider',component:Slider},
    {path:'/calculator',component:Calculator},
    {path:'/modal',component:Modal},
    {path:'/user-crud',component:UserCrud},
    {path:'/tensorflow',component:Tensorflow},
    {path:'/chat',
    component:Chat,
    meta:{middleware:'auth'}
},
]
const router =createRouter({
    routes,
    history:createWebHistory(),
});

router.beforeEach((to,_,next)=>{
if(to.meta.middleware){
    //console.log(to.meta.middleware)
    const middleware = require(`./middleware/${to.meta.middleware}`)
    if(middleware){
        middleware.default(next,store)
    }else{
        next()
    }
}else{
    next()
}
})
export default router;