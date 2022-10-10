import React from 'react'
import Header from './Header'

class Navbar extends React.Component {
    render() {


        return (
            <nav className='navbar-container'>
                <ul>
                    <li>Главная</li>
                    <li>Оклейка автомобилей</li>
                    <li>Детейлинг автомобилей</li>
                    <li>Галерея работ</li>
                </ul>
                <Header />
            </nav>
        )

    }
}
export default Navbar