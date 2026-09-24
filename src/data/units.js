import { BUSINESS_HOURS } from './company';

/**
 * Unidades da Potiguar Auto Center.
 * `phone` é o número no formato internacional (usado no link do WhatsApp);
 * `phoneDisplay` é o texto exibido na tela.
 * `accent` define a cor de destaque da unidade (botões e ícones).
 */
export const UNITS = [
  {
    id: 'macaiba',
    city: 'Macaíba',
    title: 'Macaíba - RN',
    badge: 'Unidade 1',
    phone: '5584999530109',
    phoneDisplay: '(84) 99953-0109',
    address: 'Av. Jundiaí, nº 117 - Cj Monte Líbano, Macaíba - RN, 59280-000',
    shortAddress: 'Av. Jundiaí, nº 117',
    mapsQuery: 'Av. Jundiaí, 117 - Cj Monte Libano, Macaíba - RN',
    accent: 'yellow',
  },
  {
    id: 'parnamirim',
    city: 'Parnamirim',
    title: 'Parnamirim - RN',
    badge: 'Unidade 2',
    phone: '5584999822491',
    phoneDisplay: '(84) 99982-2491',
    address: 'Av. Piloto Pereira Tim, 69 - Centro, Parnamirim - RN, 59140-000',
    shortAddress: 'Av. Piloto Pereira Tim, 69',
    mapsQuery: 'Av. Piloto Pereira Tim, 69 - Centro, Parnamirim - RN',
    accent: 'blue',
  },
];

export const UNITS_HOURS_TEXT = `Segunda a Sexta: ${BUSINESS_HOURS.weekdays} | Sábado: ${BUSINESS_HOURS.saturday}`;

export function getUnitById(id) {
  return UNITS.find((unit) => unit.id === id) ?? UNITS[0];
}
