
<script setup lang="ts">
import RetroButton from '@/components/RetroButton.vue'


</script>


<template>
    <div>

         <div class="absolute">
   
            <RetroButton
            to="/warning"
            class="m-10 rounded-full bg-gray-300 text-black text-base lg:text-xl vt323 hover:bg-gray-500 hover:text-gray-300 hover:border-white"
            >
            Back
            </RetroButton>
        
        </div>

   
    <div class="fixed bottom-0 left-0 w-full items-center flex justify-center md:gap-10 lg:gap-40 pb-10" >

        <RetroButton 
         to="/video"
         class="m-4 rounded-full bg-red-800 text-gray-200 text-base lg:text-xl vt323 hover:bg-gray-500 hover:text-gray-300 hover:border-white"
        >
        Filmoteca
        </RetroButton>
    
        <RetroButton 
         to="/characters"
         class="m-4 rounded-full bg-red-800 text-gray-200 text-base lg:text-xl vt323 hover:bg-gray-500 hover:text-gray-300 hover:border-white"
        >
        Select
        </RetroButton>
       
        <RetroButton 
         to="/care"
         class="m-4 rounded-full bg-red-800 text-gray-200 text-base lg:text-xl vt323 hover:bg-gray-500 hover:text-gray-300 hover:border-white"
        >
        Care
        </RetroButton>
    
        <RetroButton 
         to="/about"
         class="m-4 rounded-full bg-red-800 text-gray-200 text-base lg:text-xl vt323 hover:bg-gray-500 hover:text-gray-300 hover:border-white"
        >
        About
        </RetroButton>
    
    </div>

    </div>
</template>


<style scoped>

.vt323 {
  font-family: 'VT323', monospace;
}

</style>