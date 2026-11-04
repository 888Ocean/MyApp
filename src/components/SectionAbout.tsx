import { about, colophon, contactEmail, resumeStub, stations } from "@/lib/archive";

export function SectionAbout() {
  return (
    <section id="about" className="layer" aria-labelledby="about-title">
      <div className="layer-inner">
        <header className="layer-head">
          <p className="meters">−24 m</p>
          <h2 id="about-title">
            <span className="zh">关于</span>
            <span className="en" lang="en">
              About
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
            <div className="resume-block" id="resume">
              <h3 className="kicker">简历</h3>
              <p>{resumeStub}</p>
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
                    <span className="index-m">{station.meters} m</span>
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
