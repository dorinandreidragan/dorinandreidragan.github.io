import { defineUserConfig } from "vuepress";
import theme from "./theme.ts";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Dorin Docs Hub",
  description: "Dorin Docs Hub",

  theme,
});
