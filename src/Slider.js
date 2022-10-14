import React from "react";
import arrowLeft from './arrow_left.png'
import arrowRight from './arrow_right.png'
import slide_1 from './slide_1.png'
import slide_2 from './slide_2.png'
import slide_3 from './slide_3.png'

class Slider extends React.Component {
    render() {
        return (
            <section className="slider-section">
                <div className="slider-container">
                    <div className="slider-arrow-container">
                        <img src={arrowLeft} alt="" />
                    </div>
                    <div className="slide-slide-1">
                        <img src={slide_1} alt="" />
                        <div className="slider-slide-1-background">
                            <p className="slide-slide-1-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.
                            </p>
                        </div>
                    </div>
                    <div className="slide-slide-2">
                        <img src={slide_2} alt="" />
                        <div className="slider-slide-1-background">
                            <p className="slide-slide-1-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.
                            </p>
                        </div>
                    </div>
                    <div className="slide-slide-3">
                        <img src={slide_3} alt="" />
                        <div className="slider-slide-1-background">
                            <p className="slide-slide-1-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.
                            </p>
                        </div>
                    </div>
                    <div className="slider-arrow-container">
                        <img src={arrowRight} alt="" />
                    </div>
                </div>
            </section>
        )
    }
}

export default Slider