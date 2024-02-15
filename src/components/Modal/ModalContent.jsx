import '/ModalContent.css'

// eslint-disable-next-line react/prop-types
export default function ModalContent({ closeModal }) {
    return (
        <>
        
        <div className='ReactModal__Content'>
            <h2>Заголовок модального окна</h2>
            <p>Текст модального окна</p>
            <button onClick={closeModal}>Закрыть</button>
        </div>

        </>
    )
}