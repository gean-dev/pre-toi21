// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://pre-toi21.geandev.dev/",
  base: "/",
  vite: {
    plugins: [tailwindcss()],
  },
});
