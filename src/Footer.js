import React from "react";
import teleg from './teleg_icon.png'
import youtube from './youtube_icon.png'
import vk from './vk_icon.png'
import geo from './geo_icon.png'
import phone from './phone_icon.png'
import mail from './mail_icon.png'

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-container">
                <h2 className="footer-answer">
                    ответим на любой вопрос
                </h2>
                <div className="rhombus-position-ourWorks">
                    <div className="guarantee-rhombus1"></div>
                    <div className="guarantee-rhombus2"></div>
                    <div className="guarantee-rhombus3"></div>
                    <div className="guarantee-rhombus4"></div>
                </div>
                <form action="" className="footer-form">
                    <input type="text" placeholder="ИМЯ" className="footer-name-input" />
                    <input type="tel" className="footer-tel-input" placeholder="ТЕЛЕФОН" />
                    <div className="footer-textarean-container-position">
                        <textarea name="question" id="" cols="30" rows="10" placeholder="Вопрос по дизайну, тюнингу и др." className="footer-textarea">
                        </textarea>
                        <div className="icon-footer-position">
                            <div className="telegram-icon">
                                <img src={teleg} alt="" />
                            </div>
                            <div className="youtube-icon">
                                <img src={youtube} alt="" />
                            </div>
                            <div className="vk-icon">
                                <img src={vk} alt="" />
                            </div>
                        </div>
                    </div>
                </form>
                <div className="footer-btn-wrapper">
                    <div className="footer-btn-container">
                        <div className="footer-btn">
                            отправить
                        </div>
                    </div>
                    <div className="info-container">
                        <img src={geo} alt="" /> Eu faucibus et rutrum fringilla orci nunc
                        <div className="footer-phone-mail-block">
                            <img src={phone} alt="" />8 (812) 123-45-67
                            <img src={mail} alt="" />test@test.ru
                        </div>
                    </div>

                </div>
                <hr />
                <div className="footer-copyrights-block">
                    <div className="copyrights">
                        2022 © Est et viverra pellentesque pharetra lorem proin in. Vitae magna at tempus commodo.
                    </div>

                    <ul className="footer-nav">
                        <li className="nav-footer1">Главная</li>
                        <li className="nav-footer2">Оклейка автомобилей</li>
                        <li className="nav-footer3">Детейлинг автомобилей</li>
                        <li className="nav-footer4">Галерея работ</li>
                    </ul>

                </div>
            </footer >
        )
    }
}
export default Footer