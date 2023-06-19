import React from 'react';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__email">
          <span>E-mail:</span>

          <a className="footer__link" href="mailto:info@anatestudio.net" target="blank"> info@anatestudio.net</a>
        </div>

        <div className="footer__copyright">
          Copyright © Anate Studio
        </div>

      </div>
    </footer>
  )
}