<template>
  <footer class="mt-auto bg-[#15150F] p-4 text-center">
    <nav class="flex flex-col lg:flex-row justify-between gap-6 items-center">
      <NuxtLink to="/">
        <img
          src="/img/vert-logo.webp"
          alt="VERT logo"
          class="h-[50px] w-auto"
        />
      </NuxtLink>
      <div class="flex flex-col lg:flex-row lg:space-x-10">
        <NuxtLink to="/brands" class="hover:text-[#B0BED4]">Brands</NuxtLink>
        <NuxtLink to="/team" class="hover:text-[#B0BED4]">Team</NuxtLink>
        <NuxtLink to="/documents" class="hover:text-[#B0BED4]"
          >Documents</NuxtLink
        >
        <NuxtLink to="/contact" class="hover:text-[#B0BED4]">Contact</NuxtLink>
      </div>
    </nav>
  </footer>
</template>
