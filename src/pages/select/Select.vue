
<script setup lang="ts">
import RetroButton from '@/components/RetroButton.vue'
import tamagotchisData from '@/data/characterslist.json'

import { ref, computed } from 'vue'

import Pagination from './Pagination.vue'


interface Tama {
  id: number
  name: string
  species: string
  description: string
}

const tamagotchis = tamagotchisData as unknown as Tama[]


const inPage = 12

const nuncPage = ref(1)

const totalPages = computed(() => {
  return Math.ceil(tamagotchis.length / inPage)
})

const listaTamagotchis = computed(() => {
    const inicio = (nuncPage.value - 1) * inPage
    const fin = inicio + inPage

      return tamagotchis.slice(inicio, fin)
})

const changePage = (pagina: number) => {
  if (pagina >= 1 && pagina <= totalPages.value) {
    nuncPage.value = pagina
  }
}


const selectedTama = ref<number | null>(null)

const selectTama = (id: number) => {
  selectedTama.value = id
}

const infoTama = computed(() => {
  return tamagotchis.find(tama => tama.id === selectedTama.value)
})

</script>

<template>

    <div>
     <img 
        class="fixed inset-0 opacity-95 w-screen h-screen object-fill -z-10
                 lg:w-325 lg:h-185 lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2" 
        src="/images/interior.png" 
        draggable="false"
    />
    
    </div>

    <div class="absolute top-0 left-0 z-10">
   
        <RetroButton
        to="/home"
        class="m-5 rounded-full bg-[#B8BDC5] text-black text-xs lg:text-sm vt323 hover:bg-gray-500 hover:text-gray-300 hover:border-white"
        >
        Back
        </RetroButton>
        
    </div>

    <div class="min-h-screen flex flex-col items-center">
        <div class="grid grid-cols-4 grid-rows-3 gap-y-20 p-8 md:p-10 lg:p-14 lg:gap-y-14 lg:gap-x-14 w-full max-w-5xl mt-24 md:mt-20 lg:mt-16">
            <div
                v-for="tama in listaTamagotchis"
                :key="tama.id"
                class="flex items-center justify-center"
            >
                <div 
                    @click="selectTama(tama.id)"
                    :class="[
                        'flex flex-col items-center justify-center gap-2 p-2 rounded-lg cursor-pointer transition-all',
                        selectedTama === tama.id
                        ? 'bg-yellow-200 ring-2 ring-yellow-200 scale-105 rounded-none'
                        : 'hover:bg-white/30 rounded-none'
                        ]"
                    >
                    <img
                        :src="`/creatures/${String(tama.id).padStart(2, '0')}.png`"
                        class="h-10 w-10 md:h-12 md:w-12 lg:h-15 lg:w-15 object-contain"
                        draggable="false"
                        />

                    <h2 class="text-xs lg:text-base font-bold vt323 text-center">
                    {{ tama.name }}
                    </h2>
                </div>
            </div>
        </div>

        <div class="mt-auto">
            <Pagination
                :current-page="nuncPage"
                :total-pages="totalPages"
                :info-tama="infoTama"
                @change-page="changePage"
            />
        </div>


    </div>
    
</template>

<style scoped>

.vt323 {
  font-family: 'VT323', monospace;
}

</style>