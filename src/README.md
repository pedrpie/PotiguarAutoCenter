# Potiguar Auto Center

Site da Potiguar Auto Center (Macaíba e Parnamirim - RN) em React + Vite.

## Como rodar

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera a pasta dist/
npm run preview  # testa o build localmente
npm run lint
```

## Antes de rodar: favicon

Coloque os ícones originais do projeto em `public/`:

```
public/
├─ favicon.svg
└─ favicon.ico
```

Os emojis são os nativos do sistema (componente `Emoji`), então não há imagens de emoji no projeto.

## Estrutura

```
src/
├─ components/   um componente por pasta (JSX + CSS do próprio componente)
├─ data/         conteúdo do site (unidades, ofertas, serviços, avaliações...)
├─ hooks/        useContactModal, useEscapeKey, useBodyScrollLock
├─ utils/        montagem de mensagens/links do WhatsApp, Google Maps, preços
└─ styles/       base.css (variáveis e reset) e buttons.css (botões compartilhados)
```

## Onde editar

| Quero mudar…                     | Arquivo                          |
| -------------------------------- | -------------------------------- |
| Telefones, endereços, unidades   | `src/data/units.js`              |
| Preços e cards de ofertas        | `src/data/offers.js`             |
| Serviços e opções do simulador   | `src/data/services.js`           |
| Depoimentos                      | `src/data/reviews.js`            |
| Horário de atendimento / nota    | `src/data/company.js`            |
| Textos das mensagens do WhatsApp | `src/utils/whatsapp.js`          |
