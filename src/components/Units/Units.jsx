import UnitCard from './UnitCard';
import { UNITS } from '../../data/units';
import './Units.css';

export default function Units() {
  return (
    <section className="info-section" aria-labelledby="units-title">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" id="units-title">
            NOSSAS UNIDADES
          </h2>
          <p className="section-subtitle">
            Visite a loja da Potiguar Auto Center mais próxima de você
          </p>
        </div>

        <div className="grid-unidades">
          {UNITS.map((unit) => (
            <UnitCard key={unit.id} unit={unit} />
          ))}
        </div>
      </div>
    </section>
  );
}
