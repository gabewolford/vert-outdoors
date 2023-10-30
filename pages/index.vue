<script setup>
useHead({
  title: "VERT Outdoors",
});

const query = groq`
  *[_type == "page" && title == "Home Page"] {
    'heroData': pageBuilder[0]{
      'imageUrl': image.asset->url,
      'altText': image.altText,
      linkTo,
      subtext,
      ctaText,
      headerText,
    },
    'galleryData': pageBuilder[1].images[]{
      'imageUrl': asset->url,
      altText,
    },
    'leftContentData': pageBuilder[2]{
      'imageUrl': image.asset->url,
      'altText': image.altText,
      linkTo,
      subtext,
      ctaText,
      headerText
    },
    'rightContentData': pageBuilder[3]{
      'imageUrl': image.asset->url,
      'altText': image.altText,
      linkTo,
      subtext,
      ctaText,
      headerText
    },
  }
`;

const sanity = useSanity();
const { data } = await useAsyncData("sanityData", () => sanity.fetch(query));
const heroData = data._rawValue[0].heroData;
const galleryData = data._rawValue[0].galleryData;
const leftContentData = data._rawValue[0].leftContentData;
const rightContentData = data._rawValue[0].rightContentData;

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from(".fade-in-up", {
    y: 300,
    opacity: 0,
    duration: 1,
  });
  gsap.to(".fade-in-up", {
    y: 0,
    opacity: 1,
    duration: 1,
  });

  gsap.from(".fade-in-left", {
    x: 300,
    opacity: 0,
    scrollTrigger: {
      trigger: ".fade-in-left",
      start: "top 100%",
    },
    duration: 1,
  });
  gsap.to(".fade-in-left", {
    x: 0,
    opacity: 1,
  });

  gsap.from(".fade-in-right", {
    x: -300,
    opacity: 0,
    scrollTrigger: {
      trigger: ".fade-in-right",
      start: "top 100%",
    },
    duration: 1,
  });
  gsap.to(".fade-in-right", {
    x: 0,
    opacity: 1,
  });
});
</script>

<template>
  <Hero
    :headerText="heroData.headerText"
    :subtext="heroData.subtext"
    :ctaText="heroData.ctaText"
    :imageUrl="heroData.imageUrl"
    :altText="heroData.altText"
    :linkTo="heroData.linkTo"
  />

  <BrandBar :brands="galleryData" />

  <LeftContentBlock
    :headerText="leftContentData.headerText"
    :subtext="leftContentData.subtext"
    :ctaText="leftContentData.ctaText"
    :imageUrl="leftContentData.imageUrl"
    :altText="leftContentData.altText"
    :linkTo="leftContentData.linkTo"
  />

  <RightContentBlock
    :headerText="rightContentData.headerText"
    :subtext="rightContentData.subtext"
    :ctaText="rightContentData.ctaText"
    :imageUrl="rightContentData.imageUrl"
    :altText="rightContentData.altText"
    :linkTo="rightContentData.linkTo"
  />
</template>
