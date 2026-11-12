

<script setup lang="ts">
import { Button } from '@/components/ui/button'

</script>

<template>

  <div class="relative w-full min-h-screen"> 
    
    <img class="absolute w-full h-full object-cover -z-10" src="/images/sky.jpg"/>

    <div class="flex flex-col items-center justify-center min-h-screen">

      <h1 class="flex items-center justify-center text-6xl vt323">ESPERA UN MOMENTO...</h1>

      <h2 class="flex items-center justify-center text-1xl ">Al acceder aceptas un gran compromiso. ¿Estás dispuest@?</h2>

      <RouterLink to="/home">

      <Button class="m-10 rounded-none border border-gray-400 bg-white text-black text-xl vt323 hover:bg-yellow-400 hover:border-white">
      Aceptar
      </Button>
      
      </RouterLink>

    </div>

  </div>

  
  
  


</template>


<style scoped>

.vt323 {
  font-family: 'VT323', monospace;
}

</style>