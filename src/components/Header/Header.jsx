import user from '../../../public/icons/user.svg'
import favorites from '../../../public/icons/favorites.svg'
import './Header.css'
import Logo from '../Logo/Logo'
import { NavLink } from 'react-router-dom'
import basket from '../../../public/icons/basket.svg'
// eslint-disable-next-line react/prop-types
export default function Header({ openModal }) {

    return (
        <>
            <header className="header">
                
                <Logo />

                <nav className="nav">
                    <NavLink to="/catalog"><a href="#">Каталог</a></NavLink>
                    <a href="#populars">Популярные товары</a>
                    <NavLink to="/"><p>Главная</p></NavLink>
                </nav>

                <div className="icons">
                    <img onClick={openModal} src={basket} alt="basket" />
                    <img src={user} alt="user" />
                    <img src={favorites} alt="favorites" />
                </div>

            </header>

        </>
    )
}