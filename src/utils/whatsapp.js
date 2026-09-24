import { COMPANY_NAME } from '../data/company';

/** Tipos de solicitação de contato (definem o texto da mensagem). */
export const CONTACT_KIND = Object.freeze({
  GENERAL: 'general', // atendimento geral
  OFFERS: 'offers', // consulta de ofertas
  PROMO: 'promo', // garantir uma promoção específica
});

const INTRO = `Olá! Vim pelo site da ${COMPANY_NAME}`;
const CLOSING = 'Aguardo o retorno, por gentileza.';

export function buildWhatsAppUrl(phone, message) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/** Abre o WhatsApp em nova aba. */
export function openWhatsApp(phone, message) {
  window.open(buildWhatsAppUrl(phone, message), '_blank', 'noopener,noreferrer');
}

/** Mensagem do modal de escolha de unidade. */
export function buildContactMessage({ kind, name, price, city }) {
  switch (kind) {
    case CONTACT_KIND.GENERAL:
      return `${INTRO} e gostaria de um atendimento para a unidade de *${city}*.\n\n${CLOSING}`;
    case CONTACT_KIND.OFFERS:
      return `${INTRO} e gostaria de consultar as ofertas de *${name}* na unidade de *${city}*.\n\n${CLOSING}`;
    default: {
      const priceText = price ? ` (${price})` : '';
      return `${INTRO} e gostaria de garantir a promoção do *${name}*${priceText} na unidade de *${city}*.\n\n${CLOSING}`;
    }
  }
}

/** Mensagem do simulador de orçamento. */
export function buildQuoteMessage({ city, service, vehicle }) {
  return (
    `${INTRO} e gostaria de um orçamento para a unidade de ${city}:\n\n` +
    `*Produto/Serviço:* ${service}\n` +
    `*Veículo:* ${vehicle}\n\n` +
    CLOSING
  );
}

/** Mensagem dos botões fixos de cada unidade. */
export function buildUnitMessage(city) {
  return `${INTRO} e gostaria de atendimento na unidade de ${city}.`;
}
