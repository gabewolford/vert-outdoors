<script setup lang="ts">
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <main class="min-h-screen flex items-center justify-center">
    <div class="flex flex-col p-4 text-center gap-6">
      <h1 class="text-2xl md:text-5xl font-semibold">404 Error</h1>
      <h3>Sorry, that page doesn't exist.</h3>
      <div class="flex mx-auto">
        <button
          class="w-fit px-4 py-2 bg-[#2655BB] hover:bg-[#3D67C3] rounded-full text-white text-lg font-medium"
          :@click="handleError"
        >
          Go home
        </button>
      </div>
    </div>
  </main>
</template>
