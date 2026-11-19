
<script setup lang="ts">
import { ref } from 'vue';
import Navigation from '@/components/Navigation.vue'


const selectedTamaId = localStorage.getItem('selectedTamaId')

const imagen = ref('/images/tama-amarillo.png')

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

  if (personaje.value) {
    reaction.value = true

    const sonido = new Audio('/sounds/sonido_huida.mp3')
    sonido.volume = 0.5
    sonido.play().catch(() => {})
  }

  setTimeout(() => {
    reaction.value = false

    fundidoPersonaje.value = true
    giro.value = true

    setTimeout(() => {
      fundido.value = true
    }, 350)

    setTimeout(() => {
      imagen.value =
        imagen.value === '/images/tama-amarillo.png'
          ? '/images/tama-rojo.png'
          : '/images/tama-amarillo.png'

      fundido.value = false
    }, 650)

    setTimeout(() => {
      fundidoPersonaje.value = false
    }, 1400)

    setTimeout(() => {
      giro.value = false
    }, 2000)

  }, personaje.value ? 250 : 0)
}

function eliminarPersonaje() {
  localStorage.removeItem('selectedTamaId')
  personaje.value = ''
}

const pixels = [
  { left: 97.6, top: 0 },
  { left: 92.6, top: 25 },

  { left: 35, top: 0 },
  { left: 20, top: 68 },
  { left: 28, top: 25 },
  { left: 17, top: 37 },

  { left: 19.7, top: -7 },

  { left: 10, top: 0 },
  { left: 3, top: 25 },
]

</script>

<template>
    
  <div class="flex absolute w-full h-full">

   <div class="absolute inset-0 overflow-hidden">
        <img
            src="/images/fondo-windows.webp"
            alt=""
            class="absolute inset-0 w-full h-full object-cover opacity-88 brightness-120"
        />
        <div
          class="hidden min-[1250px]:block absolute w-[13%] -rotate-3"
          style="left: 12%; top: 69%;"
        >
          <div
            class="absolute inset-0 bg-yellow-100/20 blur-2xl rounded-full scale-125 opacity-60"
          ></div>
          <img
            src="/creatures/tama-sentado.png"
            class="relative w-full h-auto object-contain opacity-85 drop-shadow-[-1px_-1px_0px_white]"
          />
          <div
            class="absolute left-1/2 bottom-[1%] -translate-x-1/2 translate-y-1/2 w-[65%] h-[9%] rounded-full bg-black/80 blur-md"
          ></div>
        </div>
    </div>


    <div class="z-10 hidden min-[1250px]:block absolute top-[32vh] left-[3vw]">

      <RouterLink
        to="/about"
        class="block w-fit no-underline"
      >

        <div class="w-[clamp(280px,25vw,450px)] bg-black/50 border border-gray-800 rounded-none p-0.5
          shadow-[3px_3px_0px_#101b3b,0_5px_12px_rgba(0,0,0,0.25)]
        ">

          <div class="bg-gray-200 border border-gray-600 rounded-none p-px">

            <div class="bg-[#DCE6FF] border border-gray-100 rounded-none overflow-hidden">

              <div class="flex items-center justify-between bg-gray-600 px-2 py-1 border-b-2 border-gray-200">

                <span class="font-mono text-xs text-white">
                  About/
                </span>

                <div class="flex gap-1">

                  <span class="flex h-5 w-5 items-center justify-center bg-gray-200 text-gray-800 border-2 border-t-white border-l-white border-b-gray-500 border-r-gray-500 rounded-xs font-bold
                  ">
                  -
                  </span>

                  <span class="flex h-5 w-5 items-center justify-center bg-gray-200 text-gray-800 border-2 border-t-white border-l-white border-b-gray-500 border-r-gray-500 rounded-xs font-bold
                  ">
                  □
                  </span>

                  <span class="flex h-5 w-5 items-center justify-center bg-gray-200 text-gray-800 border-2 border-t-white border-l-white border-b-gray-500 border-r-gray-500 rounded-xs font-bold
                  ">
                  ×
                  </span>

                </div>
              </div>

              <div class="
                p-4
                bg-gray-300
                border-2 border-t-[#64748B] border-l-[#64748B]
                border-b-white border-r-white
                rounded-xs
                text-black font-mono
              ">

                <p class="text-black text-lg handjet">
                  Bienvenid@ a Tama-ups!
                </p>

                 <p class="text-xs mt-2 text-gray-600 handjet">
                  El lugar donde comienza tu aventura en el mundo de las mascotas virtuales.
                </p>

                  <p class="text-sm mt-2 text-gray-600 handjet">
                  Explora la página y conoce todas sus funciones!
                </p>
              
                <p class="text-sm mt-2 text-gray-600 handjet">
                  Click to open...
                </p>

              </div>

            </div>
          </div>
        </div>

      </RouterLink>
    </div>


    <div class="absolute inset-0 flex items-center justify-center pb-15">
    
        <img 
        class="w-120 h-auto mt-7 md:mt-27 md:mr-5 lg:mt-38 object-cover fade-edges cursor-pointer drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]" 
        :src="imagen"
        :class="{ 'girar': giro, 'fundir': fundido }"
        @click="girar"
        />

          <img
            v-if="personaje"
            :src="personaje"
            class="
            absolute w-20 h-20 object-contain pointer-events-none drop-shadow-[4px_4px_0px_rgba(255,230,120,0.8)]
            -translate-x-9 translate-y-25 md:-translate-x-12 md:translate-y-35 lg:-translate-x-12 lg:translate-y-40 transition-opacity duration-1000"
            :class="{
              'reaccion': reaction,
              'girar': giro,
              'opacity-0': fundidoPersonaje,
              'opacity-100': !fundidoPersonaje
            }"
          />

    </div>
   
    <div class="flex flex-col items-center justify-center min-h-screen">

      <h1 class="flex items-center justify-center text-5xl lg:text-6xl handjet bg-amber-100"></h1>

    </div>

    <div class="z-30">
        <Navigation @eliminar-personaje="eliminarPersonaje" />   

    </div>
  </div>

  <div class="absolute top-0 left-0 w-full
      h-36 sm:h-44 lg:h-52
      pointer-events-none z-10 overflow-hidden"
    >

    <div 
      class="absolute top-0 left-0 w-full 
      h-14 md:h-16 lg:h-20 bg-[#fef15c]"
    >
    </div>

    <div class="absolute top-14 md:top-16 lg:top-20
      left-0 w-full h-20 md:h-25 lg:h-32 overflow-hidden">
      
      <div
        v-for="(pixel, index) in pixels"
        :key="index"
        class="absolute bg-[#fef15c]"
        :style="{
          left: pixel.left + '%',
          top: pixel.top + '%',
          width: 'clamp(18px, 3vw, 32px)',
          height: 'clamp(18px, 3vw, 32px)'
        }"
      ></div>

    </div>
  </div>

  <div class="absolute left-0 w-full flex justify-center z-10 pointer-events-none -mt-9 md:-mt-10 lg:-mt-14">
    <h1 class="handjet text-9xl md:text-[9rem] lg:text-[12rem] text-black title-outline tracking-tighter whitespace-nowrap leading-none">    
    TAMA-ups
    </h1>
  </div>

</template>


<style scoped>

.handjet {
  font-family: 'handjet', monospace;
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

.title-outline {
  -webkit-text-stroke: 6px white;
  paint-order: stroke fill;
  text-shadow:
    1px 1px 0 black,
    -1px 1px 0 black,
    1px -1px 0 black,
    -1px -1px 0 black;
  transform: scaleY(0.55) scaleX(1.08);
  transform-origin: center;
}

</style>