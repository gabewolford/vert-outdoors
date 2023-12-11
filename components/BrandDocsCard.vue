<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  brandLogo: {
    type: String,
    required: true,
  },
  links: {
    type: Array,
    required: false,
  },
});
</script>

<template>
  <section
    data-aos="fade-up"
    data-aos-once="true"
    data-aos-duration="800"
    class="flex flex-col w-full border-b-2 border-[#e2dbaf] py-4"
  >
    <div class="flex flex-col md:flex-row text-xl gap-6">
      <div class="md:w-1/2 pt-2">
        <h3 class="hidden">{{ name }}</h3>
        <img class="w-[150px]" :src="brandLogo" :alt="name" />
      </div>

      <div class="md:w-1/2">
        <ul class="md:text-right">
          <li
            v-for="link in links"
            :key="link.linkTo"
            class="p-1 hover:text-blue-500 underline underline-offset-4 text-lg"
          >
            <NuxtLink :to="link.linkTo" :target="link.target">
              {{ link.linkText }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
