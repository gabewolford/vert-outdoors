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
  <div class="flex flex-col lg:flex-row gap-4 lg:gap-8 py-12">
    <div
      class="animate__animated animate__fadeInRightBig flex flex-col order-last lg:order-first w-full gap-4 lg:w-2/5 justify-center text-amber-100"
    >
      <h1 class="text-4xl lg:text-8xl font-semibold">
        {{ headerText }}
      </h1>
      <h2 class="text-lg lg:text-xl font-medium">{{ subtext }}</h2>
      <NuxtLink :to="linkTo">
        <ButtonPrimary :buttonText="ctaText" />
      </NuxtLink>
    </div>
    <div
      class="flex lg:w-3/5 justify-center animate__animated animate__fadeInDown"
    >
      <img
        :src="imageUrl"
        :alt="altText"
        class="object-contain hero-border-radius"
      />
    </div>
  </div>
</template>
