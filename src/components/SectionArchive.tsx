import { ArchiveMark } from "@/components/marks";
import { about, colophon, contactEmail, stations } from "@/lib/archive";

export function SectionArchive() {
  return (
    <section id="archive" className="layer" aria-labelledby="archive-title">
      <ArchiveMark />
      <div className="layer-inner">
        <header className="layer-head">
          <p className="meters">−40 m</p>
          <h2 id="archive-title">
            <span className="zh">档案</span>
            <span className="en" lang="en">
              Archive
            </span>
          </h2>
        </header>
        <div className="archive-body">
          <div className="archive-copy">
            <div className="about">
              <h3 className="kicker">关于</h3>
              {about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="contact">
              <h3 className="kicker">联系</h3>
              <a className="mail" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
            </div>
          </div>
          <div className="index-block">
            <h3 className="kicker">索引</h3>
            <ol className="index">
              {stations.map((station) => (
                <li key={station.id}>
                  <a href={`#${station.id}`}>
                    <span className="index-m">
                      {station.meters} m
                    </span>
                    <span className="index-zh">{station.zh}</span>
                    <span className="index-en" lang="en">
                      {station.en}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <p className="colophon">{colophon}</p>
      </div>
    </section>
  );
}
