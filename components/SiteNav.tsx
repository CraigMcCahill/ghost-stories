import { useEffect, useState } from "react";
import { BASE_PATH, storyHref } from "@/lib/site";
import { stories } from "@/lib/stories";

type SiteNavProps = {
  currentSlug?: string | "index";
};

export default function SiteNav({ currentSlug }: SiteNavProps) {
  const [open, setOpen] = useState(false);
  const onIndex = currentSlug === "index";
  const currentTitle = onIndex
    ? "Ghost Stories"
    : (stories.find((story) => story.slug === currentSlug)?.title ?? "Menu");

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <nav className={open ? "site-nav is-open" : "site-nav"} aria-label="Site">
      <button
        type="button"
        className="site-nav-backdrop"
        aria-label="Close menu"
        aria-hidden={!open}
        tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)}
      />
      <button
        type="button"
        className="site-nav-toggle"
        aria-expanded={open}
        aria-controls="site-nav-list"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="site-nav-burger" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="site-nav-toggle-text">{currentTitle}</span>
      </button>
      <ul id="site-nav-list" className="site-nav-list">
        <li>
          <a href="/">Craig McCahill</a>
        </li>
        <li>
          <a className={onIndex ? "selected" : undefined} href={`${BASE_PATH}/`}>
            Ghost Stories
          </a>
        </li>
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
