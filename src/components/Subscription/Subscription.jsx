import { useEffect, useState } from 'react';
import subscriptionPhoto from '../../../public/subscription/subscriptionPhoto.jpg'

import './Subscription.css'

// eslint-disable-next-line react/prop-types
export default function Subscription({ status, message, onValidated }) {

    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (status === 'success') {
          clearFields();
          setErrorMessage('');
          setShowModal(false);
        } else if (status === 'error') {
          setErrorMessage(message);
          setShowModal(true);
          setTimeout(() => {
            setErrorMessage('');
            setShowModal(false);
          }, 5000);
        }
    }, [status, message]);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!email || email.indexOf("@") === -1) {
          setErrorMessage('Пожалуйста, введите корректный адрес электронной почты.');
          setShowModal(true);
          setTimeout(() => {
            setErrorMessage('');
            setShowModal(false);
          }, 5000);
          return;
        }
    
        setErrorMessage('');
        onValidated({
          EMAIL: email
        });
      };
    
      const clearFields = () => {
        setEmail('');
      };

    return (
        <>
        
        <div className="subscription">
            <div className="subscription-photo">
                <img src={subscriptionPhoto} alt="subscription" />
            </div>

            <h2>Будьте в курсе наших последних новостей</h2>

                <form className="subscription-content" onSubmit={handleSubmit}>

                    <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Почта" />

                    <div className="button-content">

                        <button>Отправить</button>
                        <p>*нажимая отправить вы соглашаетесь получать рассылку</p>
                        <p>{errorMessage}</p>
                        <p>{showModal}</p>

                    </div>

                </form>

        </div>
        
        </>
    )
}