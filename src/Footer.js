import React from "react";

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
                    <textarea name="question" id="" cols="30" rows="10" placeholder="Вопрос по дизайну, тюнингу и др." className="footer-textarea">
                    </textarea>
                </form>
            </footer>
        )
    }
}
export default Footer