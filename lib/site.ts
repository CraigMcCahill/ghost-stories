export const SITE_ORIGIN = "https://craigmccahill.com";
export const BASE_PATH = "/ghost-stories";
export const SITE_NAME = "Ghost Stories by Craig McCahill";
export const SITE_AUTHOR = "Craig McCahill";
export const INDEX_LASTMOD = "2026-10-15";

export const INDEX_DESCRIPTION =
  "Chilling tales of the supernatural featuring spectres, vampires, mummies and grave robbers. Enjoy these ghost stories and feed your nightmares.";

export const INDEX_IMAGE = {
  file: "grave.jpg",
  width: 1200,
  height: 910,
  alt: "A graveyard at night",
  coverAlt: "a graveyard at night",
};

export function siteUrl(path = ""): string {
  if (!path || path === "/") {
    return `${SITE_ORIGIN}${BASE_PATH}/`;
  }
  return `${SITE_ORIGIN}${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

export function assetPath(path: string): string {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

export function storyHref(slug: string): string {
  return `${BASE_PATH}/${slug}.html`;
}

export function imageUrl(file: string): string {
  return siteUrl(`/images/${file}`);
}
