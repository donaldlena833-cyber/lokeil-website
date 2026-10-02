import Image from 'next/image';
import Link from 'next/link';

import { photoStoryForImage } from '../blog/photoStories';
import { servicePhotoReferences } from '../services/photoReferences';

export default function ServicePhotoReferences({ servicePath }: { servicePath: string }) {
  const references = servicePhotoReferences[servicePath];
  if (!references) return null;
  const stories = references.images.map(photoStoryForImage).filter((story) => story !== undefined);

  return (
    <section className="section-rule section-space bg-sage-soft/40">
      <div className="site-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">From our project gallery</p>
          <h2 className="section-title mt-4">{references.heading}</h2>
          <p className="mt-5 text-base leading-7 text-ink/80">{references.intro}</p>
        </div>
        <div className={`mt-10 grid gap-8 md:grid-cols-2 ${stories.length === 3 ? 'lg:grid-cols-3' : ''}`}>
          {stories.map((story) => (
            <Link key={story.slug} href={`/blog/${story.slug}`} className="tile-hover group">
              <figure>
                <div className="media-frame aspect-[4/3]">
                  <Image src={story.image} alt={story.visible.split('.')[0] + '.'} fill quality={68}
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover" />
                </div>
                <figcaption className="mt-5">
                  <h3 className="text-3xl leading-tight text-ink group-hover:text-accent">{story.title}</h3>
                  <span className="mt-3 inline-block text-sm font-semibold text-accent">Read this photo story</span>
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
