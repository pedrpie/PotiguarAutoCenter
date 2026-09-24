import Emoji from '../Emoji/Emoji';
import { CONTACT_KIND } from '../../utils/whatsapp';
import './Hero.css';

const OFFERS_CONTACT = {
  kind: CONTACT_KIND.OFFERS,
  name: 'Pneus e Baterias',
  price: 'Consultar Ofertas',
};

export default function Hero({ onContact }) {
  return (
    <section className="hero">
      <div className="container">
        <span className="badge-garantia">
          <Emoji name="shield" /> PNEUS NOVOS COM 5 ANOS DE GARANTIA
        </span>
        <h1>
          Sua Troca de <span>Pneu & Bateria</span> com o Melhor Preço!
        </h1>
        <p>
          Cobrimos orçamentos na região de Macaíba e Parnamirim. Pneus aro 13,
          14 e 15 a pronta entrega e baterias com instalação no local.
        </p>

        <div className="hero-cta">
          <button
            type="button"
            className="btn btn-whatsapp"
            onClick={() => onContact(OFFERS_CONTACT)}
          >
            <Emoji name="chat" /> Falar no WhatsApp Agora
          </button>
        </div>
      </div>
    </section>
  );
}
