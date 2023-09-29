<script setup>
defineProps({
  buttonTextLeft: {
    type: String,
    required: true,
  },
  leftLinkTo: {
    type: String,
    required: true,
  },
  buttonTextRight: {
    type: String,
    required: true,
  },
  rightLinkTo: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-row w-fit bg-[#635071] rounded-lg">
    <NuxtLink
      :to="leftLinkTo"
      target="_blank"
      class="w-fit px-4 py-2 hover:underline decoration-2 hover:underline-offset-4 text-white text-md font-medium"
    >
      {{ buttonTextLeft }}
    </NuxtLink>
    <div class="border border-white my-1.5"></div>
    <NuxtLink
      :to="rightLinkTo"
      class="w-fit px-4 py-2 hover:underline decoration-2 hover:underline-offset-4 text-white text-md font-medium"
    >
      {{ buttonTextRight }}
    </NuxtLink>
  </div>
</template>
