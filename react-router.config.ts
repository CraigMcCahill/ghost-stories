import type { Config } from "@react-router/dev/config";
import stories from "./lib/stories.json";

export default {
  ssr: false,
  basename: "/ghost-stories",
  prerender: ["/", ...stories.map((story) => `/${story.slug}.html`)],
} satisfies Config;
