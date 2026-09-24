import { useId, useState } from 'react';
import Emoji from '../Emoji/Emoji';
import { SIMULATOR_SERVICES } from '../../data/services';
import { UNITS, getUnitById } from '../../data/units';
import { buildQuoteMessage, openWhatsApp } from '../../utils/whatsapp';
import './Simulator.css';

const INITIAL_FORM = {
  unitId: UNITS[0].id,
  service: SIMULATOR_SERVICES[0],
  vehicle: '',
};

export default function Simulator() {
  const [form, setForm] = useState(INITIAL_FORM);
  const fieldId = useId();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const unit = getUnitById(form.unitId);
    openWhatsApp(
      unit.phone,
      buildQuoteMessage({
        city: unit.city,
        service: form.service,
        vehicle: form.vehicle.trim(),
      }),
    );
  };

  return (
    <section className="simulator-section">
      <div className="container">
        <div className="sim-card">
          <h3>SIMULADOR DE ORÇAMENTO RÁPIDO</h3>
          <p>
            Preencha os dados abaixo e receba a cotação no seu WhatsApp em
            menos de 3 minutos:
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor={`${fieldId}-unit`}>Selecione a Unidade:</label>
              <select
                id={`${fieldId}-unit`}
                name="unitId"
                className="form-control"
                value={form.unitId}
                onChange={handleChange}
                required
              >
                {UNITS.map((unit) => (
                  <option key={unit.id} value={unit.id}>
                    {unit.city} - {unit.phoneDisplay}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor={`${fieldId}-service`}>Do que seu carro precisa?</label>
              <select
                id={`${fieldId}-service`}
                name="service"
                className="form-control"
                value={form.service}
                onChange={handleChange}
                required
              >
                {SIMULATOR_SERVICES.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor={`${fieldId}-vehicle`}>Modelo e Ano do Veículo:</label>
              <input
                id={`${fieldId}-vehicle`}
                name="vehicle"
                type="text"
                className="form-control"
                placeholder="Ex: Gol 1.0 2018 / Palio / Uno"
                value={form.vehicle}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>

            <button type="submit" className="btn btn-whatsapp">
              <Emoji name="phoneArrow" /> Enviar Solicitação no WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
