
<script setup lang="ts">
import { ref } from 'vue';



const imagen = ref('/images/tama-rojo.png')
const giro = ref(false)
const fundido = ref(false)

function girar() {
  if (giro.value) return

  giro.value = true

  setTimeout(() => {
    fundido.value = true
  }, 350)

  setTimeout(() => {
    imagen.value =
        imagen.value === '/images/tama-rojo.png'
            ? '/images/tama-amarilllo.png'
            : '/images/tama-rojo.png'
      fundido.value = false
  }, 650)

  

  setTimeout(() => {
    giro.value = false
  }, 1000)
}

</script>

<template>
    
   <div class="flex absolute w-full h-full bg-gray-600 -z-10">

    <div class="absolute inset-0 flex items-center justify-center pb-15">
    
        <img 
        class="w-120 h-auto object-cover fade-edges cursor-pointer drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]" 
        :src="imagen"
        :class="{ 'girar': giro, 'fundir': fundido }"
        @click="girar"
        />

    </div>
   
    <div class="flex flex-col items-center justify-center min-h-screen">

      <h1 class="flex items-center justify-center text-5xl lg:text-6xl vt323 bg-amber-100"></h1>

    </div>

   
   <div class="absolute">
   
    <RouterLink to="/warning">

    <Button class="m-10 rounded-none border border-gray-400 bg-white text-black text-base lg:text-xl vt323 hover:bg-yellow-400 hover:border-white p-2">
    Back
    </Button>
    
    </RouterLink>
   
   </div>

   
    <div class="fixed bottom-0 left-0 w-full items-center flex justify-center gap-12 md:gap-25 lg:gap-40 pb-10" >

        <RouterLink to="/video">

        <Button class="rounded-none border border-gray-400 bg-white text-black text-base lg:text-xl vt323 hover:bg-yellow-400 hover:border-white p-2">
        Filmoteca
        </Button>
        
        </RouterLink>
        <RouterLink to="/characters">

        <Button class="rounded-none border border-gray-400 bg-white text-black text-base lg:text-xl vt323 hover:bg-yellow-400 hover:border-white p-2">
        Select
        </Button>
        
        </RouterLink>
        <RouterLink to="/care">

        <Button class="rounded-none border border-gray-400 bg-white text-black text-base lg:text-xl vt323 hover:bg-yellow-400 hover:border-white p-2">
        Care
        </Button>
        
        </RouterLink>
        <RouterLink to="/about">

        <Button class="rounded-none border border-gray-400 bg-white text-black text-base lg:text-xl vt323 hover:bg-yellow-400 hover:border-white p-2">
        About
        </Button>
        
        </RouterLink>
    
    </div>
   
   </div>


</template>


<style scoped>

.vt323 {
  font-family: 'VT323', monospace;
}

.girar {
  animation: girar 1s ease-in-out forwards;
}

.fundir {
  opacity: 0;
  transition: opacity 0.9s ease-in-out;
}

</style>