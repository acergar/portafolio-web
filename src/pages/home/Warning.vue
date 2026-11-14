

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogAction,
} from '@/components/ui/alert-dialog'

import { ref, onMounted } from 'vue'

const aparición = ref(false)

onMounted(() => {
  setTimeout(() => {
    aparición.value = true
  }, 800)
})

</script>

<template>

  <div class="relative w-full min-h-screen"> 
    
    <img class="absolute opacity-95 w-full h-full object-cover -z-10" 
    src="/images/sky.jpg" 
    draggable="false"
    />

     <div class="flex flex-col items-center justify-center min-h-screen">

      <AlertDialog v-model:open="aparición">
        <AlertDialogContent class="bg-gray-300 p-8 shadow-[2px_2px_0_black,-2px_-2px_0_white,inset_2px_2px_0_#e5e7eb,inset_-2px_-2px_0_#4b5563,0_4px_12px_0_black] max-w-none rounded-none duration-800 zoom-in-3000"
        >
                  
        
        <div class="flex flex-col items-center justify-center">

            <h1 class="flex items-center justify-center text-black text-5xl lg:text-6xl vt323">
              ESPERA UN MOMENTO...
            </h1>

            <h2 class="flex items-center justify-center text-black text-sm lg:text-lg whitespace-nowrap ">
              Al acceder aceptas un gran compromiso. ¿Estás dispuest@?
            </h2>

            <AlertDialogAction as-child>
              <RouterLink 
              to="/home"
              class="outline-none focus:outline-none focus-visible:outline-none"
              >
                <Button class="m-2 mt-8 rounded-none border border-gray-400 bg-white text-black text-lg lg:text-xl vt323 hover:bg-yellow-400 hover:border-gray-900">
                  Aceptar
                </Button>
              </RouterLink>
            </AlertDialogAction>

          </div>

        </AlertDialogContent>
      </AlertDialog>

    </div>

  </div>

  
  
  


</template>


<style>

.vt323 {
  font-family: 'VT323', monospace;
}

</style>