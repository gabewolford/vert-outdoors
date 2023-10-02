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
        <ButtonPrimary buttonText="Go home" @click="handleError" />
      </div>
    </div>
  </main>
</template>
