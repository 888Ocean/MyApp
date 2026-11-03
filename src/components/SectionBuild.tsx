import { buildLede, products } from "@/lib/archive";

export function SectionBuild() {
  return (
    <section id="build" className="layer" aria-labelledby="build-title">
      <div className="layer-inner">
        <header className="layer-head">
          <p className="meters">−28 m</p>
          <h2 id="build-title">
            <span className="zh">应用</span>
            <span className="en" lang="en">
              Build
            </span>
          </h2>
          <p className="lede">{buildLede}</p>
        </header>
        <div className="products">
          {products.map((product) => (
            <article key={product.index} className="product">
              <p className="product-kind">
                {product.index}
                <span aria-hidden="true"> · </span>
                {product.kind}
              </p>
              <h3>{product.name}</h3>
              <p className="summary">{product.summary}</p>
              <p className="status">{product.status}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
