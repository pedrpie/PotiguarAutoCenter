import Emoji from '../Emoji/Emoji';
import { BUSINESS_HOURS, GOOGLE_RATING } from '../../data/company';
import { CONTACT_KIND } from '../../utils/whatsapp';
import './Header.css';

const GENERAL_CONTACT = {
  kind: CONTACT_KIND.GENERAL,
  name: 'Atendimento Geral',
  price: 'Orçamento',
};

export default function Header({ onContact }) {
  return (
    <header className="site-header">
      <div className="container header-flex">
        <div className="header-left">
          <a href="#" className="logo-oval">
            POTIGUAR
            <span>AUTO CENTER</span>
          </a>
        </div>

        <div className="header-center">
          <div className="header-hours">
            <Emoji name="clock" />
            <span>
              <strong>Seg a Sex:</strong> {BUSINESS_HOURS.weekdays} |{' '}
              <strong>Sáb:</strong> {BUSINESS_HOURS.saturday}
            </span>
          </div>
        </div>

        <div className="header-right">
          <div className="header-rating-box">
            <span className="header-rating-stars" aria-hidden="true">
              ★★★★★
            </span>
            <span className="header-rating-val">{GOOGLE_RATING} no Google</span>
          </div>
          <button
            type="button"
            className="btn-header-whatsapp"
            onClick={() => onContact(GENERAL_CONTACT)}
            title="Falar no WhatsApp"
          >
            <Emoji name="chat" />
            <span>Falar no WhatsApp</span>
          </button>
        </div>
      </div>
    </header>
  );
}
