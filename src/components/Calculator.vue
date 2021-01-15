<template>
 <section class="w-full flex">
     <div class="m-auto">
     <h1 class="text-2xl text-center">Calculator</h1>
     <p class="text-3xl my-6 mb-4 text-right w-32 h-5 ">{{currentNum}}</p>
     <div v-if="operator">
         <small>{{prevNum}} {{operator}} {{currentNum}}</small>
     </div>
     <div class="grid grid-cols-4 gap-2">
         <button @click="pressed('1')" class="border rounded shadow p-2 w-10 h-10 ">1</button>
         <button @click="pressed('2')" class="border rounded shadow p-2 w-10 h-10">2</button>
         <button @click="pressed('3')" class="border rounded shadow p-2 w-10 h-10">3</button>
          <button @click="pressed('+')" class="border rounded shadow p-2 w-10 h-10">+</button>
         <button @click="pressed('4')" class="border rounded shadow p-2 w-10 h-10">4</button>
         <button @click="pressed('5')" class="border rounded shadow p-2 w-10 h-10">5</button>
         <button @click="pressed('6')" class="border rounded shadow p-2 w-10 h-10">6</button>
          <button @click="pressed('-')" class="border rounded shadow p-2 w-10 h-10">-</button>
         <button @click="pressed('7')" class="border rounded shadow p-2 w-10 h-10">7</button>
         <button @click="pressed('8')" class="border rounded shadow p-2 w-10 h-10">8</button>
         <button @click="pressed('9')" class="border rounded shadow p-2 w-10 h-10">9</button>
          <button @click="pressed('*')" class="border rounded shadow p-2 w-10 h-10">*</button>
         <button @click="pressed('0')" class="border rounded shadow p-2 h-10 w-10">0</button>
          <button @click="pressed('c')" class="border rounded shadow p-2 h-10 w-10">Ac</button>
         <button @click="pressed('=')" class="border rounded shadow p-2 w-10 h-10">=</button>
        <button @click="pressed('/')" class="border rounded shadow p-2 w-10 h-10">/</button>

     </div>
</div>
 </section>
</template>

<script>
import {onMounted, onUnmounted, ref} from 'vue'
export default {
    setup(){
        const currentNum = ref('');
        const numbers=['1','2','3','4','5','6','7','8','9','0']
        const prevNum =ref('')
        const operator=ref('')
        const operations =['+','-','*','/'];
        function pressed(value){
            if(value === '=' || value === 'Enter') calculate()
            else if(operations.includes(value)) applyOperation(value)
            else if (value === 'c') clear()
            else if(numbers.includes(value)) appendNumber(value)
            
        }
        function appendNumber(value){
            currentNum.value =currentNum.value +value
        }
        function applyOperation(value){
            calculate()
            prevNum.value =currentNum.value
            currentNum.value=''
            operator.value=value

        } 
        function calculate(){
            if(operator.value === '+') addition()
            else if (operator.value === '-') subtract()
            else if (operator.value === '*') multiply()
            else if( operator.value === '/') division()
           

           prevNum.value=''
           operator.value=''

        }
        function addition(){
             currentNum.value=+prevNum.value + +currentNum.value
        }
        function subtract(){
             currentNum.value=prevNum.value - currentNum.value
        }
        function multiply(){
             currentNum.value=prevNum.value * currentNum.value
        }
        function division(){
             currentNum.value=prevNum.value / currentNum.value
        }
        function clear(){
            currentNum.value =''
            operator.value='',
            prevNum.value=''
        }
        function handlekey(e){
               pressed(e.key)
               console.log(e.key)
        }
        onMounted(()=>{
            window.addEventListener('keydown',handlekey)
        })
        onUnmounted(()=>{
            removeEventListener('keydown',handlekey)
        })
        return { currentNum, pressed,prevNum,operator}
    }

}
</script>

<style>

</style>