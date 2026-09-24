export default function OfferCard({ offer, onSelect }) {
  const { title, tag, priceLabel, price, features, ctaLabel, variant } = offer;
  const isBlue = variant === 'blue';

  return (
    <article className={`card-offer${isBlue ? ' card-offer-blue' : ''}`}>
      <div className={`card-tag${isBlue ? ' card-tag-yellow' : ''}`}>{tag}</div>
      <h3>{title}</h3>

      <div className="card-price">
        <span className="label">{priceLabel}</span>
        <span className="value">
          R$ {price.reais}
          <span className="cents">,{price.cents}</span>
        </span>
      </div>

      <ul className="card-features">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <button
        type="button"
        className={`btn btn-sm ${isBlue ? 'btn-whatsapp' : 'btn-yellow'}`}
        onClick={() => onSelect(offer)}
      >
        {ctaLabel}
      </button>
    </article>
  );
}
