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
  <div class="flex flex-row w-fit border-2 border-[#e2dbaf] rounded-lg">
    <NuxtLink
      :to="leftLinkTo"
      target="_blank"
      class="w-fit px-4 py-2 hover:underline decoration-2 hover:underline-offset-4 text-md font-medium hover:bg-[#e2dbaf] rounded-l-lg hover:rounded-l-lg hover:text-[#1f2c1e] transition-all duration-200"
    >
      {{ buttonTextLeft }}
    </NuxtLink>
    <div class="border border-[#e2dbaf]"></div>
    <NuxtLink
      :to="rightLinkTo"
      class="w-fit px-4 py-2 hover:underline decoration-2 hover:underline-offset-4 text-md font-medium hover:bg-[#e2dbaf] rounded-r-lg hover:rounded-r-lg hover:text-[#1f2c1e] transition-all duration-200"
    >
      {{ buttonTextRight }}
    </NuxtLink>
  </div>
</template>
