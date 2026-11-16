
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const props = withDefaults(defineProps<{
  to: string
  color?: string
  light?: string
  dark?: string
  opacity?: number
  lightOpacity?: number
  darkOpacity?: number
}>(), {
  color: 'royalblue',
  light: 'white',
  dark: 'black',
  opacity: 1,
  lightOpacity: 0.5,
  darkOpacity: 0.25
})

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
        class="transition-all duration-200 ease-in-out relative drop-shadow-[0_3px_3px_rgba(0,0,0,0.40)]"
    >
        <div
            class="absolute inset-0 translate-x-px translate-y-0.5
            bg-[#000000bf] pixel-button"
        ></div>

        <button
            type="button"
            @click="navigateWithDelay"
             :class="{ 'bg-gray-500 text-white': isPressed }"
             :style="{ backgroundColor: isPressed ? undefined : color, opacity: opacity }"
            class="relative flex items-center justify-center aspect-square p-3 transition-all duration-200 ease-in-out pixel-button"
        >
            <span class="pixel-light" :style="{ backgroundColor: light, opacity: lightOpacity }"
                ></span>

            <span class="pixel-dark" :style="{ backgroundColor: dark, opacity: darkOpacity }"
                ></span>

            <span class="relative z-10">
                <slot />
            </span>
        </button> 
    </div>
</template>


<style scoped>

.pixel-button {
  clip-path: polygon(
    20% 0,
    80% 0,

    80% 10%,
    90% 10%,
    90% 20%,
    100% 20%,

    100% 80%,
    90% 80%,

    90% 90%,
    80% 90%,
    80% 100%,

    20% 100%,

    20% 90%,
    10% 90%,
    10% 80%,
    0 80%,

    0 20%,
    10% 20%,

    10% 10%,
    20% 10%
  );
}

.pixel-light,
.pixel-dark {
  position: absolute;
  inset: 0;
  pointer-events: none;
  clip-path: inherit;
   z-index: 1;
}

.pixel-light {
  transform: translate(-2px, -2px);
}

.pixel-dark {
  transform: translate(2px, 2px);
}

</style>