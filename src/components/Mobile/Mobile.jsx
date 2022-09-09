import React from 'react';
import './Mobile.scss';
import splat from '../../assets/splat.svg';
import magnit from '../../assets/magnit.svg';
import qr from '../../assets/qr.svg';
import toothbrush from '../../assets/img/toothbrush.png';

function Mobile() {
  return (
    <section className="mobile">
      <section className="mobile__header">
        <div className="scheme">
          <div className="scheme__left">
            <div className="mobile__logo">
              <div className="mobile__logo-image">
                <a href="#">
                  <img src={splat} alt="Логотип SPLAT" />
                </a>
              </div>

              <div className="mobile__logo-title">
                <p>Представляет</p>
              </div>
            </div>

            <div className="mobile__sale">
              <p><span>-50%</span> на зубные щетки SPLAT!</p>
            </div>
          </div>

          <div className="scheme__right">
            <div className="mobile__toothbrush">
              <img src={toothbrush} alt="Зубные щетки SPLAT" />
            </div>
          </div>
        </div>
      </section>

      <div className="mobile__body">
        <div className="mobile__coupon">
          <div className="scheme">
            <div className="scheme__left">
              <div className="mobile__coupon-sale">
                <div className="mobile__coupon-sale-title">
                  <p>купон на скидку</p>
                </div>

                <div className="mobile__coupon-sale-qr">
                  <img src={qr} alt="QR-код купон на скидку" />
                </div>
              </div>
            </div>

            <div className="scheme__right">
              <div className="mobile__magnit">
                <img src={magnit} alt="Логотип Магнит" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile__footer"></div>
    </section>
  )
}

export default Mobile;