import basket from '../../../public/icons/basket.svg'
import user from '../../../public/icons/user.svg'
import favorites from '../../../public/icons/favorites.svg'
import './Header.css'
import Logo from '../Logo/Logo'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import ModalContent from '../Modal/ModalContent'
import Modal from 'react-modal';

export default function Header() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalIsOpen(false);
        document.body.style.overflow = 'auto';
    };

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
                    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                        <ModalContent closeModal={closeModal} />
                    </Modal>
                    <img src={user} alt="user" />
                    <img src={favorites} alt="favorites" />
                </div>

            </header>

        </>
    )
}