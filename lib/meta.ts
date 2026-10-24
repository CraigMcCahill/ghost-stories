import type { MetaDescriptor } from "react-router";
import {
  INDEX_DESCRIPTION,
  INDEX_IMAGE,
  SITE_AUTHOR,
  SITE_NAME,
  imageUrl,
  siteUrl,
} from "./site";
import type { Story } from "./stories";

export function indexMeta(): MetaDescriptor[] {
  const url = siteUrl("/");
  const image = imageUrl(INDEX_IMAGE.file);
  return [
    { title: SITE_NAME },
    { name: "description", content: INDEX_DESCRIPTION },
    { name: "author", content: SITE_AUTHOR },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:type", content: "website" },
    { property: "og:title", content: SITE_NAME },
    { property: "og:description", content: INDEX_DESCRIPTION },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:image", content: image },
    { property: "og:image:width", content: String(INDEX_IMAGE.width) },
    { property: "og:image:height", content: String(INDEX_IMAGE.height) },
    { property: "og:image:alt", content: INDEX_IMAGE.alt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: SITE_NAME },
    { name: "twitter:description", content: INDEX_DESCRIPTION },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: INDEX_IMAGE.alt },
  ];
}

export function storyMeta(story: Story): MetaDescriptor[] {
  const url = siteUrl(`/${story.slug}.html`);
  const image = imageUrl(story.imageFile);
  return [
    { title: `${story.title} | ${SITE_NAME}` },
    { name: "description", content: story.description },
    { name: "author", content: SITE_AUTHOR },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:type", content: "article" },
    { property: "og:title", content: story.title },
    { property: "og:description", content: story.description },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:image", content: image },
    { property: "og:image:width", content: String(story.imageWidth) },
    { property: "og:image:height", content: String(story.imageHeight) },
    { property: "og:image:alt", content: story.imageAlt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: story.title },
    { name: "twitter:description", content: story.description },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: story.imageAlt },
    { property: "article:published_time", content: story.datePublished },
  ];
}
