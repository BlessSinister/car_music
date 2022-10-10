import React from "react";

class Header extends React.Component {
    render() {
        return (
            <>
                <header className="header-container">
                    <h1 className="car-music">
                        car music
                    </h1>
                    <div className="flex-rect">
                        <div className="rectangle-1"></div>
                        <div className="rectangle-2"></div>
                        <div className="rectangle-3"></div>
                        <div className="rectangle-4"></div>
                    </div>
                    <h2 className="header-h2-lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae orci urna amet penatibus</h2>
                    <div className="header-div-service">
                        <h2 className="header-h2-servive">НАШИ УСЛУГИ</h2>
                    </div>
                    <div className="header-line-border">
                        <div className="header-line-border-content-1">
                            <p>АДРЕС</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                        </div>
                        <div className="header-line-border-content-2"></div>
                        <div className="header-line-border-content-3"></div>
                    </div>
                </header>

            </>
        )
    }
}
export default Header