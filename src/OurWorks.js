import React from "react";
import car1 from './car_1.png'
import car2 from './car_2.png'
import car3 from './car_3.png'
import car4 from './car_4.png'
import car5 from './car_5.png'
import car6 from './car_6.png'

class OurWorks extends React.Component {
    render() {
        return (
            <section className="ourWorks-container">
                <h2 className="ourWorks-h2">
                    Наши работы
                </h2>
                <div className="rhombus-position-ourWorks">
                    <div className="guarantee-rhombus1"></div>
                    <div className="guarantee-rhombus2"></div>
                    <div className="guarantee-rhombus3"></div>
                    <div className="guarantee-rhombus4"></div>
                </div>
                <div className="carsGroup">

                    <img src={car1} alt="" />
                    <img src={car2} alt="" />
                    <img src={car3} alt="" />
                    <img src={car4} alt="" />
                    <img src={car5} alt="" />
                    <img src={car6} alt="" />

                    <img src={car6} alt="" />
                    <img src={car5} alt="" />
                    <img src={car4} alt="" />
                    <img src={car3} alt="" />
                    <img src={car2} alt="" />
                    <img src={car1} alt="" />


                    <img src={car1} alt="" />
                    <img src={car2} alt="" />
                    <img src={car3} alt="" />
                    <img src={car4} alt="" />
                    <img src={car5} alt="" />
                    <img src={car6} alt="" />


                </div>
            </section>
        )
    }
}

export default OurWorks