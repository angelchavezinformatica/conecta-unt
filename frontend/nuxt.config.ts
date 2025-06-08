import tailwindcss from "@tailwindcss/vite";
import { Preset } from "./primevue.config";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  modules: ["@nuxt/icon", "@nuxt/image", "@primevue/nuxt-module"],
  dir: { pages: "routes" },
  vite: { plugins: [tailwindcss()] },
  css: ["@/assets/css/main.css", "@/assets/css/primevue-variables.css"],
  primevue: { options: { theme: Preset } },
});
