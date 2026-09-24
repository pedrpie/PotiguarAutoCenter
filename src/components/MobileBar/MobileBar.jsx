import Emoji from '../Emoji/Emoji';
import { UNITS } from '../../data/units';
import { buildUnitMessage, buildWhatsAppUrl } from '../../utils/whatsapp';
import './MobileBar.css';

/** Barra fixa (somente mobile) com um botão de WhatsApp por unidade. */
export default function MobileBar() {
  return (
    <nav className="mobile-bar" aria-label="Contato rápido por WhatsApp">
      {UNITS.map(({ id, city, phone, accent }) => (
        <a
          key={id}
          href={buildWhatsAppUrl(phone, buildUnitMessage(city))}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn ${accent === 'blue' ? 'btn-blue' : 'btn-whatsapp'}`}
        >
          <Emoji name="chat" /> {city}
        </a>
      ))}
    </nav>
  );
}
