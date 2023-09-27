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
  <div class="flex flex-col lg:flex-row gap-6 lg:gap-8">
    <div
      class="flex flex-col w-full gap-4 lg:w-1/2 justify-center order-last lg:order-first text-amber-100 lg:px-16"
    >
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <h2 class="text-3xl md:text-4xl font-semibold">
            {{ headerText }}
          </h2>
          <h3 class="text-lg">{{ subtext }}</h3>
        </div>
        <NuxtLink :to="linkTo">
          <ButtonPrimary :buttonText="ctaText" />
        </NuxtLink>
      </div>
    </div>

    <div class="flex lg:w-1/2 justify-center">
      <img
        :src="imageUrl"
        :alt="altText"
        class="object-contain right-content-border-radius"
      />
    </div>
  </div>
</template>
