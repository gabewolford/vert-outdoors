<script setup>
useHead({
  title: "VERT Outdoors",
});
</script>

<template>
  <main
    class="w-[320px] md:w-[85vw] lg:w-[80vw] 2xl:w-[70vw] mx-auto my-auto flex flex-col gap-16 lg:gap-16 pt-6 md:pt-10 pb-[15rem] md:pb-[18rem] lg:pb-[12rem]"
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
      ctaText="Meet our team"
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
