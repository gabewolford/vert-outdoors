<script setup></script>

<template>
  <div>
    <TheHeader />
    <main
      class="w-[85vw] lg:w-[80vw] 2xl:w-[70vw] mx-auto my-auto flex flex-col gap-16 lg:gap-16 pt-6 md:pt-10 pb-[21rem] lg:pb-[15rem]"
    >
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
