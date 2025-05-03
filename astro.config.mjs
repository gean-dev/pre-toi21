// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://gean-dev.github.io/pre-toi21",
  base: "/pre-toi21/",
  vite: {
    plugins: [tailwindcss()],
  },
});
