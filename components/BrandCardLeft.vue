<script setup>
defineProps({
  brandName: {
    type: String,
    required: true,
  },
  brandLogo: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  headerText: {
    type: String,
    required: true,
  },
  bodyText: {
    type: String,
    required: true,
  },
  bodyText2: {
    type: String,
    required: false,
  },
  websiteUrl: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="flex flex-col md:flex-row gap-6 lg:gap-8 lg:max-w[900px]">
    <div
      class="flex flex-col gap-6 order-1 md:order-0 md:w-1/2 max-h-fit my-auto"
    >
      <h2 class="hidden">{{ brandName }}</h2>
      <NuxtLink :to="websiteUrl" target="_blank">
        <img
          :src="brandLogo"
          :alt="brandName"
          class="max-w-[185px] md:max-w-[250px]"
        />
      </NuxtLink>
      <h3 class="md:text-xl font-medium">{{ headerText }}</h3>
      <div class="flex flex-col gap-4">
        <p class="text-sm">{{ bodyText }}</p>
        <p v-if="bodyText2" class="text-sm">{{ bodyText2 }}</p>
      </div>
      <DoubleButton
        buttonTextLeft="Visit Website"
        buttonTextRight="View Documents"
        :leftLinkTo="websiteUrl"
        rightLinkTo="/documents"
      />
    </div>
    <div class="flex items-center md:w-1/2 order-0 md:order-1">
      <img :src="imageUrl" :alt="brandName" />
    </div>
  </section>
</template>
