<script setup>
useHead({
  title: "The Team | VERT Outdoors",
});

const query = groq`
  *[_type == "team"]{
    name,
    position,
    'photoUrl': photo.asset->url,
    bio,
    region,
    email,
    order,
  } | order(order asc)
`;

const sanity = useSanity();
const { data } = await useAsyncData("sanityData", () => sanity.fetch(query));
const team = data._rawValue;
</script>

<template>
  <h1 class="w-full text-center text-2xl md:text-5xl font-semibold">
    Meet Team VERT
  </h1>
  <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div v-for="(member, index) in team" :key="index">
      <TeamCard :member="member" :key="index" />
    </div>
  </section>
</template>
