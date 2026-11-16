
<script setup lang="ts">
import RetroButton from '@/components/RetroButton.vue'

import { ref } from 'vue'


const selectedTamaId = localStorage.getItem('selectedTamaId')

const personaje = selectedTamaId
  ? `/creatures/${String(selectedTamaId).padStart(2, '0')}.png`
  : '/creatures/01.png'

const posicion = ref({
  x: '50vw',
  y: '50vh'
})

const moverPersonaje = (event: MouseEvent) => {
 if (!follow.value) return

  posicion.value = {
    x: `${event.clientX}px`,
    y: `${event.clientY}px`
  }
}

const follow = ref(true)

const changerFollow = () => {
  follow.value = !follow.value
}

</script>

<template>
    <div>

     <div class="absolute">
   
        <RetroButton
        to="/home"
        class="m-5 rounded-full text-black text-xs lg:text-sm vt323"
            color="gray"
            light="white"
            dark="black"
        :opacity="1"
        :light-opacity="0.7"
        :dark-opacity="0.3"
        >
        Back
        </RetroButton>
        
     </div>

      <div 
      class="min-h-screen" 
      @mousemove="moverPersonaje"
      @click="changerFollow"
      >

        <img
            :src="personaje"
            :style="{
            left: posicion.x,
            top: posicion.y
            }"
            class="fixed opacity-70 z-50 w-20 h-20 object-contain pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-all duration-800 ease-in-out"
        />

        </div>

    </div>
</template>


<style scoped>

</style>