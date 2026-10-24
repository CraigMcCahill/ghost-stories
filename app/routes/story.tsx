import JsonLd from "@/components/JsonLd";
import SiteNav from "@/components/SiteNav";
import StoryPagination from "@/components/StoryPagination";
import { storyMeta } from "@/lib/meta";
import { SITE_AUTHOR, assetPath, imageUrl, siteUrl } from "@/lib/site";
import { getStory } from "@/lib/stories";

type LoaderArgs = {
  params: { slug?: string };
};

export function loader({ params }: LoaderArgs) {
  const slug = (params.slug ?? "").replace(/\.html$/, "");
  const story = getStory(slug);
  if (!story) {
    throw new Response("Not Found", { status: 404 });
  }
  return { story };
}

export function meta({
  data: loaderData,
}: {
  data: { story: NonNullable<ReturnType<typeof getStory>> } | undefined;
}) {
  if (!loaderData?.story) {
    return [{ title: "Not Found" }];
  }
  return storyMeta(loaderData.story);
}

export default function StoryPage({
  loaderData,
}: {
  loaderData: { story: NonNullable<ReturnType<typeof getStory>> };
}) {
  const { story } = loaderData;
  const pageUrl = siteUrl(`/${story.slug}.html`);
  const ogImage = imageUrl(story.imageFile);

  return (
    <div className="layout">
      <SiteNav currentSlug={story.slug} />
      <article>
        <img
          className="cover-image"
          src={assetPath(`/images/${story.imageFile}`)}
          width={story.imageWidth}
          height={story.imageHeight}
          alt={story.coverAlt}
        />
        <br />
        <h1>{story.title}</h1>
        <StoryPagination slug={story.slug} />
        <div dangerouslySetInnerHTML={{ __html: story.bodyHtml }} />
        <StoryPagination slug={story.slug} bottom />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "ShortStory",
            name: story.title,
            author: {
              "@type": "Person",
              name: SITE_AUTHOR,
            },
            image: ogImage,
            datePublished: story.datePublished,
            url: pageUrl,
          }}
        />
      </article>
    </div>
  );
}
