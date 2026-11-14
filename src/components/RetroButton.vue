
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const props = defineProps<{
  to: string
}>()

const isPressed = ref(false)

const navigateWithDelay = () => {
  if (isPressed.value) return

  isPressed.value = true

  setTimeout(() => {
    router.push(props.to)
  }, 400)
}

</script>


<template>
    <div
        :class="{ 'translate-y-1': isPressed }"
        class="transition-all duration-200 ease-in-out"
    >

        <button
            type="button"
            @click="navigateWithDelay"
             :class="{ 
             'bg-gray-500 text-gray-300 border-black/70': isPressed 
            }"
            class="
            rounded-full flex items-center justify-center aspect-square
            border border-gray-700/80 p-3
            shadow-[1px_2px_0_#000000bf,-1px_-1px_0_white,inset_1px_2px_0_#ffffff80,inset_-1px_-2px_0_#00000040,0_4px_12px_0_#00000080]
            active:border-black/70
            active:shadow-[inset_2px_2px_3px_#ffffff30,inset_-2px_-2px_3px_#00000020,0_3px_16px_#00000080]
            transition-all duration-200 ease-in-out
            disabled:cursor-not-allowed       
            "
        >
            <slot />
        </button> 

    </div>
</template>


<style scoped>

</style>