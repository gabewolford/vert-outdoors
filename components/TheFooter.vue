<template>
  <footer
    class="absolute bottom-0 w-full bg-[#15150F] p-4 md:p-6 text-center flex flex-col gap-6"
  >
    <nav class="flex flex-col lg:flex-row gap-6 items-center justify-between">
      <NuxtLink to="/">
        <img
          src="/img/vert-logo.webp"
          alt="VERT logo"
          class="h-[50px] w-auto"
        />
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
    <div class="flex flex-row justify-end">
      <h6 class="text-xs">© 2023 VERT Outdoors. All Rights Reserved.</h6>
      <!-- <p class="text-xs">
        Designed & developed by
        <NuxtLink
          to="https://biiigstretch.studio"
          target="_blank"
          class="hover:text-[#3D67C3] hover:underline hover:underline-offset-4"
          >Biiig Stretch Studio</NuxtLink
        >
      </p> -->
    </div>
  </footer>
</template>
