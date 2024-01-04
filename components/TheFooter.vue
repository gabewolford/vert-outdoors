<template>
  <footer
    class="absolute bottom-0 w-full bg-[#1F1707] p-4 md:p-6 text-center flex flex-col gap-6"
  >
    <nav class="flex flex-col lg:flex-row gap-6 items-center justify-between">
      <NuxtLink to="/">
        <img src="/img/vert-logo.svg" alt="VERT logo" class="h-[75px] w-auto" />
      </NuxtLink>
      <div class="flex flex-col lg:flex-row lg:space-x-10">
        <NuxtLink to="/brands" class="hover:text-[#3D67C3]">Brands</NuxtLink>
        <NuxtLink to="/team" class="hover:text-[#3D67C3]">Team</NuxtLink>
        <NuxtLink to="/documents" class="hover:text-[#3D67C3]"
          >Documents
        </NuxtLink>
        <NuxtLink to="/contact" class="hover:text-[#3D67C3]">Contact</NuxtLink>
      </div>
    </nav>
    <div class="flex flex-row justify-center">
      <h6 class="text-xs">© 2024 VERT Outdoors. All Rights Reserved.</h6>
    </div>
  </footer>
</template>
