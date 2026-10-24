import storiesData from "./stories.json";
import { BASE_PATH, storyHref } from "./site";

export type Story = {
  slug: string;
  title: string;
  description: string;
  imageFile: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  coverAlt: string;
  datePublished: string;
  lastmod: string;
  bodyHtml: string;
};

export const stories = storiesData as Story[];

export function getStory(slug: string): Story | undefined {
  return stories.find((story) => story.slug === slug);
}

export function storyIndex(slug: string): number {
  return stories.findIndex((story) => story.slug === slug);
}

export type PaginationLink = {
  href: string;
  direction: string;
  name: string;
  rel: "previous" | "next";
};

export function paginationFor(slug: string): {
  previous: PaginationLink;
  next: PaginationLink;
} {
  const index = storyIndex(slug);
  const previousStory = index > 0 ? stories[index - 1] : null;
  const nextStory = index < stories.length - 1 ? stories[index + 1] : null;

  return {
    previous: previousStory
      ? {
          href: storyHref(previousStory.slug),
          direction: "← Previous story",
          name: previousStory.title,
          rel: "previous",
        }
      : {
          href: `${BASE_PATH}/`,
          direction: "← Collection",
          name: "All stories",
          rel: "previous",
        },
    next: nextStory
      ? {
          href: storyHref(nextStory.slug),
          direction: "Next story →",
          name: nextStory.title,
          rel: "next",
        }
      : {
          href: `${BASE_PATH}/`,
          direction: "Collection →",
          name: "All stories",
          rel: "next",
        },
  };
}
