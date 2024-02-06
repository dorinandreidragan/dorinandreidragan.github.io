import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Articles",
      icon: "laptop-code",
      prefix: "articles/",
      link: "articles/",
      children: "structure",
    },
  ],
});
