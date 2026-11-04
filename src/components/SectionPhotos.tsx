import { IllustrativeMark } from "@/components/IllustrativeMark";
import { OnceNode } from "@/components/OnceNode";
import { photoLede, photos } from "@/lib/archive";

export function SectionPhotos() {
  return (
    <section id="photos" className="layer" aria-labelledby="photos-title">
      <div className="layer-inner">
        <header className="layer-head">
          <p className="meters">−12 m</p>
          <h2 id="photos-title">
            <span className="zh">照片</span>
            <span className="en" lang="en">
              Photos
            </span>
          </h2>
          <p className="lede">{photoLede}</p>
        </header>
        <div className="photo-grid">
          {photos.map((photo) => (
            <article key={photo.id} className="photo-card">
              <figure className={`photo-plate plate-${photo.id}`}>
                <OnceNode tone="photo" />
                <figcaption>
                  <span>{photo.id}</span>
                  <span className="plate-title">{photo.title}</span>
                  <IllustrativeMark />
                </figcaption>
              </figure>
              <aside className="field-note">
                <p className="field-stamp">FIELD NOTE</p>
                <p className="field-copy">{photo.note}</p>
              </aside>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
