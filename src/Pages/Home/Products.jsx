import data from "../../data/index.json";

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
            <div className="products--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="products--section--card--content">
              <h3 className="products--section--title">{item.title}</h3>
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
