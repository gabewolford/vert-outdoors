<script setup>
defineProps({
  buttonText: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <button
    class="w-fit px-4 py-2 bg-[#2655BB] hover:bg-[#3D67C3] rounded-full text-lg font-medium"
  >
    {{ buttonText }}
  </button>
</template>
