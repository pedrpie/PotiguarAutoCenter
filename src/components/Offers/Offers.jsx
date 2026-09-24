import OfferCard from './OfferCard';
import { OFFERS } from '../../data/offers';
import { getOfferPriceText } from '../../utils/format';
import { CONTACT_KIND } from '../../utils/whatsapp';
import './Offers.css';

export default function Offers({ onContact }) {
  const handleSelect = (offer) =>
    onContact({
      kind: CONTACT_KIND.PROMO,
      name: offer.title,
      price: getOfferPriceText(offer),
    });

  return (
    <section className="offers-section" aria-labelledby="offers-title">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" id="offers-title">
            OFERTAS EXCLUSIVAS DO INSTAGRAM
          </h2>
          <p className="section-subtitle">
            Valores promocionais para pagamento à vista ou parcelado
          </p>
        </div>

        <div className="grid-offers">
          {OFFERS.map((offer) => (
            <OfferCard key={offer.id} offer={offer} onSelect={handleSelect} />
          ))}
        </div>
      </div>
    </section>
  );
}
