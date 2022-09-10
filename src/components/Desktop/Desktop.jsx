import React from 'react';
import './Desktop.scss';
import splat from '../../assets/splat.svg';
import magnit from '../../assets/magnit.svg';
import qr from '../../assets/qr.svg';
import scan from '../../assets/icon/scan.svg';
import toothbrushIcon from '../../assets/icon/toothbrush.svg';
import tickets from '../../assets/icon/tickets.svg';
import toothbrush from '../../assets/img/toothbrush.png';

function Desktop() {
	return (
		<section className="desktop">
      <div className="desktop__body">
        <div className="scheme">
          <div className="scheme__left desktop__column">
            <div className="desktop__column-left">
              <div className="desktop__logo-image">
                <a href="#">
                  <img src={splat} alt="Логотип SPLAT" />
                </a>
              </div>

              <div className="desktop__logo-title">
                <p>Представляет</p>
              </div>

              <div className="desktop__sale">
                <p><span>-50%</span> на зубные щетки SPLAT!</p>
              </div>

              <div className="desktop__info">
                <ul className="desktop__list">
                  <li className="desktop__list-item">
                    Купон распространяется на весь ассортимент зубных щеток SPLAT;
                  </li>
                  <li className="desktop__list-item">
                    Купон не применяется и не суммируется, если на товар действуют другие акции;
                  </li>
                  <li className="desktop__list-item">
                    Купон можно использовать несколько раз в пределах срока действия предложения;
                  </li>
                  <li className="desktop__list-item">
                    При предоставлении скидки цена на товар не может быть ниже минимальной розничной цены, установленной законодательством.
                  </li>
                </ul>
              </div>
            </div>

            <div className="desktop__column-right">
              <div className="desktop__toothbrush">
                <img src={toothbrush} alt="Зубные щетки SPLAT" />
              </div>
            </div>
          </div>

          <div className="scheme__right">
            <div className="desktop__coupon">
              <div className="desktop__scheme">
                <div className="desktop__scheme__left">
                  <div className="desktop__coupon-sale">
                    <div className="desktop__coupon-sale-title">
                      <p>купон на скидку</p>
                    </div>

                    <div className="desktop__coupon-sale-qr">
                      <img src={qr} alt="QR-код купон на скидку" />
                    </div>
                  </div>

                  <div className="desktop__coupon-button">
                    <p>Делайте скриншот!</p>
                  </div>
                </div>

                <div className="desktop__scheme__right">
                  <div className="desktop__magnit">
                    <a href="#">
                      <img src={magnit} alt="Логотип Магнит" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="desktop__rules">
					<div className="desktop__rule">
						<div className="desktop__rule-image">
							<img src={scan} alt="Сделайте скриншот купона" />
						</div>
						<div className="desktop__rule-text">
							<span>1</span>
							<p>Сделайте скриншот купона</p>
						</div>
					</div>

					<div className="desktop__rule">
						<div className="desktop__rule-image">
							<img src={toothbrushIcon} alt="Выберите в торговом зале товары из ассортимента зубных щеток SPLAT" />
						</div>
						<div className="desktop__rule-text">
							<span>2</span>
							<p>Выберите в торговом зале товары из ассортимента зубных щеток SPLAT</p>
						</div>
					</div>

					<div className="desktop__rule">
						<div className="desktop__rule-image">
							<img src={tickets} alt="Предъявите купон на кассе до оплаты товара" />
						</div>
						<div className="desktop__rule-text">
							<span>3</span>
							<p>Предъявите купон на кассе до оплаты товара</p>
						</div>
					</div>
				</div>

        <div className="desktop__period">
          <p>Период действия купона: с 19 сентября по 19 октября 2022г.</p>
        </div>
      </div>
    </section>
	)
}

export default Desktop;