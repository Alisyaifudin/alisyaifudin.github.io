import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://alisyaifudin.github.io',
  integrations: [mdx({
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "monokai"
    },
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    gfm: true
  }), tailwind()]
});