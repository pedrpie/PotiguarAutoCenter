import { Fragment } from 'react';
import Emoji from '../Emoji/Emoji';
import { UNITS } from '../../data/units';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          <strong>POTIGUAR AUTO CENTER</strong>
        </p>
        <p className="footer-contacts">
          {UNITS.map(({ id, city, phoneDisplay }, index) => (
            <Fragment key={id}>
              {index > 0 && <> &bull; </>}
              <Emoji name="pin" /> <strong>{city}:</strong> {phoneDisplay}
            </Fragment>
          ))}
        </p>
        <p>Pneus, Baterias e Manutenção Automotiva de Confiança</p>
      </div>
    </footer>
  );
}
