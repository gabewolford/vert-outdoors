<script setup>
defineProps({
  headerText: {
    type: String,
    required: true,
  },
  subtext: {
    type: String,
    required: true,
  },
  ctaText: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    required: true,
  },
  linkTo: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="flex flex-col lg:flex-row gap-6">
    <div
      class="flex flex-col order-last lg:order-first w-full lg:w-2/5 justify-center text-amber-100 gap-6"
    >
      <div class="flex flex-col gap-6">
        <h1 class="text-4xl md:text-7xl font-semibold">
          {{ headerText }}
        </h1>
        <h2 class="text-lg md:text-2xl lg:text-xl font-medium">
          {{ subtext }}
        </h2>
      </div>
      <NuxtLink :to="linkTo">
        <ButtonPrimary :buttonText="ctaText" />
      </NuxtLink>
    </div>

    <div class="flex w-full lg:w-3/5 justify-center items-center">
      <img :src="imageUrl" :alt="altText" class="w-fit h-auto object-contain" />
    </div>
  </section>
</template>
