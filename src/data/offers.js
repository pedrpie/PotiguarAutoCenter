/**
 * Ofertas exibidas na seção "Ofertas exclusivas".
 * - `messagePrefix`: texto que antecede o preço na mensagem enviada ao WhatsApp.
 * - `variant`: 'default' (amarelo) ou 'blue' (destaque azul).
 */
export const OFFERS = [
  {
    id: 'pneu-aro-13',
    title: 'Pneu Aro 13',
    tag: 'Super Promo',
    priceLabel: 'A partir de',
    messagePrefix: 'A partir de',
    price: { reais: 259, cents: '99' },
    features: [
      'Pneu Novo com 5 Anos de Garantia',
      'Montagem Grátis na Loja',
      'Pronta Entrega',
    ],
    ctaLabel: 'Garantir Promoção',
    variant: 'default',
  },
  {
    id: 'pneu-aro-14',
    title: 'Pneu Aro 14',
    tag: 'Mais Vendido',
    priceLabel: 'A partir de',
    messagePrefix: 'A partir de',
    price: { reais: 279, cents: '99' },
    features: [
      'Pneu Novo com 5 Anos de Garantia',
      'Alinhamento e Balanceamento no local',
      'Pronta Entrega',
    ],
    ctaLabel: 'Garantir Promoção',
    variant: 'default',
  },
  {
    id: 'pneu-aro-15',
    title: 'Pneu Aro 15',
    tag: 'Oferta Especial',
    priceLabel: 'A partir de',
    messagePrefix: 'A partir de',
    price: { reais: 329, cents: '99' },
    features: [
      'Pneu Novo com 5 Anos de Garantia',
      'Ideal para Sedans e SUVs compactos',
      'Pronta Entrega',
    ],
    ctaLabel: 'Garantir Promoção',
    variant: 'default',
  },
  {
    id: 'bateria-60a',
    title: 'Bateria 60A',
    tag: 'Líder de Vendas',
    priceLabel: 'Apenas',
    messagePrefix: '',
    price: { reais: 259, cents: '99' },
    features: [
      'Com a devolução da sucata usada',
      'Teste de alternador grátis',
      'Entrega e instalação rápida',
    ],
    ctaLabel: 'Pedir Bateria',
    variant: 'blue',
  },
];
