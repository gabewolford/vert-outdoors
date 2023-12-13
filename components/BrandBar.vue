<script setup>
defineProps({
  brands: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section data-aos="fade-up" data-aos-once="true" data-aos-duration="800">
    <div
      class="flex flex-row flex-nowrap w-full overflow-x-auto items-center space-x-8 md:space-x-12 lg:space-x-10"
    >
      <img
        v-for="(brand, index) in brands"
        :key="index"
        :src="brand.imageUrl"
        :alt="brand.altText"
        class="lg:py-6 min-w-[115px] md:min-w[90px] lg:min-w-[80px] h-auto object-contain"
      />
    </div>
  </section>
</template>
