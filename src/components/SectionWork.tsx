import { IllustrativeMark } from "@/components/IllustrativeMark";
import { OnceNode } from "@/components/OnceNode";
import { products, workLede } from "@/lib/archive";

export function SectionWork() {
  return (
    <section id="work" className="layer" aria-labelledby="work-title">
      <div className="layer-inner">
        <header className="layer-head">
          <p className="meters">−6 m</p>
          <h2 id="work-title">
            <span className="zh">作品</span>
            <span className="en" lang="en">
              Work
            </span>
          </h2>
          <p className="lede">{workLede}</p>
        </header>
        <div className="products">
          {products.map((product) => (
            <article key={product.index} className="product">
              <OnceNode tone="project" />
              <p className="product-kind">
                {product.index}
                <span aria-hidden="true"> · </span>
                {product.kind}
                <IllustrativeMark />
              </p>
              <h3>{product.name}</h3>
              <p className="summary">{product.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
