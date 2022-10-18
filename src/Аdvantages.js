import React from "react"
import icon1 from './guarantee_icon_1.png'
import icon2 from './guarantee_icon_2.png'
import carImage from './adv_image.png'
import arrowLeft from './arrow_left.png'
import arrowRight from './arrow_right.png'
import servicesIcon1 from './services_icon_1.png'

class Аdvantages extends React.Component {
    render() {
        return (
            <section className="common-guarantee-container">
                <div className="guarantee-container-2">
                    <img src={carImage} alt="" />
                    <div className="guarantee-container-2-block-position">
                        <div className="slider-arrow-container">
                            <img src={arrowLeft} alt="" />
                        </div>
                        <p className="guarantee-container-2-p">Neque metus vitae urna purus aliquam. Felis nullam pellentesque ac mi commodo, amet, porta in. Dui.</p>
                        <div className="slider-arrow-container right-arrow">
                            <img src={arrowRight} alt="" />
                        </div>
                    </div>
                </div>
                <div className="advant-container-1">
                    <div className="guarantee-material">
                        <div className="displ-block-material-position">
                            <img src={servicesIcon1} alt="" />
                            <h2 className="guarantee-material-h2">100% полироль axem</h2>
                        </div>
                        <p className="guarantee-material-p">Pharetra in bibendum id id. Sit maecenas sollicitudin est, hendrerit in malesuada. Eu, et lacus nisi mus sagittis, rhoncus est dictum. Gravida lectus urna, arcu, sodales. Ac.</p>
                    </div>
                    <div className="rhombus-position-container">

                        <div className="guarantee-rhombus1"></div>
                        <div className="guarantee-rhombus2"></div>
                        <div className="guarantee-rhombus3"></div>
                        <div className="guarantee-rhombus4"></div>
                    </div>
                    <div className="guarantee-masters-container">
                        <div className="displ-block-masters-position">
                            <img src={icon1} alt="" />
                            <h2 className="guarantee-masters-h2">выполняем работу четко по тз</h2>
                        </div>
                        <p className="guarantee-masters-p">Lorem nulla non nibh quis elit odio. Dui et ultricies duis mattis dictum et senectus nunc sodales. Tellus lorem risus etiam quam massa lobortis convallis laoreet. Nec.</p>
                    </div>
                    <div className="rhombus-position-container">
                        <div className="guarantee-rhombus1"></div>
                        <div className="guarantee-rhombus2"></div>
                        <div className="guarantee-rhombus3"></div>
                        <div className="guarantee-rhombus4"></div>
                    </div>
                    <div className="guarantee-service-container">
                        <div className="displ-block-service-position">
                            <img src={icon2} alt="" />
                            <h2 className="guarantee-service-h2">у нас лучшие мастера</h2>
                        </div>
                        <p className="guarantee-service-p">Posuere nam sodales ullamcorper bibendum justo maecenas at. Ultricies bibendum morbi tempor vehicula. Ultrices erat maecenas in id maecenas sed ipsum scelerisque. </p>
                    </div>
                </div>

            </section>
        )
    }
}
export default Аdvantages