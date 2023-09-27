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
  <div class="flex flex-col lg:flex-row gap-6">
    <div
      class="animate__animated animate__fadeInRightBig flex flex-col order-last lg:order-first w-full lg:w-2/5 justify-center text-amber-100 gap-6"
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

    <div
      class="flex lg:w-3/5 justify-center animate__animated animate__fadeInDown items-center"
    >
      <img
        :src="imageUrl"
        :alt="altText"
        class="object-contain h-fit hero-border-radius"
      />
    </div>
  </div>
</template>
