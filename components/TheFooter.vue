<template>
  <footer class="mt-auto bg-[#15150F] p-4 md:p-6 text-center">
    <nav class="flex flex-col lg:flex-row justify-between gap-6 items-center">
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
  </footer>
</template>
