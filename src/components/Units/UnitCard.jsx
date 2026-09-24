import Emoji from '../Emoji/Emoji';
import { UNITS_HOURS_TEXT } from '../../data/units';
import { buildMapsUrl } from '../../utils/maps';
import { buildUnitMessage, buildWhatsAppUrl } from '../../utils/whatsapp';

function InfoRow({ emoji, title, children }) {
  return (
    <div className="info-row">
      <div className="info-icon">
        <Emoji name={emoji} />
      </div>
      <div className="info-text">
        <h4>{title}</h4>
        {children}
      </div>
    </div>
  );
}

export default function UnitCard({ unit }) {
  const { badge, title, address, phoneDisplay, phone, city, mapsQuery } = unit;

  return (
    <article className="info-card">
      <div>
        <div className="unidade-badge">{badge}</div>
        <h3 className="unidade-title">{title}</h3>

        <InfoRow emoji="pin" title="Endereço">
          <p>{address}</p>
        </InfoRow>
        <InfoRow emoji="clock" title="Horário de Atendimento">
          <p>{UNITS_HOURS_TEXT}</p>
        </InfoRow>
        <InfoRow emoji="phone" title="Telefone / WhatsApp">
          <p className="phone-highlight">{phoneDisplay}</p>
        </InfoRow>
      </div>

      <div className="unidade-actions">
        <a
          href={buildWhatsAppUrl(phone, buildUnitMessage(city))}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
        >
          <Emoji name="chat" /> Falar no WhatsApp {city}
        </a>
        <a
          href={buildMapsUrl(mapsQuery)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-map"
        >
          <Emoji name="map" /> Traçar Rota {city}
        </a>
      </div>
    </article>
  );
}
