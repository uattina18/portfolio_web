import data from "../../data/index.json";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <section className="products--section" id="Products">
      <div className="products--container">
        <p className="products--section--subtitle">Prodotti</p>
        <h2 className="products--section--heading">Le nostre Specialità</h2>
      </div>
      <div className="products--section--container">
        {data?.prodotti?.map((item, index) => (
          <div key={index} className="products--section--card">
            <h3 className="products--section--title">
              <Link id="my--link--element--id" className="my-link-element">
                {item.title}
              </Link>
            </h3>
            <div className="products--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="products--section--card--content">
              <p className="products--section--description">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
