// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Cabin: {
            wght: [400, 500, 600, 700],
            ital: [400, 500, 600, 700],
          },
        },
      },
    ],
  ],
  googleFonts: {
    display: "swap",
  },
});
