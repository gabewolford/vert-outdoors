<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
if (process.client) {
  console.log("register", window, document, document && document.body);
  gsap.registerPlugin(ScrollTrigger);
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
