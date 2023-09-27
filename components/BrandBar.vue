<script setup>
defineProps({
  brands: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section>
    <h2 class="text-3xl md:text-4xl"></h2>
    <div
      class="flex flex-row w-full overflow-x-scroll md:overflow-x-auto lg:overflow-x-auto items-center space-x-8 md:space-x-12 lg:space-x-10"
    >
      <div v-for="(brand, index) in brands" :key="index" class="flex-1 lg:py-6">
        <img
          :src="brand.logo"
          :alt="brand.name"
          class="min-w-[115px] md:min-w[90px] lg:min-w-[80px] h-auto object-contain"
        />
      </div>
    </div>
  </section>
</template>
