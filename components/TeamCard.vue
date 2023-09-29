<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  photoUrl: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col bg-[#383E38] gap-4 p-4 rounded-2xl h-full">
    <div class="flex flex-row gap-4 items-center">
      <div class="w-1/3 md:w-2/5">
        <img :src="photoUrl" :alt="name" class="right-content-border-radius" />
      </div>

      <div class="flex flex-col w-2/3 md:w-3/5 gap-2 my-auto">
        <h3 class="text-xl md:text-2xl font-semibold">
          {{ name }}
        </h3>
        <h4 class="text-sm bg-[#1f2c1e] w-fit px-2 py-1 rounded-md">
          {{ title }}
        </h4>
        <h5 class="text-xs md:text-sm">Region: {{ region }}</h5>
        <h5 class="text-xs md:text-sm">
          Contact:
          <NuxtLink :to="'mailto:' + email">{{ email }}</NuxtLink>
        </h5>
      </div>
    </div>

    <div class="flex flex-col">
      <h3 class="text-xs md:text-sm">
        {{ bio }}
      </h3>
    </div>
  </div>
</template>
