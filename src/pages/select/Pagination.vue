
<script setup lang="ts">

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog'
import { Check, Info, X } from '@lucide/vue'

import { computed } from 'vue'
import { useRouter } from 'vue-router'

interface Tama {
  id: number
  name: string
  species: string
  description: string
}

const props = defineProps<{
  currentPage: number
  totalPages: number
  infoTama : Tama | undefined
}>()

const emit = defineEmits<{
  changePage: [pagina: number]
}>()

const pageNumber = computed(() => {
  return Array.from(
    { length: props.totalPages },
    (_, i) => i + 1
  )
})

const router = useRouter()

const acceptTama = () => {
  if (!props.infoTama) return

  localStorage.setItem('selectedTamaId', String(props.infoTama.id))

  router.push('/home')
}

</script>

<template>
    <div class="flex items-center justify-center gap-2 mt-auto pb-14">
                
            <Dialog>
            
                <DialogTrigger as-child>
                    <button
                        class="mr-2 rounded-full border-2 border-gray-800 bg-gray-400 shadow-[1px_1px_0_black,-0px_-0px_0_white,inset_1px_1px_0_#e5e7eb,inset_-2px_-2px_0_#4b5563,0_4px_6px_0_black] max-w-none text-black p-1 hover:bg-gray-500 hover:text-gray-400  transition"
                    >
                        <Info class="w-4 h-4" />
                    </button>
                </DialogTrigger>

               <DialogContent class="bg-transparent border-0 shadow-none p-0 sm:max-w-md w-100 lg:w-1000">
                    <div
                        class="bg-[#B8BDC5] p-8 shadow-[2px_2px_0_black,-2px_-2px_0_white,inset_2px_2px_0_#e5e7eb,inset_-2px_-2px_0_#4b5563,0_4px_12px_0_black] rounded-none"
                    >
                        <DialogHeader>

                            <DialogDescription
                            class="text-gray-600"
                            >
                                <div 
                                    v-if="infoTama"
                                    class="flex flex-col min-w-0 h-fit"
                                 >
                                    <h2 class="text-2xl lg:text-5xl text-black font-bold vt323">
                                        {{ infoTama.name }}
                                    </h2>

                                    <p class="text-xs lg:text-base text-gray-500">
                                        {{ infoTama.species }}
                                    </p>

                                    <p class="text-sm lg:text-lg leading-tight mt-4">
                                        {{ infoTama.description }}
                                    </p>
                                </div>
                                <p v-else class="text-gray-600 text-center text-base mt-1">
                                    ¡Selecciona un Tamagotchi para descubrir toda su información!
                                </p>
                            </DialogDescription>
                        </DialogHeader>
                    </div>
                </DialogContent>
            </Dialog>

            <button
                 @click="emit('changePage', currentPage - 1)"
                :disabled="currentPage <= 1"
                class="px-3 py-2 rounded-none bg-gray-300 shadow-[1px_2px_0_black,inset_1px_2px_0_#D1D5DB,inset_-2px_-2px_0_#4b5563,0_3px_10px_0_black] max-w-none disabled:bg-gray-500 disabled:border-gray-300 disabled:text-gray-400 text-sm vt323"
            >
                <icon-placeholder />
                Anterior
            </button>

            <button
                v-for="pagina in pageNumber"
                :key="pagina"
                @click="emit('changePage', pagina)"
                :class="[
                'w-9 h-9 rounded-none vt323 text-base transition-colors',
                currentPage === pagina
                    ? 'bg-gray-300 shadow-[2px_2px_0_black,-2px_-2px_0_white,inset_2px_2px_0_#e5e7eb,inset_-2px_-2px_0_#4b5563,0_3px_10px_0_black] max-w-none'
                    : 'bg-gray-400 shadow-[2px_2px_0_black,inset_2px_2px_0_#e5e7eb,inset_-2px_-2px_0_#4b5563,0_3px_10px_0_black] max-w-none'
                ]"
            >
                {{ pagina }}
            </button>

            <button
                @click="emit('changePage', currentPage + 1)"
                :disabled="currentPage >= totalPages"
                class="px-3 py-2 rounded-none bg-gray-300 shadow-[1px_2px_0_black,inset_1px_2px_0_#D1D5DB,inset_-2px_-2px_0_#4b5563,0_3px_10px_0_black] max-w-none disabled:bg-gray-500 disabled:border-gray-300 disabled:text-gray-400 text-sm vt323"
            >
                Siguiente
            </button>

            <Dialog>
            
                <DialogTrigger as-child>
                    <button
                        class="ml-2 rounded-full border-2 border-gray-800 bg-gray-400 shadow-[1px_1px_0_black,-0px_-0px_0_white,inset_1px_1px_0_#e5e7eb,inset_-2px_-2px_0_#4b5563,0_4px_6px_0_black] max-w-none text-black p-1 hover:bg-gray-500 hover:text-gray-400  transition"
                        aria-label="Confirmar personaje"
                    >
                        <Check class="w-4 h-4" />
                    </button>
                </DialogTrigger>

               <DialogContent class="bg-transparent border-0 shadow-none p-0 sm:max-w-md w-100 lg:w-1000">
                    <div
                        class="bg-[#B8BDC5] p-8 shadow-[2px_2px_0_black,-2px_-2px_0_white,inset_2px_2px_0_#e5e7eb,inset_-2px_-2px_0_#4b5563,0_4px_12px_0_black] rounded-none"
                    >
                        <DialogHeader>
                            <DialogTitle
                            class="vt323 text-2xl"
                            
                            >Confirmar personaje</DialogTitle>

                            <DialogDescription
                            class="text-gray-600"
                            >
                                ¿Quieres seleccionar este Tamagotchi?
                            </DialogDescription>
                        </DialogHeader>

                        <div class="flex justify-center gap-4 mt-6">
                            <button
                                @click="acceptTama"
                                :disabled="!infoTama"
                                class="flex items-center gap-2 px-4 py-2 bg-green-300
                                    text-black border-2 border-gray-800
                                    shadow-[2px_2px_0_black]
                                    hover:bg-green-400 disabled:opacity-40 vt323"
                            >
                                <Check class="w-4 h-4" />
                                Aceptar
                            </button>

                            <DialogClose as-child>
                                <button
                                class="flex items-center gap-2 px-4 py-2 bg-red-300
                                        text-black border-2 border-gray-800
                                        shadow-[2px_2px_0_black]
                                        hover:bg-red-400 vt323"
                                >
                                <X class="w-4 h-4" />
                                Rechazar
                                </button>
                            </DialogClose>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

        </div>

</template>

<style scoped>

</style>