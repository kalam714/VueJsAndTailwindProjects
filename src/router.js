import {createRouter,createWebHistory} from 'vue-router'
import Index from './components/Index'
import McuHeros from './components/McuHeros'
import Calendar from './components/Calendar'
import Markdown from './components/Markdown'
import Slider from './components/Slider'
import Calculator from './components/Calculator'
import Modal from './components/Modal'
import Chat from './components/Chat'





const routes = [
    {path:'/',component:Index},
    {path:'/Marvel-Heros',component:McuHeros},
    {path:'/vue-calendar',component:Calendar},
    {path: '/markdown',component:Markdown}, 
    {path:'/slider',component:Slider},
    {path:'/calculator',component:Calculator},
    {path:'/modal',component:Modal},
    {path:'/chat',component:Chat}
]
const router =createRouter({
    routes,
    history:createWebHistory(),
});
export default router;