
<script setup lang="ts">
import RetroButton from '@/components/RetroButton.vue'


</script>


<template>
    <div>

         <div class="absolute">
   
            <RetroButton
            to="/warning"
            class="m-10 text-white text-base lg:text-xl vt323"
                color="royalblue"
                light="skyblue"
                dark="navy"
            :opacity="1"
            :light-opacity="0.1"
            :dark-opacity="0.3"
            >
            Back
            </RetroButton>
        
        </div>

   
    <div class="fixed bottom-0 left-0 w-full items-center flex justify-center md:gap-10 lg:gap-40 pb-10">
        
        <div class="absolute bottom-[300%] left-[73%] lg:bottom-[400%] lg:left-[71%] pointer-events-auto">
            <RetroButton 
            to="/video"
            class="m-4 text-white text-base lg:text-xl vt323"
                color="limegreen"
                light="white"
                dark="darkgreen"
            :opacity="1"
            :light-opacity="0.1"
            :dark-opacity="0.3"
            >
            Filmoteca
            </RetroButton>
        </div>
      
        <div class="absolute bottom-full left-[60%] md:bottom-[70%] lg:bottom-[70%] lg:left-[64%] pointer-events-auto">
            <RetroButton 
            to="/characters"
            class="m-4 text-white text-base lg:text-xl vt323"
                color="limegreen"
                light="white"
                dark="darkgreen"
            :opacity="1"
            :light-opacity="0.1"
            :dark-opacity="0.3"
            >
            Select
            </RetroButton>
        </div>
     
        <div class="absolute bottom-[45%] left-[43%] md:bottom-[800%] md:left-[10%] lg:bottom-[900%] lg:left-[22%] pointer-events-auto">
            <RetroButton 
            to="/care"
            class="m-4 text-white text-base lg:text-xl vt323"
                color="limegreen"
                light="white"
                dark="darkgreen"
            :opacity="1"
            :light-opacity="0.1"
            :dark-opacity="0.3"
            >
            Care
            </RetroButton>
        </div>
       
        <div class="absolute bottom-[600%] left-[77%] md:bottom-[1100%] md:left-[20%] lg:bottom-[1200%] lg:left-[27%] pointer-events-auto">
            <RetroButton 
            to="/about"
            class="m-4 text-white text-base lg:text-xl vt323"
                color="limegreen"
                light="white"
                dark="darkgreen"
            :opacity="1"
            :light-opacity="0.1"
            :dark-opacity="0.3"
            >
            About
            </RetroButton>
        </div>
      
    
    </div>

    </div>
</template>


<style scoped>

.vt323 {
  font-family: 'VT323', monospace;
}

</style>