
<script setup lang="ts">
import RetroButton from '@/components/RetroButton.vue'
import tamagotchis from '@/data/characterslist.json'

</script>

<template>

   <div class="min-h-screen overflow-y-auto" style="height: 100dvh;">
   
    <div class="absolute">
   
        <RetroButton
        to="/home"
        class="m-5 rounded-full bg-gray-300 text-black text-base lg:text-xl vt323 hover:bg-gray-500 hover:text-gray-300 hover:border-white"
        >
        Back
        </RetroButton>
        
    </div>

    <div class="grid grid-cols-6 lg:grid-rows-6 gap-1 p-2 w-full">
     <div  
        v-for="tama in tamagotchis"
        :key="tama.id"
        class="flex flex-col lg:flex-row items-center gap-2 border border-gray-500 p-1 rounded-lg"
        >

        <img
            :src="`/creatures/${tama.id}.png`"
            class="max-h-10 max-w-10 object-contain m-1"
        />

        <div class="flex flex-col min-w-0 h-fit self-start">
            <h2 class="text-xs lg:text-base font-bold vt323">
                {{ tama.name }}
            </h2>

            <p class="text-[8px] lg:text-xs text-gray-400">
                {{ tama.species }}
            </p>

            <p class="text-[8px] lg:text-xs leading-tight">
                {{ tama.description }}
            </p>
        </div>

     </div>
    </div>

   </div>

    
</template>

<style scoped>

:global(body) {
  overflow: hidden;
}

:global(html) {
  overflow: hidden;
}

</style>