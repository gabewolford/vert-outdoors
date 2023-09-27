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
      class="flex flex-row w-full overflow-scroll lg:overflow-x-auto lg:space-x-6"
    >
      <div
        v-for="(brand, index) in brands"
        :key="index"
        class="flex-1 lg:py-6 p-4 md:p-0"
      >
        <img
          :src="brand.logo"
          :alt="brand.name"
          class="min-w-[115px] lg:min-w-[100px] h-auto object-contain"
        />
      </div>
    </div>
  </section>
</template>
