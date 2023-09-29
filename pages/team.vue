<script setup>
useHead({
  title: "The Team | VERT Outdoors",
});
</script>
<template>
  <main
    class="w-[320px] md:w-[85vw] lg:w-[80vw] 2xl:w-[70vw] mx-auto my-auto flex flex-col gap-16 lg:gap-16 pt-6 md:pt-10 pb-[19rem] lg:pb-[12rem]"
  >
    <div class="flex relative items-center max-w-full lg:max-w-[600px] mx-auto">
      <img
        src="/img/team-background-blob.png"
        alt="blob background"
        class="max-w-full lg:max-w-1/2"
      />
      <h1
        class="absolute justify-center w-full text-center text-2xl md:text-5xl"
      >
        Meet the team
      </h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 border"></div>
  </main>
</template>
