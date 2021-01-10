<template>
  <div class="container mx-auto px-40 py-40">
      <h1 class="text-2xl my-2">Vue Calendar</h1>
    
       <section class="flex mx-7 justify-between">
          <h1 class="font-bold">{{currentMonthName}}</h1>
          <h1 class="font-bold"> {{currentYear}}</h1>
      </section>
      <section class="flex">
          <p class="text-center my-2" style="width: 14.28%" v-for="day in days" :key="day">{{day}}</p>

      </section>
      
          
  
     
      <section class="flex flex-wrap">
           <p class="text-center" style="width: 14.28%" v-for="num in startDay()" :key="num"></p>
          <p class="text-center" style="width: 14.28%" v-for="num in daysInMonth(currentYear,currentMonth)" :key="num"
          :class="currenDateClass(num)">{{num}}</p>

      </section>
      <section class="flex justify-between my-2">
          <button class="border rounded-3xl px-2" @click="prev">Prev</button>
          <button class="border rounded-3xl px-2" @click="next">Next</button>

      </section>
         
  </div>
</template>

<script>
export default {
    data(){
        return{
            days: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
          
            currentMonth:new Date().getMonth(),
            currentYear: new Date().getFullYear(),
            currentDate: new Date().getUTCDate(),

        }
    },
    methods:{
        daysInMonth(year,month){
            return new Date(year,month+1,0).getDate()
        },
        startDay(){
            return new Date(this.currentYear,this.currentMonth,1).getDay();
        },
        next(){
            if(this.currentMonth==11){
                this.currentMonth=0;
                this.currentYear++;
            }else{
              this.currentMonth++
            }
           
        },
        prev(){
            if(this.currentMonth==0){
                  this.currentMonth=11;
                this.currentYear--;
            }else{
               this.currentMonth--
            }

             
        },
        currenDateClass(num) {
            const calenderFullDate = new Date(this.currentYear,this.currentMonth, num ).toDateString();
             const currentFullDate = new Date().toDateString();
             return calenderFullDate === currentFullDate ? "text-red-800 font-bold" : "";
    },
    },
    computed:{
        currentMonthName(){
            return new Date(this.currentYear,this.currentMonth).toLocaleString('default',{month:'long'})
        }
    }

}
</script>

<style>

</style>