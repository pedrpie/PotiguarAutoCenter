import { useCallback, useState } from 'react';

/**
 * Estado do modal de escolha de unidade.
 * O `product` é mantido após fechar para o conteúdo não "piscar" durante a animação de saída.
 */
export function useContactModal() {
  const [state, setState] = useState({ isOpen: false, product: null });

  const open = useCallback((product) => setState({ isOpen: true, product }), []);
  const close = useCallback(
    () => setState((prev) => ({ ...prev, isOpen: false })),
    [],
  );

  return { ...state, open, close };
}
