export function formatPrice({ reais, cents }) {
  return `R$ ${reais},${cents}`;
}

/** Texto do preço usado na mensagem/modal (ex.: "A partir de R$ 259,99"). */
export function getOfferPriceText(offer) {
  return [offer.messagePrefix, formatPrice(offer.price)].filter(Boolean).join(' ');
}
