<script setup>
defineProps({
  member: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    data-aos="fade-up"
    data-aos-once="true"
    data-aos-duration="800"
    data-aos-offset="0"
    class="flex flex-col bg-[#383E38] gap-4 p-4 md:p-6 rounded-2xl h-full"
  >
    <div class="flex flex-row gap-4 items-center">
      <div class="w-1/3 md:w-2/5">
        <img
          :src="member.photoUrl"
          :alt="member.name"
          class="right-content-border-radius"
        />
      </div>

      <div class="flex flex-col w-2/3 md:w-3/5 gap-2 my-auto">
        <h3 class="text-xl md:text-2xl font-semibold">
          {{ member.name }}
        </h3>
        <h4 class="text-sm bg-[#1f2c1e] w-fit px-2 py-1 rounded-md">
          {{ member.position }}
        </h4>
        <h5 class="text-xs md:text-sm">Region: {{ member.region }}</h5>
        <h5 class="text-xs md:text-sm">
          Contact:
          <NuxtLink :to="'mailto:' + member.email">{{ member.email }}</NuxtLink>
        </h5>
      </div>
    </div>

    <div class="flex flex-col">
      <h3 class="text-xs md:text-sm">
        {{ member.bio }}
      </h3>
    </div>
  </div>
</template>
