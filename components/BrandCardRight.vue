<script setup>
defineProps({
  brandData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section
    data-aos="fade-up"
    data-aos-once="true"
    data-aos-duration="800"
    class="flex flex-col md:flex-row gap-6 lg:gap-8 lg:max-w[900px]"
  >
    <div class="flex items-center md:w-1/2">
      <img :src="brandData.image" :alt="brandData.brandName" />
    </div>
    <div class="flex flex-col gap-6 md:w-1/2 max-h-fit my-auto">
      <h2 class="hidden">{{ brandData.brandName }}</h2>
      <img
        :src="brandData.brandLogo"
        :alt="brandData.brandName"
        class="max-w-[185px] md:max-w-[250px]"
      />
      <h3 class="md:text-xl font-medium">{{ brandData.headerText }}</h3>
      <div class="flex flex-col gap-4">
        <p class="text-sm">{{ brandData.bodyText }}</p>
        <p v-if="brandData.bodyText2" class="text-sm">
          {{ brandData.bodyText2 }}
        </p>
      </div>
      <DoubleButton
        buttonTextLeft="Visit Website"
        buttonTextRight="View Documents"
        :leftLinkTo="brandData.websiteUrl"
        rightLinkTo="/documents"
      />
    </div>
  </section>
</template>
