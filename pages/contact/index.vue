<script setup>
useHead({
  title: "Contact Us | VERT Outdoors",
});
</script>

<template>
  <h1 class="w-full text-center text-2xl md:text-5xl font-semibold">
    Contact Us
  </h1>

  <section class="relative hidden md:block">
    <img src="/img/contact-image.png" class="w-full" />
    <div
      class="absolute top-0 right-0 w-full h-full flex md:w-1/2 px-8 items-center"
    >
      <ContactForm />
    </div>
  </section>

  <section class="block md:hidden">
    <div class="w-full h-full flex md:w-full">
      <ContactForm />
    </div>
  </section>
</template>
