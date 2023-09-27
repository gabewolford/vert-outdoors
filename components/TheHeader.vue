<template>
  <header class="p-4 md:p-6">
    <nav class="flex flex-row justify-between items-center">
      <NuxtLink to="/">
        <img
          src="/img/vert-logo.webp"
          alt="VERT logo"
          class="h-[50px] w-auto"
        />
      </NuxtLink>
      <div class="hidden md:block flex-row space-x-10">
        <NuxtLink to="/brands" class="hover:text-[#3D67C3]">Brands</NuxtLink>
        <NuxtLink to="/team" class="hover:text-[#3D67C3]">Team</NuxtLink>
        <NuxtLink to="/documents" class="hover:text-[#3D67C3]"
          >Documents</NuxtLink
        >
        <NuxtLink to="/contact" class="hover:text-[#B0BED4]">
          <div
            class="inline-block px-4 py-2 rounded-lg text-white bg-[#2655BB] hover:bg-[#3D67C3]"
          >
            Get In Touch
          </div>
        </NuxtLink>
      </div>
      <div class="block md:hidden flex-row space-x-10">
        <NuxtLink to="/contact">
          <div
            class="inline-block px-4 py-2 rounded-lg bg-[#2655BB] hover:bg-[#3D67C3]"
          >
            Contact
          </div>
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
