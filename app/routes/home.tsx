import SiteNav from "@/components/SiteNav";
import { indexMeta } from "@/lib/meta";
import {
  INDEX_IMAGE,
  assetPath,
  storyHref,
} from "@/lib/site";
import { stories } from "@/lib/stories";

export function meta() {
  return indexMeta();
}

export default function HomePage() {
  return (
    <div className="layout">
      <SiteNav currentSlug="index" />
      <article>
        <img
          className="cover-image"
          src={assetPath(`/images/${INDEX_IMAGE.file}`)}
          width={INDEX_IMAGE.width}
          height={INDEX_IMAGE.height}
          alt={INDEX_IMAGE.coverAlt}
        />
        <h1>Ghost Stories</h1>
        <p>
          Welcome lovers of the spooky and macabre. Here you will find poorly
          penned tales of the supernatural composed for the wonderful Ghost Club
          (you know who you are) under the great shadow of that plague that
          blighted us&nbsp;all.
        </p>

        <section className="story-list">
          <h2>Stories</h2>
          <ul>
            {stories.map((story) => (
              <li key={story.slug}>
                <h3>
                  <a href={storyHref(story.slug)}>{story.title}</a>
                </h3>
                <p>{story.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <p>
          Some of the great authors I have shamefully aped in my writing include:
        </p>

        <ul className="author-list">
          <li>
            <a href="https://www.gutenberg.org/cache/epub/72421/pg72421-images.html">
              E.F. Benson
            </a>
          </li>
          <li>
            <a href="https://www.poppyzbrite.com/biblio-written.html">
              Poppy Z. Brite
            </a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Shirley_Jackson">
              Shirley Jackson
            </a>
          </li>
          <li>
            <a href="https://www.gutenberg.org/cache/epub/66881/pg66881-images.html">
              M.R. James
            </a>
          </li>
          <li>
            <a href="https://www.gutenberg.org/cache/epub/73233/pg73233-images.html">
              H.P. Lovecraft
            </a>
          </li>
          <li>
            <a href="https://www.theguardian.com/books/2016/sep/20/lost-in-a-pyramid-andrew-smith-mummy-stories-louisa-m-alcott-conan-doyle-shelf-life-rachel-cooke">
              Various - Lost in a Pyramid
            </a>
          </li>
        </ul>

        <p>And many, many Victorian authors.</p>
      </article>
    </div>
  );
}
