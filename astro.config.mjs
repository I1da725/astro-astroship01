import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  //site: "https://astroship.web3templates.com",
  site: "https://github.com/I1da725",
  base: 'astro-astroship01',
  integrations: [tailwind(), mdx(), sitemap(), icon()],
});
