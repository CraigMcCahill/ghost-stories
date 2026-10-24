import { paginationFor } from "@/lib/stories";

type StoryPaginationProps = {
  slug: string;
  bottom?: boolean;
};

export default function StoryPagination({
  slug,
  bottom = false,
}: StoryPaginationProps) {
  const { previous, next } = paginationFor(slug);

  return (
    <nav
      className={bottom ? "story-pagination bottom" : "story-pagination"}
      aria-label="Story navigation"
    >
      <a className="previous" href={previous.href}>
        <span className="direction">{previous.direction}</span>
        <span className="story-name">{previous.name}</span>
      </a>
      <a className="next" href={next.href}>
        <span className="direction">{next.direction}</span>
        <span className="story-name">{next.name}</span>
      </a>
    </nav>
  );
}
