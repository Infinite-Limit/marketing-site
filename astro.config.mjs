import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://infinitelimit.com",
  // base: '/marketing-site',
  integrations: [tailwind(), mdx(), sitemap(), icon()],
});
