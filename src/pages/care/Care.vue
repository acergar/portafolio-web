
<script setup lang="ts">
import RetroButton from '@/components/RetroButton.vue'

</script>

<template>
    <div>

     <div class="absolute">
   
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

    <h1>Care</h1>

    </div>
</template>

<style scoped>

</style>