
<script setup lang="ts">

</script>


<template>
    <div>

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

</style>