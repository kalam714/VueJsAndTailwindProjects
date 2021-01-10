import {createRouter,createWebHistory} from 'vue-router'
import Index from './components/Index'
import McuHeros from './components/McuHeros'
import Calendar from './components/Calendar'



const routes = [
    {path:'/',component:Index},
    {path:'/Marvel-Heros',component:McuHeros},
    {path:'/vue-calendar',component:Calendar}
]
const router =createRouter({
    routes,
    history:createWebHistory(),
});
export default router;