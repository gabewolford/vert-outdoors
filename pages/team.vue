<script setup>
useHead({
  title: "The Team | VERT Outdoors",
});

const team = [
  {
    name: "Dan Sims",
    title: "Co-Founder & Principal",
    photoUrl: "/img/team/dan-sims.webp",
    bio: "Thirty year outdoor, bike and ski industry veteran. Dan started his first agency in 1989 and continues to service his accounts with the same amount of vigor and laser-beam focus he did at the beginning of his storied career.",
    region: "Metro NY, NJ",
    email: "dan@vertoutdoors.com",
  },
  {
    name: "Steve Rogerson",
    title: "Co-Founder & Principal",
    photoUrl: "/img/team/steve-rogerson.webp",
    bio: "Experienced industry professional. Steve began his career in the outdoor industry as a rep and worked in-house at Patagonia, Lotus Designs and Ralph Lauren. Steve now brings his breadth of expertise to VERT Outdoors.",
    region: "PA, NJ, DE",
    email: "steve@vertoutdoors.com",
  },
  {
    name: "Mitchell McGuinness",
    title: "Sales Representative",
    photoUrl: "/img/team/mitchell-mcguinness.webp",
    bio: "Mitchell has been a manufacturer's rep in the sports channel for 30+ years. The greatest time has been spent servicing traditional retailers in the run, outdoor, general sport, comfort shoe & ski trade. Having all this cool gear, that is best used and enjoyed outdoors, keeps me moving.  I love biking, hiking, skiing, travel, water sports and more.",
    region: "MD, DC, VA, DE, WV",
    email: "mitchell@vertoutdoors.com",
  },
  {
    name: "Matt Strickland",
    title: "Sales Representative",
    photoUrl: "/img/team/matt-strickland.webp",
    bio: "Matt covers Upstate NY and the Resort Uniform Program for Helly Hansen. When not working, he enjoys skiing, mountain biking and paddling.",
    region: "Upstate NY, Ski Resort/Race Uniform",
    email: "matt@vertoutdoors.com",
  },
];
</script>

<template>
  <!-- <main
    class="w-[85vw] lg:w-[80vw] 2xl:w-[70vw] mx-auto my-auto flex flex-col gap-10 pt-6 md:pt-10 pb-[19rem] lg:pb-[12rem]"
  > -->
  <h1 class="w-full text-center text-2xl md:text-5xl font-semibold">
    Meet Team VERT
  </h1>
  <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div v-for="(member, index) in team" :key="index">
      <TeamCard
        :name="member.name"
        :title="member.title"
        :photoUrl="member.photoUrl"
        :bio="member.bio"
        :region="member.region"
        :email="member.email"
      />
    </div>
  </section>
  <!-- </main> -->
</template>
