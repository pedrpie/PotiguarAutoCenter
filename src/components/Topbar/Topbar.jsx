import { Fragment } from 'react';
import Emoji from '../Emoji/Emoji';
import { MARQUEE_ITEMS } from '../../data/marquee';
import './Topbar.css';

function MarqueeGroup({ hidden = false }) {
  return (
    <div className="marquee-group" aria-hidden={hidden || undefined}>
      {MARQUEE_ITEMS.map(({ id, emoji, text }) => (
        <Fragment key={id}>
          <span className="marquee-item">
            <Emoji name={emoji} /> {text}
          </span>
          <span className="marquee-separator" aria-hidden="true">
            •
          </span>
        </Fragment>
      ))}
    </div>
  );
}

/** Letreiro horizontal: o grupo é duplicado para o loop da animação ser contínuo. */
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="marquee-track">
        <MarqueeGroup />
        <MarqueeGroup hidden />
      </div>
    </div>
  );
}
