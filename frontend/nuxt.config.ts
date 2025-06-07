import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  modules: ["@nuxt/icon", "@nuxt/image", "@primevue/nuxt-module"],
  dir: { pages: "routes" },
  vite: { plugins: [tailwindcss()] },
<<<<<<< HEAD
  css: ["@/assets/css/main.css"],
=======
>>>>>>> d64e427876a26505a8dcd0a80f1ff2914e01f723
});
