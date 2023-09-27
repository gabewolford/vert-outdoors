<script setup>
useHead({
  title: "VERT Outdoors",
});
</script>

<template>
  <main
    class="max-w-[90vw] 2xl:max-w-[70vw] w-full mx-auto my-auto flex flex-col gap-16 lg:gap-8 lg:pt-6 py-10 lg:pb-20"
  >
    <Hero
      headerText="Elevate your outdoor experience"
      subtext="We proudly represent the most iconic brands in specialty outdoor, ski, bike, and beyond in the Mid-Atlantic region"
      ctaText="Learn more"
      imageUrl="/img/hh-hero.jpeg"
      altText="hero image"
      linkTo="/brands"
    />
    <LeftContentBlock
      headerText="Our mission is simple"
      subtext="Extensive retail, product design, merchandising, and marketing knowledge combined with a love of the outdoors allows us to bring an unparalleled depth of service to the you, helping brands and retailers thrive in the changing economy"
      ctaText="Learn more"
      imageUrl="/img/running.png"
      altText="running image"
      linkTo="/team"
    />
    <RightContentBlock
      headerText="Meet us outside"
      subtext="With sales representatives strategically placed through the Mid-Atlantic region, VERT Outdoors provides specialized regional coverage to meet your needs"
      ctaText="Get in touch"
      imageUrl="/img/camelbak.png"
      altText="hero image"
      linkTo="/team"
    />
  </main>
</template>
