import { useEffect, useId, useRef } from 'react';
import Emoji from '../Emoji/Emoji';
import { UNITS } from '../../data/units';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import './CityModal.css';

/**
 * Modal para escolher a unidade antes de abrir o WhatsApp.
 * Fica sempre montado para preservar a animação de entrada/saída definida no CSS.
 */
export default function CityModal({ isOpen, product, onClose, onSelectUnit }) {
  const titleId = useId();
  const closeButtonRef = useRef(null);

  useEscapeKey(onClose, isOpen);
  useBodyScrollLock(isOpen);

  // Move o foco para o modal ao abrir e devolve ao elemento anterior ao fechar.
  useEffect(() => {
    if (!isOpen) return undefined;
    const previouslyFocused = document.activeElement;
    closeButtonRef.current?.focus();
    return () => previouslyFocused?.focus?.();
  }, [isOpen]);

  const badge = product
    ? [product.name, product.price].filter(Boolean).join(' • ')
    : '';

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <div
      className={`modal-overlay${isOpen ? ' active' : ''}`}
      onClick={handleOverlayClick}
      aria-hidden={!isOpen}
    >
      <div
        className="modal-container"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="modal-header">
          <button
            ref={closeButtonRef}
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Fechar"
          >
            &times;
          </button>
          <h2 className="modal-title" id={titleId}>
            Escolha a Unidade
          </h2>
          {badge && <div className="modal-product-badge">{badge}</div>}
        </div>

        <div className="modal-body">
          <p className="modal-instructions">
            Em qual de nossas lojas você gostaria de fazer o seu pedido?
          </p>

          <div className="modal-cities-grid">
            {UNITS.map((unit) => (
              <button
                key={unit.id}
                type="button"
                className="city-card-btn"
                onClick={() => onSelectUnit(unit)}
              >
                <span className="city-card-info">
                  <span
                    className={`city-card-icon${unit.accent === 'blue' ? ' city-card-icon--blue' : ''}`}
                  >
                    <Emoji name="pin" />
                  </span>
                  <span>
                    <span className="city-card-name">{unit.title}</span>
                    <span className="city-card-desc">
                      {unit.shortAddress} &bull; {unit.phoneDisplay}
                    </span>
                  </span>
                </span>
                <span className="city-card-action">
                  <Emoji name="chat" />
                  <span>Pedir</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
