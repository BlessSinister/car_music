import React from "react";

class Main extends React.Component {
    render() {
        return (
            <main>
                <section className="main-achevments">
                    <div>
                        <h2>наши достижения от кубка<br /> россии  до чемпионатов мира</h2>
                        <div className="flex-rect">
                            <div className="main-rectangle-1"></div>
                            <div className="main-rectangle-2"></div>
                            <div className="main-rectangle-3"></div>
                            <div className="main-rectangle-4"></div>
                        </div>
                        <p className="main-achievements-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant tincidunt aliquam tincidunt pretium sodales. Tristique odio pellentesque et tincidunt posuere arcu purus lobortis risus. Urna, ut amet odio orci magnis praesent ultrices. Praesent malesuada lacus tellus tristique sit at. Sed viverra nulla nam arcu, non iaculis pretium, volutpat. </p>
                    </div>
                    <div className="main-achievements-container">
                        <div className="main-achievements-container-1">
                            <div className="main-achievements-container-row">
                                <h3 className="main-achievement-h3">
                                    #1
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
                                </p>
                            </div>
                            <div className="main-achievements-container-row">
                                <h3 className="main-achievement-h3">
                                    #6
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
                                </p>
                            </div>
                            <div className="main-achievements-container-row">
                                <h3 className="main-achievement-h3">
                                    #2
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
                                </p>
                            </div>
                            <div className="main-achievements-container-row">
                                <h3 className="main-achievement-h3">
                                    #1
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
                                </p>
                            </div>
                        </div>
                        <div className="main-achievements-container-2">
                            <div className="main-achievements-container-row"></div>
                            <div className="main-achievements-container-row"></div>
                            <div className="main-achievements-container-row"></div>
                            <div className="main-achievements-container-row"></div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}
export default Main