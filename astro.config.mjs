import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import externalLinks from "rehype-external-links";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx({
      rehypePlugins: [[externalLinks, { target: "_blank" }]],
    }),
  ],
  output: "hybrid",
  adapter: node({
    mode: "standalone",
  }),
});
