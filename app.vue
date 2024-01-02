<script setup>
useSeoMeta({
  title: "VERT Outdoors",
  ogUrl: "https://vertoutdoors.com",
  ogTitle: "VERT Outdoors",
  description:
    "Elevate your outdoor experience. We proudly represent the most iconic brands in specialty outdoor, ski, bike, and beyond in the Mid-Atlantic region. Extensive retail, product design, merchandising, and marketing knowledge combined with a love of the outdoors allows us to bring an unparalleled depth of service to the you, helping brands and retailers thrive in the changing economy.",
  ogDescription:
    "Elevate your outdoor experience. We proudly represent the most iconic brands in specialty outdoor, ski, bike, and beyond in the Mid-Atlantic region. Extensive retail, product design, merchandising, and marketing knowledge combined with a love of the outdoors allows us to bring an unparalleled depth of service to the you, helping brands and retailers thrive in the changing economy.",
  ogImage: "https://vert-outdoors.vercel.app/img/og-image.png",
  twitterCard: "summary_large_image",
  twitterImage: "https://vert-outdoors.vercel.app/img/og-image.png",
  twitterTitle: "VERT Outdoors",
  twitterDescription:
    "Elevate your outdoor experience. We proudly represent the most iconic brands in specialty outdoor, ski, bike, and beyond in the Mid-Atlantic region. Extensive retail, product design, merchandising, and marketing knowledge combined with a love of the outdoors allows us to bring an unparalleled depth of service to the you, helping brands and retailers thrive in the changing economy.",
});

useHead({
  title: "VERT Outdoors",
  meta: [{ name: "VERT Outdoors", content: "Outdoor" }],
  link: [{ rel: "icon", type: "image/png", href: "/img/small-logo.png" }],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
