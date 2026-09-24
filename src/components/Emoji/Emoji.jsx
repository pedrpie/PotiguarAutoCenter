import { EMOJI_CHARS } from './emojiChars';
import './Emoji.css';

/**
 * Emoji nativo do sistema.
 * Decorativo por padrão (escondido de leitores de tela); passe `label` quando o emoji carregar significado.
 */
export default function Emoji({ name, label, className = '' }) {
  const char = EMOJI_CHARS[name];
  if (!char) return null;

  return (
    <span
      className={`emoji ${className}`.trim()}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {char}
    </span>
  );
}
