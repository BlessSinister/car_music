import React from "react"
import icon1 from './guarantee_icon_1.png'
import icon2 from './guarantee_icon_2.png'
import icon3 from './guarantee_icon_3.png'
import carImage from './guarantee_image.png'
import arrowLeft from './arrow_left.png'
import arrowRight from './arrow_right.png'

class Guarantee extends React.Component {
    render() {
        return (
            <section className="common-guarantee-container">
                <div className="guarantee-container-1">
                    <div className="guarantee-material">
                        <div className="displ-block-material-position">
                            <img src={icon1} alt="" />
                            <h2 className="guarantee-material-h2">материалы от лучших компаний</h2>
                        </div>
                        <p className="guarantee-material-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, rutrum est, molestie proin tristique duis sed. Morbi suspendisse amet nisl vestibulum risus. Quis pretium</p>
                    </div>
                    <div className="rhombus-position-container">

                        <div className="guarantee-rhombus1"></div>
                        <div className="guarantee-rhombus2"></div>
                        <div className="guarantee-rhombus3"></div>
                        <div className="guarantee-rhombus4"></div>
                    </div>
                    <div className="guarantee-masters-container">
                        <div className="displ-block-masters-position">
                            <img src={icon2} alt="" />
                            <h2 className="guarantee-masters-h2">Опытные мастера</h2>
                        </div>
                        <p className="guarantee-masters-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, rutrum est, molestie proin tristique duis sed. Morbi suspendisse amet nisl vestibulum risus. Quis pretium</p>
                    </div>
                    <div className="rhombus-position-container">
                        <div className="guarantee-rhombus1"></div>
                        <div className="guarantee-rhombus2"></div>
                        <div className="guarantee-rhombus3"></div>
                        <div className="guarantee-rhombus4"></div>
                    </div>
                    <div className="guarantee-service-container">
                        <div className="displ-block-service-position">
                            <img src={icon3} alt="" />
                            <h2 className="guarantee-service-h2">Гарантия на все виды работы</h2>
                        </div>
                        <p className="guarantee-service-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat.</p>
                    </div>
                </div>

                <div className="guarantee-container-2">
                    <img src={carImage} alt="" />
                    <div className="guarantee-container-2-block-position">
                        <div className="slider-arrow-container">
                            <img src={arrowLeft} alt="" />
                        </div>
                        <p className="guarantee-container-2-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor nibh feugiat est. Consectetur lectus.</p>
                        <div className="slider-arrow-container slider-arrow-container-right">
                            <img src={arrowRight} alt="" />
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}
export default Guarantee