import { useEffect } from 'react';

/** Bloqueia a rolagem da página enquanto `locked` for verdadeiro. */
export function useBodyScrollLock(locked) {
  useEffect(() => {
    if (!locked) return undefined;

    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [locked]);
}
