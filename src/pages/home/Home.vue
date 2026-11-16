
<script setup lang="ts">
import { ref } from 'vue';
import Navigation from '@/components/Navigation.vue'


const selectedTamaId = localStorage.getItem('selectedTamaId')

const imagen = ref('/images/tama-rojo.png')

const personaje = ref(
  selectedTamaId
    ? `/creatures/${String(selectedTamaId).padStart(2, '0')}.png`
    : ''
)

const giro = ref(false)
const fundido = ref(false)
const fundidoPersonaje = ref(false)
const reaction = ref(false)

function girar() {
  if (giro.value || reaction.value) return

  reaction.value = true

  const sonido = new Audio('/sounds/sonido_huida.mp3')
  sonido.volume = 0.5
  sonido.play().catch(() => {})

  setTimeout(() => {
    reaction.value = false

    fundidoPersonaje.value = true
    giro.value = true

    setTimeout(() => {
      fundido.value = true
    }, 350)

    setTimeout(() => {
      imagen.value =
        imagen.value === '/images/tama-rojo.png'
          ? '/images/tama-amarillo.png'
          : '/images/tama-rojo.png'

      fundido.value = false
    }, 650)

    setTimeout(() => {
      fundidoPersonaje.value = false
    }, 1400)

    setTimeout(() => {
      giro.value = false
    }, 2000)

  }, 250)
}

</script>

<template>
    
   <div class="flex absolute w-full h-full bg-gray-600 -z-10">

   <div class="fixed inset-0 -z-10 ">
        <img
            src="/images/fondo-windows.webp"
            alt=""
            class="absolute inset-0 w-full h-full object-cover opacity-90 brightness-125"
        />
    </div>

    <div class="absolute inset-0 flex items-center justify-center pb-15">
    
        <img 
        class="w-120 h-auto object-cover fade-edges cursor-pointer drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]" 
        :src="imagen"
        :class="{ 'girar': giro, 'fundir': fundido }"
        @click="girar"
        />

          <img
            v-if="personaje"
            :src="personaje"
            class="
            absolute w-20 h-20 object-contain pointer-events-none drop-shadow-[4px_4px_0px_rgba(255,230,120,0.8)]
            -translate-x-8 translate-y-21 transition-opacity duration-1000"
            :class="{
              'reaccion': reaction,
              'girar': giro,
              'opacity-0': fundidoPersonaje,
              'opacity-100': !fundidoPersonaje
            }"
          />

    </div>
   
    <div class="flex flex-col items-center justify-center min-h-screen">

      <h1 class="flex items-center justify-center text-5xl lg:text-6xl vt323 bg-amber-100"></h1>

    </div>

    <Navigation />
   
   </div>


</template>


<style scoped>

.vt323 {
  font-family: 'VT323', monospace;
}

.girar {
  animation: girar 1s ease-in-out forwards;
  animation-delay: 500ms;
}

.fundir {
  opacity: 0;
  transition: opacity 0.9s ease-in-out;
}

.reaccion {
  animation: reaccion 0.25s ease-in-out;
}

@keyframes reaccion {
  0% {
    transform: scale(1);
  }

  30% {
    transform: scale(0.92) rotate(-3deg);
  }

  60% {
    transform: scale(1.05) rotate(3deg);
  }

  100% {
    transform: scale(1);
  }
}

</style>