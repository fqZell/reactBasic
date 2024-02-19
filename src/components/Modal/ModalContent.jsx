/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
import ReactModal from 'react-modal';
import Card from '../Card/Card'
import './ModalContent.css'

ReactModal.setAppElement('#root');

// eslint-disable-next-line react/prop-types
export default function ModalContent({ cartItems, closeModal, modalIsOpen }) {

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <>
        <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal}>
            <div className='ReactModal__Content'>
                {cartItems && cartItems.length > 0 ? (
                    cartItems.map((product, index) => (
                    <div key={index}>
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                        <p>{product.quantity}</p>
                        <p>Общая стоимость: {product.price * product.quantity} руб.</p>
                        <p>Итого: {getTotalPrice()} руб.</p>
                    </div>
                    ))
                ) : (
                    <p>Корзина пуста</p>
                )}
                <button onClick={closeModal}>Закрыть</button>
            </div>
        </ReactModal>
        </>
    )
}