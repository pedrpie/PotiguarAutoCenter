// RENDERIZADOR AUTOMÁTICO DE EMOJIS ESTILO IPHONE (APPLE)
  const APPLE_EMOJIS = {
    '🔥': 'public/emojis/apple/1f525.png',
    '🛡️': 'public/emojis/apple/1f6e1-fe0f.png',
    '🛡': 'public/emojis/apple/1f6e1-fe0f.png',
    '💬': 'public/emojis/apple/1f4ac.png',
    '🔧': 'public/emojis/apple/1f527.png',
    '🛢️': 'public/emojis/apple/1f6e2-fe0f.png',
    '🛢': 'public/emojis/apple/1f6e2-fe0f.png',
    '🛑': 'public/emojis/apple/1f6d1.png',
    '⚡': 'public/emojis/apple/26a1.png',
    '📲': 'public/emojis/apple/1f4f2.png',
    '📍': 'public/emojis/apple/1f4cd.png',
    '🕒': 'public/emojis/apple/1f552.png',
    '📞': 'public/emojis/apple/1f4de.png',
    '🗺️': 'public/emojis/apple/1f5fa-fe0f.png',
    '🗺': 'public/emojis/apple/1f5fa-fe0f.png',
    '🚗': 'public/emojis/apple/1f697.png',
    '⭐': 'public/emojis/apple/2b50.png'
  };

  function renderAppleEmojis(root = document.body) {
    if (!root) return;
    const regex = /🔥|🛡️?|💬|🔧|🛢️?|🛑|⚡|📲|📍|🕒|📞|🗺️?|🚗|⭐/g;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    const textNodes = [];
    let node;
    while ((node = walker.nextNode())) {
      const parent = node.parentElement;
      if (parent && !['SCRIPT', 'STYLE', 'TEXTAREA'].includes(parent.tagName) && !parent.classList.contains('apple-emoji')) {
        if (regex.test(node.nodeValue)) {
          textNodes.push(node);
        }
      }
    }

    for (const textNode of textNodes) {
      const parent = textNode.parentNode;
      if (!parent) continue;
      const val = textNode.nodeValue;
      regex.lastIndex = 0;
      const parts = val.split(regex);
      const matches = val.match(regex);
      if (!matches) continue;

      const frag = document.createDocumentFragment();
      parts.forEach((part, i) => {
        if (part) frag.appendChild(document.createTextNode(part));
        if (matches[i]) {
          const char = matches[i];
          const src = APPLE_EMOJIS[char] || APPLE_EMOJIS[char + '\uFE0F'];
          if (src) {
            const img = document.createElement('img');
            img.src = src;
            img.alt = char;
            img.className = 'apple-emoji';
            frag.appendChild(img);
          } else {
            frag.appendChild(document.createTextNode(char));
          }
        }
      });
      parent.replaceChild(frag, textNode);
    }
  }

  window.onload = function () {
    renderAppleEmojis();
  };

  // ENVIO DE FORMULÁRIO VIA WHATSAPP COM SELEÇÃO DE UNIDADE
  function enviaWhatsApp(e) {
    e.preventDefault();
    let servico = document.getElementById('servico').value;
    let carro = document.getElementById('carro').value;
    let unidadeEl = document.getElementById('unidade');
    let unidadeVal = unidadeEl ? unidadeEl.value : '5584999530109|Macaíba';
    
    let parts = unidadeVal.split('|');
    let fone = parts[0] || '5584999530109';
    let cidade = parts[1] || 'Macaíba';

    let msg = `Olá! Vim pelo site da Potiguar Auto Center e gostaria de um orçamento para a unidade de ${cidade}:%0A%0A` +
              `*Produto/Serviço:* ${servico}%0A` +
              `*Veículo:* ${carro}%0A%0A` +
              `Aguardo o retorno, por gentileza.`;

    window.open(`https://wa.me/${fone}?text=${msg}`, '_blank');
  }

  // GERENCIAMENTO DO MODAL DE SELEÇÃO DE CIDADE PARA AS OFERTAS
  let produtoSelecionado = {
    nome: '',
    preco: ''
  };

  function abrirModalCidade(nomeProduto, precoProduto) {
    produtoSelecionado = {
      nome: nomeProduto || 'Produto em Promoção',
      preco: precoProduto || ''
    };

    const modal = document.getElementById('modal-cidade');
    const badge = document.getElementById('modal-produto-badge');
    if (badge) {
      if (produtoSelecionado.preco) {
        badge.textContent = `${produtoSelecionado.nome} • ${produtoSelecionado.preco}`;
      } else {
        badge.textContent = produtoSelecionado.nome;
      }
    }

    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function fecharModalCidade() {
    const modal = document.getElementById('modal-cidade');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function fecharModalFora(e) {
    if (e.target && e.target.id === 'modal-cidade') {
      fecharModalCidade();
    }
  }

  function selecionarCidade(cidade) {
    const contatos = {
      'Macaíba': '5584999530109',
      'Parnamirim': '5584999822491'
    };

    const fone = contatos[cidade] || '5584999530109';
    let textoMsg = '';

    if (produtoSelecionado.nome === 'Atendimento Geral') {
      textoMsg = `Olá! Vim pelo site da Potiguar Auto Center e gostaria de um atendimento para a unidade de *${cidade}*.%0A%0AAguardo o retorno, por gentileza.`;
    } else if (produtoSelecionado.preco === 'Consultar Ofertas' || produtoSelecionado.nome.toLowerCase().includes('oferta')) {
      textoMsg = `Olá! Vim pelo site da Potiguar Auto Center e gostaria de consultar as ofertas de *${produtoSelecionado.nome}* na unidade de *${cidade}*.%0A%0AAguardo o retorno, por gentileza.`;
    } else {
      const precoTxt = produtoSelecionado.preco ? ` (${produtoSelecionado.preco})` : '';
      textoMsg = `Olá! Vim pelo site da Potiguar Auto Center e gostaria de garantir a promoção do *${produtoSelecionado.nome}*${precoTxt} na unidade de *${cidade}*.%0A%0AAguardo o retorno, por gentileza.`;
    }

    fecharModalCidade();
    window.open(`https://wa.me/${fone}?text=${textoMsg}`, '_blank');
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      fecharModalCidade();
    }
  });