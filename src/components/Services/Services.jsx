import Emoji from '../Emoji/Emoji';
import { SERVICES } from '../../data/services';
import './Services.css';

export default function Services() {
  return (
    <section className="services-section" aria-labelledby="services-title">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" id="services-title">
            SERVIÇOS DE MANUTENÇÃO AUTOMOTIVA
          </h2>
          <p className="section-subtitle">
            Estrutura completa com profissionais qualificados em Macaíba
          </p>
        </div>

        <div className="grid-services">
          {SERVICES.map(({ id, emoji, title, description }) => (
            <article className="service-box" key={id}>
              <h3>
                <Emoji name={emoji} /> {title}
              </h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
