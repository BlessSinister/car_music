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
                            <h2 className="header-line-border-content-h2-info">АДРЕС</h2>
                            <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit </p>
                        </div>
                        <div className="header-line-border-content-2">
                            <h2 className="header-line-border-content-h2-info">ТЕЛЕФОН:</h2>
                            <p>8 (812) 123-45-67</p>
                            <p>8-911-123-45-67</p>
                        </div>
                        <div className="header-line-border-content-3">
                            <h2 className="header-line-border-content-h2-info">ТЕЛЕФОН:</h2>
                            <p>8 (812) 123-45-67</p>
                            <p>8-911-123-45-67</p>
                        </div>
                    </div>
                </header>

            </>
        )
    }
}
export default Header