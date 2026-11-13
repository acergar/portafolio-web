
<script setup lang="ts">

</script>

<template>
    
   <div class="flex absolute w-full h-full bg-gray-600 -z-10">

    <div class="absolute inset-0 flex items-center justify-center pb-15">
    
        <img class="w-100 h-auto object-cover fade-edges" src="/images/tama-rojo.png"/>

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

   
    <div class="fixed bottom-0 left-0 w-full items-center flex justify-center md:gap-6 lg:gap-10" >

        <RouterLink to="/video">

        <Button class="m-10 rounded-none border border-gray-400 bg-white text-black text-base lg:text-xl vt323 hover:bg-yellow-400 hover:border-white p-2">
        Filmoteca
        </Button>
        
        </RouterLink>
        <RouterLink to="/characters">

        <Button class="m-10 rounded-none border border-gray-400 bg-white text-black text-base lg:text-xl vt323 hover:bg-yellow-400 hover:border-white p-2">
        Select
        </Button>
        
        </RouterLink>
        <RouterLink to="/care">

        <Button class="m-10 rounded-none border border-gray-400 bg-white text-black text-base lg:text-xl vt323 hover:bg-yellow-400 hover:border-white p-2">
        Care
        </Button>
        
        </RouterLink>
        <RouterLink to="/about">

        <Button class="m-10 rounded-none border border-gray-400 bg-white text-black text-base lg:text-xl vt323 hover:bg-yellow-400 hover:border-white p-2">
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


</style>