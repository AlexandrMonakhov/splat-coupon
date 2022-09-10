import React from 'react';
import './Mobile.scss';
import splat from '../../assets/splat.svg';
import magnit from '../../assets/magnit.svg';
import qr from '../../assets/qr.svg';
import scan from '../../assets/icon/scan.svg';
import toothbrushIcon from '../../assets/icon/toothbrush.svg';
import tickets from '../../assets/icon/tickets.svg';
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
						<div className="mobile__toothbrush" data-aos="fade" data-aos-delay="300">
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

							<div className="mobile__coupon-button">
								<p>Делайте скриншот!</p>
							</div>
						</div>

						<div className="scheme__right">
							<div className="mobile__magnit">
								<a href="#">
									<img src={magnit} alt="Логотип Магнит" />
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="mobile__rules">
					<div className="mobile__rule" data-aos="zoom-in-down" data-aos-delay="900">
						<div className="mobile__rule-image">
							<img src={scan} alt="Сделайте скриншот купона" />
						</div>
						<div className="mobile__rule-text">
							<span>1</span>
							<p>Сделайте скриншот купона</p>
						</div>
					</div>

					<div className="mobile__rule" data-aos="zoom-in-down" data-aos-delay="1200">
						<div className="mobile__rule-image">
							<img src={toothbrushIcon} alt="Выберите в торговом зале товары из ассортимента зубных щеток SPLAT" />
						</div>
						<div className="mobile__rule-text">
							<span>2</span>
							<p>Выберите в торговом зале товары из ассортимента зубных щеток SPLAT</p>
						</div>
					</div>

					<div className="mobile__rule" data-aos="zoom-in-down" data-aos-delay="1500">
						<div className="mobile__rule-image">
							<img src={tickets} alt="Предъявите купон на кассе до оплаты товара" />
						</div>
						<div className="mobile__rule-text">
							<span>3</span>
							<p>Предъявите купон на кассе до оплаты товара</p>
						</div>
					</div>
				</div>

				<div className="mobile__period">
					<p>Период действия купона:</p>
					<p>с 19 сентября по 19 октября 2022г.</p>
				</div>
				
				<div className="mobile__info">
					<ul className="mobile__list">
						<li className="mobile__list-item">
							Купон распространяется на весь ассортимент зубных щеток SPLAT;
						</li>
						<li className="mobile__list-item">
							Купон не применяется и не суммируется, если на товар действуют другие акции;
						</li>
						<li className="mobile__list-item">
							Купон можно использовать несколько раз в пределах срока действия предложения;
						</li>
						<li className="mobile__list-item">
							При предоставлении скидки цена на товар не может быть ниже минимальной розничной цены, установленной законодательством.
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Mobile;