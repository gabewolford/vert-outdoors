<script setup>
import { ref, watch } from "vue";
import "animate.css";

const isMobileMenuOpen = ref(false);

watch(isMobileMenuOpen, (newValue) => {
  toggleBodyScroll(newValue);
});

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const toggleBodyScroll = (isOpen) => {
  document.body.style.overflow = isOpen ? "hidden" : "auto";
};
</script>

<template>
  <header class="p-4 md:p-6">
    <nav class="flex flex-row justify-between items-center">
      <NuxtLink to="/">
        <img src="/img/vert-logo.svg" alt="VERT logo" class="h-[60px] w-auto" />
      </NuxtLink>

      <!-- Mobile menu button (hidden when menu is open) -->
      <div v-if="!isMobileMenuOpen" class="md:hidden">
        <button @click="toggleMobileMenu">
          <img src="/img/menu-icon.png" alt="Menu" />
        </button>
      </div>

      <!-- Close button (hidden when menu is closed) -->
      <button
        v-if="isMobileMenuOpen"
        @click="toggleMobileMenu"
        class="md:hidden absolute top-8 right-4 z-[9999] text-white animate__animated"
        :class="{ animate__rotateIn: isMobileMenuOpen }"
      >
        <img src="/img/close-icon.png" alt="Close" class="" />
      </button>

      <!-- Mobile navigation links (full-screen overlay) -->
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden fixed inset-0 bg-[#1F1707] bg-opacity-95 z-[9000] animate__animated"
        :class="{ animate__slideInDown: isMobileMenuOpen }"
      >
        <div
          class="flex flex-col h-full justify-center space-y-12 items-center"
        >
          <!-- Close button inside the mobile menu -->
          <NuxtLink
            @click.native="toggleMobileMenu"
            to="/"
            class="hover:text-[#3D67C3] text-xl"
            >Home</NuxtLink
          >
          <NuxtLink
            @click.native="toggleMobileMenu"
            to="/brands"
            class="hover:text-[#3D67C3] text-xl"
            >Brands</NuxtLink
          >
          <NuxtLink
            @click.native="toggleMobileMenu"
            to="/team"
            class="hover:text-[#3D67C3] text-xl"
            >Team</NuxtLink
          >
          <NuxtLink
            @click.native="toggleMobileMenu"
            to="/documents"
            class="hover:text-[#3D67C3] text-xl"
            >Documents</NuxtLink
          >
          <NuxtLink
            @click.native="toggleMobileMenu"
            to="/contact"
            class="hover:text-[#3D67C3] text-xl"
            >Contact
          </NuxtLink>
        </div>
      </div>

      <!-- Desktop navigation links -->
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
    </nav>
  </header>
</template>
