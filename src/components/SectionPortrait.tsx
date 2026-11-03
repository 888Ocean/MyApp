import { PlateArt } from "@/components/marks";
import { SilhouettePass } from "@/components/SilhouettePass";
import { identity, plates, portraitLede } from "@/lib/archive";

export function SectionPortrait() {
  return (
    <section
      id="portrait"
      className="layer"
      aria-labelledby="portrait-title"
    >
      <SilhouettePass />
      <div className="layer-inner">
        <header className="layer-head">
          <p className="meters">−12 m</p>
          <h2 id="portrait-title">
            <span className="zh">人像</span>
            <span className="en" lang="en">
              Portrait
            </span>
          </h2>
          <p className="lede">{portraitLede}</p>
        </header>
        <div className="portrait-grid">
          <article className="identity">
            <p className="kicker">名</p>
            <div>
              <p className="name">{identity.name}</p>
              <p className="line">{identity.line}</p>
              <p className="note">{identity.note}</p>
            </div>
          </article>
          {plates.map((plate) => (
            <article key={plate.id} className={`plate plate-${plate.id}`}>
              <figure>
                <div className="art">
                  <PlateArt variant={plate.id} />
                </div>
                <figcaption>
                  <span>{plate.id}</span>
                  <span className="plate-title">{plate.title}</span>
                  <span>{plate.caption}</span>
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
