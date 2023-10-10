<script setup>
useHead({
  title: "Brands | VERT Outdoors",
});

const query = groq`
  *[_type == "page" && title == "Brand Page"] {
    'brandArray': pageBuilder[]{
      brandName,
      'brandLogo': brandLogoImage.asset->url,
      'logoAltText': brandLogoImage.altText,
      'image': imageUrl.asset->url,
      'imageAltText': imageUrl.altText,
      headerText,
      websiteUrl,
      bodyText,
      bodyText2,
    },
  }
`;

const sanity = useSanity();
const { data } = await useAsyncData("sanityData", () => sanity.fetch(query));
const brandArray = data._rawValue[0].brandArray;
</script>

<template>
  <BrandCardLeft :brandData="brandArray[0]" />
  <BrandCardRight :brandData="brandArray[1]" />
  <BrandCardLeft :brandData="brandArray[2]" />
  <BrandCardRight :brandData="brandArray[3]" />
  <BrandCardLeft :brandData="brandArray[4]" />
  <BrandCardRight :brandData="brandArray[5]" />
  <BrandCardLeft :brandData="brandArray[6]" />
</template>
