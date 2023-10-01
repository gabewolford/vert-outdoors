<script setup>
useHead({
  title: "Documents | VERT Outdoors",
});

const clients = [
  {
    name: "Smartwool",
    brandLogo: "/img/brands/brand-card-images/smartwool-logo.png",
    links: [
      {
        linkTo: "mailto:matt@vertoutdoors.com?subject=Smartwool Web Request",
        linkText: "Become A Dealer",
      },
      {
        linkTo: "https://sales.smartwool.com/",
        linkText: "Visit B2B Site",
      },
      {
        linkTo: "mailto:Nancy_Longworth@vfc.com",
        linkText: "Contact Dealer Service",
      },
    ],
  },
  {
    name: "Helly Hansen",
    brandLogo: "/img/brands/brand-card-images/helly-hansen-logo.png",
    links: [
      {
        linkTo: "/img/brands/docs/helly-hansen-dealer-app.pdf",
        linkText: "Download Dealer Application",
      },
      {
        linkTo: "/img/brands/docs/helly-hansen-credit-app.pdf",
        linkText: "Download Credit Application",
      },
      {
        linkTo: "https://b2bsport.hellyhansen.com/",
        linkText: "Visit B2B Site",
      },
      {
        linkTo:
          "https://production.brandmaster.com/mars/external.enter?p_com_id=11231",
        linkText: "Brandmaster Image Bank",
      },
      {
        linkTo: "mailto:Stephanie.Dunagan@hellyhansen.com",
        linkText: "Contact Dealer Service",
      },
    ],
  },
  {
    name: "Clif Bar",
    brandLogo: "/img/brands/brand-card-images/clif-bar-logo.png",
    links: [
      {
        linkTo: "/img/brands/docs/clif-bar-dealer-app.pdf",
        linkText: "Download Dealer Application",
      },
      {
        linkTo: "/img/brands/docs/clif-bar-credit-app.pdf",
        linkText: "Download Credit Application",
      },
      {
        linkTo: "https://dealer.clifbar.com/customer/account/login/",
        linkText: "Visit B2B Site",
      },
      {
        linkTo: "mailto:srfax@clifbar.com",
        linkText: "Contact Customer Service",
      },
    ],
  },
  {
    name: "Camelbak",
    brandLogo: "/img/brands/brand-card-images/camelbak-logo.png",
    links: [
      {
        linkTo: "mailto:matt@vertoutdoors.com?subject=Camelbak Web Request",
        linkText: "Become A Dealer",
      },
      {
        linkTo: "https://authorization.camelbak.com/",
        linkText: "Visit B2B Site",
      },
      {
        linkTo: "mailto:ekarim@camelbak.com",
        linkText: "Contact Dealer Service",
      },
      {
        linkTo:
          "https://www.dropbox.com/sh/c89i98sknpwosm8/AADVEc5HLuZDiPYhX8gpmjHja?dl=0",
        linkText: "2023 Products & Asset Package",
      },
      {
        linkTo: "https://training.camelbak.com/login",
        linkText: "Sign Up For C.R.E.W. Training",
      },
      {
        linkTo: "https://www.endvr.io/for-sales-associates",
        linkText: "Retailers: Download ENDVR App",
      },
    ],
  },
  {
    name: "BioLite",
    brandLogo: "/img/brands/brand-card-images/biolite-logo.png",
    links: [
      {
        linkTo: "/img/brands/docs/clif-bar-dealer-app.pdf",
        linkText: "Download Dealer Application",
      },
      {
        linkTo: "mailto:DealerServices@bioliteenergy.com",
        linkText: "Contact Dealer Service",
      },
    ],
  },
  {
    name: "Helinox",
    brandLogo: "/img/brands/brand-card-images/helinox-logo.png",
    links: [
      {
        linkTo: "mailto:matt@vertoutdoors.com?subject=Helinox Web Request",
        linkText: "Become A Dealer",
      },
      {
        linkTo: "mailto:tomiye@helinox.com",
        linkText: "Contact Dealer Service",
      },
    ],
  },
];
</script>

<template>
  <main
    class="w-[85vw] lg:w-[80vw] 2xl:w-[70vw] mx-auto my-auto flex flex-col gap-10 pt-6 md:pt-10 pb-[19rem] lg:pb-[12rem]"
  >
    <h1 class="w-full text-center text-2xl md:text-5xl font-semibold">
      Document Center
    </h1>

    <!-- <div class="flex flex-col w-full">
      <div class="md:flex flex-row justify-between text-lg">
        <h2>Client</h2>
        <h2>Links</h2>
      </div>
    </div> -->

    <div class="flex flex-col w-full">
      <BrandDocsCard
        v-for="client in clients"
        :key="client.name"
        :name="client.name"
        :brandLogo="client.brandLogo"
        :links="client.links"
      />
    </div>
  </main>
</template>
