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
  <div class="flex flex-col lg:flex-row gap-4 lg:gap-8 py-16">
    <div class="flex lg:w-1/2 justify-center">
      <img
        :src="imageUrl"
        :alt="altText"
        class="object-contain left-content-border-radius"
      />
    </div>
    <div
      class="flex flex-col w-full gap-4 lg:w-1/2 justify-center text-amber-100 lg:px-16"
    >
      <h1 class="text-4xl font-semibold">
        {{ headerText }}
      </h1>
      <h2 class="text-lg">{{ subtext }}</h2>
      <NuxtLink :to="linkTo">
        <ButtonPrimary :buttonText="ctaText" />
      </NuxtLink>
    </div>
  </div>
</template>
