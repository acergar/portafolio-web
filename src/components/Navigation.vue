
<script setup lang="ts">
import RetroButton from '@/components/RetroButton.vue'

const emit = defineEmits<{
  eliminarPersonaje: []
}>()
</script>


<template>
    <div>

         <div class="absolute mt-149 md:-mt-0.5 md:-top-8 md:-left-8 lg:-top-6.5 lg:-left-6">
   
            <RetroButton
            to="/warning"
            class="m-10 text-white text-base lg:text-lg handjet"
              color="black"
                    light="white"
                    dark="black"
                :opacity="4"
                :light-opacity="0.3"
                :dark-opacity="0.4"
            >
            Back
            </RetroButton>
        
        </div>

    <div class="fixed bottom-0 left-0 w-full items-center flex justify-center md:gap-10 lg:gap-40 pb-10">
        
        <div class="absolute bottom-[300%] left-[72%] md:bottom-[350%] lg:bottom-[370%] lg:left-[74%] pointer-events-auto">
            <RetroButton 
            to="/video"
            class="m-4 text-white text-base lg:text-xl handjet"
                    color="#FFF15C"
                    light="#FFF9B5"
                    dark="#C9B52E"
                :opacity="4"
                :light-opacity="0.3"
                :dark-opacity="0.4"
             >
            Filmoteca
            </RetroButton>
        </div>
      
        <div class="absolute bottom-full left-[63%] md:bottom-[64%] lg:bottom-[250%] lg:left-[64%] pointer-events-auto">
            <RetroButton 
            to="/characters"
            class="m-4 text-white text-base lg:text-xl handjet"
                    color="#FFF15C"
                    light="#FFF9B5"
                    dark="#C9B52E"
                :opacity="4"
                :light-opacity="0.3"
                :dark-opacity="0.4"
            >
            Select
            </RetroButton>
        </div>
     
        <div class="absolute bottom-[30%] left-[47%] md:bottom-[800%] md:left-[11%] lg:bottom-[600%] lg:left-[67%] pointer-events-auto">
            <RetroButton 
            to="/care"
            class="m-4 text-white text-base lg:text-xl handjet"
                    color="#FFF15C"
                    light="#FFF9B5"
                    dark="#C9B52E"
                :opacity="4"
                :light-opacity="0.3"
                :dark-opacity="0.4"
            >
            Care
            </RetroButton>
        </div>
       
        <div class="absolute bottom-[600%] left-[77%] md:bottom-[1100%] md:left-[18%] lg:bottom-[770%] lg:left-[75%] pointer-events-auto">
            <RetroButton 
            to="/about"
            class="m-4 text-white text-base lg:text-xl handjet"
                    color="#FFF15C"
                    light="#FFF9B5"
                    dark="#C9B52E"
                :opacity="4"
                :light-opacity="0.3"
                :dark-opacity="0.4"
            >
            About
            </RetroButton>
        </div>

        
        <div class="absolute text-white bottom-[1230%] left-[12%] md:left-[80%] md:bottom-[700%] lg:bottom-[1630%] lg:left-[95%] x-14 y-14 pointer-events-auto">
            <RetroButton
                to=""
                @click="emit('eliminarPersonaje')"
                    color="black"
                    light="white"
                    dark="black"
                :opacity="4"
                :light-opacity="0.3"
                :dark-opacity="0.4"
            >
                ↻
            </RetroButton>
        </div>
      
    
    </div>

    </div>
</template>


<style scoped>

.handjet {
  font-family: 'handjet', monospace;
}

</style>