import React from 'react'
import styles from './cssFiles/Landing.module.css';
import { useAuth0 } from "./react-auth0-spa"
import { ReactComponent as BackgroundSvg } from './assets/background.svg';
import { ReactComponent as CircleSecSvg } from './assets/circle-sec.svg';
import { ReactComponent as CircleSec1Svg } from './assets/circle-sec1.svg';
import { ReactComponent as CircleSec2Svg } from './assets/circle-sec2.svg';
import { ReactComponent as ArrowRightSvg } from './assets/arrowright.svg';
import { ReactComponent as ColMd6Svg } from './assets/colmd6.svg';
import { ReactComponent as StarsSvg } from './assets/stars.svg';
import { ReactComponent as CircleSvg } from './assets/circle.svg';

function LandingPage() {

  const { loginWithRedirect } = useAuth0();


  return (
    <div className={styles.landingDiv} id="landing">
      <div className={styles.header1Div}>
        <BackgroundSvg className={styles.backgroundIcon} />
        <div className={styles.containerDiv}>
          <div className={styles.containerDiv}>
            <div className={styles.navbarBrandSecDiv}>
              <b className={styles.brandname}>Habarci</b>
            </div>
            <div className={styles.navbarTogglerDiv}>
              <div className={styles.navbarTogglerIconDiv} />
            </div>
            <div className={styles.collapseNavbarCollapseDiv}>
              <div className={styles.navbarNavDiv}>
                <div className={styles.liSecDiv}>
                  <div className={styles.aDiv}>
                    <b className={styles.linkB}>О нас</b>
                  </div>
                </div>
                <div className={styles.liSecDiv1}>
                  <div className={styles.aDiv1}>
                    <b className={styles.linkB1}>Цены</b>
                  </div>
                </div>
                <div className={styles.liSecDiv2}>
                  <div className={styles.aDiv2}>
                    <b className={styles.linkB2}>FAQ</b>
                  </div>
                </div>
                <div className={styles.liSecDiv3}>
                  <div className={styles.aDiv3}>
                    <b className={styles.linkB3}>Контакт</b>
                  </div>
                </div>
              </div>
              <div className={styles.navbarNavDiv1}>
                <div className={styles.navItemSecDiv}>
                  <div className={styles.aDiv4}>
                    <b className={styles.btnText} onClick={() => loginWithRedirect({})}>Войти</b>
                  </div>
                </div>
                <div onClick={() => loginWithRedirect({})} className={styles.navItemSecDiv1}>
                  <div className={styles.buttonbtnprimaryColorDiv}>
                    <b className={styles.btnText1}>Зарабатывать</b>
                    <ArrowRightSvg
                      className={styles.icnArrowRightIcnXs}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.containerDiv1}>
          <div className={styles.rowDiv}>
            <div className={styles.colMd8Div}>
              <b className={styles.h1HeadlineSec}>
                <p className={styles.p}>ЗАРАБАТЫВАЙ</p>
                <p className={styles.dSecureP}>НА ПОЕЗДКАХ</p>
              </b>
              <div className={styles.h4SubHeadlineSec}>
                <p className={styles.p}>
                  Brand помогает отправить документы и посылки с попутчиками
                </p>
                <p className={styles.dSecureP}>Быстро, комфортно и надежно.</p>
              </div>
              <div className={styles.ctaDiv}>
                <div className={styles.buttonMdSec}>
                  <b className={styles.btnText1}>Начать зарабатывать</b>
                </div>
                <div className={styles.buttonMdSec1}>
                  <b className={styles.btnText1}>Отправить посылку</b>
                </div>
              </div>
            </div>
            <div className={styles.colMd4Div} />
          </div>
          <div className={styles.rowDiv1}>
            <div className={styles.colMd4Div1}>
              <div className={styles.cardDiv}>
                <CircleSecSvg
                  className={styles.circleSecIcon}
                />
                <b className={styles.h3FeatureTitleSec}>Удобство</b>
                <div className={styles.fixedWidthFixedHeightSec} />
                <div className={styles.paragraphFeatureDescription}>
                  <p className={styles.p}>Отправлять посылки теперь легче,как и зарабатывать на перевозке их.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.colMd4Div2}>
              <div className={styles.cardDiv}>
                <CircleSec1Svg
                  className={styles.circleSecIcon}
                />
                <b className={styles.h3FeatureTitleSec}>Безопасность</b>
                <div className={styles.fixedWidthFixedHeightSec} />
                <div className={styles.paragraphFeatureDescription}>
                  <p className={styles.p}>Оплата производится через</p>
                  <p className={styles.dSecureP}>технологию 3D Secure</p>
                </div>
              </div>
            </div>
            <div className={styles.colMd4Div2}>
              <div className={styles.cardDiv}>
                <CircleSec2Svg
                  className={styles.circleSecIcon}
                />
                <b className={styles.h3FeatureTitleSec}>Стоимость</b>
                <div className={styles.fixedWidthFixedHeightSec} />
                <div className={styles.paragraphFeatureDescription}>
                  <p className={styles.p}>Свободное ценообразование - то,
                    что отличает наш сервис от других.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.stats1Div}>
        <div className={styles.containerDiv2}>
          <div className={styles.rowDiv2}>
            <div className={styles.colMd3SecDiv}>
              <b className={styles.metrics1B}>15K</b>
              <b className={styles.metricsTitle1B}>Заказов</b>
            </div>
            <div className={styles.colMd3SecDiv1}>
              <b className={styles.metrics1B}>150K</b>
              <b className={styles.metricsTitle1B}>Пользователей</b>
            </div>
            <div className={styles.colMd3SecDiv2}>
              <b className={styles.metrics1B}>15</b>
              <b className={styles.metricsTitle1B}>Регионов РК</b>
            </div>
            <div className={styles.colMd3SecDiv2}>
              <b className={styles.metrics1B}>100+</b>
              <b className={styles.metricsTitle1B}>Счастливых отзывов</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.layout2Div}>
        <div className={styles.containerDiv3}>
          <div className={styles.rowDiv3}>
            <div className={styles.colMd5Div}>
              <div className={styles.fixedWidthFixedHeightSec3} />
              <b className={styles.h2SectionTitle3Sec}>Каждый клиент важен!</b>
              <div className={styles.paragraphSecDiv}>
                <p className={styles.p}>
                  Мы пытаемся что-либо написать сюда, чтобы понравится вам.
                </p>
                <p className={styles.dSecureP}>
                  Надеюсь, этот текст никто не будет читать.
                </p>
              </div>
              <div className={styles.aSecDiv}>
                <b className={styles.h6B}>Отправить посылку</b>
                <img
                  className={styles.iconArrowNext}
                  alt=""
                  src="icon-arrownext.svg"
                />
              </div>
            </div>
            <ColMd6Svg className={styles.colMd6Icon} />
          </div>
        </div>
      </div>
      <div className={styles.layout1Div}>
        <div className={styles.containerDiv4}>
          <div className={styles.rowDiv4}>
            <div className={styles.mainContentDiv}>
              <b className={styles.h6B}>Practice Advice</b>
              <b className={styles.h2SectionTitle1Sec}>Our Experts Teacher</b>
              <div className={styles.paragraphSecDiv}>
                <p className={styles.p}>
                  Problems trying to resolve the conflict between{" "}
                </p>
                <p className={styles.dSecureP}>
                  the two major realms of Classical physics: Newtonian mechanics{" "}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.rowDiv5}>
            <div className={styles.colMd4Div4}>
              <div className={styles.productCardDiv}>
                <div className={styles.fixedHeightDiv}>
                  <img
                    className={styles.productCover124SecIcon}
                    alt=""
                    src="productcover124-sec@2x.png"
                  />
                  <img
                    className={styles.productActionsSecIcon}
                    alt=""
                    src="productactions-sec.svg"
                  />
                  <div className={styles.tagSecDiv}>
                    <b className={styles.h6B}>Sale</b>
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.frameDiv1}>
                    <div className={styles.frame1Sec}>
                      <b className={styles.h6B}>Training Courses</b>
                    </div>
                    <div className={styles.frame4Sec}>
                      <img
                        className={styles.iconEmojioneStar}
                        alt=""
                        src="icon-emojionestar.svg"
                      />
                      <div className={styles.smallDiv}>4.9</div>
                    </div>
                  </div>
                  <b className={styles.metricsTitle1B}>Get Quality Education</b>
                  <div className={styles.paragraphSecDiv}>
                    <p className={styles.p}>
                      We focus on ergonomics and meeting{" "}
                    </p>
                    <p className={styles.p}>you where you work. It's only a </p>
                    <p className={styles.dSecureP}>keystroke away.</p>
                  </div>
                  <div className={styles.salesDiv}>
                    <img
                      className={styles.iconEmojioneStar}
                      alt=""
                      src="frame-sec.svg"
                    />
                    <b className={styles.h6B}>15 Sales</b>
                  </div>
                  <div className={styles.pricesDiv}>
                    <b className={styles.h5PriceSec}>$16.48</b>
                    <b className={styles.h5PriceSec1}>$6.48</b>
                  </div>
                  <div className={styles.buttonSmSec}>
                    <b className={styles.h6B}>Learn More</b>
                    <img
                      className={styles.icnArrowRightIcnXs1}
                      alt=""
                      src="icn-arrowright-icnxs1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.colMd4Div4}>
              <div className={styles.productCardDiv}>
                <div className={styles.fixedHeightDiv}>
                  <img
                    className={styles.productCover124SecIcon}
                    alt=""
                    src="productcover125-sec@2x.png"
                  />
                  <img
                    className={styles.productActionsSecIcon}
                    alt=""
                    src="productactions-sec1.svg"
                  />
                  <div className={styles.tagSecDiv}>
                    <b className={styles.h6B}>Sale</b>
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.frameDiv1}>
                    <div className={styles.frame1Sec}>
                      <b className={styles.h6B}>2,769 online courses </b>
                    </div>
                    <div className={styles.frame4Sec}>
                      <img
                        className={styles.iconEmojioneStar}
                        alt=""
                        src="icon-emojionestar.svg"
                      />
                      <div className={styles.smallDiv}>4.9</div>
                    </div>
                  </div>
                  <b className={styles.metricsTitle1B}>Our Popular Courses</b>
                  <div className={styles.paragraphSecDiv}>
                    <p className={styles.p}>
                      We focus on ergonomics and meeting{" "}
                    </p>
                    <p className={styles.p}>you where you work. It's only a </p>
                    <p className={styles.dSecureP}>keystroke away.</p>
                  </div>
                  <div className={styles.salesDiv}>
                    <img
                      className={styles.iconEmojioneStar}
                      alt=""
                      src="frame-sec1.svg"
                    />
                    <b className={styles.h6B}>15 Sales</b>
                  </div>
                  <div className={styles.pricesDiv}>
                    <b className={styles.h5PriceSec}>$16.48</b>
                    <b className={styles.h5PriceSec1}>$6.48</b>
                  </div>
                  <div className={styles.buttonSmSec}>
                    <b className={styles.h6B}>Learn More</b>
                    <img
                      className={styles.icnArrowRightIcnXs1}
                      alt=""
                      src="icn-arrowright-icnxs2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.colMd4Div6}>
              <div className={styles.productCardDiv}>
                <div className={styles.fixedHeightDiv}>
                  <img
                    className={styles.productCover124SecIcon}
                    alt=""
                    src="productcover126-sec@2x.png"
                  />
                  <img
                    className={styles.productActionsSecIcon}
                    alt=""
                    src="productactions-sec2.svg"
                  />
                  <div className={styles.tagSecDiv}>
                    <b className={styles.h6B}>Sale</b>
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.frameDiv1}>
                    <div className={styles.frame1Sec}>
                      <b className={styles.h6B}>Expert instruction</b>
                    </div>
                    <div className={styles.frame4Sec}>
                      <img
                        className={styles.iconEmojioneStar}
                        alt=""
                        src="icon-emojionestar2.svg"
                      />
                      <div className={styles.smallDiv}>4.9</div>
                    </div>
                  </div>
                  <b className={styles.metricsTitle1B}>Most Popular Courses</b>
                  <div className={styles.paragraphSecDiv}>
                    <p className={styles.p}>
                      We focus on ergonomics and meeting{" "}
                    </p>
                    <p className={styles.p}>you where you work. It's only a </p>
                    <p className={styles.dSecureP}>keystroke away.</p>
                  </div>
                  <div className={styles.salesDiv}>
                    <img
                      className={styles.iconEmojioneStar}
                      alt=""
                      src="frame-sec2.svg"
                    />
                    <b className={styles.h6B}>15 Sales</b>
                  </div>
                  <div className={styles.pricesDiv}>
                    <b className={styles.h5PriceSec}>$16.48</b>
                    <b className={styles.h5PriceSec1}>$6.48</b>
                  </div>
                  <div className={styles.buttonSmSec}>
                    <b className={styles.h6B}>Learn More</b>
                    <img
                      className={styles.icnArrowRightIcnXs1}
                      alt=""
                      src="icn-arrowright-icnxs3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.layout1Div1}>
        <div className={styles.containerDiv4}>
          <div className={styles.rowDiv4}>
            <div className={styles.mainContentDiv}>
              <b className={styles.h2SectionTitle2B}>Спасибо за доверие!</b>
              <div className={styles.paragraphFeatureDescription}>
                <p className={styles.p}>
                  Каждое ваше теплое слово - дает нам сил продвигаться вперед!
                </p>
                <p className={styles.dSecureP}>
                  Мы благодарны, что вы выбираете нас.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.rowDiv7}>
            <div className={styles.colMd4Div4}>
              <div className={styles.testimonialsCardDiv}>
                <div className={styles.cardContentDiv}>
                  <StarsSvg className={styles.starsIcon} />
                  <div className={styles.paragraphDiv1}>
                    Slate поможет вам увидеть, сколько еще дней вам нужно
                    поработать, чтобы достичь своей финансовой цели на месяц и
                    год.
                  </div>
                </div>
                <div className={styles.div}>
                  <CircleSvg className={styles.circleIcon} />
                  <div className={styles.div1}>
                    <b className={styles.h6B}>Regina Miles</b>
                    <div className={styles.h6Div}>Designer</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.colMd4Div4}>
              <div className={styles.testimonialsCardDiv}>
                <div className={styles.cardContentDiv}>
                  <StarsSvg className={styles.starsIcon} />
                  <div className={styles.paragraphDiv1}>
                    Slate поможет вам увидеть, сколько еще дней вам нужно
                    поработать, чтобы достичь своей финансовой цели на месяц и
                    год.
                  </div>
                </div>
                <div className={styles.div}>
                  <CircleSvg className={styles.circleIcon} />
                  <div className={styles.div1}>
                    <b className={styles.h6B}>Regina Miles</b>
                    <div className={styles.h6Div}>Designer</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.colMd4Div6}>
              <div className={styles.testimonialsCardDiv}>
                <div className={styles.cardContentDiv}>
                  <StarsSvg className={styles.starsIcon} />
                  <div className={styles.paragraphDiv1}>
                    Slate поможет вам увидеть, сколько еще дней вам нужно
                    поработать, чтобы достичь своей финансовой цели на месяц и
                    год.
                  </div>
                </div>
                <div className={styles.div}>
                  <CircleSvg className={styles.circleIcon} />
                  <div className={styles.div1}>
                    <b className={styles.h6B}>Regina Miles</b>
                    <div className={styles.h6Div}>Designer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.layout2Div1}>
        <div className={styles.containerDiv6}>
          <div className={styles.rowDiv4}>
            <div className={styles.mainContentDiv}>
              <b className={styles.h3FeatureTitleSec}>Пора знакомиться!</b>
              <div className={styles.paragraphFeatureDescription}>
                <p className={styles.p}>
                  Погруженный в Изанами, все колеса под глазами
                </p>
                <p className={styles.dSecureP}>
                  Ее взгляд убьет любого, ее взгляд убьет цунами
                </p>
              </div>
            </div>
          </div>
          <div className={styles.rowDiv9}>
            <div className={styles.colMd3SecDiv}>
              <div className={styles.userCardDiv}>
                <div className={styles.fixedHeightSecDiv}>
                  <img
                    className={styles.userCover1Icon}
                    alt=""
                    src="usercover1@2x.png"
                  />
                </div>
                <div className={styles.cardContentDiv3}>
                  <b className={styles.h5PriceSec}>Julian Jameson</b>
                  <div className={styles.smallJobDescriptionSec}>
                    Profession
                  </div>
                  <img
                    className={styles.starsIcon}
                    alt=""
                    src="social-media-sec.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.colMd3SecDiv1}>
              <div className={styles.userCardDiv}>
                <div className={styles.fixedHeightSecDiv}>
                  <img
                    className={styles.userCover1Icon}
                    alt=""
                    src="usercover2@2x.png"
                  />
                </div>
                <div className={styles.cardContentDiv3}>
                  <b className={styles.h5PriceSec}>Julian Jameson</b>
                  <div className={styles.smallJobDescriptionSec}>
                    Profession
                  </div>
                  <img
                    className={styles.starsIcon}
                    alt=""
                    src="social-media-sec1.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.colMd3SecDiv2}>
              <div className={styles.userCardDiv}>
                <div className={styles.fixedHeightSecDiv}>
                  <img
                    className={styles.userCover1Icon}
                    alt=""
                    src="usercover3@2x.png"
                  />
                </div>
                <div className={styles.cardContentDiv3}>
                  <b className={styles.h5PriceSec}>Julian Jameson</b>
                  <div className={styles.smallJobDescriptionSec}>
                    Profession
                  </div>
                  <img
                    className={styles.starsIcon}
                    alt=""
                    src="social-media-sec2.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.colMd3SecDiv2}>
              <div className={styles.userCardDiv}>
                <div className={styles.fixedHeightSecDiv}>
                  <img
                    className={styles.userCover1Icon}
                    alt=""
                    src="usercover4@2x.png"
                  />
                </div>
                <div className={styles.cardContentDiv3}>
                  <b className={styles.h5PriceSec}>Julian Jameson</b>
                  <div className={styles.smallJobDescriptionSec}>
                    Profession
                  </div>
                  <img
                    className={styles.starsIcon}
                    alt=""
                    src="social-media-sec3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.layout4Div}>
        <div className={styles.containerDiv4}>
          <div className={styles.rowDiv10}>
            <div className={styles.mainContentDiv3}>
              <b className={styles.h6B}>Newsletter</b>
              <b className={styles.h3SectionTitle4Sec}>Watch our Courses</b>
              <div className={styles.paragraphSecDiv}>
                <p className={styles.p}>
                  Problems trying to resolve the conflict between{" "}
                </p>
                <p className={styles.dSecureP}>
                  the two major realms of Classical physics: Newtonian mechanics{" "}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.rowSecDiv}>
            <div className={styles.colMd8Div1}>
              <div className={styles.subscribeDiv}>
                <div className={styles.inputGroupDiv}>
                  <div className={styles.formControlInputStyle1Div}>
                    <div className={styles.yourEmailDiv}>Your Email</div>
                  </div>
                  <div className={styles.inputGroupAppendDiv}>
                    <div className={styles.btnDiv}>
                      <div className={styles.inputGroupTextDiv}>Subscribe</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerDiv}>
        <div className={styles.div6}>
          <div className={styles.containerDiv8}>
            <div className={styles.rowDiv11}>
              <div className={styles.colMd2Div}>
                <b className={styles.h5PriceSec}>Company Info</b>
                <div className={styles.div7}>
                  <b className={styles.h6B}>About Us</b>
                  <b className={styles.h6B}>Carrier</b>
                  <b className={styles.h6B}>We are hiring</b>
                  <b className={styles.h6B}>Blog</b>
                </div>
              </div>
              <div className={styles.colMd2Div1}>
                <b className={styles.h5PriceSec}>Legal</b>
                <div className={styles.div7}>
                  <b className={styles.h6B}>About Us</b>
                  <b className={styles.h6B}>Carrier</b>
                  <b className={styles.h6B}>We are hiring</b>
                  <b className={styles.h6B}>Blog</b>
                </div>
              </div>
              <div className={styles.colMd2Div}>
                <b className={styles.h5PriceSec}>Features</b>
                <div className={styles.div7}>
                  <b className={styles.h6B}>Business Marketing</b>
                  <b className={styles.h6B}>User Analytic</b>
                  <b className={styles.h6B}>Live Chat</b>
                  <b className={styles.h6B}>Unlimited Support</b>
                </div>
              </div>
              <div className={styles.colMd2Div1}>
                <b className={styles.h5PriceSec}>Resources</b>
                <div className={styles.div7}>
                  <b className={styles.h6B}>{`IOS & Android`}</b>
                  <b className={styles.h6B}>Watch a Demo</b>
                  <b className={styles.h6B}>Customers</b>
                  <b className={styles.h6B}>API</b>
                </div>
              </div>
              <div className={styles.colMd4Div10}>
                <b className={styles.h5PriceSec}>Get In Touch</b>
                <div className={styles.div7}>
                  <div className={styles.featureItemDiv}>
                    <img
                      className={styles.bxbxPhoneIcon}
                      alt=""
                      src="bxbxphone.svg"
                    />
                    <b className={styles.h6B}>(480) 555-0103</b>
                  </div>
                  <div className={styles.featureItemDiv}>
                    <img
                      className={styles.bxbxMapIcon}
                      alt=""
                      src="bxbxmap.svg"
                    />
                    <b className={styles.h6B}>
                      <p className={styles.p}>
                        4517 Washington Ave. Manchester,{" "}
                      </p>
                      <p className={styles.dSecureP}>Kentucky 39495</p>
                    </b>
                  </div>
                  <div className={styles.featureItemDiv}>
                    <img
                      className={styles.carbonsendAltIcon}
                      alt=""
                      src="carbonsendalt.svg"
                    />
                    <b className={styles.h6B}>debra.holt@example.com</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.div12}>
          <div className={styles.containerDiv9}>
            <div className={styles.rowDiv12}>
              <div className={styles.colMd7Div}>
                <b className={styles.h6B}>All Right Reserved </b>
              </div>
              <img className={styles.colMd6Icon1} alt="" src="colmd61.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default LandingPage