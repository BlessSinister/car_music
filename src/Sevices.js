import React from "react";
import servicesIcon1 from './services_icon_1.png'
import servicesIcon2 from './guarantee_icon_1.png'
import servicesIcon3 from './guarantee_icon_2.png'
import servicesIcon4 from './guarantee_icon_3.png'

class Services extends React.Component {
    render() {
        return (
            <section className="services-container">
                <h2 className="services-container-h2">
                    Наши услуги
                </h2>
                <div className="rhombus-position-services-container">
                    <div className="guarantee-rhombus1"></div>
                    <div className="guarantee-rhombus2"></div>
                    <div className="guarantee-rhombus3"></div>
                    <div className="guarantee-rhombus4"></div>
                </div>
                <div className="services-detailing">
                    <div className="services-okle">оклейка</div>
                    <div className="services-det">детейлинг</div>
                </div>
                <div className="services-icons-group-container">
                    <div className="services-icons-group1">
                        <img src={servicesIcon1} alt="" />
                        <h2 className="services-icons-group1-h2">Защитные пленки</h2>
                        <p className="services-icons-group1-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.</p>

                        <div className="services-icons-group1-box">
                            <p className="services-icons-group1-box-p">
                                Подробнее
                            </p>
                        </div>
                    </div>
                    <div className="services-icons-group2">

                        <img src={servicesIcon2} alt="" />
                        <h2 className="services-icons-group1-h2">Защитные пленки</h2>
                        <p className="services-icons-group1-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.</p>

                        <div className="services-icons-group1-box">
                            <p className="services-icons-group1-box-p">
                                Подробнее
                            </p>
                        </div>

                    </div>
                    <div className="services-icons-group3">
                        <img src={servicesIcon3} alt="" />
                        <h2 className="services-icons-group1-h2">Защитные пленки</h2>
                        <p className="services-icons-group1-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.</p>

                        <div className="services-icons-group1-box-correctpos">
                            <p className="services-icons-group1-box-p">
                                Подробнее
                            </p>
                        </div>

                    </div>
                    <div className="services-icons-group4">

                        <img src={servicesIcon4} alt="" />
                        <h2 className="services-icons-group1-h2">Защитные пленки</h2>
                        <p className="services-icons-group1-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.</p>

                        <div className="services-icons-group1-box">
                            <p className="services-icons-group1-box-p">
                                Подробнее
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default Services