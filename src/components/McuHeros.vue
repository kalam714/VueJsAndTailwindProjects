<template>

    <h1 class="text-3xl text-center my-4">Marvel Heros {{ herosCount }}</h1>
    <ul class="border rounded p-2">
      <li
        class="flex justify-between"
        v-for="(hero, index) in marvelHeros"
        :key="hero.name"
      >
        <div x>
         <p class="text-purple-600"> {{ hero.name }} </p>
        </div>
        <button class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white ml-2 px-2" v-on:click="remove(index)">Remove</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
      <input
        class="border rounded px-2"
        v-model="newHero"
        placeholder="Type Hero Name Here"
        ref="newHeroRef"
      />
      <button
        class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white ml-2 px-2 "
        type="submit"
      >
        Add Hero
      </button>
    </form>
  
</template>

<script>

import { computed, onMounted, ref } from "vue";
export default {
  
  setup() {
    const newHeroRef = ref("");
    const newHero = ref("");
    const marvelHeros = ref([
      { name: "Thor" },
      { name: "Captain America" },
      { name: "Iron Man" },
      { name: "Captain Marvel" },
      { name: "Hulk" },
      { name: "Winter Soldier" },
      { name: "Black Penthar" },
    ]);

    onMounted(() => {
      newHeroRef.value.focus();
    });

    const herosCount = computed({
      get: () => marvelHeros.value.length,
    });

    function remove(index) {
      marvelHeros.value = marvelHeros.value.filter((hero, i) => i != index);
    }

    function addHero() {
      if (newHero.value !== "") {
        marvelHeros.value.push({ name: newHero.value });
        newHero.value = "";
      }
    }

    return { marvelHeros, newHero, remove, addHero, newHeroRef, herosCount };
  },
};
</script>

<style></style>
