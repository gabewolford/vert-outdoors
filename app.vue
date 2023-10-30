<script>
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// onMounted(() => {
//   gsap.from(".fade-in-up", {
//     y: 300,
//     opacity: 0,
//   });
//   gsap.to(".fade-in-up", {
//     duration: 1.5,
//     y: 0,
//     opacity: 1,
//   });

//   gsap.from(".fade-in-left", {
//     x: 300,
//     opacity: 0,
//     scrollTrigger: {
//       trigger: ".fade-in-left",
//       start: "top 100%",
//     },
//   });
//   gsap.to(".fade-in-left", {
//     duration: 1.5,
//     x: 0,
//     opacity: 1,
//   });

//   gsap.from(".fade-in-right", {
//     x: -300,
//     opacity: 0,
//     scrollTrigger: {
//       trigger: ".fade-in-right",
//       start: "top 100%",
//     },
//   });
//   gsap.to(".fade-in-right", {
//     duration: 1.5,
//     x: 0,
//     opacity: 1,
//   });
// });
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
