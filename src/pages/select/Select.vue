
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
        class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
           w-screen h-screen object-fill -z-10 opacity-95
           lg:w-[min(1300px,95vw)] lg:h-[min(740px,105dvh)]
           xl:w-[min(1300px,85vw)] xl:h-[min(840px,105dvh)]"
        src="/images/interior.png" 
        draggable="false"
    />
    
    </div>

    <div class="absolute top-0 left-0 z-10">
   
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