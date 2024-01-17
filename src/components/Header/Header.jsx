import logo from '../../../public/logo/logo.svg'
import basket from '../../../public/icons/basket.svg'
import user from '../../../public/icons/user.svg'
import favorites from '/public/icons/favorites.svg'
import './Header.css'

export default function Header() {
    return (
        <>
            <header className="header">
                
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <a href="#">clothes</a>
                </div>

                <nav className="nav">
                    <a href="#">Каталог</a>
                    <a href="#">Популярные товары</a>
                    <a href="#">Главная</a>
                </nav>

                <div className="icons">
                    <img src={basket} alt="basket" />
                    <img src={user} alt="user" />
                    <img src={favorites} alt="favorites" />
                </div>

            </header>
        </>
    )
}