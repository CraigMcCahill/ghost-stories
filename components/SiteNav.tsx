import { BASE_PATH, storyHref } from "@/lib/site";
import { stories } from "@/lib/stories";

type SiteNavProps = {
  currentSlug?: string | "index";
};

export default function SiteNav({ currentSlug }: SiteNavProps) {
  const onIndex = currentSlug === "index";

  return (
    <nav>
      <ul>
        <li>
          <a href="/">Craig McCahill</a>
        </li>
        <li>
          <a className={onIndex ? "selected" : undefined} href={`${BASE_PATH}/`}>
            Ghost Stories
          </a>
        </li>
        <br />
        {stories.map((story) => (
          <li key={story.slug}>
            <a
              className={currentSlug === story.slug ? "selected" : undefined}
              href={storyHref(story.slug)}
            >
              {story.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
