import React from 'react';
import './Tablet.scss';
import splat from '../../assets/splat.svg';
import magnit from '../../assets/magnit.svg';
import qr from '../../assets/qr.svg';
import scan from '../../assets/icon/scan.svg';
import toothbrushIcon from '../../assets/icon/toothbrush.svg';
import tickets from '../../assets/icon/tickets.svg';
import toothbrush from '../../assets/img/toothbrush.png';

function Tablet() {
	return (
		<section className="tablet">
      <div className="tablet__body">
        <div className="scheme">
          <div className="scheme__left">
            <div className="tablet__logo-image">
              <a href="#">
                <img src={splat} alt="Логотип SPLAT" />
              </a>
            </div>

            <div className="tablet__logo-title">
              <p>Представляет</p>
            </div>

            <div className="tablet__toothbrush" data-aos="fade" data-aos-delay="300">
							<img src={toothbrush} alt="Зубные щетки SPLAT" />
						</div>
          </div>

          <div className="scheme__right">
            <div className="tablet__coupon">
              <div className="tablet__scheme">
                <div className="tablet__scheme__left">
                  <div className="tablet__coupon-sale">
                    <div className="tablet__coupon-sale-title">
                      <p>купон на скидку</p>
                    </div>

                    <div className="tablet__coupon-sale-qr">
                      <img src={qr} alt="QR-код купон на скидку" />
                    </div>
                  </div>

                  <div className="tablet__coupon-button">
                    <p>Делайте скриншот!</p>
                  </div>

                  <div className="tablet__sale">
                    <p><span>-50%</span> на зубные щетки SPLAT!</p>
                  </div>
                </div>

                <div className="tablet__scheme__right">
                  <div className="tablet__magnit">
                    <a href="#">
                      <img src={magnit} alt="Логотип Магнит" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tablet__rules">
					<div className="tablet__rule" data-aos="zoom-in-down" data-aos-delay="900">
						<div className="tablet__rule-image">
							<img src={scan} alt="Сделайте скриншот купона" />
						</div>
						<div className="tablet__rule-text">
							<span>1</span>
							<p>Сделайте скриншот купона</p>
						</div>
					</div>

					<div className="tablet__rule" data-aos="zoom-in-down" data-aos-delay="1200">
						<div className="tablet__rule-image">
							<img src={toothbrushIcon} alt="Выберите в торговом зале товары из ассортимента зубных щеток SPLAT" />
						</div>
						<div className="tablet__rule-text">
							<span>2</span>
							<p>Выберите в торговом зале товары из ассортимента зубных щеток SPLAT</p>
						</div>
					</div>

					<div className="tablet__rule" data-aos="zoom-in-down" data-aos-delay="1500">
						<div className="tablet__rule-image">
							<img src={tickets} alt="Предъявите купон на кассе до оплаты товара" />
						</div>
						<div className="tablet__rule-text">
							<span>3</span>
							<p>Предъявите купон на кассе до оплаты товара</p>
						</div>
					</div>
				</div>

        <div className="tablet__period">
          <p>Период действия купона: с 19 сентября по 19 октября 2022г.</p>
        </div>
      </div>

      <div className="tablet__footer">
        <div className="tablet__info">
					<ul className="tablet__list">
						<li className="tablet__list-item">
							Купон распространяется на весь ассортимент зубных щеток SPLAT;
						</li>
						<li className="tablet__list-item">
							Купон не применяется и не суммируется, если на товар действуют другие акции;
						</li>
						<li className="tablet__list-item">
							Купон можно использовать несколько раз в пределах срока действия предложения;
						</li>
						<li className="tablet__list-item">
							При предоставлении скидки цена на товар не может быть ниже минимальной розничной цены, установленной законодательством.
						</li>
					</ul>
				</div>
      </div>
    </section>
	)
}

export default Tablet;